from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-df835764-b0bb-4aeb-83f9-c578315278a5.png"
out = r"C:\Users\강민서\Desktop\AI\my cite\bookshelf_sprite_clean.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size

# Remove checkerboard-like background pixels (light neutral gray blocks)
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # very light, low saturation grays typical for checkerboard backgrounds
        if (
            r > 205 and g > 205 and b > 205
            and abs(r - g) < 10 and abs(g - b) < 10
        ):
            px[x, y] = (0, 0, 0, 0)

alpha = im.split()[3]
bbox = alpha.getbbox()
if bbox:
    im = im.crop(bbox)

im.save(out)
print(out, im.size)
