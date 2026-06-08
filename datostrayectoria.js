const trayectoriasData = [
    { 
        clubs: ["🇦🇷 Barcelona", "🇫🇷 PSG", "🇺🇸 Inter Miami"], 
        logos: ["https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/150px-FC_Barcelona_%28crest%29.svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/150px-Paris_Saint-Germain_F.C..svg.png", "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/150px-Inter_Miami_CF_logo.svg.png"],
        ans: "Lionel Messi", 
        alias: ["messi", "lionel messi", "leo messi"] 
    },
    { 
        clubs: ["🇵🇹 Sporting CP", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇪🇸 Real Madrid", "🇮🇹 Juventus", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇸🇦 Al-Nassr"], 
        ans: "Cristiano Ronaldo", 
        alias: ["cristiano", "ronaldo", "cr7", "cristiano ronaldo"] 
    },
    { 
        clubs: ["🇦🇷 Rosario Central", "🇵🇹 Benfica", "🇪🇸 Real Madrid", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇫🇷 PSG", "🇮🇹 Juventus", "🇵🇹 Benfica"], 
        ans: "Ángel Di María", 
        alias: ["di maria", "fideo", "angel di maria"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇵🇹 Benfica", "🇪🇸 Real Madrid", "🇮🇹 Napoli", "🇮🇹 Juventus", "🇮🇹 Milan", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇺🇸 Inter Miami"], 
        ans: "Gonzalo Higuaín", 
        alias: ["higuain", "pipita", "gonzalo higuain"] 
    },
    { 
        clubs: ["🇧🇷 Santos", "🇪🇸 Barcelona", "🇫🇷 PSG", "🇸🇦 Al Hilal"], 
        ans: "Neymar Jr", 
        alias: ["neymar", "ney", "neymar jr"] 
    },
    { 
        clubs: ["🇺🇾 Nacional", "🇳🇱 Groningen", "🇳🇱 Ajax", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🇪🇸 Barcelona", "🇪🇸 Atlético de Madrid", "🇺🇾 Nacional", "🇧🇷 Gremio", "🇺🇸 Inter Miami"], 
        ans: "Luis Suárez", 
        alias: ["suarez", "lucho suarez", "luis suarez"] 
    },
    { 
        clubs: ["🇦🇷 Banfield", "🇵🇹 Porto", "🇪🇸 Real Madrid", "🇫🇷 Monaco", "🇪🇸 Real Madrid", "🇫🇷 Monaco", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Everton", "🇶🇦 Al-Rayyan", "🇬🇷 Olympiacos", "🇧🇷 Sao Paulo", "🇪🇸 Rayo Vallecano"], 
        ans: "James Rodríguez", 
        alias: ["james", "james rodriguez"] 
    },
    { 
        clubs: ["🇸🇪 Malmö FF", "🇳🇱 Ajax", "🇮🇹 Juventus", "🇮🇹 Inter", "🇪🇸 Barcelona", "🇮🇹 Milan", "🇫🇷 PSG", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇺🇸 LA Galaxy", "🇮🇹 Milan"], 
        ans: "Zlatan Ibrahimović", 
        alias: ["zlatan", "ibrahimovic", "zlatan ibrahimovic"] 
    },
    { 
        clubs: ["🇧🇷 Cruzeiro", "🇳🇱 PSV", "🇪🇸 Barcelona", "🇮🇹 Inter", "🇪🇸 Real Madrid", "🇮🇹 Milan", "🇧🇷 Corinthians"], 
        ans: "Ronaldo Nazário", 
        alias: ["ronaldo", "el fenomeno", "ronaldo nazario"] 
    },
    { 
        clubs: ["🇧🇷 Gremio", "🇫🇷 PSG", "🇪🇸 Barcelona", "🇮🇹 Milan", "🇧🇷 Flamengo", "🇧🇷 Atlético Mineiro", "🇲🇽 Querétaro", "🇧🇷 Fluminense"], 
        ans: "Ronaldinho", 
        alias: ["ronaldinho", "dinho", "ronaldinho gaucho"] 
    },
    { 
        clubs: ["🇦🇷 Boca Juniors", "🇧🇷 Corinthians", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 West Ham", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City", "🇮🇹 Juventus", "🇦🇷 Boca Juniors", "🇨🇳 Shanghai Shenhua", "🇦🇷 Boca Juniors"], 
        ans: "Carlos Tevez", 
        alias: ["tevez", "carlitos", "apache", "carlos tevez"] 
    },
    { 
        clubs: ["🇦🇷 Argentinos Jrs", "🇦🇷 Boca Juniors", "🇪🇸 Barcelona", "🇮🇹 Napoli", "🇪🇸 Sevilla", "🇦🇷 Newell's", "🇦🇷 Boca Juniors"], 
        ans: "Diego Maradona", 
        alias: ["maradona", "diego", "diego maradona", "pelusa"] 
    },
    { 
        clubs: ["🇫🇷 Caen", "🇫🇷 Leicester City", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇸🇦 Al-Ittihad"], 
        ans: "N'Golo Kanté", 
        alias: ["kante", "ngolo kante"] 
    },
    { 
        clubs: ["🇩🇪 Stuttgart", "🇩🇪 Real Madrid", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal", "🇹🇷 Fenerbahçe", "🇹🇷 Başakşehir"], 
        ans: "Mesut Özil", 
        alias: ["ozil", "mesut ozil"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇧🇷 Corinthians", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 West Ham", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🇪🇸 Barcelona", "🇦🇷 Estudiantes LP"], 
        ans: "Javier Mascherano", 
        alias: ["mascherano", "jefecito", "javier mascherano"] 
    },
    { 
        clubs: ["🇨🇴 Envigado", "🇦🇷 River Plate", "🇵🇹 Porto", "🇪🇸 Atlético de Madrid", "🇫🇷 Monaco", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇫🇷 Monaco", "🇹🇷 Galatasaray", "🇪🇸 Rayo Vallecano", "🇨🇴 Millonarios"], 
        ans: "Radamel Falcao", 
        alias: ["falcao", "el tigre", "radamel falcao"] 
    },
    { 
        clubs: ["🇨🇱 Colo-Colo", "🇩🇪 Bayer Leverkusen", "🇮🇹 Juventus", "🇩🇪 Bayern Múnich", "🇪🇸 Barcelona", "🇮🇹 Inter", "🇧🇷 Flamengo", "🇧🇷 Athletico Paranaense", "🇨🇱 Colo-Colo"], 
        ans: "Arturo Vidal", 
        alias: ["vidal", "arturo vidal", "king arturo"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇪🇸 Barcelona", "🇮🇹 Inter", "🇵🇹 Benfica", "🇪🇸 Real Madrid", "🇪🇸 Málaga", "🇬🇷 Olympiacos", "🇮🇹 Verona"], 
        ans: "Javier Saviola", 
        alias: ["saviola", "conejito saviola", "javier saviola"] 
    },
    { 
        clubs: ["🇫🇷 Mónaco", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal", "🇪🇸 Barcelona", "🇺🇸 NY Red Bulls"], 
        ans: "Thierry Henry", 
        alias: ["henry", "titi henry", "thierry henry"] 
    },
    { 
        clubs: ["🇵🇱 Znicz Pruszków", "🇵🇱 Lech Poznań", "🇩🇪 Dortmund", "🇩🇪 Bayern Múnich", "🇪🇸 Barcelona"], 
        ans: "Robert Lewandowski", 
        alias: ["lewandowski", "robert lewandowski"] 
    },
    { 
        clubs: ["🇳🇴 Bryne", "🇳🇴 Molde", "🇦🇹 RB Salzburg", "🇩🇪 Dortmund", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City"], 
        ans: "Erling Haaland", 
        alias: ["haaland", "erling haaland"] 
    },
    { 
        clubs: ["🇪🇸 Sevilla", "🇪🇸 Real Madrid", "🇫🇷 PSG", "🇪🇸 Sevilla"], 
        ans: "Sergio Ramos", 
        alias: ["ramos", "sergio ramos"] 
    },
    { 
        clubs: ["🇧🇷 São Paulo", "🇪🇸 Barcelona", "🇮🇹 Milan", "🇺🇸 Orlando City", "🇮🇹 Milan"], 
        ans: "Kaká", 
        alias: ["kaka", "ricardo kaka"] 
    },
    { 
        clubs: ["🇦🇷 Vélez", "🇶🇦 Al-Sadd", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Birmingham", "🇮🇹 Lazio", "🇮🇹 Inter", "🇮🇹 Lazio", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 West Ham", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 QPR", "🇮🇹 Fiorentina", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Watford", "🇦🇪 Al-Nasr", "🇦🇷 Vélez", "🇦🇷 Boca Juniors", "🇧🇷 América MG", "🇧🇷 Juventude", "🇦🇷 Platense", "🇮🇹 Cosenza", "🇺🇾 Danubio"], 
        ans: "Mauro Zárate", 
        alias: ["zarate", "mauro zarate"] 
    },
    { 
        clubs: ["🇷 Bahia", "🇪🇸 Sevilla", "🇪🇸 Barcelona", "🇮🇹 Juventus", "🇫🇷 PSG", "🇧🇷 São Paulo", "🇪🇸 Barcelona", "🇲🇽 UNAM"], 
        ans: "Dani Alves", 
        alias: ["dani alves", "alves"] 
    },
    { 
        clubs: ["🇺🇾 Danubio", "🇮🇹 Palermo", "🇮🇹 Napoli", "🇫🇷 PSG", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇪🇸 Valencia", "🇦🇷 Boca Juniors"], 
        ans: "Edinson Cavani", 
        alias: ["cavani", "edinson cavani", "matador"] 
    },
    { 
        clubs: ["🇮🇹 Lumezzane", "🇮🇹 Inter", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City", "🇮🇹 Milan", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🇮🇹 Milan", "🇫🇷 Nice", "🇫🇷 Marseille", "🇮🇹 Brescia", "🇮🇹 Monza", "🇹🇷 Adana Demirspor", "🇨🇭 Sion", "🇹🇷 Adana Demirspor"], 
        ans: "Mario Balotelli", 
        alias: ["balotelli", "mario balotelli", "super mario"] 
    },
    { 
        clubs: ["🇸 Real Madrid", "🇮🇹 Juventus", "🇪🇸 Real Madrid", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇪🇸 Atlético de Madrid", "🇮🇹 Juventus", "🇪🇸 Atlético de Madrid", "🇮🇹 Milan"], 
        ans: "Álvaro Morata", 
        alias: ["morata", "alvaro morata"] 
    },
    { 
        clubs: ["🇦🇷 Estudiantes LP", "🇷 Boca Juniors", "🇪🇸 Villarreal", "🇪🇸 Betis", "🇪🇸 Alavés", "🇦🇷 Boca Juniors"], 
        ans: "Martín Palermo", 
        alias: ["palermo", "martin palermo", "el titan", "loco palermo"] 
    },
    { 
        clubs: ["🇦🇷 Argentinos Jrs", "🇦🇷 Boca Juniors", "🇪🇸 Barcelona", "🇪🇸 Villarreal", "🇦🇷 Boca Juniors", "🇦🇷 Argentinos Jrs"], 
        ans: "Juan Román Riquelme", 
        alias: ["riquelme", "juan roman riquelme", "roman"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇩🇪 Wolfsburg", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Portsmouth", "🇪🇸 Zaragoza", "🇦🇷 San Lorenzo", "🇧🇷 Internacional", "🇦🇷 River Plate", "🇧🇷 Internacional", "🇺🇾 Nacional", "🇧🇷 Internacional"], 
        ans: "Andrés D'Alessandro", 
        alias: ["dalessandro", "andres dalessandro", "el cabezon"] 
    },
    { 
        clubs: ["🇦🇷 Newell's", "🇲🇽 Pumas UNAM", "🇬🇷 AEK Athens", "🇦🇪 Al Ain", "🇦🇷 Newell's", "🇧🇷 Internacional", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Sunderland", "🇦🇷 Newell's", "🇦🇷 River Plate", "🇦🇷 Newell's"], 
        ans: "Ignacio Scocco", 
        alias: ["scocco", "nacho scocco", "ignacio scocco"] 
    },
    { 
        clubs: ["🇦🇷 Vecindario", "🇪🇸 Barcelona B", "🇮🇹 Sampdoria", "🇮🇹 Inter", "🇫🇷 PSG", "🇹🇷 Galatasaray"], 
        ans: "Mauro Icardi", 
        alias: ["icardi", "mauro icardi"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇮🇹 Parma", "🇮🇹 Lazio", "🇮🇹 Inter", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇮🇹 Milan", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇮🇹 Inter", "🇮🇹 Genoa", "🇮🇹 Parma"], 
        ans: "Hernán Crespo", 
        alias: ["crespo", "hernan crespo", "valdanito"] 
    },
    { 
        clubs: ["🇦🇷 Newell's", "🇦🇷 River Plate", "🇦🇷 Boca Juniors", "🇮🇹 Fiorentina", "🇮🇹 Roma", "🇮🇹 Inter", "🇶🇦 Al-Arabi"], 
        ans: "Gabriel Batistuta", 
        alias: ["batistuta", "gabriel batistuta", "bati", "batigol"] 
    },
    { 
        clubs: ["🇷 Platense", "🇫🇷 Monaco", "🇮🇹 Juventus", "🇪🇸 Hércules", "🇦🇪 Baniyas", "🇦🇷 River Plate", "🇦🇷 Newell's", "🇮🇳 Pune City"], 
        ans: "David Trezeguet", 
        alias: ["trezeguet", "david trezeguet", "trezegol"] 
    },
    { 
        clubs: ["🇧🇷 Vitória", "🇯🇵 Kawasaki Frontale", "🇯🇵 Consadole Sapporo", "🇯🇵 Tokyo Verdy", "🇵🇹 Porto", "🇷🇺 Zenit", "🇨🇳 Shanghai SIPG", "🇧🇷 Atlético Mineiro"], 
        ans: "Hulk", 
        alias: ["hulk", "givanildo vieira de souza"] 
    },
    { 
        clubs: ["🇪🇸 Real Madrid", "🇪🇸 Leganés", "🇪🇸 Espanyol", "🇪🇸 Mallorca", "🇪🇸 Barcelona", "🇮🇹 Inter", "🇷🇺 Anzhi", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Everton", "🇮🇹 Sampdoria", "🇹🇷 Antalyaspor", "🇹🇷 Konyaspor", "🇶🇦 Qatar SC"], 
        ans: "Samuel Eto'o", 
        alias: ["etoo", "samuel etoo"] 
    },
    { 
        clubs: ["🇮🇹 Parma", "🇮🇹 Juventus", "🇫🇷 PSG", "🇮🇹 Juventus", "🇮🇹 Parma"], 
        ans: "Gianluigi Buffon", 
        alias: ["buffon", "gigi buffon", "gianluigi buffon"] 
    },
    { 
        clubs: ["🇹 Brescia", "🇮🇹 Inter", "🇮🇹 Reggina", "🇮🇹 Inter", "🇮🇹 Milan", "🇮🇹 Juventus", "🇺🇸 NYCFC"], 
        ans: "Andrea Pirlo", 
        alias: ["pirlo", "andrea pirlo", "el maestro"] 
    },
    { 
        clubs: ["🇪🇸 Barcelona", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal", "🇪🇸 Barcelona", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇫🇷 Monaco", "🇮🇹 Como"], 
        ans: "Cesc Fàbregas", 
        alias: ["fabregas", "cesc fabregas"] 
    },
    { 
        clubs: ["🇷🇸 Red Star Belgrade", "🇩🇪 Eintracht Frankfurt", "🇪🇸 Real Madrid", "🇩🇪 Eintracht Frankfurt", "🇮🇹 Fiorentina", "🇮🇹 Milan"], 
        ans: "Luka Jović", 
        alias: ["jovic", "luka jovic"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 Leeds United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Swindon Town", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Newcastle", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Aston Villa", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Brighton"], 
        ans: "James Milner", 
        alias: ["milner", "james milner"] 
    },
    { 
        clubs: ["🇪🇸 Villarreal", "🇪🇸 Recreativo", "🇪🇸 Villarreal", "🇪🇸 Málaga", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal", "🇪🇸 Villarreal", "🇶🇦 Al-Sadd", "🇪🇸 Real Oviedo"], 
        ans: "Santi Cazorla", 
        alias: ["cazorla", "santi cazorla"] 
    },
    { 
        clubs: ["🇦🇷 Banfield", "🇪🇸 Real Murcia", "🇦🇷 Banfield", "🇦🇷 Independiente", "🇳🇱 Ajax", "🇫🇷 Lyon"], 
        ans: "Nicolás Tagliafico", 
        alias: ["tagliafico", "nico tagliafico", "nicolas tagliafico"] 
    },
    { 
        clubs: ["🇦🇷 Argentinos Jrs", "🇦🇷 Boca Juniors", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Brighton", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool"], 
        ans: "Alexis Mac Allister", 
        alias: ["mac allister", "alexis mac allister"] 
    },
    { 
        clubs: ["🇦🇷 Belgrano", "🇮🇹 Genoa", "🇮🇹 Juventus", "🇮🇹 Atalanta", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Tottenham"], 
        ans: "Cristian Romero", 
        alias: ["romero", "cuti", "cuti romero", "cristian romero"] 
    },
    { 
        clubs: ["🇮🇹 Milan"], 
        ans: "Paolo Maldini", 
        alias: ["maldini", "paolo maldini", "il capitano"] 
    },
    { 
        clubs: ["🇮🇹 Roma"], 
        ans: "Francesco Totti", 
        alias: ["totti", "francesco totti", "il gladiatore"] 
    },
    { 
        clubs: ["🇮🇹 Padova", "🇮🇹 Juventus", "🇦🇺 Sydney FC", "🇮🇳 Delhi Dynamos"], 
        ans: "Alessandro Del Piero", 
        alias: ["del piero", "alessandro del piero", "pinturicchio"] 
    },
    { 
        clubs: ["🇧🇷 Uniao Sao Joao", "🇧🇷 Palmeiras", "🇮🇹 Inter", "🇪🇸 Real Madrid", "🇹🇷 Fenerbahçe", "🇧🇷 Corinthians", "🇷🇺 Anzhi", "🇮🇳 Delhi Dynamos"], 
        ans: "Roberto Carlos", 
        alias: ["roberto carlos"] 
    },
    { 
        clubs: ["🇧🇷 Sao Paulo", "🇪🇸 Zaragoza", "🇧🇷 Juventude", "🇧🇷 Palmeiras", "🇮🇹 Roma", "🇮🇹 Milan"], 
        ans: "Cafu", 
        alias: ["cafu", "marcos evangelista de moraes"] 
    },
    { 
        clubs: ["🇧🇷 Santa Cruz", "🇧🇷 Mogi Mirim", "🇧🇷 Corinthians", "🇧🇷 Palmeiras", "🇪🇸 Deportivo", "🇪🇸 Barcelona", "🇮🇹 Milan", "🇧🇷 Cruzeiro", "🇬🇷 Olympiacos", "🇬🇷 AEK Athens", "🇺🇿 Bunyodkor", "🇧🇷 Sao Paulo", "🇦🇴 Kabuscorp", "🇧🇷 Sao Caetano", "🇧🇷 Mogi Mirim"], 
        ans: "Rivaldo", 
        alias: ["rivaldo", "vitor borba ferreira"] 
    },
    { 
        clubs: ["🇧🇷 Vasco da Gama", "🇳🇱 PSV", "🇪🇸 Barcelona", "🇧🇷 Flamengo", "🇪🇸 Valencia", "🇧🇷 Fluminense", "🇶🇦 Al-Sadd", "🇺🇸 Miami FC", "🇦🇺 Adelaide United"], 
        ans: "Romário", 
        alias: ["romario", "baixinho"] 
    },
    { 
        clubs: ["🇮🇹 Vicenza", "🇮🇹 Fiorentina", "🇮🇹 Juventus", "🇮🇹 Milan", "🇮🇹 Bologna", "🇮🇹 Inter", "🇮🇹 Brescia"], 
        ans: "Roberto Baggio", 
        alias: ["baggio", "roberto baggio", "codino"] 
    },
    { 
        clubs: ["🇳🇱 Haarlem", "🇳🇱 Feyenoord", "🇳🇱 PSV", "🇮🇹 Milan", "🇮🇹 Sampdoria", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea"], 
        ans: "Ruud Gullit", 
        alias: ["gullit", "ruud gullit"] 
    },
    { 
        clubs: ["🇳🇱 Ajax", "🇮🇹 Milan"], 
        ans: "Marco van Basten", 
        alias: ["van basten", "marco van basten"] 
    },
    { 
        clubs: ["🇮🇹 Milan"], 
        ans: "Franco Baresi", 
        alias: ["baresi", "franco baresi"] 
    },
    { 
        clubs: ["🇩🇪 Gladbach", "🇩🇪 Bayern Múnich", "🇮🇹 Inter", "🇩🇪 Bayern Múnich", "🇺🇸 MetroStars"], 
        ans: "Lothar Matthäus", 
        alias: ["matthaus", "lothar matthaus"] 
    },
    { 
        clubs: ["🇫🇷 Nancy", "🇫🇷 Saint-Étienne", "🇮🇹 Juventus"], 
        ans: "Michel Platini", 
        alias: ["platini", "michel platini"] 
    },
    { 
        clubs: ["🇧🇷 Botafogo-SP", "🇧🇷 Corinthians", "🇮🇹 Fiorentina", "🇧🇷 Flamengo", "🇧🇷 Santos", "🇧🇷 Botafogo-SP"], 
        ans: "Sócrates", 
        alias: ["socrates"] 
    },
    { 
        clubs: ["🇧🇷 Flamengo", "🇮🇹 Udinese", "🇧🇷 Flamengo", "🇯🇵 Kashima Antlers"], 
        ans: "Zico", 
        alias: ["zico", "arthur antunes coimbra"] 
    },
    { 
        clubs: ["🇲🇽 Pumas UNAM", "🇺🇸 San Diego Sockers", "🇪🇸 Atlético de Madrid", "🇪🇸 Real Madrid", "🇲🇽 América", "🇪🇸 Rayo Vallecano", "🇲🇽 Atlante", "🇦🇹 LASK Linz", "🇺🇸 Dallas Burn", "🇲🇽 Atlético Celaya"], 
        ans: "Hugo Sánchez", 
        alias: ["hugo sanchez", "hugol"] 
    },
    { 
        clubs: ["🇺🇾 Wanderers", "🇦🇷 River Plate", "🇫🇷 Racing Paris", "🇫🇷 Marseille", "🇮🇹 Cagliari", "🇮🇹 Torino", "🇦🇷 River Plate"], 
        ans: "Enzo Francescoli", 
        alias: ["francescoli", "enzo francescoli", "el principe"] 
    },
    { 
        clubs: ["🇦🇷 Newell's", "🇪🇸 Alavés", "🇪🇸 Zaragoza", "🇪🇸 Real Madrid"], 
        ans: "Jorge Valdano", 
        alias: ["valdano", "jorge valdano"] 
    },
    { 
        clubs: ["🇦🇷 Boca Juniors", "🇦🇷 River Plate", "🇪🇸 Logroñés", "🇪🇸 Real Madrid", "🇦🇷 Vélez Sarsfield", "🇮🇹 Ancona", "🇲🇽 América", "🇦🇷 San Lorenzo", "🇦🇷 Lanús"], 
        ans: "Oscar Ruggeri", 
        alias: ["ruggeri", "oscar ruggeri", "el cabezon"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇮🇹 Hellas Verona", "🇮🇹 Atalanta", "🇮🇹 Roma", "🇵🇹 Benfica", "🇦🇷 Boca Juniors", "🇮🇹 Atalanta", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Dundee FC", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Rangers", "🇶🇦 Qatar SC"], 
        ans: "Claudio Caniggia", 
        alias: ["caniggia", "claudio caniggia", "el pajaro"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇪🇸 Valencia", "🇮🇹 Sampdoria", "🇮🇹 Parma", "🇦🇷 River Plate", "🇹🇷 Fenerbahçe", "🇦🇷 Newell's", "🇦🇷 River Plate", "🇦🇷 Independiente Rivadavia", "🇦🇷 All Boys", "🇦🇷 Defensores de Belgrano"], 
        ans: "Ariel Ortega", 
        alias: ["ortega", "ariel ortega", "el burrito"] 
    },
    { 
        clubs: ["🇦🇷 Estudiantes LP", "🇦🇷 Boca Juniors", "🇮🇹 Sampdoria", "🇮🇹 Parma", "🇮🇹 Lazio", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇮🇹 Inter", "🇦🇷 Estudiantes LP"], 
        ans: "Juan Sebastián Verón", 
        alias: ["veron", "juan sebastian veron", "la brujita"] 
    },
    { 
        clubs: ["🇪🇸 Real Madrid B", "🇦🇷 Independiente", "🇦🇷 River Plate", "🇪🇸 Real Madrid", "🇮🇹 Inter", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Leicester City", "🇬🇷 Olympiacos"], 
        ans: "Esteban Cambiasso", 
        alias: ["cambiasso", "esteban cambiasso", "cuchu"] 
    },
    { 
        clubs: ["🇦🇷 Talleres RE", "🇦🇷 Banfield", "🇮🇹 Inter"], 
        ans: "Javier Zanetti", 
        alias: ["zanetti", "javier zanetti", "pupi"] 
    },
    { 
        clubs: ["🇦🇷 Ferro Carril Oeste", "🇦🇷 River Plate", "🇮🇹 Napoli", "🇮🇹 Milan", "🇪🇸 Valencia", "🇪🇸 Villarreal", "🇪🇸 Zaragoza", "🇦🇷 Racing Club"], 
        ans: "Roberto Ayala", 
        alias: ["ayala", "roberto ayala", "el raton"] 
    },
    { 
        clubs: ["🇦🇷 Newell's", "🇦🇷 Boca Juniors", "🇮🇹 Roma", "🇪🇸 Real Madrid", "🇮🇹 Inter", "🇨🇭 Basel"], 
        ans: "Walter Samuel", 
        alias: ["samuel", "walter samuel", "el muro"] 
    },
    { 
        clubs: ["🇦🇷 Independiente", "🇪🇸 Zaragoza", "🇪🇸 Barcelona", "🇦🇷 Independiente"], 
        ans: "Gabriel Milito", 
        alias: ["milito", "gabriel milito", "el mariscal"] 
    },
    { 
        clubs: ["🇦🇷 River Plate", "🇪🇸 Valencia", "🇪🇸 Zaragoza", "🇵🇹 Benfica", "🇲🇾 Johor Darul Ta'zim", "🇦🇷 River Plate"], 
        ans: "Pablo Aimar", 
        alias: ["aimar", "pablo aimar", "el payaso"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Preston North End", "🇪🇸 Real Madrid", "🇺🇸 LA Galaxy", "🇮🇹 Milan", "🇫🇷 PSG"], 
        ans: "David Beckham", 
        alias: ["beckham", "david beckham"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🇪🇸 Real Madrid", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Newcastle", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Stoke City"], 
        ans: "Michael Owen", 
        alias: ["owen", "michael owen"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 Liverpool", "🇺🇸 LA Galaxy"], 
        ans: "Steven Gerrard", 
        alias: ["gerrard", "steven gerrard", "stevie g"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 West Ham", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Swansea City", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City", "🇺🇸 NYCFC"], 
        ans: "Frank Lampard", 
        alias: ["lampard", "frank lampard"] 
    },
    { 
        clubs: ["🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United"], 
        ans: "Paul Scholes", 
        alias: ["scholes", "paul scholes"] 
    },
    { 
        clubs: ["🇳🇱 Ajax", "🇮🇹 Sampdoria", "🇪🇸 Real Madrid", "🇮🇹 Inter", "🇮🇹 Milan", "🇧🇷 Botafogo"], 
        ans: "Clarence Seedorf", 
        alias: ["seedorf", "clarence seedorf"] 
    },
    { 
        clubs: ["🇳🇱 Ajax", "🇮🇹 Milan", "🇮🇹 Juventus", "🇪🇸 Barcelona", "🇮🇹 Inter", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Tottenham", "🇳🇱 Ajax", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Crystal Palace", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Barnet FC"], 
        ans: "Edgar Davids", 
        alias: ["davids", "edgar davids", "el pitbull"] 
    },
    { 
        clubs: ["🇧🇷 Corinthians", "🇵🇹 Alverca", "🇵🇹 Salgueiros", "🇵🇹 Porto", "🇪🇸 Barcelona", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇧🇷 Fluminense"], 
        ans: "Deco", 
        alias: ["deco", "anderson luis de souza"] 
    },
    { 
        clubs: ["🇵🇹 Sporting CP", "🇪🇸 Barcelona", "🇪🇸 Real Madrid", "🇮🇹 Inter"], 
        ans: "Luís Figo", 
        alias: ["figo", "luis figo"] 
    },
    { 
        clubs: ["🇫🇷 Cannes", "🇮🇹 Milan", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal", "🇮🇹 Juventus", "🇮🇹 Inter", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City"], 
        ans: "Patrick Vieira", 
        alias: ["vieira", "patrick vieira"] 
    },
    { 
        clubs: ["🇫🇷 Brest", "🇫🇷 Nantes", "🇫🇷 Marseille", "🇪🇸 Celta de Vigo", "🇪🇸 Real Madrid", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇫🇷 PSG"], 
        ans: "Claude Makélélé", 
        alias: ["makelele", "claude makelele"] 
    },
    { 
        clubs: ["🇩🇪 Chemnitzer FC", "🇩🇪 Kaiserslautern", "🇩🇪 Bayer Leverkusen", "🇩🇪 Bayern Múnich", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🇩🇪 Bayer Leverkusen"], 
        ans: "Michael Ballack", 
        alias: ["ballack", "michael ballack"] 
    },
    { 
        clubs: ["🇩🇪 Karlsruher SC", "🇩🇪 Bayern Múnich"], 
        ans: "Oliver Kahn", 
        alias: ["kahn", "oliver kahn", "el titan"] 
    },
    { 
        clubs: ["🇩🇰 Gladsaxe-Hero", "🇩🇰 Hvidovre", "🇩🇰 Brøndby", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United", "🇵🇹 Sporting CP", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Aston Villa", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester City"], 
        ans: "Peter Schmeichel", 
        alias: ["schmeichel", "peter schmeichel"] 
    },
    { 
        clubs: ["🇳🇱 Ajax", "🇮🇹 Juventus", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Fulham", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Manchester United"], 
        ans: "Edwin van der Sar", 
        alias: ["van der sar", "edwin van der sar"] 
    },
    { 
        clubs: ["🇨🇿 Blšany", "🇨🇿 Sparta Prague", "🇫🇷 Rennes", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Chelsea", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Arsenal"], 
        ans: "Petr Čech", 
        alias: ["cech", "petr cech"] 
    },
    { 
        clubs: ["🇪🇸 Real Madrid", "🇵🇹 Porto"], 
        ans: "Iker Casillas", 
        alias: ["casillas", "iker casillas", "san iker"] 
    },
    { 
        clubs: ["🇪🇸 Barcelona", "🇶🇦 Al-Sadd"], 
        ans: "Xavi Hernández", 
        alias: ["xavi", "xavi hernandez"] 
    },
    { 
        clubs: ["🇪🇸 Barcelona", "🇯🇵 Vissel Kobe", "🇦🇪 Emirates Club"], 
        ans: "Andrés Iniesta", 
        alias: ["iniesta", "andres iniesta", "el cerebro"] 
    },
    { 
        clubs: ["🇪🇸 Barcelona"], 
        ans: "Carles Puyol", 
        alias: ["puyol", "carles puyol", "tarzan"] 
    },
    { 
        clubs: ["🇮🇹 Lazio", "🇮🇹 Milan", "🇨🇦 Montreal Impact", "🇮🇳 Chennaiyin FC"], 
        ans: "Alessandro Nesta", 
        alias: ["nesta", "alessandro nesta"] 
    },
    { 
        clubs: ["🇮🇹 Piacenza", "🇮🇹 Leffe", "🇮🇹 Hellas Verona", "🇮🇹 Parma", "🇮🇹 Atalanta", "🇮🇹 Juventus", "🇮🇹 Milan"], 
        ans: "Filippo Inzaghi", 
        alias: ["inzaghi", "filippo inzaghi", "pippo"] 
    },
    { 
        clubs: ["🇮🇹 Torino", "🇮🇹 Pisa", "🇮🇹 Ravenna", "🇮🇹 Venezia", "🇮🇹 Atalanta", "🇮🇹 Juventus", "🇪🇸 Atlético de Madrid", "🇮🇹 Lazio", "🇮🇹 Inter", "🇮🇹 Milan", "🇫🇷 Monaco", "🇮🇹 Sampdoria", "🇮🇹 Atalanta", "🇮🇹 Fiorentina", "🇮🇹 Atalanta"], 
        ans: "Christian Vieri", 
        alias: ["vieri", "christian vieri", "bobo"] 
    },
    { 
        clubs: ["🇮🇹 Napoli", "🇮🇹 Parma", "🇮🇹 Inter", "🇮🇹 Juventus", "🇪🇸 Real Madrid", "🇮🇹 Juventus", "🇦🇪 Al-Ahli"], 
        ans: "Fabio Cannavaro", 
        alias: ["cannavaro", "fabio cannavaro"] 
    },
    { 
        clubs: ["🇨🇿 Dukla Prague", "🇮🇹 Lazio", "🇮🇹 Juventus"], 
        ans: "Pavel Nedvěd", 
        alias: ["nedved", "pavel nedved"] 
    }
];