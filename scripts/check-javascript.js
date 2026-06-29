const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const ignored = new Set([".git", "node_modules"]);

function collect(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collect(fullPath);
    return entry.isFile() && entry.name.endsWith(".js") ? [fullPath] : [];
  });
}

const files = collect(root);
const failures = [];

files.forEach((file) => {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    failures.push({ file: path.relative(root, file), error: (result.stderr || result.stdout).trim() });
  }
});

if (failures.length) {
  failures.forEach((failure) => console.error(`\n${failure.file}\n${failure.error}`));
  console.error(`\nJavaScript invalido en ${failures.length} archivo(s).`);
  process.exit(1);
}

console.log(`JavaScript valido: ${files.length} archivo(s).`);
