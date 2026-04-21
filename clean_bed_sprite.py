from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-891ff4ad-ed2e-4188-9e52-e517b8358762.png"
out = r"C:\Users\강민서\Desktop\AI\my cite\bed_sprite_clean.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 26 and g < 26 and b < 26:
            px[x, y] = (0, 0, 0, 0)

alpha = im.split()[3]
bbox = alpha.getbbox()
if bbox:
    im = im.crop(bbox)

im.save(out)
print(out, im.size)
