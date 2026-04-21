from pathlib import Path
from PIL import Image

src = Path(
    r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-295b4c9c-cdae-4f34-84e3-5d441caf24b8.png"
)
out_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\skill_icons")
out_dir.mkdir(exist_ok=True)

im = Image.open(src).convert("RGBA")

# Approximate icon boxes in the provided screenshot
logos = {
    "premiere": (10, 18, 58, 66),
    "powerpoint": (8, 90, 58, 140),
    "aftereffects": (8, 165, 58, 215),
    "photoshop": (8, 238, 58, 288),
}

for name, box in logos.items():
    icon = im.crop(box)
    icon.save(out_dir / f"{name}.png")
    print(name, icon.size)
