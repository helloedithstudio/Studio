"""Draw a neutral placeholder poster per video slot (aspect ratios taken from the original layout)."""
import os
from PIL import Image, ImageDraw

OUT = r'D:\Edith-Studio\site\public\media\posters'
SLOTS = {  # slot: aspect ratio (w/h)
    'hero-art': 1.0, 'project-echoes': 1.0667, 'reel-loop': 16 / 9, 'reel-full': 16 / 9,
    'project-forced': 16 / 9, 'art-wide': 16 / 9, 'art-frames': 2.05714, 'art-repetition': 1.8, 'studio-projects': 16 / 9,
}
os.makedirs(OUT, exist_ok=True)
for slot, ratio in SLOTS.items():
    w = 960
    h = round(w / ratio)
    im = Image.new('RGB', (w, h), (17, 17, 24))
    d = ImageDraw.Draw(im)
    d.line((0, 0, w, h), fill=(40, 40, 52), width=2)
    d.line((0, h, w, 0), fill=(40, 40, 52), width=2)
    d.text((16, 14), f'placeholder: {slot}.mp4', fill=(120, 120, 140))
    im.save(os.path.join(OUT, f'{slot}.png'), optimize=True)
print('posters:', len(SLOTS))
