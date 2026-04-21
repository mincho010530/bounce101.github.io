from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8fa5e241-e59f-424d-9ca3-bf883ef12988.png"
out = r"C:\Users\강민서\Desktop\AI\my cite\bed_fixed_clean.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size

# Remove checkerboard-like bright grayscale background
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 205 and g > 205 and b > 205 and abs(r - g) < 12 and abs(g - b) < 12:
            px[x, y] = (0, 0, 0, 0)

alpha = im.split()[3]
bbox = alpha.getbbox()
if bbox:
    im = im.crop(bbox)

im.save(out)
print(out, im.size)
