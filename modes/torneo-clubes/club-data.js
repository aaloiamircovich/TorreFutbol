(() => {
  const UCL = "Champions League";
  const LIB = "Libertadores";
  const roleLine = { POR: "POR", LD: "DEF", DFC: "DEF", LI: "DEF", MCD: "MED", MC: "MED", MCO: "MED", EI: "DEL", ED: "DEL", DC: "DEL" };

  function cleanPlayerName(name) {
    return name.replace(/\s+\d{4}\b/g, "").trim();
  }

  function P(name, role, ovr, roles) {
    const normalizedRoles = roles || [role];
    const primaryRole = normalizedRoles[0];
    const displayName = cleanPlayerName(name);
    return { name: displayName, sourceName: name, displayName, pos: roleLine[primaryRole], role: primaryRole, roles: normalizedRoles, ovr };
  }

  function S(id, country, year, tournament, rating, players) {
    return { id, country, year, tournament, rating, players };
  }

  window.clubSources = [
    { label: "Wikipedia - UEFA Champions League finals", url: "https://en.wikipedia.org/wiki/List_of_UEFA_Champions_League_finals" },
    { label: "Wikipedia - Copa Libertadores finals", url: "https://en.wikipedia.org/wiki/List_of_Copa_Libertadores_finals" },
    { label: "Transfermarkt - club squads", url: "https://www.transfermarkt.com/" },
  ];

  window.clubSquads = [
    S("ucl-barcelona-2009", "Barcelona", 2009, UCL, 96, [
      P("Victor Valdes", "POR", 90), P("Jose Pinto", "POR", 78),
      P("Dani Alves", "LD", 94), P("Carles Puyol", "DFC", 93), P("Gerard Pique", "DFC", 90), P("Rafael Marquez", "DFC", 84), P("Eric Abidal", "LI", 88), P("Sylvinho", "LI", 80),
      P("Yaya Toure", "MCD", 90), P("Sergio Busquets", "MCD", 85), P("Xavi", "MC", 96), P("Andres Iniesta", "MC", 95), P("Seydou Keita", "MC", 84),
      P("Lionel Messi", "ED", 97), P("Thierry Henry", "EI", 92), P("Samuel Eto'o", "DC", 93), P("Pedro", "ED", 81),
    ]),
    S("ucl-barcelona-2011", "Barcelona", 2011, UCL, 98, [
      P("Victor Valdes", "POR", 91), P("Jose Pinto", "POR", 78),
      P("Dani Alves", "LD", 94), P("Carles Puyol", "DFC", 90), P("Gerard Pique", "DFC", 92), P("Javier Mascherano", "DFC", 88, ["DFC", "MCD"]), P("Eric Abidal", "LI", 88), P("Adriano", "LI", 82, ["LI", "LD"]),
      P("Sergio Busquets", "MCD", 92), P("Xavi", "MC", 97), P("Andres Iniesta", "MC", 96), P("Seydou Keita", "MC", 84), P("Thiago", "MC", 82),
      P("Lionel Messi", "ED", 99), P("David Villa", "EI", 91, ["EI", "DC"]), P("Pedro", "ED", 88), P("Ibrahim Afellay", "EI", 80),
    ]),
    S("ucl-man-utd-2009", "Manchester United", 2009, UCL, 92, [
      P("Edwin van der Sar", "POR", 91), P("Tomasz Kuszczak", "POR", 77),
      P("Gary Neville", "LD", 82), P("Rafael", "LD", 78), P("Rio Ferdinand", "DFC", 92), P("Nemanja Vidic", "DFC", 93), P("Jonny Evans", "DFC", 80), P("Patrice Evra", "LI", 90),
      P("Michael Carrick", "MCD", 87), P("Paul Scholes", "MC", 89), P("Ryan Giggs", "MC", 88, ["MC", "EI"]), P("Anderson", "MC", 82), P("Darren Fletcher", "MC", 85),
      P("Cristiano Ronaldo", "ED", 97, ["ED", "DC", "EI"]), P("Wayne Rooney", "DC", 92, ["DC", "EI"]), P("Carlos Tevez", "DC", 88), P("Dimitar Berbatov", "DC", 86),
    ]),
    S("ucl-man-utd-2011", "Manchester United", 2011, UCL, 90, [
      P("Edwin van der Sar", "POR", 90), P("Anders Lindegaard", "POR", 76),
      P("Fabio", "LD", 80, ["LD", "LI"]), P("Rafael", "LD", 80), P("Rio Ferdinand", "DFC", 88), P("Nemanja Vidic", "DFC", 91), P("Chris Smalling", "DFC", 80), P("Patrice Evra", "LI", 88),
      P("Michael Carrick", "MCD", 86), P("Paul Scholes", "MC", 85), P("Ryan Giggs", "MC", 86, ["MC", "EI"]), P("Darren Fletcher", "MC", 84), P("Antonio Valencia", "ED", 86),
      P("Nani", "ED", 88, ["ED", "EI"]), P("Wayne Rooney", "DC", 91, ["DC", "MCO"]), P("Javier Hernandez", "DC", 86), P("Dimitar Berbatov", "DC", 84),
    ]),
    S("ucl-real-madrid-2014", "Real Madrid", 2014, UCL, 95, [
      P("Iker Casillas", "POR", 90), P("Diego Lopez", "POR", 84),
      P("Dani Carvajal", "LD", 86), P("Alvaro Arbeloa", "LD", 80), P("Sergio Ramos", "DFC", 94), P("Pepe", "DFC", 90), P("Raphael Varane", "DFC", 86), P("Marcelo", "LI", 90),
      P("Xabi Alonso", "MCD", 90), P("Casemiro", "MCD", 80), P("Luka Modric", "MC", 92), P("Angel Di Maria", "MC", 91, ["MC", "EI"]), P("Isco", "MCO", 86),
      P("Gareth Bale", "ED", 92), P("Cristiano Ronaldo", "EI", 98, ["EI", "DC"]), P("Karim Benzema", "DC", 90), P("Jese", "ED", 80),
    ]),
    S("ucl-real-madrid-2016", "Real Madrid", 2016, UCL, 95, [
      P("Keylor Navas", "POR", 89), P("Kiko Casilla", "POR", 78),
      P("Dani Carvajal", "LD", 88), P("Danilo", "LD", 82), P("Sergio Ramos", "DFC", 94), P("Pepe", "DFC", 90), P("Raphael Varane", "DFC", 87), P("Marcelo", "LI", 91),
      P("Casemiro", "MCD", 88), P("Toni Kroos", "MC", 92), P("Luka Modric", "MC", 93), P("Isco", "MCO", 86), P("James Rodriguez", "MCO", 86),
      P("Gareth Bale", "ED", 91), P("Cristiano Ronaldo", "EI", 97, ["EI", "DC"]), P("Karim Benzema", "DC", 90), P("Lucas Vazquez", "ED", 81),
    ]),
    S("ucl-atletico-2014", "Atletico Madrid", 2014, UCL, 89, [
      P("Thibaut Courtois", "POR", 90), P("Daniel Aranzubia", "POR", 76),
      P("Juanfran", "LD", 86), P("Toby Alderweireld", "DFC", 83), P("Diego Godin", "DFC", 91), P("Miranda", "DFC", 89), P("Filipe Luis", "LI", 88),
      P("Gabi", "MCD", 87), P("Mario Suarez", "MCD", 83), P("Tiago", "MC", 84), P("Koke", "MC", 88), P("Raul Garcia", "MCO", 84),
      P("Arda Turan", "EI", 87, ["EI", "MCO"]), P("Diego", "MCO", 84), P("David Villa", "DC", 85), P("Diego Costa", "DC", 90), P("Adrian", "DC", 80),
    ]),
    S("ucl-atletico-2016", "Atletico Madrid", 2016, UCL, 90, [
      P("Jan Oblak", "POR", 91), P("Miguel Angel Moya", "POR", 80),
      P("Juanfran", "LD", 86), P("Jose Gimenez", "DFC", 86), P("Diego Godin", "DFC", 92), P("Stefan Savic", "DFC", 84), P("Filipe Luis", "LI", 87),
      P("Gabi", "MCD", 86), P("Augusto Fernandez", "MCD", 82), P("Koke", "MC", 89), P("Saul Niguez", "MC", 87), P("Thomas Partey", "MC", 80),
      P("Yannick Carrasco", "EI", 86), P("Antoine Griezmann", "DC", 91, ["DC", "MCO"]), P("Fernando Torres", "DC", 84), P("Angel Correa", "ED", 82),
    ]),
    S("ucl-bayern-2013", "Bayern Munich", 2013, UCL, 94, [
      P("Manuel Neuer", "POR", 93), P("Tom Starke", "POR", 76),
      P("Philipp Lahm", "LD", 94, ["LD", "MCD"]), P("Jerome Boateng", "DFC", 88), P("Dante", "DFC", 87), P("Daniel Van Buyten", "DFC", 80), P("David Alaba", "LI", 91),
      P("Javi Martinez", "MCD", 90), P("Bastian Schweinsteiger", "MC", 92), P("Toni Kroos", "MC", 88), P("Thomas Muller", "MCO", 91, ["MCO", "ED", "DC"]),
      P("Arjen Robben", "ED", 93), P("Franck Ribery", "EI", 94), P("Mario Mandzukic", "DC", 88), P("Mario Gomez", "DC", 86), P("Xherdan Shaqiri", "EI", 82),
    ]),
    S("ucl-bayern-2020", "Bayern Munich", 2020, UCL, 96, [
      P("Manuel Neuer", "POR", 93), P("Sven Ulreich", "POR", 78),
      P("Benjamin Pavard", "LD", 86), P("Joshua Kimmich", "LD", 92, ["LD", "MCD", "MC"]), P("Jerome Boateng", "DFC", 86), P("David Alaba", "DFC", 89, ["DFC", "LI"]), P("Alphonso Davies", "LI", 89),
      P("Thiago Alcantara", "MC", 91), P("Leon Goretzka", "MC", 89), P("Thomas Muller", "MCO", 91), P("Philippe Coutinho", "MCO", 86),
      P("Serge Gnabry", "ED", 90), P("Kingsley Coman", "EI", 88), P("Ivan Perisic", "EI", 84), P("Robert Lewandowski", "DC", 97),
    ]),
    S("ucl-chelsea-2012", "Chelsea", 2012, UCL, 90, [
      P("Petr Cech", "POR", 92), P("Ross Turnbull", "POR", 74),
      P("Branislav Ivanovic", "LD", 86, ["LD", "DFC"]), P("Jose Bosingwa", "LD", 81), P("John Terry", "DFC", 89), P("Gary Cahill", "DFC", 85), P("David Luiz", "DFC", 85), P("Ashley Cole", "LI", 89),
      P("John Obi Mikel", "MCD", 84), P("Michael Essien", "MC", 84), P("Frank Lampard", "MC", 89), P("Ramires", "MC", 86), P("Juan Mata", "MCO", 88),
      P("Salomon Kalou", "ED", 82), P("Florent Malouda", "EI", 82), P("Didier Drogba", "DC", 91), P("Fernando Torres", "DC", 84),
    ]),
    S("ucl-chelsea-2021", "Chelsea", 2021, UCL, 91, [
      P("Edouard Mendy", "POR", 88), P("Kepa Arrizabalaga", "POR", 80),
      P("Reece James", "LD", 87), P("Cesar Azpilicueta", "DFC", 85, ["DFC", "LD"]), P("Thiago Silva", "DFC", 89), P("Antonio Rudiger", "DFC", 88), P("Ben Chilwell", "LI", 86),
      P("N'Golo Kante", "MCD", 92, ["MCD", "MC"]), P("Jorginho", "MCD", 87), P("Mateo Kovacic", "MC", 86), P("Mason Mount", "MCO", 88, ["MCO", "MC"]),
      P("Kai Havertz", "MCO", 87, ["MCO", "DC"]), P("Christian Pulisic", "EI", 84), P("Timo Werner", "DC", 84, ["DC", "EI"]), P("Hakim Ziyech", "ED", 84),
    ]),
    S("ucl-man-city-2021", "Manchester City", 2021, UCL, 93, [
      P("Ederson", "POR", 91), P("Zack Steffen", "POR", 78),
      P("Kyle Walker", "LD", 88), P("Joao Cancelo", "LD", 89, ["LD", "LI"]), P("Ruben Dias", "DFC", 91), P("John Stones", "DFC", 87), P("Aymeric Laporte", "DFC", 87), P("Oleksandr Zinchenko", "LI", 84),
      P("Rodri", "MCD", 89), P("Ilkay Gundogan", "MC", 89), P("Kevin De Bruyne", "MCO", 94, ["MCO", "MC"]), P("Bernardo Silva", "MC", 89, ["MC", "ED"]), P("Phil Foden", "EI", 86),
      P("Riyad Mahrez", "ED", 89), P("Raheem Sterling", "EI", 88), P("Gabriel Jesus", "DC", 84),
    ]),
    S("ucl-man-city-2023", "Manchester City", 2023, UCL, 96, [
      P("Ederson", "POR", 91), P("Stefan Ortega", "POR", 80),
      P("Kyle Walker", "LD", 88), P("John Stones", "DFC", 89, ["DFC", "MCD"]), P("Ruben Dias", "DFC", 92), P("Manuel Akanji", "DFC", 87), P("Nathan Ake", "LI", 86, ["LI", "DFC"]),
      P("Rodri", "MCD", 94), P("Ilkay Gundogan", "MC", 90), P("Kevin De Bruyne", "MCO", 94, ["MCO", "MC"]), P("Bernardo Silva", "ED", 90, ["ED", "MC"]), P("Jack Grealish", "EI", 88),
      P("Phil Foden", "EI", 87, ["EI", "MCO"]), P("Riyad Mahrez", "ED", 86), P("Erling Haaland", "DC", 96), P("Julian Alvarez", "DC", 86),
    ]),
    S("ucl-inter-2010", "Inter", 2010, UCL, 92, [
      P("Julio Cesar", "POR", 91), P("Francesco Toldo", "POR", 78),
      P("Maicon", "LD", 93), P("Javier Zanetti", "LD", 90, ["LD", "MC"]), P("Lucio", "DFC", 91), P("Walter Samuel", "DFC", 90), P("Marco Materazzi", "DFC", 80), P("Cristian Chivu", "LI", 85, ["LI", "DFC"]),
      P("Esteban Cambiasso", "MCD", 90), P("Thiago Motta", "MC", 86), P("Dejan Stankovic", "MC", 86), P("Wesley Sneijder", "MCO", 92),
      P("Samuel Eto'o", "ED", 90, ["ED", "DC"]), P("Goran Pandev", "EI", 84), P("Diego Milito", "DC", 91), P("Mario Balotelli", "DC", 82),
    ]),
    S("ucl-inter-2023", "Inter", 2023, UCL, 90, [
      P("Andre Onana", "POR", 88), P("Samir Handanovic", "POR", 82),
      P("Matteo Darmian", "LD", 84, ["LD", "DFC"]), P("Denzel Dumfries", "LD", 84), P("Francesco Acerbi", "DFC", 86), P("Alessandro Bastoni", "DFC", 88), P("Federico Dimarco", "LI", 86),
      P("Marcelo Brozovic", "MCD", 87), P("Hakan Calhanoglu", "MC", 88, ["MC", "MCD"]), P("Nicolo Barella", "MC", 90), P("Henrikh Mkhitaryan", "MC", 85), P("Roberto Gagliardini", "MC", 80),
      P("Lautaro Martinez", "DC", 91), P("Edin Dzeko", "DC", 86), P("Romelu Lukaku", "DC", 86), P("Joaquin Correa", "EI", 81),
    ]),

    S("lib-river-2015", "River Plate", 2015, LIB, 88, [
      P("Marcelo Barovero", "POR", 87), P("Julio Chiarini", "POR", 75),
      P("Gabriel Mercado", "LD", 84), P("Jonatan Maidana", "DFC", 86), P("Ramiro Funes Mori", "DFC", 85), P("Eder Alvarez Balanta", "DFC", 82), P("Leonel Vangioni", "LI", 84),
      P("Matias Kranevitter", "MCD", 85), P("Leonardo Ponzio", "MCD", 84), P("Carlos Sanchez", "MC", 86), P("Lucho Gonzalez", "MC", 84), P("Ariel Rojas", "MC", 82),
      P("Gonzalo Martinez", "MCO", 83, ["MCO", "EI"]), P("Rodrigo Mora", "DC", 84, ["DC", "ED"]), P("Lucas Alario", "DC", 86), P("Teo Gutierrez", "DC", 84),
    ]),
    S("lib-river-2018", "River Plate", 2018, LIB, 91, [
      P("Franco Armani", "POR", 90), P("German Lux", "POR", 76),
      P("Gonzalo Montiel", "LD", 84), P("Jonatan Maidana", "DFC", 86), P("Lucas Martinez Quarta", "DFC", 85), P("Javier Pinola", "DFC", 85), P("Milton Casco", "LI", 84),
      P("Enzo Perez", "MCD", 88), P("Leonardo Ponzio", "MCD", 84), P("Exequiel Palacios", "MC", 87), P("Nacho Fernandez", "MC", 88), P("Juan Quintero", "MCO", 87),
      P("Gonzalo Martinez", "EI", 89, ["EI", "MCO"]), P("Rafael Borre", "DC", 86), P("Lucas Pratto", "DC", 87), P("Ignacio Scocco", "DC", 84),
    ]),
    S("lib-boca-2007", "Boca Juniors", 2007, LIB, 91, [
      P("Mauricio Caranta", "POR", 83), P("Pablo Migliore", "POR", 76),
      P("Hugo Ibarra", "LD", 86), P("Daniel Diaz", "DFC", 87), P("Claudio Morel Rodriguez", "DFC", 85, ["DFC", "LI"]), P("Jonatan Maidana", "DFC", 80), P("Clemente Rodriguez", "LI", 84),
      P("Ever Banega", "MCD", 86), P("Sebastian Battaglia", "MC", 87), P("Pablo Ledesma", "MC", 84), P("Neri Cardozo", "EI", 83, ["EI", "MC"]), P("Juan Roman Riquelme", "MCO", 94),
      P("Rodrigo Palacio", "DC", 88, ["DC", "ED"]), P("Martin Palermo", "DC", 89), P("Mauro Boselli", "DC", 80), P("Bruno Marioni", "DC", 78),
    ]),
    S("lib-boca-2018", "Boca Juniors", 2018, LIB, 87, [
      P("Agustin Rossi", "POR", 82), P("Esteban Andrada", "POR", 83),
      P("Leonardo Jara", "LD", 80), P("Julio Buffarini", "LD", 81), P("Carlos Izquierdoz", "DFC", 84), P("Lisandro Magallan", "DFC", 82), P("Emmanuel Mas", "LI", 81),
      P("Wilmar Barrios", "MCD", 86), P("Nahitan Nandez", "MC", 86), P("Pablo Perez", "MC", 84), P("Fernando Gago", "MC", 83), P("Edwin Cardona", "MCO", 84),
      P("Cristian Pavon", "ED", 86), P("Sebastian Villa", "EI", 82), P("Dario Benedetto", "DC", 87), P("Ramon Abila", "DC", 84),
    ]),
    S("lib-santos-2011", "Santos", 2011, LIB, 90, [
      P("Rafael Cabral", "POR", 84), P("Vladimir", "POR", 74),
      P("Danilo", "LD", 85), P("Bruno Rodrigo", "DFC", 82), P("Edu Dracena", "DFC", 85), P("Durval", "DFC", 83), P("Leo", "LI", 84),
      P("Arouca", "MCD", 86), P("Adriano", "MCD", 82), P("Elano", "MC", 87), P("Ganso", "MCO", 89), P("Ibson", "MC", 82),
      P("Neymar", "EI", 93, ["EI", "DC"]), P("Ze Eduardo", "DC", 83), P("Alan Kardec", "DC", 80), P("Maikon Leite", "ED", 80),
    ]),
    S("lib-santos-2020", "Santos", 2020, LIB, 84, [
      P("John", "POR", 80), P("Joao Paulo", "POR", 81),
      P("Para", "LD", 79), P("Madson", "LD", 78), P("Lucas Verissimo", "DFC", 84), P("Luan Peres", "DFC", 82), P("Felipe Jonatan", "LI", 81),
      P("Alison", "MCD", 80), P("Diego Pituca", "MC", 83), P("Carlos Sanchez", "MC", 82), P("Jean Mota", "MCO", 80),
      P("Marinho", "ED", 86), P("Soteldo", "EI", 85), P("Kaio Jorge", "DC", 82), P("Marcos Leonardo", "DC", 78),
    ]),
    S("lib-palmeiras-2020", "Palmeiras", 2020, LIB, 88, [
      P("Weverton", "POR", 88), P("Jailson", "POR", 77),
      P("Marcos Rocha", "LD", 83), P("Mayke", "LD", 80), P("Gustavo Gomez", "DFC", 88), P("Luan", "DFC", 82), P("Matias Vina", "LI", 84),
      P("Felipe Melo", "MCD", 84), P("Danilo", "MCD", 83), P("Ze Rafael", "MC", 83), P("Raphael Veiga", "MCO", 86), P("Gustavo Scarpa", "MCO", 84),
      P("Rony", "ED", 85), P("Gabriel Veron", "EI", 81), P("Luiz Adriano", "DC", 84), P("Willian", "DC", 81),
    ]),
    S("lib-palmeiras-2021", "Palmeiras", 2021, LIB, 89, [
      P("Weverton", "POR", 89), P("Jailson", "POR", 77),
      P("Marcos Rocha", "LD", 84), P("Mayke", "LD", 81), P("Gustavo Gomez", "DFC", 89), P("Luan", "DFC", 83), P("Joaquin Piquerez", "LI", 83),
      P("Danilo", "MCD", 85), P("Felipe Melo", "MCD", 82), P("Ze Rafael", "MC", 84), P("Raphael Veiga", "MCO", 88), P("Gustavo Scarpa", "MCO", 85),
      P("Dudu", "ED", 86), P("Rony", "DC", 86, ["DC", "ED"]), P("Breno Lopes", "EI", 81), P("Deyverson", "DC", 83),
    ]),
    S("lib-flamengo-2019", "Flamengo", 2019, LIB, 92, [
      P("Diego Alves", "POR", 87), P("Cesar", "POR", 76),
      P("Rafinha", "LD", 87), P("Rodrigo Caio", "DFC", 88), P("Pablo Mari", "DFC", 86), P("Thuler", "DFC", 78), P("Filipe Luis", "LI", 88),
      P("Willian Arao", "MCD", 85), P("Gerson", "MC", 88), P("Diego", "MC", 85), P("Everton Ribeiro", "MCO", 89), P("Giorgian De Arrascaeta", "MCO", 90),
      P("Bruno Henrique", "EI", 90), P("Gabriel Barbosa", "DC", 91), P("Vitinho", "ED", 82), P("Lincoln", "DC", 78),
    ]),
    S("lib-flamengo-2021", "Flamengo", 2021, LIB, 91, [
      P("Diego Alves", "POR", 86), P("Hugo Souza", "POR", 78),
      P("Isla", "LD", 82), P("Rodrigo Caio", "DFC", 86), P("David Luiz", "DFC", 85), P("Gustavo Henrique", "DFC", 81), P("Filipe Luis", "LI", 86),
      P("Willian Arao", "MCD", 84), P("Andreas Pereira", "MC", 84), P("Everton Ribeiro", "MCO", 88), P("Giorgian De Arrascaeta", "MCO", 89), P("Diego", "MC", 83),
      P("Bruno Henrique", "EI", 89), P("Gabriel Barbosa", "DC", 90), P("Pedro", "DC", 86), P("Michael", "ED", 84),
    ]),
    S("lib-internacional-2006", "Internacional", 2006, LIB, 88, [
      P("Clemer", "POR", 84), P("Renan", "POR", 75),
      P("Ceara", "LD", 83), P("Bolivar", "DFC", 85), P("Fabiano Eller", "DFC", 84), P("Indio", "DFC", 83), P("Jorge Wagner", "LI", 83),
      P("Edinho", "MCD", 84), P("Wellington Monteiro", "MC", 82), P("Tinga", "MC", 86), P("Alex", "MCO", 85), P("Ricardinho", "MC", 80),
      P("Iarley", "EI", 85), P("Rafael Sobis", "DC", 87), P("Fernandao", "DC", 88), P("Adriano Gabiru", "MCO", 82),
    ]),
    S("lib-internacional-2010", "Internacional", 2010, LIB, 87, [
      P("Renan", "POR", 83), P("Abbondanzieri", "POR", 80),
      P("Nei", "LD", 81), P("Bolivar", "DFC", 84), P("Indio", "DFC", 83), P("Sorondo", "DFC", 79), P("Kleber", "LI", 83),
      P("Guinazu", "MCD", 86), P("Sandro", "MCD", 86), P("Tinga", "MC", 84), P("D'Alessandro", "MCO", 88), P("Andrezinho", "MCO", 82),
      P("Taison", "EI", 84), P("Alecsandro", "DC", 83), P("Rafael Sobis", "DC", 84), P("Leandro Damiao", "DC", 80),
    ]),
    S("lib-sao-paulo-2005", "Sao Paulo", 2005, LIB, 90, [
      P("Rogerio Ceni", "POR", 91), P("Bosco", "POR", 76),
      P("Cicinho", "LD", 88), P("Fabao", "DFC", 84), P("Diego Lugano", "DFC", 88), P("Alex", "DFC", 82), P("Junior", "LI", 85),
      P("Mineiro", "MCD", 86), P("Josue", "MC", 85), P("Souza", "MC", 83), P("Danilo", "MCO", 87), P("Falcao", "MC", 80),
      P("Amoroso", "DC", 88), P("Luizao", "DC", 85), P("Grafite", "DC", 84), P("Aloisio", "DC", 81),
    ]),
    S("lib-sao-paulo-2006", "Sao Paulo", 2006, LIB, 88, [
      P("Rogerio Ceni", "POR", 90), P("Bosco", "POR", 76),
      P("Ilsinho", "LD", 83), P("Alex Silva", "DFC", 84), P("Edcarlos", "DFC", 82), P("Andre Dias", "DFC", 83), P("Junior", "LI", 84),
      P("Mineiro", "MCD", 86), P("Josue", "MC", 85), P("Hernanes", "MC", 83), P("Danilo", "MCO", 86), P("Souza", "MC", 83),
      P("Leandro", "EI", 84), P("Aloisio", "DC", 84), P("Ricardo Oliveira", "DC", 86), P("Thiago Ribeiro", "DC", 80),
    ]),
    S("lib-estudiantes-2009", "Estudiantes", 2009, LIB, 89, [
      P("Mariano Andujar", "POR", 86), P("Damian Albil", "POR", 74),
      P("Marcos Angeleri", "LD", 84), P("Christian Cellay", "DFC", 82), P("Leandro Desabato", "DFC", 84), P("Rolando Schiavi", "DFC", 83), P("German Re", "LI", 82),
      P("Rodrigo Brana", "MCD", 86), P("Juan Sebastian Veron", "MC", 91), P("Enzo Perez", "MC", 85), P("Leandro Benitez", "MCO", 84), P("Jose Sosa", "MCO", 83),
      P("Mauro Boselli", "DC", 87), P("Gaston Fernandez", "DC", 84), P("Maximiliano Nunez", "ED", 80), P("Calderon", "DC", 79),
    ]),
    S("lib-cruzeiro-2009", "Cruzeiro", 2009, LIB, 86, [
      P("Fabio", "POR", 86), P("Andrey", "POR", 74),
      P("Jonathan", "LD", 82), P("Thiago Heleno", "DFC", 82), P("Leonardo Silva", "DFC", 83), P("Anderson", "DFC", 79), P("Gerson Magrao", "LI", 81),
      P("Henrique", "MCD", 83), P("Marquinhos Parana", "MC", 82), P("Ramires", "MC", 87), P("Wagner", "MCO", 84), P("Gilberto", "MCO", 82),
      P("Kleber", "DC", 86), P("Wellington Paulista", "DC", 82), P("Thiago Ribeiro", "ED", 82), P("Soares", "DC", 78),
    ]),
    S("ucl-borussia-dortmund-2013", "Borussia Dortmund", 2013, UCL, 91, [
      P("Roman Weidenfeller", "POR", 87), P("Mitchell Langerak", "POR", 76),
      P("Lukasz Piszczek", "LD", 88), P("Mats Hummels", "DFC", 90), P("Neven Subotic", "DFC", 87), P("Felipe Santana", "DFC", 80), P("Marcel Schmelzer", "LI", 85),
      P("Sven Bender", "MCD", 84), P("Ilkay Gundogan", "MC", 90), P("Sebastian Kehl", "MC", 82), P("Mario Gotze", "MCO", 90), P("Kevin Grosskreutz", "EI", 82, ["EI", "LD"]),
      P("Jakub Blaszczykowski", "ED", 86), P("Marco Reus", "EI", 91), P("Robert Lewandowski", "DC", 92), P("Julian Schieber", "DC", 77),
    ]),
    S("ucl-psg-2020", "PSG", 2020, UCL, 92, [
      P("Keylor Navas", "POR", 89), P("Sergio Rico", "POR", 78),
      P("Thilo Kehrer", "LD", 82), P("Marquinhos", "DFC", 90, ["DFC", "MCD"]), P("Thiago Silva", "DFC", 89), P("Presnel Kimpembe", "DFC", 86), P("Juan Bernat", "LI", 85),
      P("Leandro Paredes", "MCD", 84), P("Idrissa Gueye", "MC", 84), P("Marco Verratti", "MC", 90), P("Ander Herrera", "MC", 83), P("Pablo Sarabia", "MCO", 82),
      P("Angel Di Maria", "ED", 89), P("Neymar", "EI", 95, ["EI", "MCO"]), P("Kylian Mbappe", "DC", 94, ["DC", "ED"]), P("Mauro Icardi", "DC", 85),
    ]),
    S("ucl-bayern-2012", "Bayern Munich", 2012, UCL, 91, [
      P("Manuel Neuer", "POR", 91), P("Hans Jorg Butt", "POR", 76),
      P("Philipp Lahm", "LD", 93), P("Jerome Boateng", "DFC", 86), P("Holger Badstuber", "DFC", 85), P("Daniel Van Buyten", "DFC", 79), P("David Alaba", "LI", 86),
      P("Luiz Gustavo", "MCD", 84), P("Bastian Schweinsteiger", "MC", 91), P("Toni Kroos", "MC", 87), P("Thomas Muller", "MCO", 88), P("Anatoliy Tymoshchuk", "MCD", 81),
      P("Arjen Robben", "ED", 92), P("Franck Ribery", "EI", 92), P("Mario Gomez", "DC", 90), P("Ivica Olic", "DC", 80),
    ]),
    S("ucl-bayern-2010", "Bayern Munich", 2010, UCL, 88, [
      P("Hans Jorg Butt", "POR", 84), P("Michael Rensing", "POR", 75),
      P("Philipp Lahm", "LD", 91), P("Holger Badstuber", "DFC", 82, ["DFC", "LI"]), P("Martin Demichelis", "DFC", 84), P("Daniel Van Buyten", "DFC", 84), P("Diego Contento", "LI", 79),
      P("Mark van Bommel", "MCD", 86), P("Bastian Schweinsteiger", "MC", 89), P("Hamit Altintop", "MC", 82), P("Thomas Muller", "MCO", 86), P("Toni Kroos", "MCO", 82),
      P("Arjen Robben", "ED", 93), P("Franck Ribery", "EI", 90), P("Ivica Olic", "DC", 85), P("Miroslav Klose", "DC", 83),
    ]),
    S("lib-tigres-2015", "Tigres", 2015, LIB, 85, [
      P("Nahuel Guzman", "POR", 84), P("Enrique Palos", "POR", 74),
      P("Israel Jimenez", "LD", 80), P("Juninho", "DFC", 84), P("Hugo Ayala", "DFC", 83), P("Jose Rivas", "DFC", 79), P("Jorge Torres Nilo", "LI", 82),
      P("Guido Pizarro", "MCD", 84), P("Egidio Arevalo Rios", "MCD", 82), P("Jesus Duenas", "MC", 81), P("Lucas Zelarayan", "MCO", 82), P("Dieter Villalpando", "MC", 77),
      P("Jurgen Damm", "ED", 83), P("Rafael Sobis", "EI", 84), P("Andre-Pierre Gignac", "DC", 88), P("Enrique Esqueda", "DC", 78),
    ]),
    S("lib-gremio-2007", "Gremio", 2007, LIB, 84, [
      P("Sebastian Saja", "POR", 82), P("Galatto", "POR", 75),
      P("Patricio", "LD", 79), P("William", "DFC", 82), P("Teco", "DFC", 81), P("Schiavi", "DFC", 80), P("Lucio", "LI", 82),
      P("Lucas Leiva", "MCD", 85), P("Sandro Goiano", "MCD", 81), P("Tcheco", "MC", 83), P("Diego Souza", "MCO", 84), P("Ramon", "MC", 78),
      P("Carlos Eduardo", "EI", 83), P("Tuta", "DC", 81), P("Tadeu", "DC", 78), P("Douglas", "ED", 78),
    ]),
    S("lib-penarol-2011", "Penarol", 2011, LIB, 83, [
      P("Sebastian Sosa", "POR", 82), P("Fabian Carini", "POR", 76),
      P("Matias Corujo", "LD", 80), P("Alejandro Gonzalez", "DFC", 82), P("Guillermo Rodriguez", "DFC", 82), P("Carlos Valdez", "DFC", 80), P("Dario Rodriguez", "LI", 81),
      P("Nicolas Freitas", "MCD", 80), P("Luis Aguiar", "MC", 83), P("Cristoforo", "MC", 78), P("Antonio Pacheco", "MCO", 84), P("Joao Pedro", "MCO", 78),
      P("Matias Mier", "EI", 80), P("Fabian Estoyanoff", "ED", 82), P("Juan Manuel Olivera", "DC", 83), P("Alejandro Martinuccio", "DC", 84, ["DC", "EI"]),
    ]),
    S("lib-river-2019", "River Plate", 2019, LIB, 90, [
      P("Franco Armani", "POR", 89), P("Enrique Bologna", "POR", 75),
      P("Gonzalo Montiel", "LD", 85), P("Lucas Martinez Quarta", "DFC", 86), P("Javier Pinola", "DFC", 85), P("Paulo Diaz", "DFC", 82), P("Milton Casco", "LI", 85),
      P("Enzo Perez", "MCD", 87), P("Exequiel Palacios", "MC", 87), P("Nacho Fernandez", "MC", 89), P("Nicolas De La Cruz", "MCO", 86), P("Juan Quintero", "MCO", 86),
      P("Matias Suarez", "EI", 86, ["EI", "DC"]), P("Rafael Borre", "DC", 87), P("Lucas Pratto", "DC", 84), P("Julian Alvarez", "ED", 82),
    ]),
    S("lib-chivas-2010", "Chivas", 2010, LIB, 82, [
      P("Luis Michel", "POR", 82), P("Liborio Sanchez", "POR", 74),
      P("Omar Esparza", "LD", 78), P("Hector Reynoso", "DFC", 82), P("Jonny Magallon", "DFC", 83), P("Mario de Luna", "DFC", 78), P("Miguel Ponce", "LI", 79),
      P("Patricio Araujo", "MCD", 80), P("Xavier Baez", "MC", 80), P("Edgar Mejia", "MC", 79), P("Marco Fabian", "MCO", 83), P("Alberto Medina", "ED", 81),
      P("Omar Arellano", "EI", 82), P("Adolfo Bautista", "MCO", 82), P("Javier Hernandez", "DC", 86), P("Omar Bravo", "DC", 83),
    ]),
    S("lib-atletico-paranaense-2005", "Atletico Paranaense", 2005, LIB, 82, [
      P("Diego", "POR", 80), P("Cleber", "POR", 73),
      P("Jancarlos", "LD", 80), P("Danilo", "DFC", 81), P("Marcao", "DFC", 80), P("Alessandro Lopes", "DFC", 78), P("Ivan", "LI", 78),
      P("Alan Bahia", "MCD", 82), P("Fernandinho", "MC", 85), P("Evandro", "MC", 81), P("Marcinho", "MCO", 80), P("Fabricio", "MC", 78),
      P("Denis Marques", "ED", 82), P("Lima", "DC", 81), P("Aloisio", "DC", 82), P("Dagoberto", "EI", 80),
    ]),
  ];
})();
