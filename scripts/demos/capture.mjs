import { mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import puppeteer from "puppeteer-core";

const ROOT = resolve(import.meta.dirname, "../..");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const FPS = 15;
const SECONDS = 18;

async function capture(name) {
  const html = pathToFileURL(join(ROOT, "scripts/demos", `${name}.html`)).href;
  const frames = join(ROOT, "tmp-frames", `${name}-demo`);
  mkdirSync(frames, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--window-size=1280,720", "--hide-scrollbars"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
  await page.goto(html, { waitUntil: "load" });

  const total = FPS * SECONDS;
  for (let i = 0; i < total; i++) {
    const t = i / FPS;
    await page.evaluate((time) => window.__setTime(time), t);
    await page.screenshot({
      path: join(frames, `f${String(i).padStart(4, "0")}.jpg`),
      type: "jpeg",
      quality: 86,
    });
  }
  await browser.close();

  const outDir = join(ROOT, "public/videos");
  mkdirSync(outDir, { recursive: true });
  const mp4 = join(outDir, `${name}-demo.mp4`);
  const poster = join(ROOT, "public/images/work", `${name}.webp`);
  const ff = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      String(FPS),
      "-i",
      join(frames, "f%04d.jpg"),
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-crf",
      "23",
      "-movflags",
      "+faststart",
      mp4,
    ],
    { stdio: "inherit" },
  );
  if (ff.status !== 0) throw new Error(`ffmpeg failed for ${name}`);
  spawnSync("ffmpeg", ["-y", "-ss", "12", "-i", mp4, "-frames:v", "1", poster], {
    stdio: "inherit",
  });
  console.log("wrote", mp4, poster);
}

const name = process.argv[2];
if (!name) throw new Error("usage: node capture.mjs rift|peak");
await capture(name);
