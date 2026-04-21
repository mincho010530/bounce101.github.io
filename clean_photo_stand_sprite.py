from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9c29e89f-7bfb-48e9-9f13-d91cb5e85654.png"
out = r"C:\Users\강민서\Desktop\AI\my cite\photo_stand_clean.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 30 and g < 30 and b < 30:
            px[x, y] = (0, 0, 0, 0)

alpha = im.split()[3]
bbox = alpha.getbbox()
if bbox:
    im = im.crop(bbox)

im.save(out)
print(out, im.size)
