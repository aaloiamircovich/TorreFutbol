const sources = [
  { label: "Wikipedia - 2022 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2014 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2010 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2006 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2002 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1998 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1986 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1986_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1970 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1994 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1990 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1990_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1966 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1950 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1950_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2018 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1954 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1954_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1982 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1974 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1974_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2006 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 2014 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1978 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1978_FIFA_World_Cup_squads" },
  { label: "Wikipedia - 1958 FIFA World Cup squads", url: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_squads" },
  { label: "Transfermarkt - Argentina 2022", url: "https://www.transfermarkt.us/argentina/kader/verein/3437/saison_id/2022" },
  { label: "Transfermarkt - Brazil 2002", url: "https://www.transfermarkt.us/brazil/kader/verein/3439/saison_id/2002" },
  { label: "Transfermarkt - Spain 2010", url: "https://www.transfermarkt.com/spain/kader/verein/3375/saison_id/2010" },
];

const roleNames = {
  POR: "Arquero",
  LD: "Lateral derecho",
  DFC: "Central",
  LI: "Lateral izquierdo",
  MCD: "Mediocentro defensivo",
  MC: "Mediocampista",
  MCO: "Enganche",
  EI: "Extremo izquierdo",
  ED: "Extremo derecho",
  DC: "Delantero centro",
};

const roleLine = {
  POR: "POR",
  LD: "DEF",
  DFC: "DEF",
  LI: "DEF",
  MCD: "MED",
  MC: "MED",
  MCO: "MED",
  EI: "DEL",
  ED: "DEL",
  DC: "DEL",
};

const broadFallbackRoles = {
  POR: ["POR"],
  DEF: ["DFC"],
  MED: ["MC"],
  DEL: ["DC"],
};

const roleOverrides = {
  "Nahuel Molina": ["LD"],
  "Gonzalo Montiel": ["LD"],
  "Cristian Romero": ["DFC"],
  "German Pezzella": ["DFC"],
  "Nicolas Otamendi": ["DFC"],
  "Lisandro Martinez": ["DFC", "LI"],
  "Marcos Acuna": ["LI", "EI"],
  "Nicolas Tagliafico": ["LI"],
  "Juan Foyth": ["LD", "DFC"],
  "Rodrigo De Paul": ["MC", "MCD"],
  "Leandro Paredes": ["MCD", "MC"],
  "Enzo Fernandez": ["MC", "MCD"],
  "Alexis Mac Allister": ["MC", "MCO"],
  "Guido Rodriguez": ["MCD"],
  "Exequiel Palacios": ["MC"],
  "Thiago Almada": ["MCO", "EI"],
  "Papu Gomez": ["MCO", "EI"],
  "Lionel Messi": ["ED", "MCO", "DC"],
  "Angel Di Maria": ["ED", "EI"],
  "Julian Alvarez": ["DC", "ED"],
  "Lautaro Martinez": ["DC"],
  "Paulo Dybala": ["MCO", "DC"],
  "Angel Correa": ["ED", "DC"],
  "Cafu": ["LD"],
  "Roberto Carlos": ["LI"],
  "Lucio": ["DFC"],
  "Roque Junior": ["DFC"],
  "Edmilson": ["DFC", "MCD"],
  "Junior": ["LI", "MC"],
  "Belletti": ["LD"],
  "Anderson Polga": ["DFC"],
  "Gilberto Silva": ["MCD"],
  "Kleberson": ["MC"],
  "Vampeta": ["MCD", "MC"],
  "Juninho Paulista": ["MCO", "MC"],
  "Ricardinho": ["MCO", "MC"],
  "Kaka": ["MCO"],
  "Ronaldinho": ["EI", "MCO"],
  "Rivaldo": ["MCO", "EI", "DC"],
  "Ronaldo": ["DC"],
  "Denilson": ["EI"],
  "Edilson": ["DC", "ED"],
  "Luizao": ["DC"],
  "Sergio Ramos": ["LD", "DFC"],
  "Carles Puyol": ["DFC", "LD"],
  "Gerard Pique": ["DFC"],
  "Joan Capdevila": ["LI"],
  "Raul Albiol": ["DFC"],
  "Carlos Marchena": ["DFC", "MCD"],
  "Alvaro Arbeloa": ["LD", "LI"],
  "Sergio Busquets": ["MCD"],
  "Xabi Alonso": ["MCD", "MC"],
  "Xavi": ["MC"],
  "Andres Iniesta": ["MC", "MCO", "EI"],
  "Cesc Fabregas": ["MC", "MCO"],
  "Javi Martinez": ["MCD", "DFC"],
  "David Silva": ["MCO", "EI"],
  "Juan Mata": ["MCO", "EI"],
  "Jesus Navas": ["ED"],
  "Pedro": ["EI", "ED"],
  "David Villa": ["DC", "EI"],
  "Fernando Torres": ["DC"],
  "Fernando Llorente": ["DC"],
  "Philipp Lahm": ["LD", "MCD", "LI"],
  "Jerome Boateng": ["DFC", "LD"],
  "Mats Hummels": ["DFC"],
  "Per Mertesacker": ["DFC"],
  "Benedikt Howedes": ["LI", "DFC"],
  "Erik Durm": ["LI"],
  "Matthias Ginter": ["DFC", "LD"],
  "Shkodran Mustafi": ["DFC"],
  "Sami Khedira": ["MC", "MCD"],
  "Bastian Schweinsteiger": ["MC", "MCD"],
  "Toni Kroos": ["MC", "MCD"],
  "Mesut Ozil": ["MCO"],
  "Julian Draxler": ["EI", "MCO"],
  "Christoph Kramer": ["MCD", "MC"],
  "Mario Gotze": ["MCO", "DC"],
  "Thomas Muller": ["ED", "DC", "MCO"],
  "Miroslav Klose": ["DC"],
  "Andre Schurrle": ["EI", "ED"],
  "Lukas Podolski": ["EI", "DC"],
  "Kevin Grosskreutz": ["ED", "LD"],
  "Gianluigi Buffon": ["POR"],
  "Fabio Cannavaro": ["DFC"],
  "Alessandro Nesta": ["DFC"],
  "Marco Materazzi": ["DFC"],
  "Gianluca Zambrotta": ["LD", "LI"],
  "Fabio Grosso": ["LI"],
  "Andrea Barzagli": ["DFC"],
  "Massimo Oddo": ["LD"],
  "Cristian Zaccardo": ["LD", "DFC"],
  "Andrea Pirlo": ["MCD", "MC"],
  "Gennaro Gattuso": ["MC", "MCD"],
  "Daniele De Rossi": ["MCD", "MC"],
  "Simone Perrotta": ["MC", "MCO"],
  "Mauro Camoranesi": ["ED", "MC"],
  "Francesco Totti": ["MCO", "DC"],
  "Alessandro Del Piero": ["DC", "EI"],
  "Luca Toni": ["DC"],
  "Alberto Gilardino": ["DC"],
  "Vincenzo Iaquinta": ["DC", "ED"],
  "Filippo Inzaghi": ["DC"],
  "Lilian Thuram": ["DFC", "LD"],
  "Marcel Desailly": ["DFC", "MCD"],
  "Laurent Blanc": ["DFC"],
  "Bixente Lizarazu": ["LI"],
  "Frank Leboeuf": ["DFC"],
  "Vincent Candela": ["LI", "LD"],
  "Didier Deschamps": ["MCD"],
  "Patrick Vieira": ["MC", "MCD"],
  "Emmanuel Petit": ["MC", "MCD"],
  "Christian Karembeu": ["MC", "MCD"],
  "Robert Pires": ["EI", "MCO"],
  "Zinedine Zidane": ["MCO", "MC"],
  "Youri Djorkaeff": ["MCO", "DC"],
  "Thierry Henry": ["DC", "EI"],
  "David Trezeguet": ["DC"],
  "Christophe Dugarry": ["DC", "EI"],
  "Oscar Ruggeri": ["DFC"],
  "Jose Luis Brown": ["DFC"],
  "Jose Cuciuffo": ["DFC"],
  "Julio Olarticoechea": ["LI"],
  "Nestor Clausen": ["LD"],
  "Ricardo Giusti": ["MC", "MCD"],
  "Sergio Batista": ["MCD"],
  "Hector Enrique": ["MC"],
  "Jorge Burruchaga": ["MCO", "MC"],
  "Ricardo Bochini": ["MCO"],
  "Carlos Tapia": ["MCO"],
  "Marcelo Trobbiani": ["MC"],
  "Diego Maradona": ["MCO", "DC"],
  "Jorge Valdano": ["DC"],
  "Pedro Pasculli": ["DC"],
  "Claudio Borghi": ["MCO", "EI"],
  "Daniel Passarella": ["DFC"],
  "Carlos Alberto": ["LD"],
  "Brito": ["DFC"],
  "Piazza": ["DFC", "MCD"],
  "Everaldo": ["LI"],
  "Marco Antonio": ["LI"],
  "Ze Maria": ["LD"],
  "Fontana": ["DFC"],
  "Baldocchi": ["DFC"],
  "Clodoaldo": ["MCD", "MC"],
  "Gerson": ["MC", "MCO"],
  "Rivelino": ["EI", "MCO"],
  "Paulo Cesar Caju": ["EI", "LI"],
  "Jairzinho": ["ED", "DC"],
  "Pele": ["DC", "MCO"],
  "Tostao": ["DC", "MCO"],
  "Raphael Varane": ["DFC"],
  "Samuel Umtiti": ["DFC"],
  "Lucas Hernandez": ["LI", "DFC"],
  "Benjamin Pavard": ["LD", "DFC"],
  "Presnel Kimpembe": ["DFC"],
  "Adil Rami": ["DFC"],
  "Djibril Sidibe": ["LD"],
  "Benjamin Mendy": ["LI"],
  "N'Golo Kante": ["MCD", "MC"],
  "Paul Pogba": ["MC", "MCO"],
  "Blaise Matuidi": ["MC", "EI"],
  "Corentin Tolisso": ["MC"],
  "Steven Nzonzi": ["MCD"],
  "Thomas Lemar": ["EI", "MCO"],
  "Nabil Fekir": ["MCO", "DC"],
  "Antoine Griezmann": ["MCO", "DC"],
  "Kylian Mbappe": ["ED", "DC", "EI"],
  "Olivier Giroud": ["DC"],
  "Ousmane Dembele": ["ED", "EI"],
  "Florian Thauvin": ["ED"],
  "Wim Suurbier": ["LD"],
  "Ruud Krol": ["LI", "DFC"],
  "Wim Rijsbergen": ["DFC"],
  "Arie Haan": ["DFC", "MC"],
  "Johan Neeskens": ["MC", "MCO"],
  "Wim Jansen": ["MCD", "MC"],
  "Willem van Hanegem": ["MC", "MCO"],
  "Rene van de Kerkhof": ["ED"],
  "Johnny Rep": ["ED", "DC"],
  "Johan Cruyff": ["DC", "MCO", "EI"],
  "Rob Rensenbrink": ["EI"],
  "Piet Keizer": ["EI"],
};

const squads = [
  {
    id: "arg-2022",
    country: "Argentina",
    year: 2022,
    rating: 94,
    source: sources[0].url,
    players: [
      p("Emiliano Martinez", "POR", 92), p("Franco Armani", "POR", 80), p("Geronimo Rulli", "POR", 82),
      p("Nahuel Molina", "DEF", 84), p("Gonzalo Montiel", "DEF", 83), p("Cristian Romero", "DEF", 88),
      p("German Pezzella", "DEF", 81), p("Nicolas Otamendi", "DEF", 88), p("Lisandro Martinez", "DEF", 86),
      p("Marcos Acuna", "DEF", 84), p("Nicolas Tagliafico", "DEF", 83), p("Juan Foyth", "DEF", 80),
      p("Rodrigo De Paul", "MED", 88), p("Leandro Paredes", "MED", 84), p("Enzo Fernandez", "MED", 88),
      p("Alexis Mac Allister", "MED", 88), p("Guido Rodriguez", "MED", 82), p("Exequiel Palacios", "MED", 81),
      p("Thiago Almada", "MED", 79), p("Papu Gomez", "MED", 82), p("Lionel Messi", "DEL", 99),
      p("Angel Di Maria", "DEL", 90), p("Julian Alvarez", "DEL", 89), p("Lautaro Martinez", "DEL", 87),
      p("Paulo Dybala", "DEL", 86), p("Angel Correa", "DEL", 83),
    ],
  },
  {
    id: "bra-2002",
    country: "Brasil",
    year: 2002,
    rating: 94,
    source: sources[4].url,
    players: [
      p("Marcos", "POR", 88), p("Dida", "POR", 87), p("Rogerio Ceni", "POR", 85),
      p("Cafu", "DEF", 94), p("Roberto Carlos", "DEF", 94), p("Lucio", "DEF", 88), p("Roque Junior", "DEF", 83),
      p("Edmilson", "DEF", 84), p("Junior", "DEF", 82), p("Belletti", "DEF", 80), p("Anderson Polga", "DEF", 79),
      p("Gilberto Silva", "MED", 87), p("Kleberson", "MED", 84), p("Vampeta", "MED", 82), p("Juninho Paulista", "MED", 84),
      p("Ricardinho", "MED", 81), p("Kaka", "MED", 86), p("Ronaldinho", "DEL", 94), p("Rivaldo", "DEL", 95),
      p("Ronaldo", "DEL", 97), p("Denilson", "DEL", 86), p("Edilson", "DEL", 82), p("Luizao", "DEL", 81),
    ],
  },
  {
    id: "esp-2010",
    country: "Espana",
    year: 2010,
    rating: 93,
    source: sources[2].url,
    players: [
      p("Iker Casillas", "POR", 94), p("Pepe Reina", "POR", 84), p("Victor Valdes", "POR", 86),
      p("Sergio Ramos", "DEF", 91), p("Carles Puyol", "DEF", 91), p("Gerard Pique", "DEF", 90),
      p("Joan Capdevila", "DEF", 84), p("Raul Albiol", "DEF", 82), p("Carlos Marchena", "DEF", 81), p("Alvaro Arbeloa", "DEF", 82),
      p("Sergio Busquets", "MED", 91), p("Xabi Alonso", "MED", 90), p("Xavi", "MED", 97), p("Andres Iniesta", "MED", 96),
      p("Cesc Fabregas", "MED", 89), p("Javi Martinez", "MED", 83), p("David Silva", "MED", 89), p("Juan Mata", "MED", 84),
      p("Jesus Navas", "DEL", 84), p("Pedro", "DEL", 85), p("David Villa", "DEL", 92), p("Fernando Torres", "DEL", 87), p("Fernando Llorente", "DEL", 83),
    ],
  },
  {
    id: "ger-2014",
    country: "Alemania",
    year: 2014,
    rating: 92,
    source: sources[1].url,
    players: [
      p("Manuel Neuer", "POR", 96), p("Roman Weidenfeller", "POR", 84), p("Ron-Robert Zieler", "POR", 80),
      p("Philipp Lahm", "DEF", 93), p("Jerome Boateng", "DEF", 90), p("Mats Hummels", "DEF", 91), p("Per Mertesacker", "DEF", 85),
      p("Benedikt Howedes", "DEF", 84), p("Erik Durm", "DEF", 78), p("Matthias Ginter", "DEF", 79), p("Shkodran Mustafi", "DEF", 80),
      p("Sami Khedira", "MED", 87), p("Bastian Schweinsteiger", "MED", 91), p("Toni Kroos", "MED", 91), p("Mesut Ozil", "MED", 90),
      p("Julian Draxler", "MED", 82), p("Christoph Kramer", "MED", 80), p("Mario Gotze", "MED", 86), p("Thomas Muller", "DEL", 91),
      p("Miroslav Klose", "DEL", 88), p("Andre Schurrle", "DEL", 85), p("Lukas Podolski", "DEL", 84), p("Kevin Grosskreutz", "MED", 79),
    ],
  },
  {
    id: "ita-2006",
    country: "Italia",
    year: 2006,
    rating: 91,
    source: sources[3].url,
    players: [
      p("Gianluigi Buffon", "POR", 96), p("Angelo Peruzzi", "POR", 84), p("Marco Amelia", "POR", 80),
      p("Fabio Cannavaro", "DEF", 95), p("Alessandro Nesta", "DEF", 91), p("Marco Materazzi", "DEF", 85), p("Gianluca Zambrotta", "DEF", 89),
      p("Fabio Grosso", "DEF", 86), p("Andrea Barzagli", "DEF", 82), p("Massimo Oddo", "DEF", 81), p("Cristian Zaccardo", "DEF", 80),
      p("Andrea Pirlo", "MED", 94), p("Gennaro Gattuso", "MED", 88), p("Daniele De Rossi", "MED", 87), p("Simone Perrotta", "MED", 84),
      p("Mauro Camoranesi", "MED", 85), p("Simone Barone", "MED", 80), p("Francesco Totti", "DEL", 92), p("Alessandro Del Piero", "DEL", 89),
      p("Luca Toni", "DEL", 88), p("Alberto Gilardino", "DEL", 85), p("Vincenzo Iaquinta", "DEL", 83), p("Filippo Inzaghi", "DEL", 84),
    ],
  },
  {
    id: "fra-1998",
    country: "Francia",
    year: 1998,
    rating: 91,
    source: sources[5].url,
    players: [
      p("Fabien Barthez", "POR", 90), p("Bernard Lama", "POR", 84), p("Lionel Charbonnier", "POR", 78),
      p("Lilian Thuram", "DEF", 92), p("Marcel Desailly", "DEF", 92), p("Laurent Blanc", "DEF", 91), p("Bixente Lizarazu", "DEF", 88),
      p("Frank Leboeuf", "DEF", 84), p("Vincent Candela", "DEF", 82), p("Didier Deschamps", "MED", 88), p("Patrick Vieira", "MED", 89),
      p("Emmanuel Petit", "MED", 88), p("Christian Karembeu", "MED", 84), p("Alain Boghossian", "MED", 81), p("Robert Pires", "MED", 86),
      p("Zinedine Zidane", "MED", 97), p("Youri Djorkaeff", "DEL", 89), p("Thierry Henry", "DEL", 88), p("David Trezeguet", "DEL", 86),
      p("Christophe Dugarry", "DEL", 82), p("Stephane Guivarc'h", "DEL", 80), p("Bernard Diomede", "DEL", 79),
    ],
  },
  {
    id: "arg-1986",
    country: "Argentina",
    year: 1986,
    rating: 92,
    source: sources[6].url,
    players: [
      p("Nery Pumpido", "POR", 88), p("Luis Islas", "POR", 80), p("Hector Zelada", "POR", 78),
      p("Oscar Ruggeri", "DEF", 89), p("Jose Luis Brown", "DEF", 86), p("Jose Cuciuffo", "DEF", 83), p("Julio Olarticoechea", "DEF", 84),
      p("Nestor Clausen", "DEF", 80), p("Ricardo Giusti", "MED", 84), p("Sergio Batista", "MED", 86), p("Hector Enrique", "MED", 83),
      p("Jorge Burruchaga", "MED", 88), p("Ricardo Bochini", "MED", 86), p("Carlos Tapia", "MED", 81), p("Marcelo Trobbiani", "MED", 80),
      p("Diego Maradona", "DEL", 99), p("Jorge Valdano", "DEL", 90), p("Pedro Pasculli", "DEL", 83), p("Claudio Borghi", "DEL", 82),
      p("Sergio Almiron", "DEL", 79), p("Daniel Passarella", "DEF", 87), p("Oscar Garre", "DEF", 81),
    ],
  },
  {
    id: "bra-1970",
    country: "Brasil",
    year: 1970,
    rating: 95,
    source: sources[7].url,
    players: [
      p("Felix", "POR", 86), p("Ado", "POR", 78), p("Leao", "POR", 80),
      p("Carlos Alberto", "DEF", 94), p("Brito", "DEF", 87), p("Piazza", "DEF", 88), p("Everaldo", "DEF", 86),
      p("Marco Antonio", "DEF", 80), p("Ze Maria", "DEF", 80), p("Fontana", "DEF", 81), p("Baldocchi", "DEF", 80),
      p("Clodoaldo", "MED", 89), p("Gerson", "MED", 94), p("Rivelino", "MED", 93), p("Paulo Cesar Caju", "MED", 86),
      p("Edu", "DEL", 83), p("Jairzinho", "DEL", 94), p("Pele", "DEL", 99), p("Tostao", "DEL", 93),
      p("Roberto Miranda", "DEL", 80), p("Dario", "DEL", 82), p("Joel Camargo", "DEF", 78),
    ],
  },
  {
    id: "fra-2018",
    country: "Francia",
    year: 2018,
    rating: 93,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Hugo Lloris", "POR", 90), p("Steve Mandanda", "POR", 82), p("Alphonse Areola", "POR", 82),
      p("Raphael Varane", "DEF", 91), p("Samuel Umtiti", "DEF", 88), p("Lucas Hernandez", "DEF", 86), p("Benjamin Pavard", "DEF", 85),
      p("Presnel Kimpembe", "DEF", 83), p("Adil Rami", "DEF", 81), p("Djibril Sidibe", "DEF", 82), p("Benjamin Mendy", "DEF", 81),
      p("N'Golo Kante", "MED", 94), p("Paul Pogba", "MED", 91), p("Blaise Matuidi", "MED", 86), p("Corentin Tolisso", "MED", 84),
      p("Steven Nzonzi", "MED", 83), p("Thomas Lemar", "MED", 82), p("Nabil Fekir", "MED", 84),
      p("Antoine Griezmann", "DEL", 93), p("Kylian Mbappe", "DEL", 92), p("Olivier Giroud", "DEL", 86),
      p("Ousmane Dembele", "DEL", 85), p("Florian Thauvin", "DEL", 82),
    ],
  },
  {
    id: "ned-1974",
    country: "Paises Bajos",
    year: 1974,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/1974_FIFA_World_Cup_squads",
    players: [
      p("Jan Jongbloed", "POR", 84), p("Piet Schrijvers", "POR", 82), p("Eddy Treijtel", "POR", 78),
      p("Wim Suurbier", "DEF", 87), p("Ruud Krol", "DEF", 91), p("Wim Rijsbergen", "DEF", 85), p("Arie Haan", "DEF", 88),
      p("Rinus Israel", "DEF", 82), p("Harry Vos", "DEF", 80), p("Pleun Strik", "DEF", 80), p("Theo de Jong", "MED", 82),
      p("Johan Neeskens", "MED", 92), p("Wim Jansen", "MED", 86), p("Willem van Hanegem", "MED", 90), p("Willy van de Kerkhof", "MED", 84),
      p("Rene van de Kerkhof", "DEL", 86), p("Johnny Rep", "DEL", 88), p("Johan Cruyff", "DEL", 98), p("Rob Rensenbrink", "DEL", 90),
      p("Ruud Geels", "DEL", 83), p("Piet Keizer", "DEL", 85), p("Dick Nanninga", "DEL", 82),
    ],
  },
  {
    id: "bra-1994",
    country: "Brasil",
    year: 1994,
    rating: 91,
    source: sources[8].url,
    players: [
      p("Claudio Taffarel", "POR", 90), p("Zetti", "POR", 82), p("Gilmar", "POR", 78),
      p("Jorginho", "LD", 88), p("Cafu 1994", "LD", 84), p("Ricardo Rocha", "DFC", 85), p("Marcio Santos", "DFC", 88),
      p("Aldair", "DFC", 88), p("Branco", "LI", 86), p("Leonardo", "LI", 85), p("Ronaldao", "DFC", 82),
      p("Dunga", "MCD", 90), p("Mauro Silva", "MCD", 89), p("Mazinho", "MC", 85), p("Zinho", "MCO", 84),
      p("Rai", "MCO", 86), p("Paulo Sergio", "ED", 82), p("Bebeto", "DC", 90), p("Romario", "DC", 95),
      p("Muller", "DC", 83), p("Viola", "DC", 81), p("Ronaldo 1994", "DC", 86),
    ],
  },
  {
    id: "ger-1990",
    country: "Alemania",
    year: 1990,
    rating: 92,
    source: sources[9].url,
    players: [
      p("Bodo Illgner", "POR", 89), p("Andreas Kopke", "POR", 82), p("Aumann", "POR", 78),
      p("Stefan Reuter", "LD", 87), p("Jurgen Kohler", "DFC", 90), p("Klaus Augenthaler", "DFC", 87),
      p("Guido Buchwald", "DFC", 88), p("Andreas Brehme", "LI", 91), p("Thomas Berthold", "LD", 85),
      p("Paul Steiner", "DFC", 80), p("Hans Pflugler", "LI", 81), p("Lothar Matthaus", "MC", 96, ["MC", "MCD", "MCO"]),
      p("Thomas Hassler", "MCO", 88), p("Pierre Littbarski", "ED", 88, ["ED", "MCO"]),
      p("Uwe Bein", "MCO", 84), p("Olaf Thon", "MC", 85), p("Gunter Hermann", "MCD", 80),
      p("Rudi Voller", "DC", 90), p("Jurgen Klinsmann", "DC", 91), p("Karl-Heinz Riedle", "DC", 85),
      p("Frank Mill", "DC", 80), p("Andreas Moller", "MCO", 86),
    ],
  },
  {
    id: "eng-1966",
    country: "Inglaterra",
    year: 1966,
    rating: 90,
    source: sources[10].url,
    players: [
      p("Gordon Banks", "POR", 94), p("Ron Springett", "POR", 82), p("Peter Bonetti", "POR", 82),
      p("George Cohen", "LD", 89), p("Jack Charlton", "DFC", 90), p("Bobby Moore", "DFC", 95), p("Ray Wilson", "LI", 88),
      p("Gerry Byrne", "LI", 81), p("Jimmy Armfield", "LD", 83), p("Norman Hunter", "DFC", 84), p("Ron Flowers", "MCD", 83),
      p("Nobby Stiles", "MCD", 87), p("Alan Ball", "MC", 88), p("Bobby Charlton", "MCO", 96, ["MCO", "MC"]),
      p("Martin Peters", "MC", 89, ["MC", "MCO"]), p("Terry Paine", "ED", 82), p("Ian Callaghan", "ED", 82),
      p("John Connelly", "EI", 81), p("Roger Hunt", "DC", 88), p("Geoff Hurst", "DC", 91), p("Jimmy Greaves", "DC", 90),
      p("George Eastham", "MCO", 82),
    ],
  },
  {
    id: "ned-2010",
    country: "Paises Bajos",
    year: 2010,
    rating: 90,
    source: sources[2].url,
    players: [
      p("Maarten Stekelenburg", "POR", 87), p("Michel Vorm", "POR", 80), p("Sander Boschker", "POR", 78),
      p("Gregory van der Wiel", "LD", 84), p("John Heitinga", "DFC", 85), p("Joris Mathijsen", "DFC", 84), p("Giovanni van Bronckhorst", "LI", 87),
      p("Khalid Boulahrouz", "DFC", 81, ["DFC", "LD"]), p("Andre Ooijer", "DFC", 80), p("Edson Braafheid", "LI", 79),
      p("Mark van Bommel", "MCD", 88), p("Nigel de Jong", "MCD", 87), p("Rafael van der Vaart", "MCO", 87, ["MCO", "MC"]),
      p("Wesley Sneijder", "MCO", 93), p("Demy de Zeeuw", "MC", 82), p("Stijn Schaars", "MC", 80),
      p("Arjen Robben", "ED", 93), p("Dirk Kuyt", "ED", 86, ["ED", "DC"]), p("Robin van Persie", "DC", 90),
      p("Klaas-Jan Huntelaar", "DC", 85), p("Eljero Elia", "EI", 82), p("Ryan Babel", "EI", 80), p("Ibrahim Afellay", "MCO", 82, ["MCO", "EI"]),
    ],
  },
  {
    id: "cro-2018",
    country: "Croacia",
    year: 2018,
    rating: 90,
    source: sources[12].url,
    players: [
      p("Danijel Subasic", "POR", 88), p("Lovre Kalinic", "POR", 80), p("Dominik Livakovic", "POR", 80),
      p("Sime Vrsaljko", "LD", 85), p("Dejan Lovren", "DFC", 86), p("Domagoj Vida", "DFC", 86), p("Ivan Strinic", "LI", 82),
      p("Vedran Corluka", "DFC", 82), p("Tin Jedvaj", "DFC", 80, ["DFC", "LD"]), p("Josip Pivaric", "LI", 79), p("Duje Caleta-Car", "DFC", 79),
      p("Marcelo Brozovic", "MCD", 88), p("Luka Modric", "MC", 95, ["MC", "MCO"]), p("Ivan Rakitic", "MC", 90, ["MC", "MCD"]),
      p("Mateo Kovacic", "MC", 86), p("Milan Badelj", "MCD", 82), p("Andrej Kramaric", "MCO", 84, ["MCO", "DC"]),
      p("Ivan Perisic", "EI", 89), p("Ante Rebic", "ED", 84, ["ED", "DC"]), p("Mario Mandzukic", "DC", 88),
      p("Marko Pjaca", "ED", 81), p("Nikola Kalinic", "DC", 82),
    ],
  },
  {
    id: "uru-1950",
    country: "Uruguay",
    year: 1950,
    rating: 91,
    source: sources[11].url,
    players: [
      p("Roque Maspoli", "POR", 90), p("Anibal Paz", "POR", 80), p("William Martinez", "DFC", 86),
      p("Matias Gonzalez", "LD", 86), p("Obdulio Varela", "MCD", 94), p("Schubert Gambetta", "LI", 84),
      p("Eusebio Tejera", "DFC", 87), p("Victor Rodriguez Andrade", "MC", 88), p("Julio Perez", "MC", 86),
      p("Alcides Ghiggia", "ED", 90), p("Juan Alberto Schiaffino", "MCO", 93, ["MCO", "DC"]), p("Oscar Miguez", "DC", 89),
      p("Ernesto Vidal", "EI", 86), p("Ruben Moran", "EI", 80), p("Julio Britos", "LD", 80),
      p("Hector Vilches", "DFC", 80), p("Carlos Romero", "DC", 82), p("Luis Rijo", "MC", 80),
    ],
  },
  {
    id: "arg-2014",
    country: "Argentina",
    year: 2014,
    rating: 90,
    source: sources[1].url,
    players: [
      p("Sergio Romero", "POR", 87), p("Mariano Andujar", "POR", 80), p("Agustin Orion", "POR", 79),
      p("Pablo Zabaleta", "LD", 87), p("Federico Fernandez", "DFC", 83), p("Ezequiel Garay", "DFC", 87), p("Marcos Rojo", "LI", 85, ["LI", "DFC"]),
      p("Hugo Campagnaro", "DFC", 81, ["DFC", "LD"]), p("Martin Demichelis", "DFC", 84), p("Jose Basanta", "DFC", 80, ["DFC", "LI"]),
      p("Javier Mascherano", "MCD", 91), p("Lucas Biglia", "MCD", 84), p("Fernando Gago", "MC", 84), p("Enzo Perez 2014", "MC", 83),
      p("Angel Di Maria 2014", "EI", 91, ["EI", "MC"]), p("Maxi Rodriguez", "MCO", 82, ["MCO", "ED"]), p("Ricky Alvarez", "MCO", 81),
      p("Lionel Messi 2014", "ED", 98, ["ED", "MCO", "DC"]), p("Gonzalo Higuain", "DC", 89), p("Sergio Aguero", "DC", 89),
      p("Ezequiel Lavezzi", "ED", 84, ["ED", "EI"]), p("Rodrigo Palacio", "DC", 82),
    ],
  },
  {
    id: "fra-2022",
    country: "Francia",
    year: 2022,
    rating: 92,
    source: sources[0].url,
    players: [
      p("Hugo Lloris 2022", "POR", 88), p("Steve Mandanda 2022", "POR", 80), p("Alphonse Areola 2022", "POR", 81),
      p("Jules Kounde", "LD", 86, ["LD", "DFC"]), p("Raphael Varane 2022", "DFC", 89), p("Dayot Upamecano", "DFC", 86), p("Theo Hernandez", "LI", 88),
      p("Ibrahima Konate", "DFC", 85), p("William Saliba", "DFC", 84), p("Benjamin Pavard 2022", "LD", 83), p("Lucas Hernandez 2022", "LI", 85, ["LI", "DFC"]),
      p("Aurelien Tchouameni", "MCD", 88), p("Adrien Rabiot", "MC", 85), p("Eduardo Camavinga", "MC", 84, ["MC", "LI"]),
      p("Youssouf Fofana", "MC", 82), p("Matteo Guendouzi", "MC", 81), p("Antoine Griezmann 2022", "MCO", 91, ["MCO", "MC"]),
      p("Kylian Mbappe 2022", "EI", 97, ["EI", "DC"]), p("Ousmane Dembele 2022", "ED", 87), p("Olivier Giroud 2022", "DC", 88),
      p("Kingsley Coman", "ED", 85, ["ED", "EI"]), p("Marcus Thuram", "EI", 83, ["EI", "DC"]), p("Randal Kolo Muani", "DC", 84),
    ],
  },
  {
    id: "hun-1954",
    country: "Hungria",
    year: 1954,
    rating: 94,
    source: "https://en.wikipedia.org/wiki/1954_FIFA_World_Cup_squads",
    players: [
      p("Gyula Grosics", "POR", 92), p("Geza Gulyas", "POR", 80), p("Jeno Buzanszky", "LD", 88),
      p("Gyula Lorant", "DFC", 90), p("Mihaly Lantos", "LI", 89), p("Bela Karpaty", "DFC", 82),
      p("Jozsef Bozsik", "MC", 95, ["MC", "MCD"]), p("Jozsef Zakarias", "MCD", 88), p("Laszlo Budai", "ED", 87),
      p("Nandor Hidegkuti", "MCO", 94, ["MCO", "DC"]), p("Ferenc Puskas", "DC", 99, ["DC", "MCO"]),
      p("Zoltan Czibor", "EI", 93), p("Sandor Kocsis", "DC", 96), p("Mihaly Toth", "EI", 84),
      p("Peter Palotas", "DC", 84), p("Karoly Sandor", "ED", 83), p("Jozsef Toth", "LD", 80),
      p("Ferenc Szojka", "MC", 82), p("Lajos Tichy", "DC", 82),
    ],
  },
  {
    id: "ger-1974",
    country: "Alemania",
    year: 1974,
    rating: 93,
    source: "https://en.wikipedia.org/wiki/1974_FIFA_World_Cup_squads",
    players: [
      p("Sepp Maier", "POR", 94), p("Norbert Nigbur", "POR", 80), p("Wolfgang Kleff", "POR", 80),
      p("Berti Vogts", "LD", 91), p("Franz Beckenbauer", "DFC", 98, ["DFC", "MCD"]), p("Georg Schwarzenbeck", "DFC", 88),
      p("Paul Breitner", "LI", 92, ["LI", "MC"]), p("Horst-Dieter Hottges", "DFC", 84, ["DFC", "LD"]),
      p("Rainer Bonhof", "MC", 88), p("Uli Hoeness", "ED", 87, ["ED", "MCO"]), p("Wolfgang Overath", "MC", 90, ["MC", "MCO"]),
      p("Herbert Wimmer", "MCD", 84), p("Heinz Flohe", "MCO", 84), p("Jupp Heynckes", "DC", 87),
      p("Gerd Muller", "DC", 96), p("Jurgen Grabowski", "ED", 86), p("Bernd Holzenbein", "EI", 86),
      p("Dieter Herzog", "EI", 80), p("Dieter Muller", "DC", 82),
    ],
  },
  {
    id: "bra-1982",
    country: "Brasil",
    year: 1982,
    rating: 92,
    source: "https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads",
    players: [
      p("Waldir Peres", "POR", 84), p("Carlos", "POR", 80), p("Paulo Sergio 1982", "POR", 78),
      p("Leandro", "LD", 91), p("Oscar", "DFC", 87), p("Luizinho", "DFC", 85), p("Junior 1982", "LI", 91, ["LI", "MC"]),
      p("Edinho", "DFC", 83), p("Pedrinho", "LD", 80), p("Cerezo", "MC", 90, ["MC", "MCD"]),
      p("Falcao", "MC", 94), p("Socrates", "MCO", 94, ["MCO", "MC"]), p("Zico", "MCO", 97),
      p("Eder", "EI", 90), p("Serginho Chulapa", "DC", 84), p("Paulo Isidoro", "ED", 84),
      p("Dirceu", "MC", 82), p("Batista", "MCD", 82), p("Careca", "DC", 86), p("Roberto Dinamite", "DC", 83),
    ],
  },
  {
    id: "ita-1982",
    country: "Italia",
    year: 1982,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads",
    players: [
      p("Dino Zoff", "POR", 93), p("Ivano Bordon", "POR", 82), p("Giovanni Galli", "POR", 80),
      p("Claudio Gentile", "LD", 89, ["LD", "DFC"]), p("Gaetano Scirea", "DFC", 93), p("Fulvio Collovati", "DFC", 87),
      p("Antonio Cabrini", "LI", 91), p("Giuseppe Bergomi", "LD", 84, ["LD", "DFC"]), p("Franco Baresi", "DFC", 86),
      p("Gabriele Oriali", "MCD", 86), p("Marco Tardelli", "MC", 90), p("Giancarlo Antognoni", "MCO", 89, ["MCO", "MC"]),
      p("Bruno Conti", "ED", 90), p("Franco Causio", "ED", 84), p("Alessandro Altobelli", "DC", 86),
      p("Paolo Rossi", "DC", 92), p("Francesco Graziani", "DC", 85), p("Daniele Massaro", "EI", 81),
      p("Giuseppe Dossena", "MC", 80), p("Pietro Vierchowod", "DFC", 82),
    ],
  },
  {
    id: "por-1966",
    country: "Portugal",
    year: 1966,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_squads",
    players: [
      p("Jose Pereira", "POR", 86), p("Americo Lopes", "POR", 80), p("Joao Morais", "LD", 84),
      p("Vicente Lucas", "DFC", 84), p("Jose Carlos", "DFC", 83), p("Hilario", "LI", 85),
      p("Fernando Cruz", "LI", 82), p("Baptista", "DFC", 80), p("Jaime Graca", "MC", 86),
      p("Mario Coluna", "MC", 92, ["MC", "MCD"]), p("Jose Augusto", "ED", 88), p("Antonio Simoes", "EI", 88),
      p("Eusebio", "DC", 98), p("Jose Torres", "DC", 88), p("Augusto Silva", "MCD", 82),
      p("Peres", "MCO", 82), p("Jose Augusto 1966", "ED", 88), p("Fernando Peres", "MCO", 83),
    ],
  },
  {
    id: "por-2006",
    country: "Portugal",
    year: 2006,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Ricardo Pereira", "POR", 86), p("Quim", "POR", 80), p("Paulo Santos", "POR", 78),
      p("Miguel", "LD", 86), p("Ricardo Carvalho", "DFC", 91), p("Fernando Meira", "DFC", 85), p("Nuno Valente", "LI", 84),
      p("Paulo Ferreira", "LD", 84, ["LD", "LI"]), p("Caneira", "DFC", 80, ["DFC", "LD"]), p("Bruno Alves", "DFC", 81),
      p("Costinha", "MCD", 85), p("Petit", "MCD", 84), p("Maniche", "MC", 88), p("Deco", "MCO", 91),
      p("Tiago", "MC", 84), p("Luis Figo", "ED", 90, ["ED", "MCO"]), p("Cristiano Ronaldo 2006", "EI", 90, ["EI", "ED"]),
      p("Simao Sabrosa", "EI", 86, ["EI", "ED"]), p("Pauleta", "DC", 87), p("Nuno Gomes", "DC", 84),
      p("Hugo Viana", "MC", 80), p("Boa Morte", "EI", 80),
    ],
  },
  {
    id: "bel-2018",
    country: "Belgica",
    year: 2018,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Thibaut Courtois", "POR", 92), p("Simon Mignolet", "POR", 82), p("Koen Casteels", "POR", 81),
      p("Thomas Meunier", "LD", 86), p("Toby Alderweireld", "DFC", 88), p("Vincent Kompany", "DFC", 89), p("Jan Vertonghen", "LI", 88, ["LI", "DFC"]),
      p("Thomas Vermaelen", "DFC", 82), p("Dedryck Boyata", "DFC", 81), p("Leander Dendoncker", "MCD", 82, ["MCD", "DFC"]),
      p("Axel Witsel", "MCD", 87), p("Mousa Dembele", "MC", 86), p("Kevin De Bruyne", "MCO", 94, ["MCO", "MC"]),
      p("Marouane Fellaini", "MC", 83, ["MC", "MCO"]), p("Youri Tielemans", "MC", 82), p("Eden Hazard", "EI", 93, ["EI", "MCO"]),
      p("Dries Mertens", "ED", 88, ["ED", "DC"]), p("Romelu Lukaku", "DC", 90), p("Michy Batshuayi", "DC", 83),
      p("Yannick Carrasco", "EI", 85, ["EI", "LI"]), p("Adnan Januzaj", "ED", 81), p("Nacer Chadli", "LI", 82, ["LI", "EI"]),
    ],
  },
  {
    id: "col-2014",
    country: "Colombia",
    year: 2014,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads",
    players: [
      p("David Ospina", "POR", 86), p("Faryd Mondragon", "POR", 80), p("Camilo Vargas", "POR", 78),
      p("Camilo Zuniga", "LD", 84), p("Mario Yepes", "DFC", 86), p("Cristian Zapata", "DFC", 84), p("Pablo Armero", "LI", 83),
      p("Santiago Arias", "LD", 81), p("Carlos Valdes", "DFC", 80), p("Eder Balanta", "DFC", 80),
      p("Carlos Sanchez", "MCD", 84), p("Fredy Guarin", "MC", 85), p("Abel Aguilar", "MC", 82), p("Juan Quintero", "MCO", 83),
      p("James Rodriguez", "MCO", 91, ["MCO", "EI"]), p("Juan Cuadrado", "ED", 87), p("Victor Ibarbo", "EI", 82, ["EI", "DC"]),
      p("Teofilo Gutierrez", "DC", 84), p("Jackson Martinez", "DC", 86), p("Carlos Bacca", "DC", 84),
      p("Adrian Ramos", "DC", 82), p("Alexander Mejia", "MCD", 80),
    ],
  },
  {
    id: "uru-2010",
    country: "Uruguay",
    year: 2010,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Fernando Muslera", "POR", 86), p("Juan Castillo", "POR", 78), p("Martin Silva", "POR", 78),
      p("Maxi Pereira", "LD", 84), p("Diego Lugano", "DFC", 88), p("Diego Godin", "DFC", 87), p("Martin Caceres", "LI", 84, ["LI", "DFC", "LD"]),
      p("Mauricio Victorino", "DFC", 82), p("Andres Scotti", "DFC", 80), p("Jorge Fucile", "LI", 82, ["LI", "LD"]),
      p("Egidio Arevalo Rios", "MCD", 85), p("Diego Perez", "MCD", 84), p("Alvaro Pereira", "MC", 84, ["MC", "LI"]),
      p("Nicolas Lodeiro", "MCO", 82), p("Ignacio Gonzalez", "MCO", 80), p("Sebastian Eguren", "MCD", 80),
      p("Diego Forlan", "DC", 92, ["DC", "MCO"]), p("Luis Suarez 2010", "DC", 89), p("Edinson Cavani 2010", "ED", 86, ["ED", "DC"]),
      p("Sebastian Abreu", "DC", 82), p("Sebastian Fernandez", "DC", 80), p("Alvaro Fernandez", "MC", 80),
    ],
  },
  {
    id: "arg-1978",
    country: "Argentina",
    year: 1978,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1978_FIFA_World_Cup_squads",
    players: [
      p("Ubaldo Fillol", "POR", 93), p("Hector Baley", "POR", 80), p("Ricardo La Volpe", "POR", 78),
      p("Jorge Olguin", "LD", 86, ["LD", "DFC"]), p("Luis Galvan", "DFC", 88), p("Daniel Passarella 1978", "DFC", 94),
      p("Alberto Tarantini", "LI", 87), p("Ruben Pagnanini", "LD", 80), p("Miguel Oviedo", "DFC", 80),
      p("Americo Gallego", "MCD", 87), p("Osvaldo Ardiles", "MC", 90), p("Mario Kempes", "MCO", 94, ["MCO", "DC"]),
      p("Rene Houseman", "ED", 87), p("Leopoldo Luque", "DC", 89), p("Daniel Bertoni", "EI", 88, ["EI", "ED"]),
      p("Omar Larrosa", "MC", 82), p("Norberto Alonso", "MCO", 86), p("Oscar Ortiz", "EI", 82),
      p("Ricardo Villa", "MC", 82), p("Jose Valencia", "MCO", 80), p("Hector Scotta", "DC", 80),
    ],
  },
  {
    id: "bra-1958",
    country: "Brasil",
    year: 1958,
    rating: 94,
    source: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_squads",
    players: [
      p("Gilmar 1958", "POR", 91), p("Castilho", "POR", 82), p("Bellini", "DFC", 90),
      p("Djalma Santos", "LD", 93), p("Orlando", "DFC", 87), p("Nilton Santos", "LI", 94),
      p("De Sordi", "LD", 84), p("Mauro Ramos", "DFC", 86), p("Zito", "MCD", 90),
      p("Didi", "MC", 96, ["MC", "MCO"]), p("Moacir", "MC", 81), p("Dino Sani", "MC", 83),
      p("Garrincha", "ED", 97), p("Vava", "DC", 92), p("Pele 1958", "DC", 97, ["DC", "MCO"]),
      p("Zagallo", "EI", 90), p("Mazzola", "DC", 86), p("Pepe", "EI", 86),
      p("Joel 1958", "ED", 82), p("Dida 1958", "MCO", 82),
    ],
  },
  {
    id: "ned-1998",
    country: "Paises Bajos",
    year: 1998,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads",
    players: [
      p("Edwin van der Sar", "POR", 91), p("Ed de Goey", "POR", 82), p("Ruud Hesp", "POR", 80),
      p("Michael Reiziger", "LD", 86), p("Jaap Stam", "DFC", 92), p("Frank de Boer", "DFC", 90), p("Arthur Numan", "LI", 85),
      p("Winston Bogarde", "DFC", 83, ["DFC", "LI"]), p("Andre Ooijer 1998", "DFC", 80), p("Mario Melchiot", "LD", 80),
      p("Edgar Davids", "MC", 91, ["MC", "MCD"]), p("Clarence Seedorf", "MC", 90), p("Ronald de Boer", "MCO", 87, ["MCO", "ED"]),
      p("Phillip Cocu", "MC", 88, ["MC", "LI"]), p("Wim Jonk", "MC", 84), p("Dennis Bergkamp", "MCO", 94, ["MCO", "DC"]),
      p("Marc Overmars", "EI", 90), p("Patrick Kluivert", "DC", 91), p("Pierre van Hooijdonk", "DC", 84),
      p("Jimmy Floyd Hasselbaink", "DC", 84), p("Boudewijn Zenden", "EI", 84), p("Aron Winter 1998", "MCD", 82),
    ],
  },
  {
    id: "fra-2006",
    country: "Francia",
    year: 2006,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Fabien Barthez 2006", "POR", 88), p("Gregory Coupet", "POR", 86), p("Mickael Landreau", "POR", 80),
      p("Willy Sagnol", "LD", 88), p("Lilian Thuram 2006", "DFC", 90), p("William Gallas", "DFC", 89), p("Eric Abidal", "LI", 87),
      p("Mikael Silvestre", "DFC", 82, ["DFC", "LI"]), p("Pascal Chimbonda", "LD", 80), p("Jean-Alain Boumsong", "DFC", 80),
      p("Claude Makelele", "MCD", 91), p("Patrick Vieira 2006", "MC", 90, ["MC", "MCD"]), p("Zinedine Zidane 2006", "MCO", 95),
      p("Florent Malouda", "EI", 86, ["EI", "MC"]), p("Franck Ribery", "ED", 86, ["ED", "EI"]), p("Vikash Dhorasoo", "MC", 81),
      p("Thierry Henry 2006", "DC", 92), p("David Trezeguet 2006", "DC", 87), p("Louis Saha", "DC", 83),
      p("Sylvain Wiltord", "ED", 84, ["ED", "DC"]), p("Sidney Govou", "ED", 82), p("Alou Diarra", "MCD", 80),
    ],
  },
  {
    id: "ger-2010",
    country: "Alemania",
    year: 2010,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Manuel Neuer 2010", "POR", 88), p("Tim Wiese", "POR", 82), p("Hans-Jorg Butt", "POR", 80),
      p("Philipp Lahm 2010", "LD", 91, ["LD", "LI"]), p("Per Mertesacker 2010", "DFC", 85), p("Arne Friedrich", "DFC", 85), p("Holger Badstuber", "LI", 82, ["LI", "DFC"]),
      p("Jerome Boateng 2010", "LD", 83, ["LD", "DFC"]), p("Marcell Jansen", "LI", 82), p("Dennis Aogo", "LI", 80),
      p("Sami Khedira 2010", "MC", 85, ["MC", "MCD"]), p("Bastian Schweinsteiger 2010", "MCD", 90, ["MCD", "MC"]), p("Mesut Ozil 2010", "MCO", 89),
      p("Toni Kroos 2010", "MC", 84), p("Piotr Trochowski", "MCO", 81), p("Thomas Muller 2010", "ED", 88, ["ED", "DC"]),
      p("Lukas Podolski 2010", "EI", 85), p("Miroslav Klose 2010", "DC", 88), p("Mario Gomez 2010", "DC", 84),
      p("Cacau", "DC", 81), p("Marko Marin", "EI", 81), p("Stefan Kiessling", "DC", 80),
    ],
  },
  {
    id: "eng-1990",
    country: "Inglaterra",
    year: 1990,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/1990_FIFA_World_Cup_squads",
    players: [
      p("Peter Shilton", "POR", 88), p("Chris Woods", "POR", 81), p("Dave Beasant", "POR", 78),
      p("Gary Stevens", "LD", 84), p("Terry Butcher", "DFC", 88), p("Des Walker", "DFC", 87), p("Stuart Pearce", "LI", 87),
      p("Mark Wright", "DFC", 84), p("Paul Parker", "LD", 83, ["LD", "DFC"]), p("Tony Dorigo", "LI", 81),
      p("Paul Gascoigne", "MCO", 90, ["MCO", "MC"]), p("Bryan Robson", "MC", 87), p("David Platt", "MC", 86, ["MC", "MCO"]),
      p("Steve McMahon", "MCD", 82), p("Chris Waddle", "ED", 87, ["ED", "MCO"]), p("Trevor Steven", "ED", 84),
      p("John Barnes", "EI", 88), p("Gary Lineker", "DC", 91), p("Peter Beardsley", "DC", 86, ["DC", "MCO"]),
      p("Steve Bull", "DC", 80), p("Neil Webb", "MC", 80), p("Steve Hodge", "MC", 80),
    ],
  },
  {
    id: "swe-1958",
    country: "Suecia",
    year: 1958,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_squads",
    players: [
      p("Kalle Svensson", "POR", 88), p("Tore Svensson", "POR", 78), p("Orvar Bergmark", "LD", 86),
      p("Bengt Gustavsson", "DFC", 87), p("Sven Axbom", "DFC", 84), p("Lennart Samuelsson", "LI", 82),
      p("Sigge Parling", "MCD", 84), p("Nils Liedholm", "MC", 92, ["MC", "MCO"]), p("Gunnar Gren", "MCO", 91),
      p("Kurt Hamrin", "ED", 90), p("Agne Simonsson", "DC", 88), p("Lennart Skoglund", "EI", 89),
      p("Henry Kallgren", "DC", 82), p("Reino Borjesson", "DC", 83), p("Yngve Brodd", "EI", 80),
      p("Ake Johansson", "DFC", 80), p("Stig Sundqvist", "MC", 80), p("Ingvar Rydell", "ED", 80),
    ],
  },
  {
    id: "bra-2022",
    country: "Brasil",
    year: 2022,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Alisson 2022", "POR", 91), p("Ederson 2022", "POR", 89), p("Danilo 2022", "LD", 84, ["LD", "LI"]),
      p("Thiago Silva 2022", "DFC", 88), p("Marquinhos 2022", "DFC", 89), p("Alex Sandro", "LI", 83),
      p("Eder Militao", "DFC", 86, ["DFC", "LD"]), p("Casemiro 2022", "MCD", 90), p("Lucas Paqueta", "MC", 86, ["MC", "MCO"]),
      p("Bruno Guimaraes", "MC", 84), p("Neymar 2022", "MCO", 93, ["MCO", "EI"]), p("Raphinha", "ED", 85),
      p("Vinicius Junior", "EI", 90), p("Richarlison", "DC", 86), p("Gabriel Jesus 2022", "DC", 84),
    ],
  },
  {
    id: "por-2022",
    country: "Portugal",
    year: 2022,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Diogo Costa", "POR", 86), p("Rui Patricio 2022", "POR", 82), p("Diogo Dalot", "LD", 84),
      p("Pepe 2022", "DFC", 86), p("Ruben Dias", "DFC", 90), p("Nuno Mendes", "LI", 85),
      p("Joao Cancelo", "LD", 88, ["LD", "LI"]), p("William Carvalho 2022", "MCD", 83), p("Ruben Neves", "MCD", 85),
      p("Bernardo Silva", "MC", 90, ["MC", "ED"]), p("Bruno Fernandes", "MCO", 89), p("Otavio", "MC", 83),
      p("Cristiano Ronaldo 2022", "DC", 88), p("Joao Felix", "EI", 85, ["EI", "DC"]), p("Rafael Leao", "EI", 86),
    ],
  },
  {
    id: "eng-2022",
    country: "Inglaterra",
    year: 2022,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Jordan Pickford 2022", "POR", 86), p("Aaron Ramsdale", "POR", 83), p("Kyle Walker 2022", "LD", 86, ["LD", "DFC"]),
      p("John Stones 2022", "DFC", 86), p("Harry Maguire 2022", "DFC", 84), p("Luke Shaw", "LI", 84),
      p("Kieran Trippier 2022", "LD", 84), p("Declan Rice", "MCD", 88), p("Jude Bellingham 2022", "MC", 88, ["MC", "MCO"]),
      p("Jordan Henderson 2022", "MC", 84), p("Mason Mount", "MCO", 84), p("Phil Foden", "ED", 88, ["ED", "MCO"]),
      p("Bukayo Saka", "ED", 88), p("Harry Kane 2022", "DC", 91), p("Marcus Rashford 2022", "EI", 85),
    ],
  },
  {
    id: "ned-2022",
    country: "Paises Bajos",
    year: 2022,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Andries Noppert", "POR", 82), p("Justin Bijlow", "POR", 81), p("Denzel Dumfries", "LD", 85),
      p("Virgil van Dijk", "DFC", 92), p("Nathan Ake", "DFC", 86, ["DFC", "LI"]), p("Daley Blind", "LI", 83),
      p("Jurrien Timber", "DFC", 84, ["DFC", "LD"]), p("Frenkie de Jong", "MC", 90, ["MC", "MCD"]), p("Marten de Roon", "MCD", 82),
      p("Teun Koopmeiners", "MC", 83), p("Davy Klaassen", "MCO", 82), p("Cody Gakpo", "EI", 86, ["EI", "DC"]),
      p("Steven Bergwijn", "ED", 83, ["ED", "EI"]), p("Memphis Depay 2022", "DC", 86), p("Wout Weghorst", "DC", 82),
    ],
  },
  {
    id: "cro-2022",
    country: "Croacia",
    year: 2022,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Dominik Livakovic 2022", "POR", 86), p("Ivica Ivusic", "POR", 80), p("Josip Juranovic", "LD", 83),
      p("Dejan Lovren 2022", "DFC", 83), p("Josko Gvardiol", "DFC", 88), p("Borna Sosa", "LI", 83),
      p("Josip Sutalo", "DFC", 81), p("Marcelo Brozovic 2022", "MCD", 87), p("Luka Modric 2022", "MC", 91, ["MC", "MCO"]),
      p("Mateo Kovacic 2022", "MC", 86), p("Lovro Majer", "MCO", 83), p("Ivan Perisic 2022", "EI", 86),
      p("Mario Pasalic", "MCO", 82, ["MCO", "ED"]), p("Andrej Kramaric 2022", "DC", 83), p("Bruno Petkovic", "DC", 81),
    ],
  },
  {
    id: "esp-2022",
    country: "Espana",
    year: 2022,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Unai Simon", "POR", 85), p("David Raya", "POR", 82), p("Dani Carvajal", "LD", 84),
      p("Rodri 2022", "DFC", 88, ["DFC", "MCD"]), p("Aymeric Laporte", "DFC", 87), p("Jordi Alba", "LI", 84),
      p("Cesar Azpilicueta", "LD", 82, ["LD", "DFC"]), p("Sergio Busquets 2022", "MCD", 87), p("Pedri", "MC", 89, ["MC", "MCO"]),
      p("Gavi", "MC", 86), p("Koke 2022", "MC", 84), p("Ferran Torres", "ED", 84, ["ED", "EI"]),
      p("Dani Olmo", "EI", 84, ["EI", "MCO"]), p("Alvaro Morata", "DC", 84), p("Marco Asensio", "ED", 83, ["ED", "DC"]),
    ],
  },
  {
    id: "uru-2022",
    country: "Uruguay",
    year: 2022,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Sergio Rochet", "POR", 82), p("Fernando Muslera 2022", "POR", 81), p("Guillermo Varela", "LD", 80),
      p("Jose Maria Gimenez", "DFC", 86), p("Diego Godin 2022", "DFC", 82), p("Mathias Olivera", "LI", 82),
      p("Ronald Araujo", "DFC", 87, ["DFC", "LD"]), p("Rodrigo Bentancur", "MC", 86), p("Federico Valverde", "MC", 89, ["MC", "ED"]),
      p("Lucas Torreira", "MCD", 83), p("Giorgian de Arrascaeta", "MCO", 85), p("Facundo Pellistri", "ED", 80),
      p("Darwin Nunez", "DC", 85, ["DC", "EI"]), p("Luis Suarez 2022", "DC", 83), p("Edinson Cavani 2022", "DC", 82),
    ],
  },
  {
    id: "bra-2014",
    country: "Brasil",
    year: 2014,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads",
    players: [
      p("Julio Cesar 2014", "POR", 85), p("Jefferson 2014", "POR", 80), p("Dani Alves 2014", "LD", 87),
      p("Thiago Silva 2014", "DFC", 91), p("David Luiz 2014", "DFC", 86), p("Marcelo 2014", "LI", 88),
      p("Maicon 2014", "LD", 83), p("Luiz Gustavo", "MCD", 84), p("Paulinho 2014", "MC", 83),
      p("Oscar 2014", "MCO", 86), p("Ramires 2014", "MC", 83), p("Hulk", "ED", 85),
      p("Neymar 2014", "EI", 92), p("Fred 2014", "DC", 82), p("Willian 2014", "ED", 84, ["ED", "EI"]),
    ],
  },
  {
    id: "ned-2014",
    country: "Paises Bajos",
    year: 2014,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads",
    players: [
      p("Jasper Cillessen", "POR", 84), p("Tim Krul", "POR", 81), p("Daryl Janmaat", "LD", 82),
      p("Ron Vlaar", "DFC", 84), p("Stefan de Vrij", "DFC", 84), p("Daley Blind 2014", "LI", 84, ["LI", "MCD"]),
      p("Bruno Martins Indi", "DFC", 82), p("Nigel de Jong 2014", "MCD", 85), p("Wesley Sneijder 2014", "MCO", 87),
      p("Georginio Wijnaldum", "MC", 84), p("Jonathan de Guzman", "MC", 81), p("Arjen Robben 2014", "ED", 93),
      p("Robin van Persie 2014", "DC", 90), p("Dirk Kuyt 2014", "ED", 82, ["ED", "LD"]), p("Memphis Depay 2014", "EI", 82),
    ],
  },
  {
    id: "bel-2014",
    country: "Belgica",
    year: 2014,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads",
    players: [
      p("Thibaut Courtois 2014", "POR", 88), p("Simon Mignolet 2014", "POR", 82), p("Toby Alderweireld 2014", "LD", 84, ["LD", "DFC"]),
      p("Vincent Kompany 2014", "DFC", 88), p("Daniel Van Buyten", "DFC", 84), p("Jan Vertonghen 2014", "LI", 86, ["LI", "DFC"]),
      p("Thomas Vermaelen 2014", "DFC", 82), p("Axel Witsel 2014", "MCD", 85), p("Marouane Fellaini 2014", "MC", 84),
      p("Kevin De Bruyne 2014", "MCO", 87, ["MCO", "MC"]), p("Mousa Dembele 2014", "MC", 84), p("Eden Hazard 2014", "EI", 89),
      p("Dries Mertens 2014", "ED", 85), p("Romelu Lukaku 2014", "DC", 85), p("Divock Origi", "DC", 80),
    ],
  },
  {
    id: "esp-2014",
    country: "Espana",
    year: 2014,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_squads",
    players: [
      p("Iker Casillas 2014", "POR", 88), p("David de Gea 2014", "POR", 84), p("Juanfran 2014", "LD", 84),
      p("Sergio Ramos 2014", "DFC", 91, ["DFC", "LD"]), p("Gerard Pique 2014", "DFC", 88), p("Jordi Alba 2014", "LI", 86),
      p("Cesar Azpilicueta 2014", "LD", 83, ["LD", "LI"]), p("Sergio Busquets 2014", "MCD", 89), p("Xabi Alonso 2014", "MCD", 87),
      p("Xavi 2014", "MC", 88), p("Andres Iniesta 2014", "MCO", 91, ["MCO", "MC"]), p("David Silva 2014", "MCO", 88),
      p("Pedro 2014", "ED", 84, ["ED", "EI"]), p("Diego Costa 2014", "DC", 86), p("Fernando Torres 2014", "DC", 82),
    ],
  },
  {
    id: "bra-2006",
    country: "Brasil",
    year: 2006,
    rating: 92,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Dida 2006", "POR", 88), p("Rogerio Ceni 2006", "POR", 84), p("Cafu 2006", "LD", 88),
      p("Lucio 2006", "DFC", 89), p("Juan 2006", "DFC", 86), p("Roberto Carlos 2006", "LI", 88),
      p("Cicinho", "LD", 82), p("Emerson 2006", "MCD", 86), p("Ze Roberto 2006", "MC", 87),
      p("Kaka 2006", "MCO", 92), p("Juninho Pernambucano", "MC", 88, ["MC", "MCO"]), p("Ronaldinho 2006", "EI", 94, ["EI", "MCO"]),
      p("Ronaldo 2006", "DC", 90), p("Adriano 2006", "DC", 88), p("Robinho 2006", "ED", 86, ["ED", "EI"]),
    ],
  },
  {
    id: "arg-2006",
    country: "Argentina",
    year: 2006,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Roberto Abbondanzieri", "POR", 86), p("Leo Franco", "POR", 80), p("Nicolas Burdisso", "LD", 82, ["LD", "DFC"]),
      p("Roberto Ayala", "DFC", 90), p("Gabriel Heinze", "DFC", 86, ["DFC", "LI"]), p("Juan Pablo Sorin", "LI", 87),
      p("Fabricio Coloccini", "DFC", 82), p("Javier Mascherano 2006", "MCD", 88), p("Esteban Cambiasso", "MC", 88),
      p("Juan Roman Riquelme", "MCO", 92), p("Maxi Rodriguez 2006", "ED", 87, ["ED", "MC"]), p("Lionel Messi 2006", "ED", 85),
      p("Hernan Crespo", "DC", 89), p("Carlos Tevez 2006", "DC", 87), p("Javier Saviola", "DC", 84),
    ],
  },
  {
    id: "eng-2006",
    country: "Inglaterra",
    year: 2006,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Paul Robinson", "POR", 84), p("David James 2006", "POR", 81), p("Gary Neville", "LD", 86),
      p("Rio Ferdinand", "DFC", 90), p("John Terry", "DFC", 91), p("Ashley Cole", "LI", 90),
      p("Jamie Carragher", "DFC", 84, ["DFC", "LD"]), p("Owen Hargreaves", "MCD", 85), p("Frank Lampard", "MC", 90),
      p("Steven Gerrard", "MC", 91, ["MC", "MCO"]), p("David Beckham 2006", "ED", 88), p("Joe Cole", "EI", 85, ["EI", "MCO"]),
      p("Wayne Rooney 2006", "DC", 90, ["DC", "MCO"]), p("Michael Owen 2006", "DC", 84), p("Peter Crouch", "DC", 82),
    ],
  },
  {
    id: "esp-2006",
    country: "Espana",
    year: 2006,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_squads",
    players: [
      p("Iker Casillas 2006", "POR", 91), p("Pepe Reina 2006", "POR", 83), p("Sergio Ramos 2006", "LD", 86, ["LD", "DFC"]),
      p("Carles Puyol 2006", "DFC", 90), p("Pablo Ibanez", "DFC", 83), p("Mariano Pernia", "LI", 82),
      p("Antonio Lopez", "LI", 81), p("Xabi Alonso 2006", "MCD", 86), p("Xavi 2006", "MC", 88),
      p("Cesc Fabregas 2006", "MC", 84), p("Luis Garcia", "MCO", 84, ["MCO", "ED"]), p("Joaquin", "ED", 84),
      p("David Villa 2006", "DC", 88), p("Fernando Torres 2006", "DC", 86), p("Raul 2006", "DC", 85, ["DC", "MCO"]),
    ],
  },
  {
    id: "ger-2002",
    country: "Alemania",
    year: 2002,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Oliver Kahn", "POR", 96), p("Jens Lehmann 2002", "POR", 84), p("Thomas Linke", "DFC", 84),
      p("Carsten Ramelow", "DFC", 82, ["DFC", "MCD"]), p("Christoph Metzelder", "DFC", 83), p("Christian Ziege", "LI", 84),
      p("Marko Rehmer", "LD", 81, ["LD", "DFC"]), p("Dietmar Hamann", "MCD", 86), p("Michael Ballack", "MC", 91, ["MC", "MCO"]),
      p("Bernd Schneider", "ED", 85, ["ED", "MC"]), p("Torsten Frings", "MC", 84), p("Oliver Neuville", "ED", 83, ["ED", "DC"]),
      p("Miroslav Klose 2002", "DC", 86), p("Carsten Jancker", "DC", 81), p("Gerald Asamoah", "DC", 80),
    ],
  },
  {
    id: "eng-2002",
    country: "Inglaterra",
    year: 2002,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("David Seaman 2002", "POR", 86), p("Nigel Martyn", "POR", 80), p("Danny Mills", "LD", 81),
      p("Rio Ferdinand 2002", "DFC", 88), p("Sol Campbell", "DFC", 89), p("Ashley Cole 2002", "LI", 86),
      p("Wes Brown", "DFC", 80), p("Nicky Butt", "MCD", 84), p("Paul Scholes", "MC", 89, ["MC", "MCO"]),
      p("David Beckham 2002", "ED", 90), p("Owen Hargreaves 2002", "MC", 81), p("Joe Cole 2002", "MCO", 80),
      p("Michael Owen 2002", "DC", 90), p("Emile Heskey", "DC", 82, ["DC", "EI"]), p("Teddy Sheringham", "DC", 83),
    ],
  },
  {
    id: "esp-2002",
    country: "Espana",
    year: 2002,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Iker Casillas 2002", "POR", 88), p("Canizares 2002", "POR", 85), p("Carles Puyol 2002", "LD", 86, ["LD", "DFC"]),
      p("Fernando Hierro", "DFC", 89), p("Nadal", "DFC", 84), p("Juanfran 2002", "LI", 80),
      p("Curro Torres", "LD", 80), p("David Albelda", "MCD", 84), p("Xavi 2002", "MC", 84),
      p("Juan Carlos Valeron", "MCO", 87), p("Luis Enrique", "MC", 86, ["MC", "ED"]), p("Joaquin 2002", "ED", 83),
      p("Raul 2002", "DC", 90), p("Fernando Morientes", "DC", 86), p("Diego Tristan", "DC", 83),
    ],
  },
  {
    id: "ita-2002",
    country: "Italia",
    year: 2002,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Gianluigi Buffon 2002", "POR", 93), p("Francesco Toldo", "POR", 87), p("Christian Panucci", "LD", 85),
      p("Fabio Cannavaro 2002", "DFC", 91), p("Alessandro Nesta 2002", "DFC", 91), p("Paolo Maldini 2002", "LI", 93, ["LI", "DFC"]),
      p("Marco Materazzi 2002", "DFC", 83), p("Luigi Di Biagio", "MCD", 85), p("Damiano Tommasi", "MC", 83),
      p("Francesco Totti 2002", "MCO", 92), p("Cristiano Doni", "MCO", 82), p("Gianluca Zambrotta 2002", "ED", 86, ["ED", "LD"]),
      p("Christian Vieri", "DC", 91), p("Alessandro Del Piero 2002", "DC", 88, ["DC", "EI"]), p("Vincenzo Montella", "DC", 84),
    ],
  },
  {
    id: "bra-1998",
    country: "Brasil",
    year: 1998,
    rating: 93,
    source: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads",
    players: [
      p("Claudio Taffarel 1998", "POR", 89), p("Dida 1998", "POR", 84), p("Cafu 1998", "LD", 92),
      p("Aldair 1998", "DFC", 88), p("Junior Baiano", "DFC", 84), p("Roberto Carlos 1998", "LI", 93),
      p("Ze Carlos", "LD", 80), p("Dunga 1998", "MCD", 87), p("Cesar Sampaio", "MC", 86),
      p("Rivaldo 1998", "MCO", 92, ["MCO", "EI"]), p("Leonardo 1998", "MCO", 87), p("Bebeto 1998", "DC", 87),
      p("Ronaldo 1998", "DC", 96), p("Denilson 1998", "EI", 86), p("Edmundo", "DC", 84),
    ],
  },
  {
    id: "cro-1998",
    country: "Croacia",
    year: 1998,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads",
    players: [
      p("Drazen Ladic", "POR", 86), p("Marijan Mrmic", "POR", 78), p("Mario Stanic", "LD", 84, ["LD", "MC"]),
      p("Slaven Bilic", "DFC", 85), p("Igor Stimac", "DFC", 84), p("Robert Jarni", "LI", 88, ["LI", "EI"]),
      p("Dario Simic", "DFC", 82, ["DFC", "LD"]), p("Zvonimir Boban", "MC", 89, ["MC", "MCO"]), p("Robert Prosinecki", "MCO", 88),
      p("Aljosa Asanovic", "MC", 86), p("Nikola Jurcevic", "MCD", 80), p("Goran Vlaovic", "ED", 83, ["ED", "DC"]),
      p("Davor Suker", "DC", 91), p("Alen Boksic", "DC", 86), p("Silvio Maric", "EI", 80),
    ],
  },
  {
    id: "arg-1998",
    country: "Argentina",
    year: 1998,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads",
    players: [
      p("Carlos Roa", "POR", 86), p("German Burgos", "POR", 82), p("Javier Zanetti 1998", "LD", 90),
      p("Roberto Ayala 1998", "DFC", 88), p("Jose Chamot", "DFC", 84, ["DFC", "LI"]), p("Nelson Vivas", "LI", 82, ["LI", "LD"]),
      p("Mauricio Pineda", "DFC", 80), p("Diego Simeone", "MCD", 89), p("Matias Almeyda", "MCD", 86),
      p("Juan Sebastian Veron", "MC", 89, ["MC", "MCO"]), p("Marcelo Gallardo", "MCO", 86), p("Ariel Ortega", "ED", 88, ["ED", "MCO"]),
      p("Gabriel Batistuta", "DC", 93), p("Hernan Crespo 1998", "DC", 86), p("Claudio Lopez", "EI", 86),
    ],
  },
  {
    id: "ita-1998",
    country: "Italia",
    year: 1998,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1998_FIFA_World_Cup_squads",
    players: [
      p("Gianluca Pagliuca", "POR", 88), p("Gianluigi Buffon 1998", "POR", 85), p("Giuseppe Bergomi 1998", "LD", 85, ["LD", "DFC"]),
      p("Fabio Cannavaro 1998", "DFC", 89), p("Alessandro Nesta 1998", "DFC", 89), p("Paolo Maldini 1998", "LI", 93, ["LI", "DFC"]),
      p("Moreno Torricelli", "LD", 82), p("Dino Baggio", "MCD", 85), p("Demetrio Albertini", "MC", 88),
      p("Roberto Baggio 1998", "MCO", 90, ["MCO", "DC"]), p("Francesco Moriero", "ED", 83), p("Alessandro Del Piero 1998", "EI", 89, ["EI", "DC"]),
      p("Christian Vieri 1998", "DC", 90), p("Filippo Inzaghi 1998", "DC", 84), p("Enrico Chiesa", "DC", 83),
    ],
  },
  {
    id: "ita-1994",
    country: "Italia",
    year: 1994,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Gianluca Pagliuca 1994", "POR", 88), p("Luca Marchegiani", "POR", 82), p("Mauro Tassotti", "LD", 84),
      p("Franco Baresi 1994", "DFC", 93), p("Alessandro Costacurta", "DFC", 89), p("Paolo Maldini 1994", "LI", 94, ["LI", "DFC"]),
      p("Antonio Benarrivo", "LD", 83, ["LD", "LI"]), p("Dino Baggio 1994", "MC", 87, ["MC", "MCD"]), p("Demetrio Albertini 1994", "MC", 87),
      p("Roberto Donadoni", "ED", 87, ["ED", "MC"]), p("Nicola Berti", "MC", 84), p("Roberto Baggio", "MCO", 95, ["MCO", "DC"]),
      p("Giuseppe Signori", "DC", 87, ["DC", "EI"]), p("Pierluigi Casiraghi", "DC", 83), p("Daniele Massaro 1994", "DC", 84),
    ],
  },
  {
    id: "swe-1994",
    country: "Suecia",
    year: 1994,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Thomas Ravelli", "POR", 87), p("Lars Eriksson", "POR", 78), p("Roland Nilsson", "LD", 85),
      p("Patrik Andersson", "DFC", 86), p("Joachim Bjorklund", "DFC", 83), p("Roger Ljung", "LI", 82),
      p("Jan Eriksson", "DFC", 80), p("Stefan Schwarz", "MCD", 84), p("Jonas Thern", "MC", 86),
      p("Klas Ingesson", "MC", 83), p("Tomas Brolin", "MCO", 89, ["MCO", "DC"]), p("Kenneth Andersson", "DC", 86),
      p("Martin Dahlin", "DC", 87), p("Henrik Larsson 1994", "EI", 82, ["EI", "DC"]), p("Anders Limpar", "EI", 83),
    ],
  },
  {
    id: "col-2018",
    country: "Colombia",
    year: 2018,
    rating: 86,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("David Ospina 2018", "POR", 85), p("Camilo Vargas 2018", "POR", 79), p("Santiago Arias 2018", "LD", 83),
      p("Yerry Mina", "DFC", 84), p("Davinson Sanchez", "DFC", 85), p("Johan Mojica", "LI", 80),
      p("Oscar Murillo", "DFC", 80), p("Wilmar Barrios", "MCD", 84), p("Carlos Sanchez 2018", "MCD", 82),
      p("Juan Quintero 2018", "MCO", 84), p("James Rodriguez 2018", "MCO", 88), p("Juan Cuadrado 2018", "ED", 86),
      p("Luis Muriel", "EI", 82, ["EI", "DC"]), p("Radamel Falcao", "DC", 85), p("Carlos Bacca 2018", "DC", 81),
    ],
  },
  {
    id: "bel-1986",
    country: "Belgica",
    year: 1986,
    rating: 86,
    source: "https://en.wikipedia.org/wiki/1986_FIFA_World_Cup_squads",
    players: [
      p("Jean-Marie Pfaff", "POR", 90), p("Michel Preud'homme 1986", "POR", 82), p("Eric Gerets", "LD", 87),
      p("Michel Renquin", "DFC", 83), p("Stephane Demol", "DFC", 83), p("Franky Vercauteren", "LI", 84, ["LI", "EI"]),
      p("Georges Grun", "DFC", 82), p("Jan Ceulemans", "MC", 88, ["MC", "MCO"]), p("Franky Van der Elst", "MCD", 84),
      p("Enzo Scifo", "MCO", 89), p("Rene Vandereycken", "MC", 82), p("Nico Claesen", "DC", 83),
      p("Erwin Vandenbergh", "DC", 84), p("Daniel Veyt", "ED", 80), p("Marc Degryse", "MCO", 81),
    ],
  },
  {
    id: "hun-1982",
    country: "Hungria",
    year: 1982,
    rating: 82,
    source: "https://en.wikipedia.org/wiki/1982_FIFA_World_Cup_squads",
    players: [
      p("Ferenc Meszaros", "POR", 81), p("Bela Katzirz", "POR", 78), p("Laszlo Balint", "LD", 82, ["LD", "DFC"]),
      p("Imre Garaba", "DFC", 82), p("Tibor Rab", "DFC", 80), p("Jozsef Toth 1982", "LI", 80),
      p("Sandor Muller", "MCD", 80), p("Tibor Nyilasi", "MC", 86, ["MC", "MCO"]), p("Laszlo Fazekas", "ED", 84),
      p("Andras Torocsik", "MCO", 83), p("Laszlo Kiss", "DC", 84), p("Gabor Poloskei", "MC", 80),
      p("Jozsef Mucha", "MC", 79), p("Ferenc Csongradi", "LI", 79), p("Jozsef Kardos", "DFC", 79),
    ],
  },
  {
    id: "bra-1950",
    country: "Brasil",
    year: 1950,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1950_FIFA_World_Cup_squads",
    players: [
      p("Barbosa", "POR", 88), p("Castilho 1950", "POR", 80), p("Augusto", "LD", 86),
      p("Juvenal", "DFC", 84), p("Bigode", "LI", 83), p("Danilo Alvim", "MCD", 89),
      p("Bauer", "MC", 86), p("Jair da Rosa Pinto", "MCO", 89), p("Friaca", "ED", 86),
      p("Ademir", "DC", 93), p("Chico", "EI", 87), p("Zizinho", "MCO", 93, ["MCO", "MC"]),
      p("Baltazar", "DC", 84), p("Alfredo", "DFC", 80), p("Nena", "DFC", 80),
    ],
  },
  {
    id: "esp-1950",
    country: "Espana",
    year: 1950,
    rating: 85,
    source: "https://en.wikipedia.org/wiki/1950_FIFA_World_Cup_squads",
    players: [
      p("Antoni Ramallets", "POR", 86), p("Ignacio Eizaguirre", "POR", 82), p("Cesar Lesmes", "LD", 81),
      p("Parra", "DFC", 83), p("Gonzalvo III", "DFC", 82), p("Jose Parra", "LI", 81),
      p("Puchades", "MCD", 84), p("Nando", "MC", 80), p("Panizo", "MCO", 84),
      p("Basora", "ED", 85), p("Zarra", "DC", 90), p("Gainza", "EI", 86),
      p("Cesar Rodriguez", "DC", 84), p("Molowny", "MCO", 82), p("Igoa", "EI", 81),
    ],
  },
  {
    id: "ger-1954",
    country: "Alemania",
    year: 1954,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/1954_FIFA_World_Cup_squads",
    players: [
      p("Toni Turek", "POR", 88), p("Heinrich Kwiatkowski", "POR", 78), p("Jupp Posipal", "LD", 84, ["LD", "DFC"]),
      p("Werner Liebrich", "DFC", 88), p("Werner Kohlmeyer", "LI", 84), p("Horst Eckel", "MCD", 86),
      p("Karl Mai", "MC", 84), p("Fritz Walter", "MCO", 94), p("Helmut Rahn", "ED", 91),
      p("Max Morlock", "DC", 89), p("Hans Schafer", "EI", 88), p("Ottmar Walter", "DC", 86),
      p("Alfred Pfaff", "MCO", 82), p("Bernhard Klodt", "ED", 80), p("Herbert Erhardt", "DFC", 80),
    ],
  },
  {
    id: "uru-1954",
    country: "Uruguay",
    year: 1954,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/1954_FIFA_World_Cup_squads",
    players: [
      p("Roque Maspoli 1954", "POR", 88), p("Anibal Paz 1954", "POR", 78), p("Matias Gonzalez 1954", "LD", 84),
      p("William Martinez 1954", "DFC", 86), p("Eusebio Tejera 1954", "DFC", 85), p("Schubert Gambetta 1954", "LI", 83),
      p("Obdulio Varela 1954", "MCD", 90), p("Victor Rodriguez Andrade 1954", "MC", 87), p("Julio Perez 1954", "MC", 84),
      p("Juan Alberto Schiaffino 1954", "MCO", 92), p("Oscar Miguez 1954", "DC", 88), p("Carlos Borges", "ED", 84),
      p("Ernesto Vidal 1954", "EI", 83), p("Javier Ambrois", "DC", 82), p("Hector Souto", "DFC", 79),
    ],
  },
  {
    id: "ita-1970",
    country: "Italia",
    year: 1970,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup_squads",
    players: [
      p("Enrico Albertosi", "POR", 89), p("Dino Zoff 1970", "POR", 86), p("Tarcisio Burgnich", "LD", 88),
      p("Roberto Rosato", "DFC", 87), p("Pierluigi Cera", "DFC", 86), p("Giacinto Facchetti", "LI", 93),
      p("Aristide Guarneri", "DFC", 82), p("Sandro Mazzola", "MCO", 91), p("Giancarlo De Sisti", "MC", 87),
      p("Angelo Domenghini", "ED", 86), p("Luigi Riva", "DC", 92), p("Roberto Boninsegna", "DC", 88),
      p("Gianni Rivera", "MCO", 92), p("Franco Causio 1970", "EI", 82), p("Mario Bertini", "MCD", 84),
    ],
  },
  {
    id: "ger-1970",
    country: "Alemania",
    year: 1970,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/1970_FIFA_World_Cup_squads",
    players: [
      p("Sepp Maier 1970", "POR", 90), p("Horst Wolter", "POR", 78), p("Berti Vogts 1970", "LD", 88),
      p("Willi Schulz", "DFC", 86), p("Karl-Heinz Schnellinger", "LI", 88, ["LI", "DFC"]), p("Horst-Dieter Hottges 1970", "DFC", 84),
      p("Franz Beckenbauer 1970", "MC", 95, ["MC", "DFC"]), p("Wolfgang Overath 1970", "MC", 90), p("Helmut Haller", "MCO", 86),
      p("Jurgen Grabowski 1970", "ED", 85), p("Gerd Muller 1970", "DC", 95), p("Uwe Seeler", "DC", 90),
      p("Sigfried Held", "EI", 84), p("Hannes Lohr", "EI", 82), p("Klaus Fichtel", "DFC", 82),
    ],
  },
  {
    id: "ned-1978",
    country: "Paises Bajos",
    year: 1978,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1978_FIFA_World_Cup_squads",
    players: [
      p("Piet Schrijvers 1978", "POR", 87), p("Jan Jongbloed 1978", "POR", 84), p("Wim Suurbier 1978", "LD", 86),
      p("Ruud Krol 1978", "DFC", 91, ["DFC", "LI"]), p("Ernie Brandts", "DFC", 85), p("Jan Poortvliet", "LI", 82),
      p("Arie Haan 1978", "MCD", 88, ["MCD", "DFC"]), p("Johan Neeskens 1978", "MC", 90), p("Willy van de Kerkhof 1978", "MC", 85),
      p("Rene van de Kerkhof 1978", "ED", 87), p("Rob Rensenbrink 1978", "EI", 91), p("Johnny Rep 1978", "DC", 87),
      p("Dick Nanninga 1978", "DC", 83), p("Wim Jansen 1978", "MCD", 84), p("Piet Wildschut", "LI", 80),
    ],
  },
  {
    id: "bra-1978",
    country: "Brasil",
    year: 1978,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/1978_FIFA_World_Cup_squads",
    players: [
      p("Leao 1978", "POR", 87), p("Waldir Peres 1978", "POR", 82), p("Nelinho", "LD", 86),
      p("Oscar 1978", "DFC", 85), p("Amaral", "DFC", 84), p("Edinho 1978", "LI", 82, ["LI", "DFC"]),
      p("Toninho Cerezo 1978", "MC", 87), p("Batista 1978", "MCD", 84), p("Rivelino 1978", "MCO", 88),
      p("Zico 1978", "MCO", 89), p("Dirceu 1978", "EI", 85), p("Roberto Dinamite 1978", "DC", 86),
      p("Reinaldo", "DC", 84), p("Gil", "ED", 82), p("Chicao", "MCD", 80),
    ],
  },

  {
    id: "bul-1994",
    country: "Bulgaria",
    year: 1994,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Borislav Mihaylov", "POR", 86), p("Plamen Nikolov", "POR", 76),
      p("Emil Kremenliev", "LD", 81), p("Trifon Ivanov", "DFC", 86), p("Petar Hubchev", "DFC", 84), p("Iliyan Kiryakov", "LI", 80),
      p("Zlatko Yankov", "MCD", 84), p("Krasimir Balakov", "MCO", 90), p("Yordan Letchkov", "MC", 88), p("Daniel Borimirov", "MC", 80),
      p("Emil Kostadinov", "ED", 87), p("Hristo Stoichkov", "EI", 94, ["EI", "DC"]), p("Luboslav Penev", "DC", 86), p("Nasko Sirakov", "DC", 83),
    ],
  },
  {
    id: "ned-1994",
    country: "Paises Bajos",
    year: 1994,
    rating: 90,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Ed de Goey", "POR", 86), p("Theo Snelders", "POR", 78),
      p("Berry van Aerle", "LD", 82), p("Ronald Koeman", "DFC", 91), p("Frank de Boer", "DFC", 88), p("Arthur Numan", "LI", 84), p("Danny Blind", "DFC", 85),
      p("Frank Rijkaard", "MCD", 91), p("Jan Wouters", "MC", 86), p("Wim Jonk", "MC", 85), p("Rob Witschge", "MCO", 83), p("Aron Winter", "MC", 84),
      p("Marc Overmars", "EI", 87), p("Dennis Bergkamp", "DC", 92, ["DC", "MCO"]), p("Bryan Roy", "EI", 85), p("Peter van Vossen", "DC", 80),
    ],
  },
  {
    id: "ger-1994",
    country: "Alemania",
    year: 1994,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Bodo Illgner", "POR", 88), p("Andreas Kopke", "POR", 84),
      p("Thomas Helmer", "LD", 85), p("Jurgen Kohler", "DFC", 90), p("Matthias Sammer", "DFC", 89, ["DFC", "MCD"]), p("Andreas Brehme", "LI", 88), p("Guido Buchwald", "DFC", 86),
      p("Stefan Effenberg", "MC", 88), p("Lothar Matthaus", "MC", 91, ["MC", "MCD"]), p("Thomas Hassler", "MCO", 90), p("Andreas Moller", "MCO", 88),
      p("Mario Basler", "ED", 84), p("Jurgen Klinsmann", "DC", 91), p("Rudi Voller", "DC", 88), p("Karl-Heinz Riedle", "DC", 85),
    ],
  },
  {
    id: "rom-1994",
    country: "Rumania",
    year: 1994,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup_squads",
    players: [
      p("Florin Prunea", "POR", 84), p("Bogdan Stelea", "POR", 82),
      p("Dan Petrescu", "LD", 86), p("Miodrag Belodedici", "DFC", 85), p("Gheorghe Popescu", "DFC", 88), p("Tibor Selymes", "LI", 82), p("Daniel Prodan", "DFC", 83),
      p("Dorinel Munteanu", "MC", 85), p("Ionut Lupescu", "MCD", 84), p("Gheorghe Hagi", "MCO", 93), p("Basarab Panduru", "MCO", 82),
      p("Ilie Dumitrescu", "EI", 87), p("Marius Lacatus", "ED", 84), p("Florin Raducioiu", "DC", 88), p("Viorel Moldovan", "DC", 82),
    ],
  },
  {
    id: "tur-2002",
    country: "Turquia",
    year: 2002,
    rating: 87,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Rustu Recber", "POR", 88), p("Omer Catkic", "POR", 76),
      p("Fatih Akyel", "LD", 83), p("Alpay Ozalan", "DFC", 85), p("Bulent Korkmaz", "DFC", 85), p("Ergun Penbe", "LI", 84), p("Umit Ozat", "LI", 82),
      p("Tugay Kerimoglu", "MC", 87), p("Emre Belozoglu", "MC", 86), p("Yildiray Basturk", "MCO", 88), p("Okan Buruk", "MC", 84), p("Suat Kaya", "MCD", 82),
      p("Hasan Sas", "EI", 87), p("Nihat Kahveci", "ED", 86), p("Hakan Sukur", "DC", 88), p("Ilhan Mansiz", "DC", 86),
    ],
  },
  {
    id: "kor-2002",
    country: "Corea del Sur",
    year: 2002,
    rating: 85,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Lee Woon-jae", "POR", 84), p("Kim Byung-ji", "POR", 78),
      p("Song Chong-gug", "LD", 84), p("Hong Myung-bo", "DFC", 87), p("Choi Jin-cheul", "DFC", 83), p("Lee Young-pyo", "LI", 84), p("Kim Tae-young", "DFC", 82),
      p("Yoo Sang-chul", "MC", 86), p("Kim Nam-il", "MCD", 83), p("Park Ji-sung", "MCO", 87), p("Lee Chun-soo", "ED", 82),
      p("Seol Ki-hyeon", "EI", 83), p("Ahn Jung-hwan", "DC", 85), p("Hwang Sun-hong", "DC", 84), p("Cha Du-ri", "DC", 80),
    ],
  },
  {
    id: "sen-2002",
    country: "Senegal",
    year: 2002,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Tony Sylva", "POR", 83), p("Omar Diallo", "POR", 75),
      p("Omar Daf", "LD", 81), p("Lamine Diatta", "DFC", 82), p("Ferdinand Coly", "DFC", 82), p("Habib Beye", "LI", 81), p("Pape Malick Diop", "DFC", 80),
      p("Aliou Cisse", "MCD", 83), p("Papa Bouba Diop", "MC", 85), p("Salif Diao", "MC", 84), p("Khalilou Fadiga", "MCO", 86),
      p("Henri Camara", "ED", 85), p("El Hadji Diouf", "EI", 88), p("Pape Thiaw", "DC", 82), p("Souleymane Camara", "DC", 80),
    ],
  },
  {
    id: "usa-2002",
    country: "Estados Unidos",
    year: 2002,
    rating: 83,
    source: "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_squads",
    players: [
      p("Brad Friedel", "POR", 86), p("Kasey Keller", "POR", 84),
      p("Tony Sanneh", "LD", 82), p("Eddie Pope", "DFC", 84), p("Gregg Berhalter", "DFC", 80), p("Frankie Hejduk", "LI", 81), p("Jeff Agoos", "DFC", 79),
      p("Claudio Reyna", "MC", 87), p("John O'Brien", "MC", 84), p("Pablo Mastroeni", "MCD", 80), p("Landon Donovan", "MCO", 85),
      p("Earnie Stewart", "ED", 82), p("DaMarcus Beasley", "EI", 83), p("Brian McBride", "DC", 84), p("Clint Mathis", "DC", 82),
    ],
  },
  {
    id: "eng-2018",
    country: "Inglaterra",
    year: 2018,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Jordan Pickford", "POR", 86), p("Jack Butland", "POR", 80),
      p("Kieran Trippier", "LD", 86), p("Kyle Walker", "DFC", 86, ["DFC", "LD"]), p("John Stones", "DFC", 86), p("Harry Maguire", "DFC", 85), p("Ashley Young", "LI", 83),
      p("Jordan Henderson", "MCD", 86), p("Dele Alli", "MCO", 86), p("Jesse Lingard", "MCO", 84), p("Ruben Loftus-Cheek", "MC", 80), p("Eric Dier", "MCD", 82),
      p("Raheem Sterling", "EI", 89), p("Marcus Rashford", "ED", 85), p("Harry Kane", "DC", 93), p("Jamie Vardy", "DC", 86),
    ],
  },
  {
    id: "uru-2018",
    country: "Uruguay",
    year: 2018,
    rating: 88,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Fernando Muslera", "POR", 86), p("Martin Silva", "POR", 78),
      p("Martin Caceres", "LD", 84), p("Diego Godin", "DFC", 91), p("Jose Gimenez", "DFC", 88), p("Diego Laxalt", "LI", 83), p("Sebastian Coates", "DFC", 82),
      p("Lucas Torreira", "MCD", 85), p("Matias Vecino", "MC", 84), p("Rodrigo Bentancur", "MC", 86), p("Nahitan Nandez", "MC", 83), p("Giorgian De Arrascaeta", "MCO", 84),
      p("Cristian Rodriguez", "EI", 82), p("Edinson Cavani", "DC", 91), p("Luis Suarez", "DC", 92), p("Maxi Gomez", "DC", 80),
    ],
  },
  {
    id: "bra-2018",
    country: "Brasil",
    year: 2018,
    rating: 91,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Alisson", "POR", 90), p("Ederson", "POR", 87),
      p("Fagner", "LD", 83), p("Thiago Silva", "DFC", 91), p("Miranda", "DFC", 88), p("Marcelo", "LI", 91), p("Filipe Luis", "LI", 85),
      p("Casemiro", "MCD", 90), p("Paulinho", "MC", 86), p("Philippe Coutinho", "MCO", 90), p("Fernandinho", "MCD", 85), p("Willian", "ED", 87),
      p("Neymar", "EI", 94), p("Gabriel Jesus", "DC", 87), p("Roberto Firmino", "DC", 88), p("Douglas Costa", "ED", 86),
    ],
  },
  {
    id: "rus-2018",
    country: "Rusia",
    year: 2018,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_squads",
    players: [
      p("Igor Akinfeev", "POR", 85), p("Andrey Lunyov", "POR", 78),
      p("Mario Fernandes", "LD", 85), p("Sergei Ignashevich", "DFC", 84), p("Ilya Kutepov", "DFC", 80), p("Yuri Zhirkov", "LI", 83), p("Fedor Kudryashov", "DFC", 80),
      p("Roman Zobnin", "MC", 83), p("Daler Kuzyaev", "MC", 82), p("Aleksandr Golovin", "MCO", 86), p("Alan Dzagoev", "MCO", 84), p("Aleksandr Samedov", "ED", 82),
      p("Denis Cheryshev", "EI", 85), p("Artem Dzyuba", "DC", 86), p("Fedor Smolov", "DC", 84), p("Aleksei Miranchuk", "MCO", 81),
    ],
  },

  {
    id: "gha-2010",
    country: "Ghana",
    year: 2010,
    rating: 85,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Richard Kingson", "POR", 84), p("Daniel Agyei", "POR", 74),
      p("John Paintsil", "LD", 83), p("John Mensah", "DFC", 85), p("Isaac Vorsah", "DFC", 82), p("Hans Sarpei", "LI", 81), p("Samuel Inkoom", "LD", 80),
      p("Anthony Annan", "MCD", 84), p("Kevin-Prince Boateng", "MC", 86), p("Sulley Muntari", "MC", 85), p("Andre Ayew", "EI", 84), p("Kwadwo Asamoah", "MCO", 85),
      p("Asamoah Gyan", "DC", 87), p("Dominic Adiyiah", "DC", 80), p("Quincy Owusu-Abeyie", "ED", 80), p("Stephen Appiah", "MC", 82),
    ],
  },
  {
    id: "par-2010",
    country: "Paraguay",
    year: 2010,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Justo Villar", "POR", 84), p("Aldo Bobadilla", "POR", 78),
      p("Denis Caniza", "LD", 81), p("Paulo Da Silva", "DFC", 84), p("Antolin Alcaraz", "DFC", 83), p("Claudio Morel Rodriguez", "LI", 82), p("Julio Manzur", "DFC", 80),
      p("Victor Caceres", "MCD", 83), p("Cristian Riveros", "MC", 84), p("Enrique Vera", "MC", 82), p("Edgar Barreto", "MC", 82), p("Jonathan Santana", "MCO", 80),
      p("Roque Santa Cruz", "DC", 86), p("Lucas Barrios", "DC", 85), p("Nelson Haedo Valdez", "DC", 84), p("Oscar Cardozo", "DC", 85),
    ],
  },
  {
    id: "arg-2010",
    country: "Argentina",
    year: 2010,
    rating: 89,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Sergio Romero", "POR", 84), p("Mariano Andujar", "POR", 80),
      p("Nicolas Otamendi", "LD", 84, ["LD", "DFC"]), p("Walter Samuel", "DFC", 88), p("Martin Demichelis", "DFC", 86), p("Gabriel Heinze", "LI", 84), p("Nicolas Burdisso", "DFC", 82),
      p("Javier Mascherano", "MCD", 90), p("Juan Sebastian Veron", "MC", 87), p("Angel Di Maria", "EI", 87), p("Maxi Rodriguez", "MC", 84), p("Javier Pastore", "MCO", 82),
      p("Lionel Messi", "ED", 96, ["ED", "MCO"]), p("Gonzalo Higuain", "DC", 90), p("Carlos Tevez", "DC", 89), p("Sergio Aguero", "DC", 88),
    ],
  },
  {
    id: "chi-2010",
    country: "Chile",
    year: 2010,
    rating: 85,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Claudio Bravo", "POR", 85), p("Miguel Pinto", "POR", 76),
      p("Mauricio Isla", "LD", 84), p("Gary Medel", "DFC", 85, ["DFC", "MCD"]), p("Waldo Ponce", "DFC", 82), p("Jean Beausejour", "LI", 82, ["LI", "EI"]), p("Gonzalo Jara", "DFC", 82),
      p("Arturo Vidal", "MC", 87), p("Carlos Carmona", "MCD", 82), p("Matias Fernandez", "MCO", 86), p("Jorge Valdivia", "MCO", 85), p("Rodrigo Millar", "MC", 80),
      p("Alexis Sanchez", "ED", 88), p("Humberto Suazo", "DC", 86), p("Mark Gonzalez", "EI", 83), p("Esteban Paredes", "DC", 81),
    ],
  },
  {
    id: "mex-2010",
    country: "Mexico",
    year: 2010,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_squads",
    players: [
      p("Guillermo Ochoa", "POR", 84), p("Oscar Perez", "POR", 82),
      p("Ricardo Osorio", "LD", 82), p("Rafael Marquez", "DFC", 87, ["DFC", "MCD"]), p("Francisco Rodriguez", "DFC", 83), p("Carlos Salcido", "LI", 84), p("Hector Moreno", "DFC", 81),
      p("Gerardo Torrado", "MCD", 83), p("Israel Castro", "MC", 80), p("Giovani dos Santos", "MCO", 85, ["MCO", "ED"]), p("Andres Guardado", "EI", 85), p("Pablo Barrera", "ED", 81),
      p("Javier Hernandez", "DC", 84), p("Guillermo Franco", "DC", 82), p("Cuauhtemoc Blanco", "MCO", 83), p("Carlos Vela", "EI", 83),
    ],
  },
  {
    id: "mor-2022",
    country: "Marruecos",
    year: 2022,
    rating: 86,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Yassine Bounou", "POR", 88), p("Munir", "POR", 78),
      p("Achraf Hakimi", "LD", 90), p("Romain Saiss", "DFC", 84), p("Nayef Aguerd", "DFC", 84), p("Noussair Mazraoui", "LI", 86, ["LI", "LD"]), p("Jawad El Yamiq", "DFC", 81),
      p("Sofyan Amrabat", "MCD", 87), p("Azzedine Ounahi", "MC", 84), p("Selim Amallah", "MC", 82), p("Hakim Ziyech", "ED", 87), p("Sofiane Boufal", "EI", 84),
      p("Youssef En-Nesyri", "DC", 85), p("Abderrazak Hamdallah", "DC", 82), p("Zakaria Aboukhlal", "ED", 81), p("Abde Ezzalzouli", "EI", 80),
    ],
  },
  {
    id: "jpn-2022",
    country: "Japon",
    year: 2022,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Shuichi Gonda", "POR", 82), p("Daniel Schmidt", "POR", 78),
      p("Hiroki Sakai", "LD", 83), p("Takehiro Tomiyasu", "DFC", 86, ["DFC", "LD"]), p("Maya Yoshida", "DFC", 83), p("Yuto Nagatomo", "LI", 82), p("Ko Itakura", "DFC", 82),
      p("Wataru Endo", "MCD", 85), p("Hidemasa Morita", "MC", 83), p("Daichi Kamada", "MCO", 84), p("Takefusa Kubo", "ED", 83), p("Ritsu Doan", "ED", 84),
      p("Kaoru Mitoma", "EI", 86), p("Takuma Asano", "DC", 81), p("Daizen Maeda", "DC", 81), p("Takumi Minamino", "MCO", 83),
    ],
  },
  {
    id: "sen-2022",
    country: "Senegal",
    year: 2022,
    rating: 84,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Edouard Mendy", "POR", 86), p("Seny Dieng", "POR", 78),
      p("Youssouf Sabaly", "LD", 83), p("Kalidou Koulibaly", "DFC", 90), p("Abdou Diallo", "DFC", 84), p("Ismail Jakobs", "LI", 82), p("Pape Abou Cisse", "DFC", 80),
      p("Idrissa Gueye", "MCD", 85), p("Nampalys Mendy", "MC", 82), p("Pape Matar Sarr", "MC", 81), p("Krepin Diatta", "ED", 82), p("Ismaila Sarr", "ED", 84),
      p("Boulaye Dia", "DC", 83), p("Bamba Dieng", "DC", 80), p("Iliman Ndiaye", "MCO", 81), p("Nicolas Jackson", "DC", 80),
    ],
  },
  {
    id: "ecu-2022",
    country: "Ecuador",
    year: 2022,
    rating: 83,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Hernan Galindez", "POR", 81), p("Alexander Dominguez", "POR", 80),
      p("Angelo Preciado", "LD", 81), p("Piero Hincapie", "DFC", 84, ["DFC", "LI"]), p("Felix Torres", "DFC", 82), p("Pervis Estupinan", "LI", 85), p("Robert Arboleda", "DFC", 82),
      p("Moises Caicedo", "MCD", 86), p("Carlos Gruezo", "MC", 80), p("Alan Franco", "MC", 80), p("Gonzalo Plata", "ED", 83), p("Jeremy Sarmiento", "MCO", 80),
      p("Enner Valencia", "DC", 85), p("Michael Estrada", "DC", 80), p("Romario Ibarra", "EI", 80), p("Kevin Rodriguez", "DC", 78),
    ],
  },
  {
    id: "pol-2022",
    country: "Polonia",
    year: 2022,
    rating: 83,
    source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_squads",
    players: [
      p("Wojciech Szczesny", "POR", 87), p("Lukasz Skorupski", "POR", 80),
      p("Matty Cash", "LD", 82), p("Kamil Glik", "DFC", 82), p("Jakub Kiwior", "DFC", 80), p("Bartosz Bereszynski", "LI", 80), p("Jan Bednarek", "DFC", 81),
      p("Grzegorz Krychowiak", "MCD", 82), p("Piotr Zielinski", "MCO", 86), p("Sebastian Szymanski", "MC", 82), p("Przemyslaw Frankowski", "ED", 82), p("Nicola Zalewski", "EI", 81),
      p("Robert Lewandowski", "DC", 94), p("Arkadiusz Milik", "DC", 83), p("Karol Swiderski", "DC", 81), p("Krzysztof Piatek", "DC", 80),
    ],
  },
];

const formations = {
  "4-3-3": ["POR", "LD", "DFC", "DFC", "LI", "MCD", "MC", "MCO", "ED", "DC", "EI"],
  "4-4-2": ["POR", "LD", "DFC", "DFC", "LI", "MCD", "MC", "MC", "MCO", "DC", "DC"],
  "3-5-2": ["POR", "DFC", "DFC", "DFC", "MCD", "MC", "MC", "MCO", "MCO", "DC", "DC"],
  "3-4-3": ["POR", "DFC", "DFC", "DFC", "MCD", "MC", "MC", "MCO", "EI", "DC", "ED"],
  "5-3-2": ["POR", "LD", "DFC", "DFC", "DFC", "LI", "MCD", "MC", "MCO", "DC", "DC"],
};

const pitchLayouts = {
  "4-3-3": [
    [50, 90], [84, 68], [62, 70], [38, 70], [16, 68], [50, 56], [36, 45], [64, 45], [78, 25], [50, 20], [22, 25],
  ],
  "4-4-2": [
    [50, 90], [84, 68], [62, 70], [38, 70], [16, 68], [50, 56], [35, 45], [65, 45], [50, 34], [40, 19], [60, 19],
  ],
  "3-5-2": [
    [50, 90], [70, 70], [50, 73], [30, 70], [50, 58], [28, 48], [72, 48], [39, 36], [61, 36], [40, 18], [60, 18],
  ],
  "3-4-3": [
    [50, 90], [70, 70], [50, 73], [30, 70], [50, 58], [35, 47], [65, 47], [50, 36], [22, 24], [50, 18], [78, 24],
  ],
  "5-3-2": [
    [50, 90], [87, 68], [68, 72], [50, 74], [32, 72], [13, 68], [50, 55], [36, 43], [64, 43], [40, 20], [60, 20],
  ],
};

const defaultFormation = { name: "4-3-3", slots: formations["4-3-3"] };

const state = {
  picked: [],
  skips: 3,
  currentSquad: null,
  filter: "ALL",
  drawHistory: [],
  formationName: null,
  formation: null,
  pendingPlayerIndex: null,
  simulating: false,
};

const pickedCount = document.querySelector("#pickedCount");
const formationLabel = document.querySelector("#formationLabel");
const skipCount = document.querySelector("#skipCount");
const teamRating = document.querySelector("#teamRating");
const lineup = document.querySelector("#lineup");
const gkRating = document.querySelector("#gkRating");
const defRating = document.querySelector("#defRating");
const midRating = document.querySelector("#midRating");
const attRating = document.querySelector("#attRating");
const drawTitle = document.querySelector("#drawTitle");
const drawSubtitle = document.querySelector("#drawSubtitle");
const drawBtn = document.querySelector("#drawBtn");
const skipBtn = document.querySelector("#skipBtn");
const resetBtn = document.querySelector("#resetBtn");
const playerGrid = document.querySelector("#playerGrid");
const pitchBoard = document.querySelector("#pitchBoard");
const tournamentPanel = document.querySelector("#tournamentPanel");
const simulateBtn = document.querySelector("#simulateBtn");
const tournamentLog = document.querySelector("#tournamentLog");
const oddsBox = document.querySelector("#oddsBox");
const sourcesList = document.querySelector("#sourcesList");
const formationGrid = document.querySelector("#formationGrid");

function cleanPlayerName(name) {
  return name.replace(/\s+\d{4}\b/g, "").trim();
}

function playerName(player) {
  return player.displayName || cleanPlayerName(player.name);
}

function p(name, pos, ovr, roles) {
  const normalizedRoles = roles || roleOverrides[name] || broadFallbackRoles[pos] || [pos];
  const primaryRole = normalizedRoles[0];
  const displayName = cleanPlayerName(name);
  return { name: displayName, sourceName: name, displayName, pos: roleLine[primaryRole] || pos, role: primaryRole, roles: normalizedRoles, ovr };
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function average(items) {
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + item.ovr, 0) / items.length;
}

function groupByPosition(players) {
  return {
    POR: players.filter((player) => player.pos === "POR"),
    DEF: players.filter((player) => player.pos === "DEF"),
    MED: players.filter((player) => player.pos === "MED"),
    DEL: players.filter((player) => player.pos === "DEL"),
  };
}

function lineCountsFromFormation(formation = defaultFormation) {
  return formation.slots.reduce((counts, role) => {
    counts[roleLine[role]] += 1;
    return counts;
  }, { POR: 0, DEF: 0, MED: 0, DEL: 0 });
}

function bestXI(players, formation = defaultFormation) {
  const available = players.slice();
  const bestIndex = (predicate) => available.reduce((best, player, index) => {
    if (!predicate(player)) return best;
    if (best === -1 || player.ovr > available[best].ovr) return index;
    return best;
  }, -1);
  return formation.slots.map((slot) => {
    let index = bestIndex((player) => player.roles.includes(slot));
    if (index === -1) {
      index = bestIndex((player) => player.pos === roleLine[slot]);
    }
    if (index === -1) {
      index = available.reduce((bestIndex, player, playerIndex) => player.ovr > available[bestIndex].ovr ? playerIndex : bestIndex, 0);
    }
    const [player] = available.splice(index, 1);
    return { ...player, assignedRole: slot };
  }).filter(Boolean);
}

function countByPosition(players) {
  return {
    POR: players.filter((player) => player.pos === "POR").length,
    DEF: players.filter((player) => player.pos === "DEF").length,
    MED: players.filter((player) => player.pos === "MED").length,
    DEL: players.filter((player) => player.pos === "DEL").length,
  };
}

function countByRole(players) {
  return players.reduce((counts, player) => {
    const role = player.assignedRole || player.role;
    counts[role] = (counts[role] || 0) + 1;
    return counts;
  }, {});
}

function remainingForRole(role) {
  if (!state.formation) return 0;
  const required = state.formation.slots.filter((slot) => slot === role).length;
  return required - (countByRole(state.picked)[role] || 0);
}

function compatibleOpenRoles(player) {
  return [...new Set(compatibleOpenSlots(player).map((slot) => slot.role))];
}

function compatibleOpenSlots(player) {
  if (!state.formation) return [];
  const usedSlots = new Set(state.picked.map((picked) => picked.assignedSlotIndex).filter(Number.isInteger));
  return state.formation.slots
    .map((role, slotIndex) => ({ role, slotIndex }))
    .filter((slot) => !usedSlots.has(slot.slotIndex) && player.roles.includes(slot.role));
}

function canPickPlayer(player) {
  return compatibleOpenSlots(player).length > 0;
}

function assignRole(player) {
  return compatibleOpenSlots(player)[0]?.role || null;
}

function slotSideLabel(role, slotIndex) {
  if (!state.formation) return roleNames[role] || role;
  const sameRoleSlots = state.formation.slots
    .map((slotRole, index) => slotRole === role ? index : -1)
    .filter((index) => index !== -1);
  if (sameRoleSlots.length <= 1) return roleNames[role] || role;

  const coordinates = pitchLayouts[state.formation.name] || pitchLayouts["4-3-3"];
  const [x] = coordinates[slotIndex] || [50, 50];
  const side = x < 42 ? "izquierdo" : x > 58 ? "derecho" : "central";
  return `${role} ${side}`;
}

function completePickPlayer(player, assignedRole, assignedSlotIndex) {
  state.picked.push({
    ...player,
    assignedRole,
    assignedSlotIndex,
    team: `${state.currentSquad.country} ${state.currentSquad.year}`,
    sourceSquad: state.currentSquad.id,
  });
  state.currentSquad = null;
  state.pendingPlayerIndex = null;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Jugador agregado. Sortea otra seleccion para seguir armando el XI.</p>`;
  drawTitle.textContent = state.picked.length === 11 ? "XI completo" : "Listo";
  drawSubtitle.textContent = state.picked.length === 11 ? "Ya puedes simular el torneo." : "Faltan " + (11 - state.picked.length) + " jugadores";
  drawBtn.disabled = state.picked.length === 11;
  skipBtn.disabled = true;
  renderLineup();
}

function rateTeam(players, historicalBonus = 0, formation = defaultFormation) {
  const groups = groupByPosition(players);
  const expected = lineCountsFromFormation(formation);
  const gk = average(groups.POR);
  const def = average(groups.DEF);
  const mid = average(groups.MED);
  const att = average(groups.DEL);
  const base = players.length ? average(players) : 0;
  const structurePenalty =
    Math.max(0, expected.POR - groups.POR.length) * 8 +
    Math.max(0, expected.DEF - groups.DEF.length) * 1.4 +
    Math.max(0, expected.MED - groups.MED.length) * 1.3 +
    Math.max(0, expected.DEL - groups.DEL.length) * 1.4;
  const weighted = base * 0.42 + gk * 0.12 + def * 0.16 + mid * 0.15 + att * 0.15;
  return {
    total: Math.round(clamp(weighted + historicalBonus - structurePenalty, 1, 99)),
    gk: Math.round(gk || 0),
    def: Math.round(def || 0),
    mid: Math.round(mid || 0),
    att: Math.round(att || 0),
    penalty: Math.round(structurePenalty),
  };
}

function renderSources() {
  if (!sourcesList) return;
  sourcesList.innerHTML = sources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join("");
}

function getAssignedSlots(formation) {
  const usedIndexes = new Set();
  return formation.slots.map((role, slotIndex) => {
    let playerIndex = state.picked.findIndex((player, index) => !usedIndexes.has(index) && player.assignedSlotIndex === slotIndex);
    if (playerIndex === -1) {
      playerIndex = state.picked.findIndex((player, index) => !usedIndexes.has(index) && player.assignedRole === role);
    }
    if (playerIndex === -1) return { role, slotIndex, player: null };
    usedIndexes.add(playerIndex);
    return { role, slotIndex, player: state.picked[playerIndex] };
  });
}

function renderLineup() {
  const formation = state.formation || defaultFormation;
  const draftStarted = state.picked.length > 0 || Boolean(state.currentSquad);
  const assignedSlots = getAssignedSlots(formation);
  const cards = assignedSlots.map(({ role, slotIndex, player }) => {
    if (!player) return `<div class="slot"><span class="pos">${role}</span><strong>--</strong><span class="ovr">--</span></div>`;
    return `<div class="slot"><span class="pos">${player.assignedRole}</span><strong>${playerName(player)}</strong><span class="ovr">${player.ovr}</span></div>`;
  });
  const coordinates = pitchLayouts[formation.name] || pitchLayouts["4-3-3"];
  const pitchSlots = assignedSlots.map(({ role, slotIndex, player }) => {
    const [x, y] = coordinates[slotIndex];
    const shortName = player ? playerName(player).split(" ").slice(-1)[0] : role;
    return `
      <div class="pitch-slot ${player ? "filled" : ""}" style="--x:${x}%; --y:${y}%">
        <div class="slot-ball">${player ? player.ovr : role}</div>
        <div class="slot-name">${player ? shortName : role}</div>
      </div>
    `;
  });

  const rating = rateTeam(state.picked, 0, formation);
  lineup.innerHTML = cards.join("");
  pitchBoard.innerHTML = pitchSlots.join("");
  pickedCount.textContent = state.picked.length;
  formationLabel.textContent = state.formationName || "--";
  skipCount.textContent = state.skips;
  teamRating.textContent = state.picked.length ? rating.total : "--";
  gkRating.textContent = rating.gk || "--";
  defRating.textContent = rating.def || "--";
  midRating.textContent = rating.mid || "--";
  attRating.textContent = rating.att || "--";
  tournamentPanel.hidden = state.picked.length !== 11;
  simulateBtn.disabled = state.picked.length !== 11;
  updateRerollButtons();
  document.querySelectorAll(".formation-option").forEach((button) => {
    button.disabled = draftStarted && button.dataset.formation !== state.formationName;
  });
}

function compatibleSquads(predicate) {
  return squads.filter((squad) => {
    if (state.currentSquad && squad.id === state.currentSquad.id) return false;
    return predicate(squad) && squad.players.some((player) => canPickPlayer(player));
  });
}

function sameYearSquads() {
  if (!state.currentSquad) return [];
  return compatibleSquads((squad) => squad.year === state.currentSquad.year && squad.country !== state.currentSquad.country);
}

function sameCountrySquads() {
  if (!state.currentSquad) return [];
  return compatibleSquads((squad) => squad.country === state.currentSquad.country && squad.year !== state.currentSquad.year);
}

function updateRerollButtons() {
  if (!state.formation || state.picked.length >= 11) {
    drawBtn.disabled = true;
    skipBtn.disabled = true;
    return;
  }

  if (!state.currentSquad) {
    drawBtn.disabled = false;
    skipBtn.disabled = true;
    return;
  }

  drawBtn.disabled = state.skips <= 0 || sameYearSquads().length === 0;
  skipBtn.disabled = state.skips <= 0 || sameCountrySquads().length === 0;
}

function showCurrentSquad() {
  drawTitle.textContent = state.currentSquad.country;
  drawSubtitle.textContent = `Mundial ${state.currentSquad.year}`;
  state.drawHistory.push(state.currentSquad.id);
  state.pendingPlayerIndex = null;
  updateRerollButtons();
  renderPlayers();
}

function drawSquad() {
  if (!state.formation || state.picked.length >= 11 || state.currentSquad) return;
  const recent = state.drawHistory.slice(-3);
  const pool = squads.filter((squad) => !recent.includes(squad.id) && squad.players.some((player) => canPickPlayer(player)));
  state.currentSquad = randomItem(pool.length ? pool : squads);
  showCurrentSquad();
}

function renderPlayers() {
  if (!state.currentSquad) return;
  const players = state.currentSquad.players.filter((player) => state.filter === "ALL" || player.roles.includes(state.filter));
  playerGrid.classList.remove("empty");
  playerGrid.innerHTML = players.map((player, listIndex) => {
    const playerIndex = state.currentSquad.players.indexOf(player);
    const openSlots = compatibleOpenSlots(player);
    const disabled = openSlots.length === 0;
    const roleText = disabled
      ? "Cupo completo"
      : openSlots.length > 1
        ? "Elegir puesto"
        : slotSideLabel(openSlots[0].role, openSlots[0].slotIndex);
    const isPending = state.pendingPlayerIndex === playerIndex;
    return `
    <div class="player-choice ${isPending ? "choosing" : ""}">
      <button class="player-card" data-index="${playerIndex}" ${disabled ? "disabled" : ""}>
        <span class="shirt-no">#${listIndex + 1}</span>
        <div>
          <strong>${playerName(player)}</strong>
          <small>${roleText}</small>
        </div>
        <span class="player-ovr">${player.ovr}</span>
      </button>
      ${isPending ? `
        <div class="role-choice-row">
          ${openSlots.map((slot) => `<button class="role-choice" data-index="${playerIndex}" data-slot="${slot.slotIndex}">${slotSideLabel(slot.role, slot.slotIndex)}</button>`).join("")}
        </div>
      ` : ""}
    </div>
  `;
  }).join("");
}

function pickPlayer(index, slotIndex = null) {
  if (!state.currentSquad || state.picked.length >= 11) return;
  const player = state.currentSquad.players[index];
  if (!player) return;
  const openSlots = compatibleOpenSlots(player);
  if (!openSlots.length) return;

  if (slotIndex === null && openSlots.length > 1) {
    state.pendingPlayerIndex = state.pendingPlayerIndex === index ? null : index;
    drawTitle.textContent = "Elegir puesto";
    drawSubtitle.textContent = playerName(player);
    renderPlayers();
    return;
  }

  const selectedSlot = slotIndex === null
    ? openSlots[0]
    : openSlots.find((slot) => slot.slotIndex === slotIndex);
  if (!selectedSlot) return;
  completePickPlayer(player, selectedSlot.role, selectedSlot.slotIndex);
}

function rerollSameYear() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameYearSquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
  state.pendingPlayerIndex = null;
  showCurrentSquad();
  renderLineup();
}

function rerollSameCountry() {
  if (!state.currentSquad || state.skips <= 0) return;
  const pool = sameCountrySquads();
  if (!pool.length) return;
  state.skips -= 1;
  state.currentSquad = randomItem(pool);
  state.pendingPlayerIndex = null;
  showCurrentSquad();
  renderLineup();
}

function resetGame() {
  state.picked = [];
  state.skips = 3;
  state.currentSquad = null;
  state.filter = "ALL";
  state.drawHistory = [];
  state.formationName = null;
  state.formation = null;
  state.pendingPlayerIndex = null;
  state.simulating = false;
  closeTournamentTab();
  simulateBtn.textContent = "Simular torneo";
  drawTitle.textContent = "Elige formación";
  drawSubtitle.textContent = "Primero define el sistema táctico para activar el sorteo.";
  drawBtn.disabled = true;
  skipBtn.disabled = true;
  playerGrid.classList.add("empty");
  playerGrid.innerHTML = `<p>Cuando salga una selección, acá aparece su plantilla completa.</p>`;
  tournamentLog.innerHTML = "";
  oddsBox.innerHTML = "";
  document.querySelectorAll(".formation-option").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button.dataset.filter === "ALL"));
  renderLineup();
}

function selectFormation(name) {
  if (state.picked.length > 0 || state.currentSquad) return;
  state.formationName = name;
  state.formation = { name, slots: formations[name] };
  drawTitle.textContent = "Listo";
  drawSubtitle.textContent = `Formacion ${name}`;
  drawBtn.disabled = false;
  document.querySelectorAll(".formation-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.formation === name);
  });
  renderLineup();
}

function getTeamObjectFromSquad(squad) {
  const xi = bestXI(squad.players);
  return {
    name: `${squad.country} ${squad.year}`,
    players: xi,
    rating: rateTeam(xi, (squad.rating - 88) * 0.25, defaultFormation),
    historical: squad,
  };
}

function getUserTeam() {
  return {
    name: "Tu selección",
    players: state.picked,
    rating: rateTeam(state.picked, 0, state.formation || defaultFormation),
  };
}

function winChance(a, b) {
  const diff = a.rating.total - b.rating.total;
  return clamp(1 / (1 + Math.exp(-diff / 7.2)), 0.08, 0.92);
}

function expectedGoals(attacker, defender) {
  const attack = attacker.rating.att || attacker.rating.total;
  const midfield = attacker.rating.mid || attacker.rating.total;
  const defense = defender.rating.def || defender.rating.total;
  const keeper = defender.rating.gk || defender.rating.total;
  const diff = attacker.rating.total - defender.rating.total;
  return clamp(1.15 + (attack - defense) / 20 + (midfield - keeper) / 34 + diff / 32, 0.25, 3.6);
}

function poisson(lambda) {
  const limit = Math.exp(-lambda);
  let k = 0;
  let product = 1;
  do {
    k += 1;
    product *= Math.random();
  } while (product > limit);
  return k - 1;
}

function weightedPlayer(players, positions) {
  const pool = players.filter((player) => positions.includes(player.pos));
  const fallback = players.length ? players : [{ name: "Jugador desconocido", displayName: "Jugador desconocido", ovr: 75, pos: "MED" }];
  const candidates = pool.length ? pool : fallback;
  const total = candidates.reduce((sum, player) => sum + player.ovr, 0);
  let roll = Math.random() * total;
  for (const player of candidates) {
    roll -= player.ovr;
    if (roll <= 0) return player;
  }
  return candidates[candidates.length - 1];
}

function eventMinute(used) {
  let minute = Math.floor(3 + Math.random() * 88);
  while (used.has(minute)) minute = Math.min(90, minute + 1);
  used.add(minute);
  return minute;
}

function describeGoal(team, method) {
  const scorer = weightedPlayer(team.players, method === "Tiro libre" ? ["MED", "DEL"] : ["DEL", "MED", "DEF"]);
  const assist = weightedPlayer(team.players.filter((player) => player.name !== scorer.name), ["MED", "DEL", "DEF"]);
  if (method === "Penal") return `${playerName(scorer)} convierte de penal con remate bajo.`;
  if (method === "Tiro libre") return `${playerName(scorer)} marca de tiro libre directo.`;
  if (method === "Cabeza") return `${playerName(scorer)} gana de cabeza tras centro de ${playerName(assist)}.`;
  if (method === "Contraataque") return `${playerName(scorer)} define una contra armada por ${playerName(assist)}.`;
  return `${playerName(scorer)} anota tras asistencia de ${playerName(assist)}.`;
}

function generateEvents(teamA, teamB, goalsA, goalsB) {
  const events = [];
  const used = new Set();
  const goalMethods = ["Jugada", "Jugada", "Jugada", "Cabeza", "Contraataque", "Penal", "Tiro libre"];

  for (let i = 0; i < goalsA; i += 1) {
    const method = randomItem(goalMethods);
    events.push({ minute: eventMinute(used), type: "goal", side: "A", text: `${teamA.name}: ${describeGoal(teamA, method)} (${method})` });
  }
  for (let i = 0; i < goalsB; i += 1) {
    const method = randomItem(goalMethods);
    events.push({ minute: eventMinute(used), type: "goal", side: "B", text: `${teamB.name}: ${describeGoal(teamB, method)} (${method})` });
  }

  const yellowCount = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i < yellowCount; i += 1) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const booked = weightedPlayer(team.players, ["DEF", "MED"]);
    events.push({ minute: eventMinute(used), type: "card", text: `${team.name}: amarilla para ${playerName(booked)} por cortar una transición.` });
  }

  if (Math.random() < 0.18) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const sentOff = weightedPlayer(team.players, ["DEF", "MED"]);
    events.push({ minute: eventMinute(used), type: "card", text: `${team.name}: roja para ${playerName(sentOff)} tras doble amarilla.` });
  }

  if (Math.random() < 0.22) {
    const team = Math.random() > 0.5 ? teamA : teamB;
    const keeper = weightedPlayer(team.players, ["POR"]);
    events.push({ minute: eventMinute(used), type: "penalty-save", text: `${team.name}: ${playerName(keeper)} ataja un penal clave.` });
  }

  return events.sort((a, b) => a.minute - b.minute);
}

function simulateMatch(teamA, teamB, knockout = false) {
  const chanceA = winChance(teamA, teamB);
  const chanceB = 1 - chanceA;
  let goalsA = poisson(expectedGoals(teamA, teamB) * (0.8 + chanceA * 0.45));
  let goalsB = poisson(expectedGoals(teamB, teamA) * (0.8 + chanceB * 0.45));

  const expectedDiff = teamA.rating.total - teamB.rating.total;
  if (goalsA === goalsB && Math.abs(expectedDiff) > 10 && Math.random() < 0.42) {
    if (expectedDiff > 0) goalsA += 1;
    else goalsB += 1;
  }

  const events = generateEvents(teamA, teamB, goalsA, goalsB);
  let penalties = null;
  let winner = goalsA > goalsB ? teamA : goalsB > goalsA ? teamB : null;

  if (knockout && goalsA === goalsB) {
    const pensAChance = clamp(0.5 + (teamA.rating.gk - teamB.rating.gk) / 80 + (teamA.rating.total - teamB.rating.total) / 120, 0.28, 0.72);
    const aWinsPens = Math.random() < pensAChance;
    penalties = aWinsPens ? [5, Math.floor(2 + Math.random() * 3)] : [Math.floor(2 + Math.random() * 3), 5];
    winner = aWinsPens ? teamA : teamB;
    const hero = weightedPlayer(winner.players, ["POR"]);
    events.push({ minute: 120, type: "pens", text: `Definición por penales: ${winner.name} gana ${penalties[0]}-${penalties[1]}. Figura: ${playerName(hero)}.` });
  }

  return { teamA, teamB, goalsA, goalsB, events, winner, penalties, chanceA, chanceB };
}

function renderMatch(match, phase) {
  const penText = match.penalties ? `, penales ${match.penalties[0]}-${match.penalties[1]}` : "";
  return `
    <article class="match-card">
      <h3>${phase}</h3>
      <div class="scoreline">
        <span>${match.teamA.name}</span>
        <span>${match.goalsA} - ${match.goalsB}${penText}</span>
        <span>${match.teamB.name}</span>
      </div>
      <ul class="events">
        ${match.events.map((event) => `<li>${event.minute}' ${event.text}</li>`).join("")}
      </ul>
    </article>
  `;
}

function tableHtml(table) {
  const rows = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  return `
    <article class="match-card">
      <h3>Tabla de grupo</h3>
      <div class="table-row header"><span>Equipo</span><span>Pts</span><span>GF</span><span>GC</span><span>DG</span><span>Media</span></div>
      ${rows.map((row) => `<div class="table-row"><span>${row.team.name}</span><span>${row.pts}</span><span>${row.gf}</span><span>${row.ga}</span><span>${row.gf - row.ga}</span><span>${row.team.rating.total}</span></div>`).join("")}
    </article>
  `;
}

function addResult(rowA, rowB, goalsA, goalsB) {
  rowA.gf += goalsA;
  rowA.ga += goalsB;
  rowB.gf += goalsB;
  rowB.ga += goalsA;
  if (goalsA > goalsB) rowA.pts += 3;
  else if (goalsB > goalsA) rowB.pts += 3;
  else {
    rowA.pts += 1;
    rowB.pts += 1;
  }
}

function renderOdds(userTeam, opponents) {
  oddsBox.innerHTML = "";
}

const SIM_MINUTE_MS = 72;
const EVENT_PAUSE_MS = 560;
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function openTournamentTab() {
  const board = tournamentPanel.closest(".game-board");
  if (board) board.classList.add("tournament-live-mode");
  tournamentPanel.hidden = false;
  tournamentLog.innerHTML = "";
  oddsBox.innerHTML = "";
}
function closeTournamentTab() {
  const board = tournamentPanel.closest(".game-board");
  if (board) board.classList.remove("tournament-live-mode");
}
function appendTournamentMessage(title, text) {
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-summary"><h3>${title}</h3><p>${text}</p></article>`);
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
}
function eventClass(event) {
  if (event.type === "goal") return "goal";
  if (event.type === "pens" || event.type === "penalty-save") return "penalty";
  if (event.type === "card") return event.text.includes("roja") ? "red-card" : "yellow-card";
  return "note";
}
function eventLabel(event) {
  if (event.type === "goal") return "GOL";
  if (event.type === "pens") return "PENALES";
  if (event.type === "penalty-save") return "PENAL";
  if (event.type === "card") return event.text.includes("roja") ? "ROJA" : "AMARILLA";
  return "JUGADA";
}
function renderLiveMatchShell(match, phase) {
  const id = `live-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card live-match live-match-card" id="${id}">
    <div class="live-stadium" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="live-match-head"><div><p class="live-kicker">${phase}</p><h3>Partido en vivo</h3></div><span class="live-minute">0'</span></div>
    <div class="live-scoreboard"><span>${match.teamA.name}</span><strong class="live-score">0 - 0</strong><span>${match.teamB.name}</span></div>
    <div class="live-timeline"><span style="width:0%"></span></div>
    <ul class="events live-events"></ul>
  </article>`);
  const card = document.getElementById(id);
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
  return {
    card,
    minuteEl: card.querySelector(".live-minute"),
    scoreEl: card.querySelector(".live-score"),
    eventsEl: card.querySelector(".live-events"),
    timelineEl: card.querySelector(".live-timeline span"),
  };
}
async function playLiveMatch(match, phase) {
  const live = renderLiveMatchShell(match, phase);
  const endMinute = match.penalties ? 120 : 90;
  let goalsA = 0;
  let goalsB = 0;
  live.card.classList.add("is-running");
  for (let minute = 1; minute <= endMinute; minute += 1) {
    live.minuteEl.textContent = `${minute}'`;
    live.timelineEl.style.width = `${Math.round((minute / endMinute) * 100)}%`;
    const minuteEvents = match.events.filter((event) => event.minute === minute);
    for (const event of minuteEvents) {
      const typeClass = eventClass(event);
      if (event.type === "goal") {
        if (event.side === "A") goalsA += 1;
        if (event.side === "B") goalsB += 1;
        live.scoreEl.textContent = `${goalsA} - ${goalsB}`;
        live.card.classList.add("goal-flash");
        window.setTimeout(() => live.card.classList.remove("goal-flash"), 650);
      }
      live.eventsEl.insertAdjacentHTML("beforeend", `<li class="event-${typeClass}"><span>${event.minute}'</span><strong>${eventLabel(event)}</strong><p>${event.text}</p></li>`);
      tournamentLog.scrollTop = tournamentLog.scrollHeight;
      await sleep(EVENT_PAUSE_MS);
    }
    await sleep(SIM_MINUTE_MS);
  }
  const penText = match.penalties ? `, penales ${match.penalties[0]}-${match.penalties[1]}` : "";
  live.scoreEl.textContent = `${match.goalsA} - ${match.goalsB}${penText}`;
  live.minuteEl.textContent = "Final";
  live.timelineEl.style.width = "100%";
  live.card.classList.remove("is-running");
  live.card.classList.add("is-finished");
  await sleep(700);
}
function waitForNextMatch(title, text, buttonText = "Siguiente partido") {
  return new Promise((resolve) => {
    const id = `next-match-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-gate"><div><h3>${title}</h3><p>${text}</p></div><button class="next-match-btn" id="${id}">${buttonText}</button></article>`);
    tournamentLog.scrollTop = tournamentLog.scrollHeight;
    const button = document.getElementById(id);
    if (!button) {
      resolve();
      return;
    }
    button.addEventListener("click", () => {
      button.disabled = true;
      button.textContent = "Cargando...";
      const gate = button.closest(".sim-gate");
      if (gate) gate.classList.add("gate-done");
      resolve();
    }, { once: true });
  });
}
function finishTournamentSimulation() {
  state.simulating = false;
  simulateBtn.disabled = state.picked.length !== 11;
  simulateBtn.textContent = "Simular de nuevo";
  const id = `return-team-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  tournamentLog.insertAdjacentHTML("beforeend", `<article class="match-card sim-gate"><div><h3>Torneo terminado</h3><p>Vuelve a tu XI para revisar el equipo, reiniciar o simular otra vez.</p></div><button class="next-match-btn" id="${id}">Volver al equipo</button></article>`);
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", () => {
      closeTournamentTab();
      tournamentPanel.hidden = false;
      tournamentLog.scrollTop = 0;
    }, { once: true });
  }
}

async function simulateTournament() {
  if (state.picked.length !== 11 || state.simulating) return;
  state.simulating = true;
  simulateBtn.disabled = true;
  simulateBtn.textContent = "Simulando...";
  openTournamentTab();
  appendTournamentMessage("Torneo", "Arranca la simulación minuto a minuto. Cuando termine cada partido, avanzas vos.");
  await sleep(500);
  const userTeam = getUserTeam();
  const opponentPool = squads.map(getTeamObjectFromSquad).filter((team) => team.name !== userTeam.name).sort(() => Math.random() - 0.5);
  const groupOpponents = opponentPool.slice(0, 3);
  const groupTeams = [userTeam, ...groupOpponents];
  const table = groupTeams.map((team) => ({ team, pts: 0, gf: 0, ga: 0 }));
  const findRow = (team) => table.find((row) => row.team.name === team.name);
  const userGroupMatches = [];
  renderOdds(userTeam, groupOpponents);
  for (let i = 0; i < groupTeams.length; i += 1) {
    for (let j = i + 1; j < groupTeams.length; j += 1) {
      const match = simulateMatch(groupTeams[i], groupTeams[j], false);
      const isUserMatch = match.teamA.name === userTeam.name || match.teamB.name === userTeam.name;
      if (isUserMatch) userGroupMatches.push(match);
      addResult(findRow(match.teamA), findRow(match.teamB), match.goalsA, match.goalsB);
    }
  }
  for (let index = 0; index < userGroupMatches.length; index += 1) {
    await playLiveMatch(userGroupMatches[index], `Fase de grupos ${index + 1}`);
    if (index < userGroupMatches.length - 1) {
      await waitForNextMatch("Partido terminado", "El grupo sigue abierto. Se viene otro cruce clave.", "Siguiente partido");
    } else {
      await waitForNextMatch("Grupo cerrado", "Ya se jugaron tus partidos de grupo. Ahora mira la tabla final.", "Ver tabla");
    }
  }
  tournamentLog.insertAdjacentHTML("beforeend", tableHtml(table));
  tournamentLog.scrollTop = tournamentLog.scrollHeight;
  await sleep(350);
  const ordered = table.slice().sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
  if (!ordered.slice(0, 2).some((row) => row.team.name === userTeam.name)) {
    appendTournamentMessage("Eliminado", `Tu selección no pasó la fase de grupos. La media era ${userTeam.rating.total}; ajusta el draft o busca mejor equilibrio por posiciones.`);
    finishTournamentSimulation();
    return;
  }
  await waitForNextMatch("Clasificado", "Superaste la fase de grupos. Empieza la parte pesada del torneo.", "Jugar Dieciseisavos");
  const phases = ["Dieciseisavos", "Octavos", "Cuartos", "Semis", "Final"];
  const knockoutPool = opponentPool.slice(3).sort((a, b) => a.rating.total - b.rating.total);
  const usedKnockoutOpponents = new Set();
  for (let index = 0; index < phases.length; index += 1) {
    const phase = phases[index];
    const availableOpponents = knockoutPool.filter((team) => !usedKnockoutOpponents.has(team.name));
    const phasePool = availableOpponents.length ? availableOpponents : knockoutPool;
    const targetIndex = Math.min(phasePool.length - 1, index + Math.floor(Math.random() * Math.max(1, phasePool.length - index)));
    const opponent = phasePool[targetIndex];
    usedKnockoutOpponents.add(opponent.name);
    const match = simulateMatch(userTeam, opponent, true);
    await playLiveMatch(match, phase);
    if (match.winner.name !== userTeam.name) {
      appendTournamentMessage("Fin del torneo", `Tu selección cayó en ${phase}. Media propia: ${userTeam.rating.total}; rival: ${opponent.rating.total}.`);
      finishTournamentSimulation();
      return;
    }
    if (index < phases.length - 1) {
      await waitForNextMatch("Ronda superada", `El vestuario respira. Próximo paso: ${phases[index + 1]}.`, `Jugar ${phases[index + 1]}`);
    }
  }
  appendTournamentMessage("Campeón", `Ganaste el torneo de selecciones históricas. Media final: ${userTeam.rating.total}. Figura del torneo: ${playerName(weightedPlayer(userTeam.players, ["DEL", "MED"]))}.`);
  finishTournamentSimulation();
}
drawBtn.addEventListener("click", () => {
  if (state.currentSquad) rerollSameYear();
  else drawSquad();
});
skipBtn.addEventListener("click", rerollSameCountry);
resetBtn.addEventListener("click", resetGame);
simulateBtn.addEventListener("click", simulateTournament);
formationGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".formation-option");
  if (!button) return;
  selectFormation(button.dataset.formation);
});
playerGrid.addEventListener("click", (event) => {
  const roleButton = event.target.closest(".role-choice");
  if (roleButton) {
    pickPlayer(Number(roleButton.dataset.index), Number(roleButton.dataset.slot));
    return;
  }
  const card = event.target.closest(".player-card");
  if (!card) return;
  pickPlayer(Number(card.dataset.index));
});
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    state.pendingPlayerIndex = null;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderPlayers();
  });
});

renderSources();
renderLineup();
