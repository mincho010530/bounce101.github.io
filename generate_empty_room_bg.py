from PIL import Image, ImageDraw

W, H = 1280, 720
img = Image.new("RGBA", (W, H), (236, 215, 245, 255))
draw = ImageDraw.Draw(img)

# Back wall (pastel lavender)
draw.rectangle((0, 0, W, 360), fill=(224, 194, 240, 255))

# Wallpaper dots/pattern
for y in range(8, 360, 22):
    for x in range(10, W, 22):
        draw.rectangle((x, y, x + 3, y + 3), fill=(239, 216, 250, 255))

# Side wall tint for isometric feel
draw.polygon([(0, 0), (220, 90), (220, 450), (0, 360)], fill=(214, 182, 234, 220))
draw.polygon([(W, 0), (W - 220, 90), (W - 220, 450), (W, 360)], fill=(214, 182, 234, 220))

# Floor area (wood planks in perspective)
floor_poly = [(120, 360), (W - 120, 360), (W, H), (0, H)]
draw.polygon(floor_poly, fill=(242, 207, 211, 255))

# Wood plank lines
for i in range(0, 38):
    x0 = int(i * (W / 38))
    draw.line((x0, 390, int(x0 * 1.08), H), fill=(228, 184, 192, 255), width=1)
for y in range(390, H, 18):
    draw.line((35, y, W - 35, y), fill=(234, 193, 199, 200), width=1)

# Window (left wall)
draw.polygon([(155, 145), (325, 175), (325, 315), (155, 282)], fill=(194, 226, 255, 255), outline=(233, 242, 255, 255))
draw.polygon([(165, 153), (316, 179), (316, 306), (165, 276)], fill=(153, 196, 241, 255))
draw.line((242, 166, 242, 292), fill=(225, 240, 255, 255), width=2)
draw.line((172, 226, 309, 249), fill=(225, 240, 255, 255), width=2)

# Door (right wall)
draw.polygon([(1015, 184), (1135, 164), (1135, 460), (1015, 490)], fill=(248, 227, 236, 255), outline=(220, 182, 197, 255))
draw.polygon([(1025, 198), (1125, 181), (1125, 451), (1025, 476)], fill=(252, 238, 244, 255))
draw.ellipse((1090, 315, 1105, 330), fill=(228, 176, 193, 255))

# Wall/floor border trim
draw.line((120, 360, W - 120, 360), fill=(213, 161, 181, 255), width=4)
draw.line((0, 360, 120, 360), fill=(198, 149, 173, 255), width=4)
draw.line((W - 120, 360, W, 360), fill=(198, 149, 173, 255), width=4)

# Soft light overlay
overlay = Image.new("RGBA", (W, H), (255, 242, 255, 36))
img = Image.alpha_composite(img, overlay)

img.save(r"c:\Users\강민서\Desktop\AI\my cite\empty_miniroom_bg.png")
print("saved empty_miniroom_bg.png")
