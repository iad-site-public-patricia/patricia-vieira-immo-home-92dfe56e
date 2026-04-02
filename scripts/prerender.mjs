/**
 * Post-build prerendering script.
 */
import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";

const DIST = join(process.cwd(), "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/vendre",
  "/estimation",
  "/acheter",
  "/avis",
  "/immobilier-gretz-armainvilliers",
  "/immobilier-ozoir-la-ferriere",
  "/immobilier-pontault-combault",
  "/immobilier-tournan-en-brie",
  "/immobilier-brie-comte-robert",
  "/immobilier-roissy-en-brie",
  "/rejoindre",
  "/conseils-immobiliers",
  "/blog",
  "/a-propos",
  "/contact",
  "/mentions-legales",
];

function startServer() {
  const mime = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".mp4": "video/mp4",
  };

  const server = createServer((req, res) => {
    let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
    if (!existsSync(filePath)) {
      filePath = join(DIST, "index.html");
    }
    const ext = "." + filePath.split(".").pop();
    res.setHeader("Content-Type", mime[ext] || "application/octet-stream");
    res.end(readFileSync(filePath));
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  console.log("🔨 Building prerendered HTML...\n");

  const server = await startServer();

  const browser = await launch({
    headless: true,
    executablePath: "/bin/chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;

    await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
    await page.waitForSelector("#root", { timeout: 5000 });

    const html = await page.content();

    const outPath =
      route === "/"
        ? join(DIST, "index.html")
        : join(DIST, route, "index.html");

    const outDir = dirname(outPath);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    writeFileSync(outPath, html, "utf-8");
    console.log(`  ✅ ${route} → ${outPath.replace(DIST, "dist")}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("\n🎉 Prerendering complete!");
}

prerender().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
