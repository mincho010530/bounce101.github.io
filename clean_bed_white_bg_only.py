from collections import deque
from PIL import Image

src = r"C:\Users\강민서\.cursor\projects\c-Users-Desktop-AI-my-cite\assets\c__Users_____AppData_Roaming_Cursor_User_workspaceStorage_8df7a00207fd9ac6de30f5a5ab240794_images_image-9d6f3808-1b60-4b67-bafe-d1ac0db97195.png"
out = r"C:\Users\강민서\Desktop\AI\my cite\bed_fixed_clean.png"

im = Image.open(src).convert("RGBA")
px = im.load()
w, h = im.size
visited = [[False] * h for _ in range(w)]
q = deque()

for x in range(w):
    q.append((x, 0))
    q.append((x, h - 1))
for y in range(h):
    q.append((0, y))
    q.append((w - 1, y))

def is_white_bg(r, g, b, a):
    if a == 0:
        return False
    # Remove only near-white/very light gray connected background.
    return r > 225 and g > 225 and b > 225 and abs(r - g) < 22 and abs(g - b) < 22

while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or visited[x][y]:
        continue
    visited[x][y] = True
    r, g, b, a = px[x, y]
    if not is_white_bg(r, g, b, a):
        continue
    px[x, y] = (0, 0, 0, 0)
    q.append((x + 1, y))
    q.append((x - 1, y))
    q.append((x, y + 1))
    q.append((x, y - 1))

alpha = im.split()[3]
bbox = alpha.getbbox()
if bbox:
    im = im.crop(bbox)

im.save(out)
print(out, im.size)
