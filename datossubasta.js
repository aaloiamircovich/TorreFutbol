const subastaPlayers = [
    // ARQUEROS
    { name: "Emiliano Martínez", club: "Aston Villa", pos: "PO", rating: 87, rarity: "Elite", price: 250, stats: { div: 85, ref: 89, han: 83 }, nat: "🇦🇷" },
    { name: "Thibaut Courtois", club: "Real Madrid", pos: "PO", rating: 90, rarity: "Elite", price: 300, stats: { div: 88, ref: 90, han: 89 }, nat: "🇧🇪" },
    { name: "Lev Yashin", club: "Leyenda", pos: "PO", rating: 94, rarity: "Idolo", price: 600, stats: { div: 95, ref: 96, han: 85 }, nat: "🇷🇺" },
    { name: "Alisson Becker", club: "Liverpool", pos: "PO", rating: 89, rarity: "Elite", price: 280, stats: { div: 86, ref: 89, han: 85 }, nat: "🇧🇷" },

    // LATERALES DERECHOS (LD)
    { name: "Achraf Hakimi", club: "PSG", pos: "LD", rating: 84, rarity: "Oro", price: 180, stats: { def: 75, fis: 78, vel: 92 }, nat: "🇲🇦" },
    { name: "Dani Carvajal", club: "Real Madrid", pos: "LD", rating: 86, rarity: "Oro", price: 250, stats: { def: 82, fis: 81, vel: 80 }, nat: "🇪🇸" },
    { name: "Cafu", club: "Leyenda", pos: "LD", rating: 91, rarity: "Idolo", price: 600, stats: { def: 88, fis: 85, vel: 90 }, nat: "🇧🇷" },

    // LATERALES IZQUIERDOS (LI)
    { name: "Alphonso Davies", club: "Bayern Munich", pos: "LI", rating: 83, rarity: "Oro", price: 220, stats: { def: 74, fis: 77, vel: 95 }, nat: "🇨🇦" },
    { name: "Theo Hernández", club: "AC Milan", pos: "LI", rating: 85, rarity: "Oro", price: 230, stats: { def: 78, fis: 82, vel: 93 }, nat: "🇫🇷" },
    { name: "Roberto Carlos", club: "Leyenda", pos: "LI", rating: 90, rarity: "Idolo", price: 620, stats: { def: 82, fis: 86, vel: 92 }, nat: "🇧🇷" },

    // DEFENSAS CENTRALES (DFC)
    { name: "Virgil van Dijk", club: "Liverpool", pos: "DFC", rating: 89, rarity: "Elite", price: 400, stats: { def: 89, fis: 86, vel: 78 }, nat: "🇳🇱" },
    { name: "Paolo Maldini", club: "AC Milan", pos: "DFC", rating: 93, rarity: "Idolo", price: 700, stats: { def: 95, fis: 82, vel: 86 }, nat: "🇮🇹" },
    { name: "Rúben Dias", club: "Man City", pos: "DFC", rating: 89, rarity: "Elite", price: 380, stats: { def: 89, fis: 87, vel: 72 }, nat: "🇵🇹" },
    { name: "Cristian Romero", club: "Tottenham", pos: "DFC", rating: 85, rarity: "Oro", price: 200, stats: { def: 85, fis: 84, vel: 80 }, nat: "🇦🇷" },
    { name: "Marquinhos", club: "PSG", pos: "DFC", rating: 87, rarity: "Oro", price: 260, stats: { def: 89, fis: 80, vel: 78 }, nat: "🇧🇷" },
    { name: "Alessandro Nesta", club: "Leyenda", pos: "DFC", rating: 92, rarity: "Idolo", price: 650, stats: { def: 94, fis: 84, vel: 80 }, nat: "🇮🇹" },

    // MEDIOCAMPISTAS
    { name: "Rodri", club: "Man City", pos: "MC", rating: 91, rarity: "Elite", price: 480, stats: { pas: 86, def: 87, fis: 85 }, nat: "🇪🇸" },
    { name: "Federico Valverde", club: "Real Madrid", pos: "MC", rating: 88, rarity: "Elite", price: 420, stats: { pas: 84, vel: 88, fis: 82 }, nat: "🇺🇾" },
    { name: "Luka Modrić", club: "Real Madrid", pos: "MC", rating: 87, rarity: "Elite", price: 300, stats: { pas: 90, reg: 87, vel: 72 }, nat: "🇭🇷" },
    { name: "Xavi Hernández", club: "Leyenda", pos: "MC", rating: 93, rarity: "Idolo", price: 680, stats: { pas: 96, reg: 91, def: 72 }, nat: "🇪🇸" },

    // MEDIOCAMPISTAS OFENSIVOS (MCO)
    { name: "Kevin De Bruyne", club: "Man City", pos: "MCO", rating: 91, rarity: "Elite", price: 450, stats: { pas: 94, tir: 88, reg: 87 }, nat: "🇧🇪" },
    { name: "Jude Bellingham", club: "Real Madrid", pos: "MCO", rating: 88, rarity: "Oro", price: 380, stats: { pas: 85, tir: 82, reg: 88 }, nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Zinedine Zidane", club: "Leyenda", pos: "MCO", rating: 95, rarity: "Idolo", price: 850, stats: { pas: 96, tir: 91, reg: 95 }, nat: "🇫🇷" },
    { name: "Ronaldinho", club: "Leyenda", pos: "MCO", rating: 94, rarity: "Idolo", price: 880, stats: { tir: 89, reg: 96, pas: 91 }, nat: "🇧🇷" },

    // EXTREMOS DERECHOS (ED)
    { name: "Lionel Messi", club: "Inter Miami", pos: "ED", rating: 90, rarity: "Idolo", price: 900, stats: { tir: 91, reg: 94, pas: 90 }, nat: "🇦🇷" },
    { name: "Mohamed Salah", club: "Liverpool", pos: "ED", rating: 89, rarity: "Elite", price: 500, stats: { tir: 87, reg: 88, vel: 89 }, nat: "🇪🇬" },
    { name: "Bukayo Saka", club: "Arsenal", pos: "ED", rating: 86, rarity: "Oro", price: 400, stats: { tir: 81, reg: 87, vel: 89 }, nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },

    // EXTREMOS IZQUIERDOS (EI)
    { name: "Kylian Mbappé", club: "PSG", pos: "EI", rating: 91, rarity: "Elite", price: 800, stats: { tir: 90, reg: 92, vel: 97 }, nat: "🇫🇷" },
    { name: "Vinícius Júnior", club: "Real Madrid", pos: "EI", rating: 90, rarity: "Elite", price: 650, stats: { tir: 83, reg: 91, vel: 95 }, nat: "🇧🇷" },
    { name: "Cristiano Ronaldo", club: "Leyenda", pos: "EI", rating: 93, rarity: "Idolo", price: 850, stats: { tir: 93, vel: 88, fis: 84 }, nat: "🇵🇹" },

    // DELANTEROS
    { name: "Erling Haaland", club: "Man City", pos: "DC", rating: 91, rarity: "Elite", price: 700, stats: { tir: 93, fis: 88, vel: 89 }, nat: "🇳🇴" },
    { name: "Ronaldo Nazário", club: "Leyenda", pos: "DC", rating: 94, rarity: "Idolo", price: 950, stats: { tir: 94, reg: 95, vel: 97 }, nat: "🇧🇷" },
    { name: "Harry Kane", club: "Bayern Munich", pos: "DC", rating: 90, rarity: "Elite", price: 550, stats: { tir: 93, pas: 85, fis: 82 }, nat: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
];

const auctionPositions = ["PO", "LD", "DFC", "DFC", "LI", "MC", "MC", "MCO", "ED", "EI", "DC"];