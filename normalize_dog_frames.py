from pathlib import Path
from PIL import Image

in_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\dog_frames")
out_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\dog_frames_norm")
out_dir.mkdir(exist_ok=True)

names = ["run_1", "run_2", "run_3", "run_4", "idle"]
frames = []
max_w, max_h = 0, 0

for n in names:
    im = Image.open(in_dir / f"{n}.png").convert("RGBA")
    frames.append((n, im))
    max_w = max(max_w, im.width)
    max_h = max(max_h, im.height)

# Add some padding to avoid any visual clipping during frame changes.
canvas_w = max_w + 22
canvas_h = max_h + 18

for n, im in frames:
    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    x = (canvas_w - im.width) // 2
    y = canvas_h - im.height
    canvas.alpha_composite(im, (x, y))
    canvas.save(out_dir / f"{n}.png")
    print(n, canvas.size)
