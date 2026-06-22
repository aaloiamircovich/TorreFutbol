const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "modes", "carrera-jugador", "career-data.js");
const source = fs.readFileSync(file, "utf8");
const context = {};

vm.createContext(context);
vm.runInContext(`${source}\nthis.__careerData = { leagues: careerLeagueDatabase, tournaments: careerCompetitionDatabase };`, context);

const header = "// Generado desde Transfermarkt con scripts/import-career-transfermarkt.js.\n";
const compact = `${header}const careerLeagueDatabase=${JSON.stringify(context.__careerData.leagues)};\nconst careerCompetitionDatabase=${JSON.stringify(context.__careerData.tournaments)};\n`;
const before = Buffer.byteLength(source);
const after = Buffer.byteLength(compact);

fs.writeFileSync(file, compact, "utf8");
console.log(`career-data.js: ${before} -> ${after} bytes (${Math.round((1 - after / before) * 100)}% menos)`);
