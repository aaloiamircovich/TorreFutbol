param(
    [string]$OutputPath = "reports\data-audit.md"
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$FullOutputPath = Join-Path $ProjectRoot $OutputPath
$OutputDir = Split-Path -Parent $FullOutputPath
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

function Read-Text($relativePath) {
    Get-Content -Path (Join-Path $ProjectRoot $relativePath) -Raw -Encoding UTF8
}

function Remove-Diacritics([string]$text) {
    if ([string]::IsNullOrWhiteSpace($text)) { return "" }
    $normalized = $text.Normalize([Text.NormalizationForm]::FormD)
    $builder = New-Object Text.StringBuilder
    foreach ($char in $normalized.ToCharArray()) {
        if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$builder.Append($char)
        }
    }
    $builder.ToString().Normalize([Text.NormalizationForm]::FormC)
}

function Clean-Name([string]$name) {
    if ([string]::IsNullOrWhiteSpace($name)) { return "" }
    $clean = $name -replace '[\uD800-\uDFFF]', ''
    $clean = $clean -replace '[\p{So}]', ''
    $clean = $clean -replace '\s*\(.*?\)\s*', ' '
    $clean = $clean -replace '\s+', ' '
    $clean.Trim()
}

function Normalize-Name([string]$name) {
    (Remove-Diacritics (Clean-Name $name)).ToLowerInvariant().Trim()
}

function Add-Unique([Collections.Generic.List[string]]$list, [string]$name) {
    $clean = Clean-Name $name
    if ($clean -and -not $list.Contains($clean)) {
        $list.Add($clean)
    }
}

function Parse-ObjectNames([string]$content, [string]$property) {
    $values = New-Object 'Collections.Generic.List[string]'
    $matches = [regex]::Matches($content, "$property\s*:\s*""([^""]+)""")
    foreach ($match in $matches) {
        Add-Unique $values $match.Groups[1].Value
    }
    $values
}

function Parse-QuotedValuesInProperty([string]$content, [string]$property) {
    $values = New-Object 'Collections.Generic.List[string]'
    $pattern = "$property\s*:\s*\[(.*?)\]"
    $matches = [regex]::Matches($content, $pattern, [Text.RegularExpressions.RegexOptions]::Singleline)
    foreach ($match in $matches) {
        $items = [regex]::Matches($match.Groups[1].Value, '"([^"]+)"')
        foreach ($item in $items) {
            Add-Unique $values $item.Groups[1].Value
        }
    }
    $values
}

function Parse-MapKeys([string]$content, [string]$constName) {
    $values = New-Object 'Collections.Generic.List[string]'
    $pattern = "const\s+$constName\s*=\s*\{(.*?)\};"
    $match = [regex]::Match($content, $pattern, [Text.RegularExpressions.RegexOptions]::Singleline)
    if ($match.Success) {
        $items = [regex]::Matches($match.Groups[1].Value, '"([^"]+)"\s*:')
        foreach ($item in $items) {
            Add-Unique $values $item.Groups[1].Value
        }
    }
    $values
}

function Find-Duplicates([Collections.Generic.List[string]]$names) {
    $groups = @{}
    foreach ($name in $names) {
        $norm = Normalize-Name $name
        if (-not $groups.ContainsKey($norm)) {
            $groups[$norm] = New-Object 'Collections.Generic.List[string]'
        }
        if (-not $groups[$norm].Contains($name)) {
            $groups[$norm].Add($name)
        }
    }
    $groups.GetEnumerator() | Where-Object { $_.Value.Count -gt 1 } | Sort-Object Name
}

function Format-List($items, [int]$limit = 40) {
    if (-not $items -or $items.Count -eq 0) { return @("- Ninguno") }
    $lines = New-Object 'Collections.Generic.List[string]'
    foreach ($item in ($items | Select-Object -First $limit)) {
        $lines.Add("- $item")
    }
    if ($items.Count -gt $limit) {
        $lines.Add("- ...y $($items.Count - $limit) mas")
    }
    $lines
}

$datos = Read-Text "datos.js"
$tray = Read-Text "datostrayectoria.js"
$link = Read-Text "datoslink.js"
$camino = Read-Text "datoscamino.js"
$subasta = Read-Text "datossubasta.js"
$assetMap = Read-Text "assets\assets-map.js"

$answerEntities = New-Object 'Collections.Generic.List[string]'
$players = New-Object 'Collections.Generic.List[string]'
$teams = New-Object 'Collections.Generic.List[string]'

foreach ($name in (Parse-ObjectNames $datos "nombre")) { Add-Unique $answerEntities $name }
foreach ($name in (Parse-ObjectNames $tray "ans")) { Add-Unique $players $name }
foreach ($name in (Parse-ObjectNames $link "ans")) { Add-Unique $players $name }
foreach ($name in (Parse-ObjectNames $subasta "name")) { Add-Unique $players $name }

foreach ($name in (Parse-QuotedValuesInProperty $tray "clubs")) { Add-Unique $teams $name }
foreach ($name in (Parse-QuotedValuesInProperty $camino "equipos")) { Add-Unique $teams $name }
foreach ($name in (Parse-QuotedValuesInProperty $camino "rivalesExtra")) { Add-Unique $teams $name }
foreach ($name in (Parse-ObjectNames $subasta "club")) { if ($name -ne "Leyenda") { Add-Unique $teams $name } }

$localPlayers = Parse-MapKeys $assetMap "localPlayerPhotos"
$localTeams = Parse-MapKeys $assetMap "localTeamLogos"
$localPlayerNorms = New-Object 'Collections.Generic.HashSet[string]'
$localTeamNorms = New-Object 'Collections.Generic.HashSet[string]'
foreach ($name in $localPlayers) { [void]$localPlayerNorms.Add((Normalize-Name $name)) }
foreach ($name in $localTeams) { [void]$localTeamNorms.Add((Normalize-Name $name)) }

$missingAnswerEntities = $answerEntities | Where-Object {
    -not $localPlayerNorms.Contains((Normalize-Name $_)) -and -not $localTeamNorms.Contains((Normalize-Name $_))
} | Sort-Object
$missingPlayers = $players | Where-Object { -not $localPlayerNorms.Contains((Normalize-Name $_)) } | Sort-Object
$missingTeams = $teams | Where-Object { -not $localTeamNorms.Contains((Normalize-Name $_)) } | Sort-Object

$duplicateAnswerEntities = Find-Duplicates $answerEntities
$duplicatePlayers = Find-Duplicates $players
$duplicateTeams = Find-Duplicates $teams

$allAliasBlocks = [regex]::Matches(($datos + "`n" + $tray + "`n" + $link), 'alias\s*:\s*\[(.*?)\]', [Text.RegularExpressions.RegexOptions]::Singleline)
$emptyAliasBlocks = 0
foreach ($block in $allAliasBlocks) {
    if (-not [regex]::IsMatch($block.Groups[1].Value, '"[^"]+"')) {
        $emptyAliasBlocks++
    }
}

$lines = New-Object 'Collections.Generic.List[string]'
$lines.Add("# TorreFutbol data audit")
$lines.Add("")
$lines.Add("Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')")
$lines.Add("")
$lines.Add("## Summary")
$lines.Add("")
$lines.Add("- Unique Torre answer entities: $($answerEntities.Count)")
$lines.Add("- Unique players referenced: $($players.Count)")
$lines.Add("- Unique teams referenced: $($teams.Count)")
$lines.Add("- Local player images mapped: $($localPlayers.Count)")
$lines.Add("- Local team logos mapped: $($localTeams.Count)")
$lines.Add("- Torre answer entities missing any local image/logo: $($missingAnswerEntities.Count)")
$lines.Add("- Players missing local image: $($missingPlayers.Count)")
$lines.Add("- Teams missing local logo: $($missingTeams.Count)")
$lines.Add("- Alias blocks found: $($allAliasBlocks.Count)")
$lines.Add("- Empty alias blocks: $emptyAliasBlocks")
$lines.Add("")
$lines.Add("## Image Coverage")
$lines.Add("")
$playerCoverage = if ($players.Count -gt 0) { [math]::Round(($localPlayers.Count / $players.Count) * 100, 1) } else { 0 }
$teamCoverage = if ($teams.Count -gt 0) { [math]::Round(($localTeams.Count / $teams.Count) * 100, 1) } else { 0 }
$answerCoverage = if ($answerEntities.Count -gt 0) { [math]::Round((($answerEntities.Count - $missingAnswerEntities.Count) / $answerEntities.Count) * 100, 1) } else { 0 }
$lines.Add("- Torre answer entity local media coverage: $answerCoverage%")
$lines.Add("- Player image coverage: $playerCoverage%")
$lines.Add("- Team logo coverage: $teamCoverage%")
$lines.Add("")
$lines.Add("## Missing Torre Answer Media")
$lines.Add("")
foreach ($line in (Format-List $missingAnswerEntities 80)) { $lines.Add($line) }
$lines.Add("")
$lines.Add("## Missing Player Images")
$lines.Add("")
foreach ($line in (Format-List $missingPlayers 80)) { $lines.Add($line) }
$lines.Add("")
$lines.Add("## Missing Team Logos")
$lines.Add("")
foreach ($line in (Format-List $missingTeams 120)) { $lines.Add($line) }
$lines.Add("")
$lines.Add("## Duplicate-Looking Player Names")
$lines.Add("")
if ($duplicateAnswerEntities.Count -gt 0) {
    $lines.Add("Torre answer duplicates:")
    foreach ($dup in $duplicateAnswerEntities) {
        $lines.Add("- $($dup.Value -join ' / ')")
    }
    $lines.Add("")
}
if ($duplicatePlayers.Count -eq 0) {
    $lines.Add("- Ninguno")
} else {
    foreach ($dup in $duplicatePlayers) {
        $lines.Add("- $($dup.Value -join ' / ')")
    }
}
$lines.Add("")
$lines.Add("## Duplicate-Looking Team Names")
$lines.Add("")
if ($duplicateTeams.Count -eq 0) {
    $lines.Add("- Ninguno")
} else {
    foreach ($dup in $duplicateTeams) {
        $lines.Add("- $($dup.Value -join ' / ')")
    }
}
$lines.Add("")
$lines.Add("## Suggested Verification Workflow")
$lines.Add("")
$lines.Add("- Use Transfermarkt to verify trajectories, clubs, positions, transfer years and market-style data.")
$lines.Add("- Use official competition sites for tournament orders and national-team match paths.")
$lines.Add("- Use Wikimedia/Wikidata only for reusable image discovery, then store images locally.")
$lines.Add("- Fix high-traffic content first: menu-visible modes, first 20 levels, and subasta player cards.")

Set-Content -Path $FullOutputPath -Value $lines -Encoding UTF8
Write-Host "Report written to $FullOutputPath"
