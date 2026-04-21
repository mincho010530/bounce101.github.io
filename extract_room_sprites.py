from pathlib import Path
from collections import deque
from PIL import Image

source = Path(
    r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-8c258152-aabb-43c1-8ba3-3de8407734b0.png"
)
out_dir = Path(r"C:\Users\강민서\Desktop\AI\my cite\sprites")
out_dir.mkdir(exist_ok=True)

img = Image.open(source).convert("RGBA")

# name, left, top, right, bottom
crops = [
    ("desk", (90, 320, 295, 610)),
    ("shelf", (250, 85, 485, 430)),
    ("bed", (470, 135, 850, 535)),
    ("poster", (560, 40, 915, 235)),
]


def transparent_border_flood(crop_img, tolerance=24):
    rgba = crop_img.copy()
    px = rgba.load()
    w, h = rgba.size
    visited = [[False] * h for _ in range(w)]
    q = deque()

    border_points = []
    for x in range(w):
        border_points.append((x, 0))
        border_points.append((x, h - 1))
    for y in range(h):
        border_points.append((0, y))
        border_points.append((w - 1, y))

    for p in border_points:
        q.append(p)

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visited[x][y]:
            continue
        visited[x][y] = True
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        # pastel room background tones
        bg_like = (r > 180 and g > 150 and b > 170) or (r > 150 and g > 120 and b > 120)
        if not bg_like:
            continue
        px[x, y] = (r, g, b, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
                nr, ng, nb, na = px[nx, ny]
                if na == 0:
                    continue
                if abs(nr - r) <= tolerance and abs(ng - g) <= tolerance and abs(nb - b) <= tolerance:
                    q.append((nx, ny))

    alpha = rgba.split()[3]
    bbox = alpha.getbbox()
    if not bbox:
        return rgba
    return rgba.crop(bbox)


for name, box in crops:
    piece = img.crop(box)
    cleaned = transparent_border_flood(piece)
    cleaned.save(out_dir / f"{name}.png")

print(str(out_dir))
