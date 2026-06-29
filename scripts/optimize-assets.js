const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "assets");
const reportPath = path.join(root, "reports", "asset-optimization.md");
const minBytes = 100 * 1024;
const maxDimension = 640;
const exts = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function replaceWithRetry(tmp, file) {
  let lastError = null;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      fs.renameSync(tmp, file);
      return;
    } catch (error) {
      lastError = error;
      try {
        fs.writeFileSync(file, fs.readFileSync(tmp));
        fs.unlinkSync(tmp);
        return;
      } catch (writeError) {
        lastError = writeError;
      }
    }
  }
  throw lastError;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const before = fs.statSync(file).size;
  if (before < minBytes || !exts.has(ext)) return null;

  const tmp = `${file}.opt-tmp${ext === ".jpeg" ? ".jpg" : ext}`;
  if (fs.existsSync(tmp)) fs.unlinkSync(tmp);

  let image = sharp(file, { failOn: "none" }).rotate().resize({
    width: maxDimension,
    height: maxDimension,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (ext === ".png") image = image.png({ compressionLevel: 9, adaptiveFiltering: true, palette: true, effort: 10 });
  else if (ext === ".webp") image = image.webp({ quality: 82, effort: 6 });
  else image = image.jpeg({ quality: 82, mozjpeg: true });

  await image.toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after >= before * 0.96) {
    fs.unlinkSync(tmp);
    return { file: rel(file), before, after: before, saved: 0, kept: false };
  }

  replaceWithRetry(tmp, file);
  return { file: rel(file), before, after, saved: before - after, kept: true };
}

async function main() {
  for (const tmp of walk(assetsDir).filter((file) => file.includes(".opt-tmp"))) {
    fs.unlinkSync(tmp);
  }

  const files = walk(assetsDir);
  const results = [];
  for (const file of files) {
    const result = await optimize(file);
    if (result) results.push(result);
  }

  const changed = results.filter((item) => item.kept);
  const totalBefore = changed.reduce((sum, item) => sum + item.before, 0);
  const totalAfter = changed.reduce((sum, item) => sum + item.after, 0);
  const lines = [
    "# Asset optimization report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `- Candidates over ${formatBytes(minBytes)}: ${results.length}`,
    `- Optimized files: ${changed.length}`,
    `- Bytes before optimized set: ${formatBytes(totalBefore)}`,
    `- Bytes after optimized set: ${formatBytes(totalAfter)}`,
    `- Saved: ${formatBytes(totalBefore - totalAfter)}`,
    "",
    "## Optimized",
    "",
    ...changed.map((item) => `- ${item.file}: ${formatBytes(item.before)} -> ${formatBytes(item.after)} (${formatBytes(item.saved)} saved)`),
    "",
    "## Skipped because not smaller enough",
    "",
    ...results.filter((item) => !item.kept).map((item) => `- ${item.file}: ${formatBytes(item.before)}`),
    "",
  ];
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
  console.log(`Optimized ${changed.length}/${results.length} candidates`);
  console.log(`Saved ${formatBytes(totalBefore - totalAfter)}`);
  console.log(`Report: ${rel(reportPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
