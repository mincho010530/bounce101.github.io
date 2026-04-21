from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-aafd6eca-87e3-47ef-adee-4acce8b21715.png"
base_out = r"C:\Users\강민서\Desktop\AI\my cite\poster_{}.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size

# Remove checkerboard-style gray/white background.
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 205 and g > 205 and b > 205 and abs(r - g) < 12 and abs(g - b) < 12:
            px[x, y] = (0, 0, 0, 0)

col = w // 3
for i in range(3):
    piece = im.crop((i * col, 0, (i + 1) * col if i < 2 else w, h))
    alpha = piece.split()[3]
    bbox = alpha.getbbox()
    if bbox:
        piece = piece.crop(bbox)
    out = base_out.format(i + 1)
    piece.save(out)
    print(out, piece.size)
