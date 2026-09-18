type Handle = { destroy: () => void };

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function coverRect(
  imgW: number,
  imgH: number,
  boxW: number,
  boxH: number,
  biasX = 0,
) {
  const ir = imgW / imgH;
  const br = boxW / boxH;
  let w: number;
  let h: number;
  if (br > ir) {
    w = boxW;
    h = boxW / ir;
  } else {
    h = boxH;
    w = boxH * ir;
  }
  const x = (boxW - w) / 2 + biasX * w;
  const y = (boxH - h) / 2;
  return { x, y, w, h };
}

export async function mountHeroCanvas(
  host: HTMLElement,
  opts?: { real?: string; dotted?: string },
): Promise<Handle> {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [real, dotted] = await Promise.all([
    loadImage(opts?.real ?? "/images/saad.webp"),
    loadImage(opts?.dotted ?? "/images/saad-dotted.webp"),
  ]);

  const canvas = document.createElement("canvas");
  canvas.className = "hero-canvas";
  canvas.style.background = "transparent";
  host.appendChild(canvas);
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("2d canvas unavailable");

  const mask = document.createElement("canvas");
  const mctx = mask.getContext("2d");
  const layer = document.createElement("canvas");
  const lctx = layer.getContext("2d");
  if (!mctx || !lctx) throw new Error("2d canvas unavailable");

  const pointer = { x: 0.5, y: 0.42, active: false };
  let idleT = 0;
  let destroyed = false;
  let w = 0;
  let h = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, host.clientWidth);
    h = Math.max(1, host.clientHeight);
    for (const c of [canvas, mask, layer]) {
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
    }
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const localXY = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    pointer.x = (e.clientX - r.left) / Math.max(r.width, 1);
    pointer.y = (e.clientY - r.top) / Math.max(r.height, 1);
    pointer.active = true;
  };

  const onMove = (e: PointerEvent) => localXY(e);
  const onEnter = (e: PointerEvent) => localXY(e);
  const onLeave = () => {
    pointer.active = false;
    mctx.setTransform(1, 0, 0, 1, 0, 0);
    mctx.clearRect(0, 0, mask.width, mask.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerenter", onEnter);
  host.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", resize);
  resize();

  let last = performance.now();
  const tick = (now: number) => {
    if (destroyed) return;
    requestAnimationFrame(tick);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    idleT += dt;

    const box = coverRect(real.width, real.height, w, h);

    ctx.fillStyle = "#12163a";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(real, box.x, box.y, box.w, box.h);

    if (reduced) return;

    // Fade the trail out when the pointer leaves so nothing sits on the face at rest.
    mctx.globalCompositeOperation = "destination-out";
    mctx.fillStyle = pointer.active ? "rgba(0,0,0,0.045)" : "rgba(0,0,0,0.18)";
    mctx.fillRect(0, 0, w, h);

    if (pointer.active) {
      mctx.globalCompositeOperation = "lighter";
      const radius = Math.max(w, h) * 0.22;
      const gx = pointer.x * w;
      const gy = pointer.y * h;
      const grd = mctx.createRadialGradient(gx, gy, radius * 0.08, gx, gy, radius);
      const pulse = 0.72 + Math.sin(idleT * 6) * 0.08;
      grd.addColorStop(0, `rgba(255,255,255,${pulse})`);
      grd.addColorStop(0.35, "rgba(255,255,255,0.42)");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      mctx.fillStyle = grd;
      mctx.beginPath();
      mctx.arc(gx, gy, radius, 0, Math.PI * 2);
      mctx.fill();
    }

    if (!pointer.active) return;

    lctx.clearRect(0, 0, w, h);
    lctx.filter = "brightness(1.55) saturate(1.25)";
    lctx.drawImage(dotted, box.x, box.y, box.w, box.h);
    lctx.filter = "none";
    lctx.globalCompositeOperation = "destination-in";
    lctx.drawImage(mask, 0, 0, w, h);
    lctx.globalCompositeOperation = "source-over";

    ctx.drawImage(layer, 0, 0, w, h);
  };
  requestAnimationFrame(tick);

  return {
    destroy() {
      destroyed = true;
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerenter", onEnter);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      canvas.remove();
    },
  };
}
