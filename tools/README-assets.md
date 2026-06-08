# Local assets

Run the downloader from the project folder:

```powershell
powershell -ExecutionPolicy Bypass -File tools\download-assets.ps1 -KnownOnly
```

`-KnownOnly` downloads the image URLs already present in `jugadoresfotos.js` and `logos.js`.

To also search Wikidata/Wikimedia for missing players and teams:

```powershell
powershell -ExecutionPolicy Bypass -File tools\download-assets.ps1 -SearchMissing -MaxPlayers 120 -MaxTeams 160
```

The script writes images into `assets/players/` and `assets/teams/`, then regenerates `assets/assets-map.js`.
