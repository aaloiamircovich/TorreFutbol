const careerLeagueDatabase = [
  {
    id: "laliga",
    name: "LaLiga",
    country: "Espana",
    level: 5,
    teams: [
      {
        name: "Real Madrid",
        transfermarkt: "https://www.transfermarkt.com/real-madrid/kader/verein/418",
        rep: 96,
        salary: 185,
        players: [
          { name: "Kylian Mbappe", pos: "DC", rating: 92, nat: "Francia" },
          { name: "Vinicius Junior", pos: "EI", rating: 91, nat: "Brasil" },
          { name: "Jude Bellingham", pos: "MCO", rating: 91, nat: "Inglaterra" },
          { name: "Federico Valverde", pos: "MC", rating: 89, nat: "Uruguay" },
          { name: "Thibaut Courtois", pos: "POR", rating: 89, nat: "Belgica" },
          { name: "Trent Alexander-Arnold", pos: "LD", rating: 87, nat: "Inglaterra" }
        ]
      },
      {
        name: "Barcelona",
        transfermarkt: "https://www.transfermarkt.com/fc-barcelona/kader/verein/131",
        rep: 94,
        salary: 165,
        players: [
          { name: "Lamine Yamal", pos: "ED", rating: 90, nat: "Espana" },
          { name: "Pedri", pos: "MC", rating: 89, nat: "Espana" },
          { name: "Frenkie de Jong", pos: "MC", rating: 87, nat: "Paises Bajos" },
          { name: "Pau Cubarsi", pos: "DFC", rating: 86, nat: "Espana" },
          { name: "Raphinha", pos: "ED", rating: 86, nat: "Brasil" }
        ]
      },
      {
        name: "Atletico de Madrid",
        rep: 88,
        salary: 118,
        players: [
          { name: "Julian Alvarez", pos: "DC", rating: 88, nat: "Argentina" },
          { name: "Jan Oblak", pos: "POR", rating: 87, nat: "Eslovenia" },
          { name: "Antoine Griezmann", pos: "MCO", rating: 86, nat: "Francia" },
          { name: "Pablo Barrios", pos: "MC", rating: 82, nat: "Espana" }
        ]
      },
      {
        name: "Villarreal",
        rep: 78,
        salary: 54,
        players: [
          { name: "Ayoze Perez", pos: "DC", rating: 82, nat: "Espana" },
          { name: "Alex Baena", pos: "MCO", rating: 84, nat: "Espana" },
          { name: "Yeremy Pino", pos: "ED", rating: 81, nat: "Espana" },
          { name: "Pape Gueye", pos: "MC", rating: 79, nat: "Senegal" }
        ]
      }
    ]
  },
  {
    id: "premier-league",
    name: "Premier League",
    country: "Inglaterra",
    level: 5,
    teams: [
      {
        name: "Manchester City",
        transfermarkt: "https://www.transfermarkt.com/manchester-city/kader/verein/281",
        rep: 95,
        salary: 180,
        players: [
          { name: "Erling Haaland", pos: "DC", rating: 92, nat: "Noruega" },
          { name: "Phil Foden", pos: "MCO", rating: 88, nat: "Inglaterra" },
          { name: "Ruben Dias", pos: "DFC", rating: 88, nat: "Portugal" },
          { name: "Josko Gvardiol", pos: "DFC", rating: 87, nat: "Croacia" },
          { name: "Gianluigi Donnarumma", pos: "POR", rating: 88, nat: "Italia" }
        ]
      },
      {
        name: "Liverpool",
        rep: 93,
        salary: 160,
        players: [
          { name: "Mohamed Salah", pos: "ED", rating: 90, nat: "Egipto" },
          { name: "Virgil van Dijk", pos: "DFC", rating: 89, nat: "Paises Bajos" },
          { name: "Alisson Becker", pos: "POR", rating: 89, nat: "Brasil" },
          { name: "Dominik Szoboszlai", pos: "MCO", rating: 84, nat: "Hungria" }
        ]
      },
      {
        name: "Arsenal",
        rep: 91,
        salary: 150,
        players: [
          { name: "Bukayo Saka", pos: "ED", rating: 88, nat: "Inglaterra" },
          { name: "Declan Rice", pos: "MC", rating: 88, nat: "Inglaterra" },
          { name: "Martin Odegaard", pos: "MCO", rating: 87, nat: "Noruega" },
          { name: "William Saliba", pos: "DFC", rating: 87, nat: "Francia" }
        ]
      },
      {
        name: "Chelsea",
        rep: 86,
        salary: 125,
        players: [
          { name: "Cole Palmer", pos: "MCO", rating: 88, nat: "Inglaterra" },
          { name: "Enzo Fernandez", pos: "MC", rating: 85, nat: "Argentina" },
          { name: "Moises Caicedo", pos: "MC", rating: 85, nat: "Ecuador" },
          { name: "Reece James", pos: "LD", rating: 83, nat: "Inglaterra" }
        ]
      }
    ]
  },
  {
    id: "serie-a",
    name: "Serie A",
    country: "Italia",
    level: 4,
    teams: [
      {
        name: "Inter",
        rep: 90,
        salary: 120,
        players: [
          { name: "Lautaro Martinez", pos: "DC", rating: 89, nat: "Argentina" },
          { name: "Nicolo Barella", pos: "MC", rating: 87, nat: "Italia" },
          { name: "Alessandro Bastoni", pos: "DFC", rating: 86, nat: "Italia" },
          { name: "Hakan Calhanoglu", pos: "MC", rating: 85, nat: "Turquia" }
        ]
      },
      {
        name: "Milan",
        rep: 88,
        salary: 105,
        players: [
          { name: "Rafael Leao", pos: "EI", rating: 87, nat: "Portugal" },
          { name: "Mike Maignan", pos: "POR", rating: 86, nat: "Francia" },
          { name: "Theo Hernandez", pos: "LI", rating: 85, nat: "Francia" },
          { name: "Christian Pulisic", pos: "ED", rating: 84, nat: "Estados Unidos" }
        ]
      },
      {
        name: "Napoli",
        transfermarkt: "https://www.transfermarkt.com/ssc-neapel/kader/verein/6195",
        rep: 88,
        salary: 112,
        players: [
          { name: "Kevin De Bruyne", pos: "MCO", rating: 89, nat: "Belgica" },
          { name: "Alessandro Buongiorno", pos: "DFC", rating: 84, nat: "Italia" },
          { name: "Alex Meret", pos: "POR", rating: 82, nat: "Italia" },
          { name: "Matteo Politano", pos: "ED", rating: 82, nat: "Italia" }
        ]
      },
      {
        name: "Juventus",
        rep: 87,
        salary: 105,
        players: [
          { name: "Dusan Vlahovic", pos: "DC", rating: 85, nat: "Serbia" },
          { name: "Kenan Yildiz", pos: "EI", rating: 84, nat: "Turquia" },
          { name: "Gleison Bremer", pos: "DFC", rating: 85, nat: "Brasil" },
          { name: "Manuel Locatelli", pos: "MC", rating: 82, nat: "Italia" }
        ]
      }
    ]
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    country: "Alemania",
    level: 4,
    teams: [
      {
        name: "Bayern Munich",
        rep: 93,
        salary: 155,
        players: [
          { name: "Harry Kane", pos: "DC", rating: 90, nat: "Inglaterra" },
          { name: "Jamal Musiala", pos: "MCO", rating: 89, nat: "Alemania" },
          { name: "Joshua Kimmich", pos: "MC", rating: 87, nat: "Alemania" },
          { name: "Alphonso Davies", pos: "LI", rating: 84, nat: "Canada" }
        ]
      },
      {
        name: "Dortmund",
        rep: 85,
        salary: 92,
        players: [
          { name: "Karim Adeyemi", pos: "EI", rating: 83, nat: "Alemania" },
          { name: "Julian Brandt", pos: "MCO", rating: 83, nat: "Alemania" },
          { name: "Gregor Kobel", pos: "POR", rating: 85, nat: "Suiza" },
          { name: "Nico Schlotterbeck", pos: "DFC", rating: 84, nat: "Alemania" }
        ]
      },
      {
        name: "Bayer Leverkusen",
        rep: 86,
        salary: 94,
        players: [
          { name: "Florian Wirtz", pos: "MCO", rating: 90, nat: "Alemania" },
          { name: "Granit Xhaka", pos: "MC", rating: 84, nat: "Suiza" },
          { name: "Patrik Schick", pos: "DC", rating: 84, nat: "Republica Checa" },
          { name: "Alejandro Grimaldo", pos: "LI", rating: 84, nat: "Espana" }
        ]
      },
      {
        name: "Wolfsburg",
        rep: 76,
        salary: 48,
        players: [
          { name: "Jonas Wind", pos: "DC", rating: 80, nat: "Dinamarca" },
          { name: "Maximilian Arnold", pos: "MC", rating: 80, nat: "Alemania" },
          { name: "Kamil Grabara", pos: "POR", rating: 80, nat: "Polonia" },
          { name: "Ridle Baku", pos: "LD", rating: 79, nat: "Alemania" }
        ]
      }
    ]
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    country: "Francia",
    level: 4,
    teams: [
      {
        name: "PSG",
        rep: 92,
        salary: 145,
        players: [
          { name: "Ousmane Dembele", pos: "ED", rating: 89, nat: "Francia" },
          { name: "Achraf Hakimi", pos: "LD", rating: 86, nat: "Marruecos" },
          { name: "Vitinha", pos: "MC", rating: 86, nat: "Portugal" },
          { name: "Marquinhos", pos: "DFC", rating: 85, nat: "Brasil" }
        ]
      },
      {
        name: "Marseille",
        rep: 81,
        salary: 65,
        players: [
          { name: "Pierre-Emile Hojbjerg", pos: "MC", rating: 82, nat: "Dinamarca" },
          { name: "Mason Greenwood", pos: "ED", rating: 82, nat: "Inglaterra" },
          { name: "Leonardo Balerdi", pos: "DFC", rating: 80, nat: "Argentina" },
          { name: "Geronimo Rulli", pos: "POR", rating: 80, nat: "Argentina" }
        ]
      },
      {
        name: "Monaco",
        rep: 81,
        salary: 66,
        players: [
          { name: "Aleksandr Golovin", pos: "MCO", rating: 82, nat: "Rusia" },
          { name: "Denis Zakaria", pos: "MC", rating: 81, nat: "Suiza" },
          { name: "Vanderson", pos: "LD", rating: 80, nat: "Brasil" },
          { name: "Folarin Balogun", pos: "DC", rating: 80, nat: "Estados Unidos" }
        ]
      },
      {
        name: "Lyon",
        rep: 78,
        salary: 52,
        players: [
          { name: "Alexandre Lacazette", pos: "DC", rating: 82, nat: "Francia" },
          { name: "Corentin Tolisso", pos: "MC", rating: 80, nat: "Francia" },
          { name: "Rayan Cherki", pos: "MCO", rating: 82, nat: "Francia" },
          { name: "Moussa Niakhate", pos: "DFC", rating: 79, nat: "Senegal" }
        ]
      }
    ]
  },
  {
    id: "primeira-liga",
    name: "Liga Portugal",
    country: "Portugal",
    level: 3,
    teams: [
      {
        name: "Benfica",
        rep: 84,
        salary: 70,
        players: [
          { name: "Anatoliy Trubin", pos: "POR", rating: 82, nat: "Ucrania" },
          { name: "Antonio Silva", pos: "DFC", rating: 82, nat: "Portugal" },
          { name: "Orkun Kokcu", pos: "MC", rating: 82, nat: "Turquia" },
          { name: "Vangelis Pavlidis", pos: "DC", rating: 81, nat: "Grecia" }
        ]
      },
      {
        name: "Porto",
        rep: 83,
        salary: 68,
        players: [
          { name: "Diogo Costa", pos: "POR", rating: 84, nat: "Portugal" },
          { name: "Pepe", pos: "DFC", rating: 82, nat: "Portugal" },
          { name: "Alan Varela", pos: "MC", rating: 81, nat: "Argentina" },
          { name: "Samu Omorodion", pos: "DC", rating: 82, nat: "Espana" }
        ]
      },
      {
        name: "Sporting CP",
        rep: 84,
        salary: 72,
        players: [
          { name: "Viktor Gyokeres", pos: "DC", rating: 88, nat: "Suecia" },
          { name: "Morten Hjulmand", pos: "MC", rating: 82, nat: "Dinamarca" },
          { name: "Goncalo Inacio", pos: "DFC", rating: 82, nat: "Portugal" },
          { name: "Pedro Goncalves", pos: "MCO", rating: 83, nat: "Portugal" }
        ]
      },
      {
        name: "Braga",
        rep: 76,
        salary: 38,
        players: [
          { name: "Ricardo Horta", pos: "EI", rating: 81, nat: "Portugal" },
          { name: "Bruma", pos: "EI", rating: 80, nat: "Portugal" },
          { name: "Matheus", pos: "POR", rating: 79, nat: "Brasil" },
          { name: "Vitor Carvalho", pos: "MC", rating: 78, nat: "Brasil" }
        ]
      }
    ]
  },
  {
    id: "saudi-pro-league",
    name: "Saudi Pro League",
    country: "Arabia Saudita",
    level: 4,
    teams: [
      {
        name: "Al Hilal",
        transfermarkt: "https://www.transfermarkt.com/al-hilal-riad/kader/verein/1114",
        rep: 84,
        salary: 115,
        players: [
          { name: "Yassine Bounou", pos: "POR", rating: 84, nat: "Marruecos" },
          { name: "Kalidou Koulibaly", pos: "DFC", rating: 83, nat: "Senegal" },
          { name: "Ruben Neves", pos: "MC", rating: 84, nat: "Portugal" },
          { name: "Sergej Milinkovic-Savic", pos: "MC", rating: 85, nat: "Serbia" },
          { name: "Aleksandar Mitrovic", pos: "DC", rating: 84, nat: "Serbia" }
        ]
      },
      {
        name: "Al Nassr",
        transfermarkt: "https://www.transfermarkt.com/al-nassr-fc/kader/verein/18544",
        rep: 83,
        salary: 110,
        players: [
          { name: "Cristiano Ronaldo", pos: "DC", rating: 88, nat: "Portugal" },
          { name: "Sadio Mane", pos: "EI", rating: 85, nat: "Senegal" },
          { name: "Marcelo Brozovic", pos: "MC", rating: 84, nat: "Croacia" },
          { name: "Bento", pos: "POR", rating: 82, nat: "Brasil" }
        ]
      },
      {
        name: "Al Ittihad",
        rep: 82,
        salary: 102,
        players: [
          { name: "Karim Benzema", pos: "DC", rating: 86, nat: "Francia" },
          { name: "N'Golo Kante", pos: "MC", rating: 85, nat: "Francia" },
          { name: "Fabinho", pos: "MC", rating: 83, nat: "Brasil" },
          { name: "Predrag Rajkovic", pos: "POR", rating: 81, nat: "Serbia" }
        ]
      },
      {
        name: "Al Ahli",
        rep: 82,
        salary: 98,
        players: [
          { name: "Riyad Mahrez", pos: "ED", rating: 85, nat: "Argelia" },
          { name: "Ivan Toney", pos: "DC", rating: 84, nat: "Inglaterra" },
          { name: "Franck Kessie", pos: "MC", rating: 83, nat: "Costa de Marfil" },
          { name: "Edouard Mendy", pos: "POR", rating: 82, nat: "Senegal" }
        ]
      }
    ]
  },
  {
    id: "argentina",
    name: "Liga Profesional Argentina",
    country: "Argentina",
    level: 3,
    teams: [
      {
        name: "Boca Juniors",
        transfermarkt: "https://www.transfermarkt.com/ca-boca-juniors/kader/verein/189",
        rep: 78,
        salary: 36,
        players: [
          { name: "Leandro Brey", pos: "POR", rating: 76, nat: "Argentina" },
          { name: "Kevin Zenon", pos: "EI", rating: 78, nat: "Argentina" },
          { name: "Milton Gimenez", pos: "DC", rating: 76, nat: "Argentina" },
          { name: "Edinson Cavani", pos: "DC", rating: 80, nat: "Uruguay" }
        ]
      },
      {
        name: "River Plate",
        rep: 80,
        salary: 42,
        players: [
          { name: "Franco Mastantuono", pos: "MCO", rating: 80, nat: "Argentina" },
          { name: "Miguel Borja", pos: "DC", rating: 79, nat: "Colombia" },
          { name: "Maximiliano Meza", pos: "MCO", rating: 77, nat: "Argentina" },
          { name: "Franco Armani", pos: "POR", rating: 78, nat: "Argentina" }
        ]
      },
      {
        name: "Racing Club",
        rep: 74,
        salary: 30,
        players: [
          { name: "Adrian Martinez", pos: "DC", rating: 78, nat: "Argentina" },
          { name: "Juan Nardoni", pos: "MC", rating: 76, nat: "Argentina" },
          { name: "Gabriel Arias", pos: "POR", rating: 76, nat: "Chile" },
          { name: "Santiago Sosa", pos: "MC", rating: 77, nat: "Argentina" }
        ]
      },
      {
        name: "San Lorenzo",
        rep: 70,
        salary: 24,
        players: [
          { name: "Ezequiel Cerutti", pos: "ED", rating: 73, nat: "Argentina" },
          { name: "Malcom Braida", pos: "LI", rating: 75, nat: "Argentina" },
          { name: "Iker Muniain", pos: "MCO", rating: 78, nat: "Espana" },
          { name: "Facundo Altamirano", pos: "POR", rating: 73, nat: "Argentina" }
        ]
      }
    ]
  },
  {
    id: "brasileirao",
    name: "Brasileirao Serie A",
    country: "Brasil",
    level: 3,
    teams: [
      {
        name: "Flamengo",
        transfermarkt: "https://www.transfermarkt.com/flamengo-rio-de-janeiro/kader/verein/614",
        rep: 83,
        salary: 58,
        players: [
          { name: "Agustin Rossi", pos: "POR", rating: 81, nat: "Argentina" },
          { name: "Giorgian de Arrascaeta", pos: "MCO", rating: 84, nat: "Uruguay" },
          { name: "Pedro", pos: "DC", rating: 82, nat: "Brasil" },
          { name: "Gerson", pos: "MC", rating: 82, nat: "Brasil" }
        ]
      },
      {
        name: "Palmeiras",
        rep: 82,
        salary: 55,
        players: [
          { name: "Weverton", pos: "POR", rating: 80, nat: "Brasil" },
          { name: "Gustavo Gomez", pos: "DFC", rating: 82, nat: "Paraguay" },
          { name: "Raphael Veiga", pos: "MCO", rating: 82, nat: "Brasil" },
          { name: "Estevao", pos: "ED", rating: 82, nat: "Brasil" }
        ]
      },
      {
        name: "Santos",
        rep: 76,
        salary: 35,
        players: [
          { name: "Neymar Jr", pos: "EI", rating: 86, nat: "Brasil" },
          { name: "Tiquinho Soares", pos: "DC", rating: 79, nat: "Brasil" },
          { name: "Guilherme", pos: "EI", rating: 76, nat: "Brasil" },
          { name: "Joao Paulo", pos: "POR", rating: 76, nat: "Brasil" }
        ]
      },
      {
        name: "Sao Paulo",
        rep: 77,
        salary: 40,
        players: [
          { name: "Lucas Moura", pos: "MCO", rating: 80, nat: "Brasil" },
          { name: "Jonathan Calleri", pos: "DC", rating: 80, nat: "Argentina" },
          { name: "Rafael", pos: "POR", rating: 78, nat: "Brasil" },
          { name: "Oscar", pos: "MCO", rating: 80, nat: "Brasil" }
        ]
      }
    ]
  },
  {
    id: "mls",
    name: "Major League Soccer",
    country: "Estados Unidos",
    level: 2,
    teams: [
      {
        name: "Inter Miami",
        transfermarkt: "https://www.transfermarkt.com/inter-miami-cf/kader/verein/69261",
        rep: 78,
        salary: 52,
        players: [
          { name: "Lionel Messi", pos: "ED", rating: 89, nat: "Argentina" },
          { name: "Luis Suarez", pos: "DC", rating: 82, nat: "Uruguay" },
          { name: "Sergio Busquets", pos: "MC", rating: 82, nat: "Espana" },
          { name: "Jordi Alba", pos: "LI", rating: 81, nat: "Espana" }
        ]
      },
      {
        name: "Los Angeles FC",
        rep: 72,
        salary: 34,
        players: [
          { name: "Denis Bouanga", pos: "EI", rating: 80, nat: "Gabon" },
          { name: "Hugo Lloris", pos: "POR", rating: 80, nat: "Francia" },
          { name: "Olivier Giroud", pos: "DC", rating: 80, nat: "Francia" },
          { name: "Ilie Sanchez", pos: "MC", rating: 75, nat: "Espana" }
        ]
      },
      {
        name: "Atlanta United",
        rep: 68,
        salary: 28,
        players: [
          { name: "Miguel Almiron", pos: "MCO", rating: 80, nat: "Paraguay" },
          { name: "Saba Lobzhanidze", pos: "ED", rating: 76, nat: "Georgia" },
          { name: "Brad Guzan", pos: "POR", rating: 73, nat: "Estados Unidos" },
          { name: "Stian Gregersen", pos: "DFC", rating: 74, nat: "Noruega" }
        ]
      },
      {
        name: "LA Galaxy",
        rep: 70,
        salary: 30,
        players: [
          { name: "Riqui Puig", pos: "MC", rating: 80, nat: "Espana" },
          { name: "Gabriel Pec", pos: "ED", rating: 78, nat: "Brasil" },
          { name: "Joseph Paintsil", pos: "EI", rating: 77, nat: "Ghana" },
          { name: "Maya Yoshida", pos: "DFC", rating: 76, nat: "Japon" }
        ]
      }
    ]
  },
  {
    id: "eredivisie",
    name: "Eredivisie",
    country: "Paises Bajos",
    level: 3,
    teams: [
      {
        name: "Ajax",
        rep: 79,
        salary: 45,
        players: [
          { name: "Brian Brobbey", pos: "DC", rating: 80, nat: "Paises Bajos" },
          { name: "Steven Bergwijn", pos: "EI", rating: 80, nat: "Paises Bajos" },
          { name: "Jorrel Hato", pos: "DFC", rating: 81, nat: "Paises Bajos" },
          { name: "Kenneth Taylor", pos: "MC", rating: 79, nat: "Paises Bajos" }
        ]
      },
      {
        name: "PSV",
        rep: 81,
        salary: 48,
        players: [
          { name: "Johan Bakayoko", pos: "ED", rating: 81, nat: "Belgica" },
          { name: "Joey Veerman", pos: "MC", rating: 81, nat: "Paises Bajos" },
          { name: "Luuk de Jong", pos: "DC", rating: 80, nat: "Paises Bajos" },
          { name: "Jerdy Schouten", pos: "MC", rating: 80, nat: "Paises Bajos" }
        ]
      },
      {
        name: "Feyenoord",
        rep: 79,
        salary: 44,
        players: [
          { name: "Quinten Timber", pos: "MC", rating: 80, nat: "Paises Bajos" },
          { name: "David Hancko", pos: "DFC", rating: 81, nat: "Eslovaquia" },
          { name: "Santiago Gimenez", pos: "DC", rating: 82, nat: "Mexico" },
          { name: "Justin Bijlow", pos: "POR", rating: 79, nat: "Paises Bajos" }
        ]
      },
      {
        name: "AZ Alkmaar",
        rep: 74,
        salary: 30,
        players: [
          { name: "Vangelis Pavlidis", pos: "DC", rating: 81, nat: "Grecia" },
          { name: "Jordy Clasie", pos: "MC", rating: 78, nat: "Paises Bajos" },
          { name: "Sven Mijnans", pos: "MCO", rating: 77, nat: "Paises Bajos" },
          { name: "Mathew Ryan", pos: "POR", rating: 78, nat: "Australia" }
        ]
      }
    ]
  },
  {
    id: "liga-mx",
    name: "Liga MX",
    country: "Mexico",
    level: 2,
    teams: [
      {
        name: "Tigres",
        rep: 77,
        salary: 42,
        players: [
          { name: "Andre-Pierre Gignac", pos: "DC", rating: 80, nat: "Francia" },
          { name: "Nahuel Guzman", pos: "POR", rating: 78, nat: "Argentina" },
          { name: "Guido Pizarro", pos: "MC", rating: 78, nat: "Argentina" },
          { name: "Sebastian Cordova", pos: "MCO", rating: 77, nat: "Mexico" }
        ]
      },
      {
        name: "Club America",
        rep: 78,
        salary: 44,
        players: [
          { name: "Henry Martin", pos: "DC", rating: 79, nat: "Mexico" },
          { name: "Luis Malagon", pos: "POR", rating: 78, nat: "Mexico" },
          { name: "Alvaro Fidalgo", pos: "MC", rating: 78, nat: "Espana" },
          { name: "Brian Rodriguez", pos: "EI", rating: 77, nat: "Uruguay" }
        ]
      },
      {
        name: "Monterrey",
        rep: 78,
        salary: 44,
        players: [
          { name: "Sergio Canales", pos: "MCO", rating: 82, nat: "Espana" },
          { name: "Oliver Torres", pos: "MC", rating: 79, nat: "Espana" },
          { name: "German Berterame", pos: "DC", rating: 78, nat: "Argentina" },
          { name: "Esteban Andrada", pos: "POR", rating: 78, nat: "Argentina" }
        ]
      },
      {
        name: "Chivas",
        rep: 72,
        salary: 30,
        players: [
          { name: "Roberto Alvarado", pos: "MCO", rating: 78, nat: "Mexico" },
          { name: "Erick Gutierrez", pos: "MC", rating: 77, nat: "Mexico" },
          { name: "Jose Castillo", pos: "DFC", rating: 74, nat: "Mexico" },
          { name: "Raul Rangel", pos: "POR", rating: 74, nat: "Mexico" }
        ]
      }
    ]
  }
];
