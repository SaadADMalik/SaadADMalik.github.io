import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "../docs");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
console.log("copied docs/404.html");
