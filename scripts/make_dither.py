"""Create a phosphor-green Bayer-dithered companion for the hero still."""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(r"C:\Users\hp\.cursor\projects\d-portfolio-SaadADMalik-github-io\assets\hero-real.png")
OUT_DIR = ROOT / "public" / "images" / "hero"

BAYER8 = np.array(
    [
        [0, 32, 8, 40, 2, 34, 10, 42],
        [48, 16, 56, 24, 50, 18, 58, 26],
        [12, 44, 4, 36, 14, 46, 6, 38],
        [60, 28, 52, 20, 62, 30, 54, 22],
        [3, 35, 11, 43, 1, 33, 9, 41],
        [51, 19, 59, 27, 49, 17, 57, 25],
        [15, 47, 7, 39, 13, 45, 5, 37],
        [63, 31, 55, 23, 61, 29, 53, 21],
    ],
    dtype=np.float32,
) / 64.0

PHOSPHOR = np.array([0.247, 0.898, 0.478], dtype=np.float32)  # #3fe57a


def dither(path: Path, out: Path, cell: int = 3) -> None:
    img = Image.open(path).convert("RGB")
    # Slightly downscale then upscale so dots read at hero size
    w, h = img.size
    small = img.resize((w // cell, h // cell), Image.Resampling.LANCZOS)
    arr = np.asarray(small).astype(np.float32) / 255.0
    luma = arr @ np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)
    luma = np.clip((luma - 0.08) * 1.45, 0, 1)

    bh, bw = luma.shape
    tile = np.tile(BAYER8, (bh // 8 + 1, bw // 8 + 1))[:bh, :bw]
    # 4-level ordered dither
    q = np.floor(np.clip(luma + (tile - 0.5) * 0.35, 0, 1) * 3.0 + 1e-6) / 3.0
    rgb = np.zeros((bh, bw, 3), dtype=np.float32)
    rgb[:] = q[..., None] * PHOSPHOR
    # Punch dots: keep only where quantized > 0, else black
    out_small = Image.fromarray((np.clip(rgb, 0, 1) * 255).astype(np.uint8), "RGB")
    out_img = out_small.resize((w, h), Image.Resampling.NEAREST)
    out.parent.mkdir(parents=True, exist_ok=True)
    out_img.save(out, format="WEBP", quality=92, method=6)
    print("wrote", out, out_img.size)


def to_webp(path: Path, out: Path) -> None:
    img = Image.open(path).convert("RGB")
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, format="WEBP", quality=90, method=6)
    print("wrote", out, img.size)


if __name__ == "__main__":
    to_webp(SRC, OUT_DIR / "hero-real.webp")
    dither(SRC, OUT_DIR / "hero-dotted.webp")
