param(
    [switch]$KnownOnly,
    [switch]$SearchMissing,
    [int]$MaxPlayers = 120,
    [int]$MaxTeams = 160,
    [int]$DelayMs = 1200
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$AssetsRoot = Join-Path $ProjectRoot "assets"
$PlayersDir = Join-Path $AssetsRoot "players"
$TeamsDir = Join-Path $AssetsRoot "teams"
$MapPath = Join-Path $AssetsRoot "assets-map.js"
$Headers = @{ "User-Agent" = "TorreFutbolAssetImporter/1.0 (local project asset downloader)" }

New-Item -ItemType Directory -Force -Path $PlayersDir, $TeamsDir | Out-Null

function Wait-WikiCall {
    if ($DelayMs -gt 0) {
        Start-Sleep -Milliseconds $DelayMs
    }
}

function Invoke-WikiJson([string]$url) {
    for ($attempt = 0; $attempt -lt 3; $attempt++) {
        try {
            Wait-WikiCall
            return Invoke-RestMethod -Uri $url -Headers $Headers -TimeoutSec 30
        } catch {
            $statusCode = $null
            if ($_.Exception.Response) {
                try { $statusCode = [int]$_.Exception.Response.StatusCode } catch { $statusCode = $null }
            }
            if ($statusCode -eq 429 -and $attempt -lt 2) {
                Start-Sleep -Seconds (10 * ($attempt + 1))
            } else {
                throw
            }
        }
    }
}

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

function Get-Slug([string]$name) {
    $plain = Remove-Diacritics (Clean-Name $name)
    $slug = $plain.ToLowerInvariant() -replace '[^a-z0-9]+', '-'
    $slug = $slug.Trim('-')
    if ([string]::IsNullOrWhiteSpace($slug)) { return "asset" }
    $slug
}

function Get-ExtensionFromUrlOrType([string]$url, [string]$contentType) {
    if ($contentType -match 'svg') { return ".svg" }
    if ($contentType -match 'png') { return ".png" }
    if ($contentType -match 'webp') { return ".webp" }
    if ($contentType -match 'jpeg|jpg') { return ".jpg" }
    $path = ([Uri]$url).AbsolutePath.ToLowerInvariant()
    if ($path -match '\.svg($|/)') { return ".svg" }
    if ($path -match '\.png($|/)') { return ".png" }
    if ($path -match '\.webp($|/)') { return ".webp" }
    if ($path -match '\.jpe?g($|/)') { return ".jpg" }
    ".png"
}

function Get-OriginalUploadUrl([string]$url) {
    if ([string]::IsNullOrWhiteSpace($url) -or -not $url.Contains("/thumb/")) { return $null }
    try {
        $uri = [Uri]$url
        $path = $uri.AbsolutePath
        $match = [regex]::Match($path, '^/wikipedia/([^/]+)/thumb/(.+)/[^/]+$')
        if (-not $match.Success) { return $null }
        $originalPath = "/wikipedia/$($match.Groups[1].Value)/$($match.Groups[2].Value)"
        "$($uri.Scheme)://$($uri.Host)$originalPath"
    } catch {
        $null
    }
}

function Get-WikiApiFileUrlFromUploadUrl([string]$url) {
    if ([string]::IsNullOrWhiteSpace($url) -or -not $url.Contains("upload.wikimedia.org/wikipedia/")) { return $null }
    try {
        $uri = [Uri]$url
        $pathParts = $uri.AbsolutePath.Split("/", [StringSplitOptions]::RemoveEmptyEntries)
        if ($pathParts.Count -lt 5 -or $pathParts[0] -ne "wikipedia") { return $null }

        $wiki = $pathParts[1]
        $fileName = $null
        $thumbIndex = [Array]::IndexOf($pathParts, "thumb")
        if ($thumbIndex -ge 0 -and $pathParts.Count -gt ($thumbIndex + 3)) {
            $fileName = $pathParts[$pathParts.Count - 2]
        } else {
            $fileName = $pathParts[$pathParts.Count - 1]
        }
        $fileName = [Uri]::UnescapeDataString($fileName)

        $apiBase = switch ($wiki) {
            "commons" { "https://commons.wikimedia.org/w/api.php" }
            "en" { "https://en.wikipedia.org/w/api.php" }
            "es" { "https://es.wikipedia.org/w/api.php" }
            default { "https://$wiki.wikipedia.org/w/api.php" }
        }

        $apiUrl = "$apiBase?action=query&format=json&prop=imageinfo&iiprop=url&titles=$([uri]::EscapeDataString("File:$fileName"))"
        $result = Invoke-WikiJson $apiUrl
        $pages = $result.query.pages.PSObject.Properties.Value
        foreach ($page in $pages) {
            if ($page.imageinfo -and $page.imageinfo.Count -gt 0 -and $page.imageinfo[0].url) {
                return $page.imageinfo[0].url
            }
        }
    } catch {
        return $null
    }
    $null
}

function Add-Unique([Collections.Generic.List[string]]$list, [string]$name) {
    $clean = Clean-Name $name
    if ($clean -and -not $list.Contains($clean)) {
        $list.Add($clean)
    }
}

function Parse-UrlMap([string]$content) {
    $map = [ordered]@{}
    $matches = [regex]::Matches($content, '"([^"]+)"\s*:\s*"(https?://[^"]+)"')
    foreach ($match in $matches) {
        $map[$match.Groups[1].Value] = $match.Groups[2].Value
    }
    $map
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

function Parse-PropertyValues([string]$content, [string]$property) {
    $values = New-Object 'Collections.Generic.List[string]'
    $matches = [regex]::Matches($content, "$property\s*:\s*""([^""]+)""")
    foreach ($match in $matches) {
        Add-Unique $values $match.Groups[1].Value
    }
    $values
}

function Download-Image([string]$name, [string]$url, [string]$kind) {
    $dir = if ($kind -eq "player") { $PlayersDir } else { $TeamsDir }
    $slug = Get-Slug $name

    $candidateUrls = New-Object 'Collections.Generic.List[string]'
    $apiFileUrl = Get-WikiApiFileUrlFromUploadUrl $url
    if ($apiFileUrl) { $candidateUrls.Add($apiFileUrl) }
    $originalUrl = Get-OriginalUploadUrl $url
    if ($originalUrl) { $candidateUrls.Add($originalUrl) }
    $candidateUrls.Add($url)

    foreach ($candidateUrl in $candidateUrls) {
        $extension = Get-ExtensionFromUrlOrType $candidateUrl ""
        $fileName = "$slug$extension"
        $fullPath = Join-Path $dir $fileName

        if (Test-Path $fullPath) {
            $folder = if ($kind -eq "player") { "players" } else { "teams" }
            return "assets/$folder/$fileName"
        }

        try {
            Invoke-WebRequest -Uri $candidateUrl -Headers $Headers -MaximumRedirection 5 -TimeoutSec 60 -OutFile $fullPath -UseBasicParsing
            $folder = if ($kind -eq "player") { "players" } else { "teams" }
            return "assets/$folder/$fileName"
        } catch {
            if (Test-Path $fullPath) { Remove-Item -LiteralPath $fullPath -Force }
        }
    }

    throw "No candidate URL worked for $name"
}

function Get-CommonsFileUrl([string]$fileName, [int]$width) {
    if ([string]::IsNullOrWhiteSpace($fileName)) { return $null }
    $title = "File:$fileName"
    $commonsUrl = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&iiurlwidth=$width&titles=$([uri]::EscapeDataString($title))"
    $result = Invoke-WikiJson $commonsUrl
    $pages = $result.query.pages.PSObject.Properties.Value
    foreach ($page in $pages) {
        if ($page.imageinfo -and $page.imageinfo.Count -gt 0) {
            if ($page.imageinfo[0].thumburl) { return $page.imageinfo[0].thumburl }
            if ($page.imageinfo[0].url) { return $page.imageinfo[0].url }
        }
    }
    $null
}

function Search-WikidataImage([string]$name, [string]$kind) {
    $languages = @("en", "es")
    $properties = if ($kind -eq "player") { @("P18") } else { @("P154", "P18") }

    foreach ($language in $languages) {
        $searchUrl = "https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=$language&limit=5&search=$([uri]::EscapeDataString($name))"
        $search = Invoke-WikiJson $searchUrl
        foreach ($candidate in $search.search) {
            $entityUrl = "https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=$($candidate.id)&props=claims"
            $entity = Invoke-WikiJson $entityUrl
            $claims = $entity.entities.$($candidate.id).claims
            foreach ($property in $properties) {
                if ($claims.$property -and $claims.$property.Count -gt 0) {
                    $fileName = $claims.$property[0].mainsnak.datavalue.value
                    $width = if ($kind -eq "player") { 220 } else { 150 }
                    $url = Get-CommonsFileUrl $fileName $width
                    if ($url) { return $url }
                }
            }
        }
    }
    $null
}

function Write-AssetMap($players, $teams) {
    $lines = New-Object 'Collections.Generic.List[string]'
    $lines.Add("const localPlayerPhotos = {")
    $playerIndex = 0
    foreach ($key in ($players.Keys | Sort-Object)) {
        $comma = if ($playerIndex -lt $players.Keys.Count - 1) { "," } else { "" }
        $safeKey = $key.Replace('\', '\\').Replace('"', '\"')
        $safeValue = $players[$key].Replace('\', '/').Replace('"', '\"')
        $lines.Add("    `"$safeKey`": `"$safeValue`"$comma")
        $playerIndex++
    }
    $lines.Add("};")
    $lines.Add("")
    $lines.Add("const localTeamLogos = {")
    $teamIndex = 0
    foreach ($key in ($teams.Keys | Sort-Object)) {
        $comma = if ($teamIndex -lt $teams.Keys.Count - 1) { "," } else { "" }
        $safeKey = $key.Replace('\', '\\').Replace('"', '\"')
        $safeValue = $teams[$key].Replace('\', '/').Replace('"', '\"')
        $lines.Add("    `"$safeKey`": `"$safeValue`"$comma")
        $teamIndex++
    }
    $lines.Add("};")
    $lines.Add("")
    $lines.Add("const localAssetMeta = {")
    $lines.Add("    generatedAt: `"$(Get-Date -Format o)`",")
    $lines.Add("    players: $($players.Keys.Count),")
    $lines.Add("    teams: $($teams.Keys.Count)")
    $lines.Add("};")
    Set-Content -Path $MapPath -Value $lines -Encoding UTF8
}

$playerPhotoMap = Parse-UrlMap (Read-Text "jugadoresfotos.js")
$teamLogoMap = Parse-UrlMap (Read-Text "logos.js")

$players = New-Object 'Collections.Generic.List[string]'
$teams = New-Object 'Collections.Generic.List[string]'

foreach ($name in $playerPhotoMap.Keys) { Add-Unique $players $name }
foreach ($name in $teamLogoMap.Keys) { Add-Unique $teams $name }

foreach ($name in (Parse-PropertyValues (Read-Text "datostrayectoria.js") "ans")) { Add-Unique $players $name }
foreach ($name in (Parse-PropertyValues (Read-Text "datoslink.js") "ans")) { Add-Unique $players $name }
foreach ($name in (Parse-PropertyValues (Read-Text "datossubasta.js") "name")) { Add-Unique $players $name }

foreach ($name in (Parse-QuotedValuesInProperty (Read-Text "datostrayectoria.js") "clubs")) { Add-Unique $teams $name }
foreach ($name in (Parse-QuotedValuesInProperty (Read-Text "datoscamino.js") "equipos")) { Add-Unique $teams $name }
foreach ($name in (Parse-QuotedValuesInProperty (Read-Text "datoscamino.js") "rivalesExtra")) { Add-Unique $teams $name }
foreach ($name in (Parse-PropertyValues (Read-Text "datossubasta.js") "club")) { if ($name -ne "Leyenda") { Add-Unique $teams $name } }

$localPlayers = [ordered]@{}
$localTeams = [ordered]@{}
$playerCount = 0
$teamCount = 0
$playerAttempts = 0
$teamAttempts = 0

foreach ($name in $players) {
    if ($playerAttempts -ge $MaxPlayers) { break }
    $playerAttempts++
    $url = $playerPhotoMap[$name]
    $downloaded = $false
    if ($url) {
        try {
            Write-Host "Player: $name"
            $localPlayers[$name] = Download-Image $name $url "player"
            $playerCount++
            $downloaded = $true
        } catch {
            Write-Warning "Could not download player '$name': $($_.Exception.Message)"
        }
    }
    if (-not $downloaded -and $SearchMissing -and -not $KnownOnly) {
        try {
            $searchUrl = Search-WikidataImage $name "player"
            if ($searchUrl) {
                Write-Host "Player search: $name"
                $localPlayers[$name] = Download-Image $name $searchUrl "player"
                $playerCount++
            }
        } catch {
            Write-Warning "Could not find/download player '$name' from search: $($_.Exception.Message)"
        }
    }
}

foreach ($name in $teams) {
    if ($teamAttempts -ge $MaxTeams) { break }
    $teamAttempts++
    $url = $teamLogoMap[$name]
    $downloaded = $false
    if ($url) {
        try {
            Write-Host "Team: $name"
            $localTeams[$name] = Download-Image $name $url "team"
            $teamCount++
            $downloaded = $true
        } catch {
            Write-Warning "Could not download team '$name': $($_.Exception.Message)"
        }
    }
    if (-not $downloaded -and $SearchMissing -and -not $KnownOnly) {
        try {
            $searchUrl = Search-WikidataImage $name "team"
            if ($searchUrl) {
                Write-Host "Team search: $name"
                $localTeams[$name] = Download-Image $name $searchUrl "team"
                $teamCount++
            }
        } catch {
            Write-Warning "Could not find/download team '$name' from search: $($_.Exception.Message)"
        }
    }
}

Write-AssetMap $localPlayers $localTeams
Write-Host "Done. Players: $($localPlayers.Keys.Count). Teams: $($localTeams.Keys.Count)."
