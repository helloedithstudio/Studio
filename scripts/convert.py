"""Convert the scraped edith.studio home page (WordPress/GSAP snapshot) into Next.js components.

Modelled on the ChainGPT Labs (Webflow) converter: parse the saved DOM, drop the runtime junk that
the page's own JS stamped in at scrape time, rewrite asset URLs to local ones, and emit one TSX
component per section. The theme's own app.min.js re-applies the animations at runtime.
"""
import os
import re
import sys

from bs4 import BeautifulSoup, NavigableString, Comment

PAGES = {'home': r'D:\Edith-Studio\index.html', 'studio': r'D:\Edith-Studio\studio\index.html'}
OUT = r'D:\Edith-Studio\site'

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
        'meta', 'param', 'source', 'track', 'wbr'}

ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex',
    'colspan': 'colSpan', 'rowspan': 'rowSpan', 'maxlength': 'maxLength',
    'autocomplete': 'autoComplete', 'autofocus': 'autoFocus', 'autoplay': 'autoPlay',
    'playsinline': 'playsInline', 'crossorigin': 'crossOrigin', 'srcset': 'srcSet',
    'readonly': 'readOnly', 'contenteditable': 'contentEditable', 'spellcheck': 'spellCheck',
    'controlslist': 'controlsList', 'disablepictureinpicture': 'disablePictureInPicture',
    'frameborder': 'frameBorder', 'allowfullscreen': 'allowFullScreen',
    'fetchpriority': 'fetchPriority', 'viewbox': 'viewBox', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule',
    'xlink:href': 'xlinkHref',
}

BOOLEAN_ATTRS = {'loop', 'muted', 'autoplay', 'playsinline', 'controls', 'disabled',
                 'disablepictureinpicture', 'allowfullscreen'}

# runtime junk stamped in by the WP Rocket / GSAP / theme JS at scrape time
DROP_ATTRS = {'style', 'data-rocket-location-hash', 'data-rocket-status', 'data-gif-processed',
              'xmlns:xlink', 'data-wf-ignore'}
# classes the theme JS adds to the DOM after load
DROP_CLASSES = {'gif-detected', '--playing', 'words', 'chars', 'splitting'}

# Remote video/poster URLs stay as they were on the live site (the scrape holds no video files).
LOCAL_UPLOAD = re.compile(r'^(?:\./)?wp_content/uploads/(.+)$')


def rewrite(url):
    m = LOCAL_UPLOAD.match(url or '')
    if m:
        return '/assets/' + m.group(1)
    return url


def jsx_attr(name, value):
    if name in DROP_ATTRS:
        return None
    if isinstance(value, list):
        value = [c for c in value if c not in DROP_CLASSES and '<' not in c] if name == 'class' else value
        value = ' '.join(value)
    if name == 'class' and not str(value).strip():
        return None
    if name in ('src', 'href', 'poster', 'data-src'):
        value = rewrite(str(value))
    prop = ATTR_MAP.get(name, name)
    if name in BOOLEAN_ATTRS and (value is None or str(value).strip() in ('', 'true')):
        return prop
    if name == 'tabindex':
        return f'{prop}={{{int(str(value).strip())}}}'
    if value is None:
        value = ''
    value = str(value).replace('"', '&quot;')
    if value == '' and name.startswith(('data-', 'autoplay-', 'preload-')):
        return f'{prop}=""'
    return f'{prop}="{value}"'


def esc(s):
    return s.replace('{', '&#123;').replace('}', '&#125;').replace('<', '&lt;').replace('>', '&gt;')


def to_jsx(node, depth=1):
    pad = '  ' * depth
    if isinstance(node, Comment):
        return ''
    if isinstance(node, NavigableString):
        t = str(node)
        if not t.strip():
            return ''
        return pad + esc(re.sub(r'\s+', ' ', t)).strip() + '\n'
    if node.name in ('script', 'noscript'):
        return ''

    attrs = [a for a in (jsx_attr(k, v) for k, v in node.attrs.items()) if a]
    attr_s = (' ' + ' '.join(attrs)) if attrs else ''
    kids = [c for c in node.children
            if not (isinstance(c, NavigableString) and not str(c).strip())]
    if node.name in VOID or not kids:
        if node.name == 'video':
            return f'{pad}<{node.name}{attr_s}></{node.name}>\n'
        return f'{pad}<{node.name}{attr_s} />\n'
    inner = ''.join(to_jsx(c, depth + 1) for c in kids)
    return f'{pad}<{node.name}{attr_s}>\n{inner}{pad}</{node.name}>\n'



# ---- detaching from the source site ----------------------------------------------------------
# Remote video/poster files on the source host are NOT downloaded. Each slot gets a local path under
# /media instead; scripts/make_placeholders.py draws a neutral poster per slot and the real .mp4 is
# whatever you drop in public/media/<slot>.mp4.
MEDIA_SLOTS = {
    'HOME_art_01_x24.mp4': 'hero-art', 'HOME_art_01.jpg': 'hero-art',
    'HOME_project_01_x25.mp4': 'project-echoes', 'PARA_2725_web.jpg': 'project-echoes',
    'Edith-Reel24-H264-20240930-V5-5-25Secs_x27.mp4': 'reel-loop',
    'edith_reel24_h264_20240930_v5.5_x25.mp4': 'reel-full',
    'Msf-Clip-15S-V1_X23.mp4': 'project-forced', 'MSF_big_04.jpg': 'project-forced',
    'HOME_art_05_x30.mp4': 'art-wide', 'HOME_art_05-2.jpg': 'art-wide',
    'HOME_art_06_x25.mp4': 'art-frames', 'HOME_art_06-2.jpg': 'art-frames',
    'HOME_art_08x23.mp4': 'art-repetition', 'HOME_art_08-2.jpg': 'art-repetition',
    '06projects.mp4': 'studio-projects',
}
SOURCE_HOST = re.compile(r'^https?://(?:www\.)?edith\.studio(/.*)?$')


def detach(root):
    for v in root.find_all(['source', 'video']):
        for attr, ext, folder in (('src', 'mp4', ''), ('poster', 'png', 'posters/')):
            val = v.get(attr)
            if val and SOURCE_HOST.match(val):
                slot = MEDIA_SLOTS[val.rsplit('/', 1)[-1]]
                v[attr] = f'/media/{folder}{slot}.{ext}'
    for a in root.find_all('a', href=True):
        h = a['href']
        m = SOURCE_HOST.match(h)
        if m:
            a['href'] = (m.group(1) or '/').rstrip('/') or '/'
            if a['href'] != '/':
                a['data-taxi-ignore'] = ''
        elif h.startswith('/') and not h.startswith('//'):
            a['data-taxi-ignore'] = ''
        elif h.startswith('mailto:') or re.match(r'^https?://(www\.)?(instagram|linkedin|vimeo)\.com', h):
            a['href'] = '#'
            if a.has_attr('target'):
                del a['target']
    for f in root.find_all('iframe'):
        del f['src']
        f['title'] = 'Booking'
    # the reel video had no poster on the source; give it the placeholder so the box isn't a flat black block
    for v in root.find_all('video'):
        src = v.find('source')
        if src and not v.get('poster') and src['src'].startswith('/media/'):
            v['poster'] = '/media/posters/' + src['src'].rsplit('/', 1)[-1].replace('.mp4', '.png')


# ---- DOM cleanup -----------------------------------------------------------------------------

def unsplit(root):
    """Undo the theme's SplitType output so app.min.js can split the text itself at runtime."""
    for ws in root.select('span.whitespace'):
        ws.replace_with(' ')
    for w in root.select('span.word'):
        w.replace_with(w.get('data-word', w.get_text()))
    # .title blocks: <div class="word word--1">the</div> <div ...>
    for w in root.select('div.word'):
        w.replace_with(w.get_text())
    # cursor label: <div class="char char--1">b</div>...
    for c in root.select('#cursor div.char'):
        c.replace_with(c.get_text())
    # the theme's gif handler reads data-src; the scrape's data-src points at edith.studio with different
    # file names, so point it at the local copy that src already uses
    for img in root.select('img[data-src]'):
        img['data-src'] = img['src']
    root.smooth()


COMPONENT_TPL = """export default function {name}() {{
  return (
    <>
{body}
    </>
  );
}}
"""


def component(name, nodes):
    body = ''.join(to_jsx(n, 3) for n in nodes).rstrip()
    return COMPONENT_TPL.format(name=name, body=body)


def pascal(section_cls):
    return ''.join(w.capitalize() for w in section_cls.replace('component--', '').split('-'))


def load_body(path):
    soup = BeautifulSoup(open(path, encoding='utf-8', errors='replace').read(), 'html5lib')
    body = soup.body
    for t in body.find_all(['script', 'noscript']):
        t.decompose()
    for c in body.find_all(string=lambda s: isinstance(s, Comment)):
        c.extract()
    unsplit(body)
    detach(body)
    return body


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)


def main():
    # shared chrome comes from the home page (identical on every page apart from runtime state)
    home = load_body(PAGES['home'])
    chrome = [
        ('Footer', [home.select_one('footer#footer')]),
        ('Header', [home.select_one('header#header'), home.select_one('div.cta'), home.select_one('div.circle')]),
        ('PopupForm', [home.select_one('#popup-form')]),
        ('Cursor', [home.select_one('#cursor')]),
    ]
    for name, nodes in chrome:
        text = component(name, nodes)
        if name == 'Header':
            # the theme only sets the active menu item during client-side navigation; on a direct load the
            # server (WordPress) rendered it, so Header takes the current page and does the same
            text = text.replace('export default function Header() {',
                                "export default function Header({ active }: { active?: string }) {")
            text = re.sub(r'className="(menu-item [^"]*?menu-item-(works|studio|raw-stuff|unfolded))"',
                          lambda m: 'className={`%s${active === "%s" ? " active is-active" : ""}`}' % (m.group(1), m.group(2)),
                          text)
        write(f'{OUT}/components/shared/{name}.tsx', text)
    print('shared:', [n for n, _ in chrome])

    for page, path in PAGES.items():
        body = load_body(path)
        names = []
        for sec in body.select('#flexible > .inner > section.component'):
            cls = next(c for c in sec['class'] if c.startswith('component--'))
            name = pascal(cls)
            write(f'{OUT}/components/{page}/{name}.tsx', component(name, [sec]))
            names.append(name)
        print(page, names)


if __name__ == '__main__':
    main()
