"""Procedural top-down 'floor installation' loop for the art-frames slot (original Edith footage, no third-party assets).
Render: python make_floor_clip.py out.mp4   (needs numpy, Pillow, ffmpeg path below)"""
import sys, math, subprocess
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

FFMPEG = sys.argv[2] if len(sys.argv) > 2 else 'ffmpeg'
W, H, PW = 1920, 936, 960          # canvas, floor period width
FPS, SECS = 30, 10
N = FPS * SECS
rng = np.random.default_rng(7)

def fft_noise(h, w, sx, sy):
    n = rng.standard_normal((h, w))
    fx = np.fft.fftfreq(w)[None, :]; fy = np.fft.fftfreq(h)[:, None]
    g = np.exp(-2 * (np.pi ** 2) * ((fx * sx) ** 2 + (fy * sy) ** 2))
    r = np.real(np.fft.ifft2(np.fft.fft2(n) * g))
    return (r - r.mean()) / (r.std() + 1e-9)

# ---- travertine period tile (periodic in x and y) --------------------------------------------
blotch = fft_noise(H, PW, 40, 40)
streak = fft_noise(H, PW, 90, 3)      # long horizontal veining
fine = fft_noise(H, PW, 1.5, 1.5)
pores = fft_noise(H, PW, 2.5, 1.2)
lum = 0.55 * blotch + 0.75 * streak + 0.18 * fine
base = np.array([232, 220, 200], float)                      # warm cream stone
floor = base[None, None, :] * (1 + 0.045 * lum[..., None])
floor *= (1 - 0.30 * np.clip(pores - 1.9, 0, 2)[..., None])  # dark pores
floor *= np.array([1.0, 0.985, 0.95])[None, None, :] ** np.clip(streak, 0, 3)[..., None]

# painted terracotta inlays with cream stripes (drawn in the period tile, supersampled)
SS = 2
paint = Image.new('L', (PW * SS, H * SS), 0); cream = Image.new('L', (PW * SS, H * SS), 0)
pd, cd = ImageDraw.Draw(paint), ImageDraw.Draw(cream)
def R(d, x0, y0, x1, y1): d.rectangle([x0 * SS, y0 * SS, x1 * SS, y1 * SS], fill=255)
R(pd, 70, 250, 430, 710); R(cd, 70, 450, 430, 488); R(cd, 232, 250, 266, 710)       # field A + cross
R(pd, 540, 80, 900, 430); R(cd, 540, 230, 900, 262); R(cd, 540, 80, 572, 430)      # field B + L band
pd.polygon([(560 * SS, 800 * SS), (760 * SS, 800 * SS), (660 * SS, 640 * SS)], fill=255)  # triangle
cd.polygon([(600 * SS, 800 * SS), (640 * SS, 800 * SS), (660 * SS, 770 * SS), (630 * SS, 770 * SS)], fill=255)
pm = np.asarray(paint.resize((PW, H), Image.LANCZOS), float)[..., None] / 255
cm = np.asarray(cream.resize((PW, H), Image.LANCZOS), float)[..., None] / 255
terra = np.array([176, 108, 92], float)
paintcol = terra[None, None, :] * (1 + 0.05 * lum[..., None] + 0.04 * fine[..., None])
floor = floor * (1 - pm) + paintcol * pm
creamcol = base[None, None, :] * 1.03 * (1 + 0.03 * lum[..., None])
floor = floor * (1 - cm * pm) + creamcol * cm * pm
# tile joints: 2 tiles per period (480 wide), 4 rows (234 tall)
joint = np.zeros((H, PW))
for x in (0, 480): joint[:, max(x - 1, 0):x + 2] = 1
for y in range(0, H, 234): joint[y:y + 3, :] = 1
joint = np.asarray(Image.fromarray((joint * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.1)), float)[..., None] / 255
floor = floor * (1 - 0.20 * joint)
floor = np.clip(floor, 0, 255)
floor2 = np.tile(floor, (1, 2, 1)).astype(np.uint8)          # 1920 wide, periodic every 960

yy, xx = np.mgrid[0:H, 0:W]
vig = 1 - 0.28 * (((xx - W / 2) / (W / 1.35)) ** 2 + ((yy - H / 2) / (H / 1.15)) ** 2)
vig = np.clip(vig, 0.6, 1)[..., None]

ORANGE = (255, 71, 19)
def objects(phi):
    """returns list of (kind, cx, cy, size, height, angle, color) at loop phase phi (0..2pi)"""
    s, c = math.sin, math.cos
    return [
        ('disc',   W * .30 + 330 * s(phi),        H * .50 + 150 * s(2 * phi + .6), 74, 70 + 55 * s(phi + 1.2), 0, ORANGE),
        ('square', W * .62 + 260 * c(phi + .4),   H * .44 + 170 * s(phi * 2),      66, 95 + 40 * c(phi), 0.5 * phi, (14, 14, 18)),
        ('slash',  W * .80 - 300 * s(phi + 2.0),  H * .58 + 140 * c(phi + .9),     105, 60 + 50 * s(phi + 3), -0.8 + 2 * phi, (250, 247, 240)),
    ]

def render(i):
    phi = 2 * math.pi * i / N
    shift = int(round(PW * i / N)) % PW
    fl = np.roll(floor2, -shift, axis=1)
    la = 0.9 + 0.18 * math.sin(phi)                           # light azimuth sweeps gently
    ldx, ldy = math.cos(la) * 0.9, math.sin(la) * 0.9
    sh = Image.new('L', (W, H), 0); sd = ImageDraw.Draw(sh)
    layer = Image.new('RGB', (W, H), (0, 0, 0)); lm = Image.new('L', (W, H), 0)
    ld, md = ImageDraw.Draw(layer), ImageDraw.Draw(lm)
    objs = objects(phi)
    def shape(d, o, dx=0, dy=0, grow=1.0, col=None):
        kind, cx, cy, sz, h, ang, colr = o
        sz = sz * (1 + h / 700) * grow; cx += dx; cy += dy; colr = col or colr
        if kind == 'disc':
            d.ellipse([cx - sz, cy - sz, cx + sz, cy + sz], fill=colr)
        elif kind == 'square':
            pts = [(cx + sz * math.cos(ang + a) * 1.41, cy + sz * math.sin(ang + a) * 1.41) for a in (math.pi / 4, 3 * math.pi / 4, 5 * math.pi / 4, 7 * math.pi / 4)]
            d.polygon(pts, fill=colr)
        else:   # slash bar
            L, T = sz * 1.9, sz * .24
            ca, sa = math.cos(ang), math.sin(ang)
            pts = [(cx + ca * px - sa * py, cy + sa * px + ca * py) for px, py in ((-L, -T), (L, -T), (L, T), (-L, T))]
            d.polygon(pts, fill=colr)
    for o in objs:
        h = o[4]
        shape(sd, o, dx=h * ldx * 1.1, dy=h * ldy * 1.1, grow=1.0, col=255)
    soft = sh.filter(ImageFilter.GaussianBlur(26))
    tight = Image.new('L', (W, H), 0); td = ImageDraw.Draw(tight)
    for o in objs: shape(td, o, dx=o[4] * ldx * .25, dy=o[4] * ldy * .25, col=255)
    tight = tight.filter(ImageFilter.GaussianBlur(7))
    m = np.maximum(np.asarray(soft, float) * 0.50, np.asarray(tight, float) * 0.75)[..., None] / 255
    out = fl.astype(float) * (1 - m * 0.62)
    for o in objs:
        shape(ld, o); shape(md, o, col=255)
        kind, cx, cy, sz, h, ang, colr = o
        if kind == 'disc':   # soft top-light highlight
            r = sz * (1 + h / 700) * .55
            ld.ellipse([cx - r - 14, cy - r - 18, cx + r - 14, cy + r - 18], fill=tuple(min(255, int(c + 40)) for c in colr))
    lay = np.asarray(layer, float); mask = (np.asarray(lm.filter(ImageFilter.GaussianBlur(0.8)), float) / 255)[..., None]
    out = out * (1 - mask) + lay * mask
    out *= vig
    out += rng.normal(0, 2.2, (H, W, 1))                      # film grain
    return np.clip(out, 0, 255).astype(np.uint8)

p = subprocess.Popen([FFMPEG, '-hide_banner', '-loglevel', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                      '-vf', 'scale=960:466:flags=lanczos', '-c:v', 'libx264', '-crf', '25', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', sys.argv[1]],
                     stdin=subprocess.PIPE)
for i in range(N):
    p.stdin.write(render(i).tobytes())
p.stdin.close(); p.wait(); print('done', sys.argv[1])
