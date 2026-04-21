from pathlib import Path
from PIL import Image

src = Path(
    r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-e85d04a8-8a72-49c0-9899-5cd958a7165b.png"
)
out_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\dog_frames")
out_dir.mkdir(exist_ok=True)

im = Image.open(src).convert("RGBA")

# Approximate frame locations from the provided specification image.
boxes = {
    "run_1": (35, 105, 165, 220),
    "run_2": (185, 105, 315, 220),
    "run_3": (340, 105, 470, 220),
    "run_4": (495, 105, 625, 220),
    "idle": (45, 300, 185, 420),
}

for name, box in boxes.items():
    frame = im.crop(box)
    px = frame.load()
    w, h = frame.size

    # Remove near-white slide background while preserving dog + shadow.
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r > 247 and g > 247 and b > 247:
                px[x, y] = (0, 0, 0, 0)

    alpha = frame.split()[3]
    bbox = alpha.getbbox()
    if bbox:
        frame = frame.crop(bbox)
    frame.save(out_dir / f"{name}.png")
    print(name, frame.size)
