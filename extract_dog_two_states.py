from pathlib import Path
from PIL import Image

src = Path(
    r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-a3b43bd0-06b3-41eb-accf-37d86012f51a.png"
)
out_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\dog_states")
out_dir.mkdir(exist_ok=True)

im = Image.open(src).convert("RGBA")
w, h = im.size

# Left: sitting, Right: standing
left_box = (40, 145, w // 2 - 10, h - 60)
right_box = (w // 2 + 10, 145, w - 40, h - 60)

states = [("sit", left_box), ("stand", right_box)]

for name, box in states:
    frame = im.crop(box)
    px = frame.load()
    fw, fh = frame.size
    for y in range(fh):
        for x in range(fw):
            r, g, b, a = px[x, y]
            if r > 205 and g > 205 and b > 205 and abs(r - g) < 12 and abs(g - b) < 12:
                px[x, y] = (0, 0, 0, 0)
    alpha = frame.split()[3]
    bbox = alpha.getbbox()
    if bbox:
        frame = frame.crop(bbox)
    frame.save(out_dir / f"{name}.png")
    print(name, frame.size)
