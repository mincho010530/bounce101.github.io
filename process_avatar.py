from pathlib import Path
from PIL import Image

source = Path(
    r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-afdc77a9-a4f9-476e-90f4-f1218fa8cf40.png"
)
target = Path(r"C:\Users\강민서\Desktop\AI\my cite\avatar_female_clean.png")

img = Image.open(source).convert("RGBA")
px = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 242 and g > 242 and b > 242:
            px[x, y] = (r, g, b, 0)

alpha = img.split()[3]
bbox = alpha.crop((w // 2, 0, w, h)).getbbox()
if bbox:
    left, top, right, bottom = bbox
    left += w // 2
    pad = 2
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w, right + w // 2 + pad)
    bottom = min(h, bottom + pad)
    img = img.crop((left, top, right, bottom))

img.save(target)
print(str(target))
