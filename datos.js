const categorias = [
            {
                titulo: "Top 10 Balón de Oro 2015",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "lionel messi", "leo messi"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7", "cristiano ronaldo"] },
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr", "ney"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski"] },
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez", "lucho suarez"] },
                    { nombre: "Thomas Müller", alias: ["muller", "thomas muller"] },
                    { nombre: "Manuel Neuer", alias: ["neuer", "manuel neuer"] },
                    { nombre: "Eden Hazard", alias: ["hazard", "eden hazard"] },
                    { nombre: "Andrés Iniesta", alias: ["iniesta", "andres iniesta"] },
                    { nombre: "Alexis Sánchez", alias: ["alexis", "alexis sanchez", "sanchez"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la Premier League",
                respuestas: [
                    { nombre: "Moisés Caicedo", alias: ["caicedo", "moises caicedo"] },
                    { nombre: "Declan Rice", alias: ["rice", "declan rice"] },
                    { nombre: "Enzo Fernández", alias: ["enzo", "enzo fernandez"] },
                    { nombre: "Jack Grealish", alias: ["grealish", "jack grealish"] },
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] },
                    { nombre: "Paul Pogba", alias: ["pogba", "paul pogba"] },
                    { nombre: "Antony", alias: ["antony"] },
                    { nombre: "Harry Maguire", alias: ["maguire", "harry maguire"] },
                    { nombre: "Joško Gvardiol", alias: ["gvardiol", "josko gvardiol"] },
                    { nombre: "Jadon Sancho", alias: ["sancho", "jadon sancho"] }
                ]
            },
            {
                titulo: "Ventas más caras de la historia de Boca Jrs",
                respuestas: [
                    { nombre: "Fernando Gago", alias: ["gago", "fernando gago"] },
                    { nombre: "Walter Samuel", alias: ["samuel", "walter samuel"] },
                    { nombre: "Rodrigo Bentancur", alias: ["bentancur", "rodrigo bentancur"] },
                    { nombre: "Equi Fernández", alias: ["equi", "equi fernandez", "ezequiel fernandez"] },
                    { nombre: "Aaron Anselmino", alias: ["anselmino", "aaron anselmino"] },
                    { nombre: "Éver Banega", alias: ["banega", "ever banega"] },
                    { nombre: "Nahitan Nández", alias: ["nandez", "nahitan nandez"] },
                    { nombre: "Leonardo Balerdi", alias: ["balerdi", "leonardo balerdi"] },
                    { nombre: "Carlos Tevez", alias: ["tevez", "carlos tevez", "apache"] },
                    { nombre: "Wilmar Barrios", alias: ["barrios", "wilmar barrios"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección Argentina",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Gabriel Batistuta", alias: ["batistuta", "bati", "gabriel batistuta"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "kun"] },
                    { nombre: "Hernán Crespo", alias: ["crespo", "hernan crespo"] },
                    { nombre: "Diego Maradona", alias: ["maradona", "diego", "diego maradona"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "pipita higuain", "pipita"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "fideo", "angel di maria"] },
                    { nombre: "Luis Artime", alias: ["artime", "luis artime"] },
                    { nombre: "Daniel Passarella", alias: ["passarella", "daniel passarella"] },
                    { nombre: "Leopoldo Luque", alias: ["luque", "leopoldo luque"] }
                ]
            },
            {
                titulo: "Clubes con más Copas Libertadores",
                respuestas: [
                    { nombre: "Independiente", alias: ["independiente", "cai", "rey de copas"] },
                    { nombre: "Boca Juniors", alias: ["boca", "boca juniors", "boca jrs"] },
                    { nombre: "Peñarol", alias: ["penarol", "ca penarol"] },
                    { nombre: "River Plate", alias: ["river", "river plate", "carp"] },
                    { nombre: "Estudiantes de La Plata", alias: ["estudiantes", "estudiantes lp", "edlp", "pincha"] },
                    { nombre: "Olimpia", alias: ["olimpia", "club olimpia"] },
                    { nombre: "Nacional", alias: ["nacional", "club nacional"] },
                    { nombre: "São Paulo", alias: ["sao paulo", "san pablo"] },
                    { nombre: "Palmeiras", alias: ["palmeiras"] },
                    { nombre: "Santos", alias: ["santos"] }
                ]
            },
            {
                titulo: "Ventas más caras de la historia de River Plate",
                respuestas: [
                    { nombre: "Enzo Fernández", alias: ["enzo fernandez", "enzo"] },
                    { nombre: "Javier Saviola", alias: ["saviola", "javier saviola"] },
                    { nombre: "Claudio Echeverri", alias: ["echeverri", "diablito echeverri", "diablito"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Lucas Alario", alias: ["alario", "lucas alario"] },
                    { nombre: "Marcelo Salas", alias: ["salas", "marcelo salas", "matador salas"] },
                    { nombre: "Exequiel Palacios", alias: ["palacios", "exequiel palacios"] },
                    { nombre: "Sebastián Driussi", alias: ["driussi", "sebastian driussi"] },
                    { nombre: "Pablo Aimar", alias: ["aimar", "pablo aimar", "payasito aimar"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Champions League",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema"] },
                    { nombre: "Raúl González", alias: ["raul", "raul gonzalez"] },
                    { nombre: "Ruud van Nistelrooy", alias: ["van nistelrooy", "ruud van nistelrooy"] },
                    { nombre: "Thomas Müller", alias: ["muller", "thomas muller"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry", "titi henry"] },
                    { nombre: "Zlatan Ibrahimović", alias: ["ibrahimovic", "zlatan", "zlatan ibrahimovic"] },
                    { nombre: "Andriy Shevchenko", alias: ["shevchenko", "andriy shevchenko"] }
                ]
            },
            {
                titulo: "Jugadores con más Balones de Oro",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Michel Platini", alias: ["platini", "michel platini"] },
                    { nombre: "Johan Cruyff", alias: ["cruyff", "johan cruyff"] },
                    { nombre: "Marco van Basten", alias: ["van basten", "marco van basten"] },
                    { nombre: "Franz Beckenbauer", alias: ["beckenbauer", "franz beckenbauer"] },
                    { nombre: "Ronaldo Nazário", alias: ["ronaldo", "ronaldo nazario", "el fenomeno", "ronaldo fenomeno"] },
                    { nombre: "Alfredo Di Stéfano", alias: ["di stefano", "alfredo di stefano"] },
                    { nombre: "Kevin Keegan", alias: ["keegan", "kevin keegan"] },
                    { nombre: "Karl-Heinz Rummenigge", alias: ["rummenigge", "karl-heinz rummenigge"] }
                ]
            },
            {
                titulo: "Máximos goleadores de la historia de los Mundiales",
                respuestas: [
                    { nombre: "Miroslav Klose", alias: ["klose", "miroslav klose"] },
                    { nombre: "Ronaldo Nazário", alias: ["ronaldo", "ronaldo nazario", "el fenomeno"] },
                    { nombre: "Gerd Müller", alias: ["muller", "gerd muller"] },
                    { nombre: "Just Fontaine", alias: ["fontaine", "just fontaine"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Pelé", alias: ["pele", "edson arantes do nascimento"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Sándor Kocsis", alias: ["kocsis", "sandor kocsis"] },
                    { nombre: "Jürgen Klinsmann", alias: ["klinsmann", "jurgen klinsmann"] },
                    { nombre: "Gabriel Batistuta", alias: ["batistuta", "gabriel batistuta", "bati"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del fútbol",
                respuestas: [
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Philippe Coutinho", alias: ["coutinho", "philippe coutinho"] },
                    { nombre: "Ousmane Dembélé", alias: ["dembele", "ousmane dembele"] },
                    { nombre: "João Félix", alias: ["joao felix", "felix"] },
                    { nombre: "Enzo Fernández", alias: ["enzo fernandez", "enzo"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Jack Grealish", alias: ["grealish", "jack grealish"] },
                    { nombre: "Declan Rice", alias: ["rice", "declan rice"] },
                    { nombre: "Moisés Caicedo", alias: ["caicedo", "moises caicedo"] }
                ]
            },
            ,{
                titulo: "Jugadores con más partidos en la Selección Argentina",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Javier Mascherano", alias: ["mascherano", "javier mascherano", "jefecito"] },
                    { nombre: "Javier Zanetti", alias: ["zanetti", "javier zanetti", "pupi zanetti"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Nicolás Otamendi", alias: ["otamendi", "nicolas otamendi"] },
                    { nombre: "Roberto Ayala", alias: ["ayala", "roberto ayala", "raton ayala"] },
                    { nombre: "Diego Simeone", alias: ["simeone", "diego simeone", "cholo simeone"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Oscar Ruggeri", alias: ["ruggeri", "oscar ruggeri", "cabezon ruggeri"] },
                    { nombre: "Sergio Romero", alias: ["romero", "sergio romero", "chiquito romero"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2010 (El podio de La Masia)",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Andrés Iniesta", alias: ["iniesta", "andres iniesta"] },
                    { nombre: "Xavi Hernández", alias: ["xavi", "xavi hernandez"] },
                    { nombre: "Wesley Sneijder", alias: ["sneijder", "wesley sneijder"] },
                    { nombre: "Diego Forlán", alias: ["forlan", "diego forlan", "cachavacha"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Iker Casillas", alias: ["casillas", "iker casillas"] },
                    { nombre: "David Villa", alias: ["villa", "david villa", "guaje villa"] },
                    { nombre: "Didier Drogba", alias: ["drogba", "didier drogba"] },
                    { nombre: "Xabi Alonso", alias: ["xabi alonso", "alonso"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Real Madrid",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema", "el gato"] },
                    { nombre: "Raúl González", alias: ["raul", "raul gonzalez"] },
                    { nombre: "Alfredo Di Stéfano", alias: ["di stefano", "alfredo di stefano"] },
                    { nombre: "Santillana", alias: ["santillana", "carlos alonso gonzalez"] },
                    { nombre: "Ferenc Puskás", alias: ["puskas", "ferenc puskas"] },
                    { nombre: "Hugo Sánchez", alias: ["hugo sanchez", "sanchez"] },
                    { nombre: "Paco Gento", alias: ["gento", "paco gento", "francisco gento"] },
                    { nombre: "Pirri", alias: ["pirri", "jose martinez sanchez"] },
                    { nombre: "Emilio Butragueño", alias: ["butragueno", "emilio butragueno", "el buitre"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Barcelona",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "César Rodríguez", alias: ["cesar", "cesar rodriguez"] },
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez", "lucho suarez"] },
                    { nombre: "László Kubala", alias: ["kubala", "laszlo kubala"] },
                    { nombre: "Josep Escolà", alias: ["escola", "josep escola"] },
                    { nombre: "Paulino Alcántara", alias: ["alcantara", "paulino alcantara"] },
                    { nombre: "Josep Samitier", alias: ["samitier", "josep samitier"] },
                    { nombre: "Samuel Eto'o", alias: ["etoo", "samuel etoo"] },
                    { nombre: "Rivaldo", alias: ["rivaldo"] },
                    { nombre: "Evaristo de Macedo", alias: ["evaristo", "evaristo de macedo"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Real Madrid",
                respuestas: [
                    { nombre: "Eden Hazard", alias: ["hazard", "eden hazard"] },
                    { nombre: "Jude Bellingham", alias: ["bellingham", "jude bellingham"] },
                    { nombre: "Gareth Bale", alias: ["bale", "gareth bale"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Aurélien Tchouaméni", alias: ["tchouameni", "aurelien tchouameni"] },
                    { nombre: "Zinedine Zidane", alias: ["zidane", "zinedine zidane", "zizou"] },
                    { nombre: "James Rodríguez", alias: ["james", "james rodriguez"] },
                    { nombre: "Kaká", alias: ["kaka", "ricardo kaka"] },
                    { nombre: "Luís Figo", alias: ["figo", "luis figo"] },
                    { nombre: "Éder Militão", alias: ["militao", "eder militao"] }
                ]
            },
            {
                titulo: "Clubes argentinos con más títulos internacionales",
                respuestas: [
                    { nombre: "Boca Juniors", alias: ["boca", "boca juniors", "cabj"] },
                    { nombre: "Independiente", alias: ["independiente", "cai", "rojo"] },
                    { nombre: "River Plate", alias: ["river", "river plate", "carp"] },
                    { nombre: "Estudiantes de La Plata", alias: ["estudiantes", "edlp", "pincha"] },
                    { nombre: "Vélez Sarsfield", alias: ["velez", "velez sarsfield", "fortin"] },
                    { nombre: "Racing Club", alias: ["racing", "racing club", "la academia"] },
                    { nombre: "San Lorenzo", alias: ["san lorenzo", "casla", "ciclon"] },
                    { nombre: "Argentinos Juniors", alias: ["argentinos", "argentinos juniors", "bicho"] },
                    { nombre: "Lanús", alias: ["lanus", "granate"] },
                    { nombre: "Arsenal de Sarandí", alias: ["arsenal", "arsenal de sarandi", "arse"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Premier League",
                respuestas: [
                    { nombre: "Alan Shearer", alias: ["shearer", "alan shearer"] },
                    { nombre: "Harry Kane", alias: ["kane", "harry kane"] },
                    { nombre: "Wayne Rooney", alias: ["rooney", "wayne rooney"] },
                    { nombre: "Andy Cole", alias: ["cole", "andy cole", "andrew cole"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Frank Lampard", alias: ["lampard", "frank lampard"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry"] },
                    { nombre: "Robbie Fowler", alias: ["fowler", "robbie fowler"] },
                    { nombre: "Jermain Defoe", alias: ["defoe", "jermain defoe"] },
                    { nombre: "Michael Owen", alias: ["owen", "michael owen"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Barcelona",
                respuestas: [
                    { nombre: "Philippe Coutinho", alias: ["coutinho", "philippe coutinho"] },
                    { nombre: "Ousmane Dembélé", alias: ["dembele", "ousmane dembele"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr"] },
                    { nombre: "Frenkie de Jong", alias: ["de jong", "frenkie de jong"] },
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez"] },
                    { nombre: "Zlatan Ibrahimović", alias: ["ibrahimovic", "zlatan", "zlatan ibrahimovic"] },
                    { nombre: "Miralem Pjanić", alias: ["pjanic", "miralem pjanic"] },
                    { nombre: "Raphinha", alias: ["raphinha"] },
                    { nombre: "Ferran Torres", alias: ["ferran", "ferran torres"] }
                ]
            },
            {
                titulo: "Arqueros con más vallas invictas en la Premier League",
                respuestas: [
                    { nombre: "Petr Čech", alias: ["cech", "petr cech"] },
                    { nombre: "David James", alias: ["james", "david james"] },
                    { nombre: "Mark Schwarzer", alias: ["schwarzer", "mark schwarzer"] },
                    { nombre: "David de Gea", alias: ["de gea", "david de gea"] },
                    { nombre: "David Seaman", alias: ["seaman", "david seaman"] },
                    { nombre: "Hugo Lloris", alias: ["lloris", "hugo lloris"] },
                    { nombre: "Nigel Martyn", alias: ["martyn", "nigel martyn"] },
                    { nombre: "Pepe Reina", alias: ["reina", "pepe reina"] },
                    { nombre: "Tim Howard", alias: ["howard", "tim howard"] },
                    { nombre: "Edwin van der Sar", alias: ["van der sar", "edwin van der sar"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Copa Libertadores",
                respuestas: [
                    { nombre: "Alberto Spencer", alias: ["spencer", "alberto spencer"] },
                    { nombre: "Fernando Morena", alias: ["morena", "fernando morena"] },
                    { nombre: "Pedro Rocha", alias: ["rocha", "pedro rocha"] },
                    { nombre: "Daniel Onega", alias: ["onega", "daniel onega"] },
                    { nombre: "Julio Morales", alias: ["morales", "julio morales"] },
                    { nombre: "Antony de Ávila", alias: ["de avila", "antony de avila", "el pitufo"] },
                    { nombre: "Juan Carlos Sarnari", alias: ["sarnari", "juan carlos sarnari"] },
                    { nombre: "Luis Artime", alias: ["artime", "luis artime"] },
                    { nombre: "Oswaldo Ramírez", alias: ["ramirez", "oswaldo ramirez", "cachito ramirez"] },
                    { nombre: "Gabriel Barbosa", alias: ["gabigol", "gabriel barbosa"] }
                ]
            }
            ,{
                titulo: "Equipos con más títulos de Primera División en Argentina",
                respuestas: [
                    { nombre: "River Plate", alias: ["river", "river plate", "carp"] },
                    { nombre: "Boca Juniors", alias: ["boca", "boca juniors", "cabj"] },
                    { nombre: "Racing Club", alias: ["racing", "racing club", "la academia"] },
                    { nombre: "Independiente", alias: ["independiente", "cai", "rojo"] },
                    { nombre: "San Lorenzo", alias: ["san lorenzo", "casla", "ciclon"] },
                    { nombre: "Vélez Sarsfield", alias: ["velez", "velez sarsfield", "fortin"] },
                    { nombre: "Alumni", alias: ["alumni", "alumni athletic club"] },
                    { nombre: "Estudiantes de La Plata", alias: ["estudiantes", "estudiantes de la plata", "edlp", "pincha"] },
                    { nombre: "Newell's Old Boys", alias: ["newells", "newells old boys", "nob", "lepra"] },
                    { nombre: "Huracán", alias: ["huracan", "club atletico huracan", "globo"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Serie A (Italia)",
                respuestas: [
                    { nombre: "Silvio Piola", alias: ["piola", "silvio piola"] },
                    { nombre: "Francesco Totti", alias: ["totti", "francesco totti", "il capitano"] },
                    { nombre: "Gunnar Nordahl", alias: ["nordahl", "gunnar nordahl"] },
                    { nombre: "Giuseppe Meazza", alias: ["meazza", "giuseppe meazza"] },
                    { nombre: "José Altafini", alias: ["altafini", "jose altafini"] },
                    { nombre: "Ciro Immobile", alias: ["immobile", "ciro immobile"] },
                    { nombre: "Roberto Baggio", alias: ["baggio", "roberto baggio", "il divin codino"] },
                    { nombre: "Antonio Di Natale", alias: ["di natale", "antonio di natale", "toto di natale"] },
                    { nombre: "Kurt Hamrin", alias: ["hamrin", "kurt hamrin"] },
                    { nombre: "Alessandro Del Piero", alias: ["del piero", "alessandro del piero"] }
                ]
            },
            {
                titulo: "Entrenadores con más títulos en la historia",
                respuestas: [
                    { nombre: "Sir Alex Ferguson", alias: ["ferguson", "alex ferguson", "sir alex ferguson"] },
                    { nombre: "Pep Guardiola", alias: ["guardiola", "pep guardiola", "josep guardiola"] },
                    { nombre: "Mircea Lucescu", alias: ["lucescu", "mircea lucescu"] },
                    { nombre: "Valeriy Lobanovskyi", alias: ["lobanovskyi", "valeriy lobanovskyi"] },
                    { nombre: "Carlo Ancelotti", alias: ["ancelotti", "carlo ancelotti", "carletto"] },
                    { nombre: "Jock Stein", alias: ["stein", "jock stein"] },
                    { nombre: "José Mourinho", alias: ["mourinho", "jose mourinho", "the special one"] },
                    { nombre: "Luiz Felipe Scolari", alias: ["scolari", "luiz felipe scolari", "felipao"] },
                    { nombre: "Ottmar Hitzfeld", alias: ["hitzfeld", "ottmar hitzfeld"] },
                    { nombre: "Arsène Wenger", alias: ["wenger", "arsene wenger"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de Brasil",
                respuestas: [
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr", "ney"] },
                    { nombre: "Pelé", alias: ["pele", "edson arantes do nascimento", "o rei"] },
                    { nombre: "Ronaldo Nazário", alias: ["ronaldo", "ronaldo nazario", "el fenomeno"] },
                    { nombre: "Romário", alias: ["romario", "romario de souza faria"] },
                    { nombre: "Zico", alias: ["zico", "arthur antunes coimbra"] },
                    { nombre: "Bebeto", alias: ["bebeto", "jose roberto gama de oliveira"] },
                    { nombre: "Rivaldo", alias: ["rivaldo", "vitor borba ferreira"] },
                    { nombre: "Jairzinho", alias: ["jairzinho", "jair ventura filho"] },
                    { nombre: "Ronaldinho", alias: ["ronaldinho", "ronaldinho gaucho", "dinho"] },
                    { nombre: "Ademir", alias: ["ademir", "ademir marques de menezes"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia de la Serie A",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7", "cristiano ronaldo"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Matthijs de Ligt", alias: ["de ligt", "matthijs de ligt"] },
                    { nombre: "Dušan Vlahović", alias: ["vlahovic", "dusan vlahovic"] },
                    { nombre: "Arthur Melo", alias: ["arthur", "arthur melo"] },
                    { nombre: "Victor Osimhen", alias: ["osimhen", "victor osimhen"] },
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] },
                    { nombre: "Gianluigi Buffon", alias: ["buffon", "gianluigi buffon", "gigi buffon"] },
                    { nombre: "Christian Vieri", alias: ["vieri", "christian vieri", "bobo vieri"] },
                    { nombre: "Hernán Crespo", alias: ["crespo", "hernan crespo", "valdanito"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2023",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Erling Haaland", alias: ["haaland", "erling haaland"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Rodri", alias: ["rodri", "rodrigo hernandez"] },
                    { nombre: "Vinícius Júnior", alias: ["vinicius", "vini jr", "vinicius junior"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Victor Osimhen", alias: ["osimhen", "victor osimhen"] },
                    { nombre: "Bernardo Silva", alias: ["bernardo silva", "bernardo"] },
                    { nombre: "Luka Modrić", alias: ["modric", "luka modric"] }
                ]
            },
            {
                titulo: "Máximos asistentes históricos de la Premier League",
                respuestas: [
                    { nombre: "Ryan Giggs", alias: ["giggs", "ryan giggs"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Cesc Fàbregas", alias: ["fabregas", "cesc fabregas"] },
                    { nombre: "Wayne Rooney", alias: ["rooney", "wayne rooney"] },
                    { nombre: "Frank Lampard", alias: ["lampard", "frank lampard"] },
                    { nombre: "Dennis Bergkamp", alias: ["bergkamp", "dennis bergkamp"] },
                    { nombre: "David Silva", alias: ["silva", "david silva"] },
                    { nombre: "Steven Gerrard", alias: ["gerrard", "steven gerrard"] },
                    { nombre: "James Milner", alias: ["milner", "james milner"] },
                    { nombre: "David Beckham", alias: ["beckham", "david beckham"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la historia de la Champions League",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Iker Casillas", alias: ["casillas", "iker casillas"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema"] },
                    { nombre: "Thomas Müller", alias: ["muller", "thomas muller"] },
                    { nombre: "Xavi Hernández", alias: ["xavi", "xavi hernandez"] },
                    { nombre: "Sergio Ramos", alias: ["ramos", "sergio ramos"] },
                    { nombre: "Toni Kroos", alias: ["kroos", "toni kroos"] },
                    { nombre: "Manuel Neuer", alias: ["neuer", "manuel neuer"] },
                    { nombre: "Ryan Giggs", alias: ["giggs", "ryan giggs"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Bayern Múnich",
                respuestas: [
                    { nombre: "Harry Kane", alias: ["kane", "harry kane"] },
                    { nombre: "Lucas Hernández", alias: ["lucas hernandez", "hernandez"] },
                    { nombre: "Matthijs de Ligt", alias: ["de ligt", "matthijs de ligt"] },
                    { nombre: "Kim Min-jae", alias: ["kim", "kim min jae", "min jae"] },
                    { nombre: "Leroy Sané", alias: ["sane", "leroy sane"] },
                    { nombre: "Dayot Upamecano", alias: ["upamecano", "dayot upamecano"] },
                    { nombre: "Corentin Tolisso", alias: ["tolisso", "corentin tolisso"] },
                    { nombre: "Javi Martínez", alias: ["martinez", "javi martinez"] },
                    { nombre: "Arturo Vidal", alias: ["vidal", "arturo vidal", "rey arturo"] },
                    { nombre: "Mario Götze", alias: ["gotze", "mario gotze"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Primera División de Argentina",
                respuestas: [
                    { nombre: "Arsenio Erico", alias: ["erico", "arsenio erico"] },
                    { nombre: "Ángel Labruna", alias: ["labruna", "angel labruna"] },
                    { nombre: "Herminio Masantonio", alias: ["masantonio", "herminio masantonio"] },
                    { nombre: "Manuel Pelegrina", alias: ["pelegrina", "manuel pelegrina"] },
                    { nombre: "José Sanfilippo", alias: ["sanfilippo", "jose sanfilippo", "nene sanfilippo"] },
                    { nombre: "Martín Palermo", alias: ["palermo", "martin palermo", "el loco", "titan"] },
                    { nombre: "Bernabé Ferreyra", alias: ["ferreyra", "bernabe ferreyra", "el mortero de rufino"] },
                    { nombre: "Oscar Más", alias: ["mas", "oscar mas", "pinino mas"] },
                    { nombre: "Hugo Gottardi", alias: ["gottardi", "hugo gottardi"] },
                    { nombre: "Roberto Cherro", alias: ["cherro", "roberto cherro"] }
                ]
            }
            ,{
                titulo: "Jugadores argentinos con más títulos en la historia",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Javier Mascherano", alias: ["mascherano", "javier mascherano", "jefecito"] },
                    { nombre: "Esteban Cambiasso", alias: ["cambiasso", "esteban cambiasso", "cuchu cambiasso"] },
                    { nombre: "Carlos Tevez", alias: ["tevez", "carlos tevez", "apache", "carlitos tevez"] },
                    { nombre: "Franco Armani", alias: ["armani", "franco armani"] },
                    { nombre: "Lucho González", alias: ["lucho gonzalez", "lucho", "comandante"] },
                    { nombre: "Guillermo Barros Schelotto", alias: ["guillermo barros schelotto", "mellizo", "guillermo"] },
                    { nombre: "Javier Zanetti", alias: ["zanetti", "javier zanetti", "pupi"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun", "sergio aguero", "kun aguero"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de La Liga (España)",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Telmo Zarra", alias: ["zarra", "telmo zarra"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema"] },
                    { nombre: "Hugo Sánchez", alias: ["hugo sanchez", "sanchez"] },
                    { nombre: "Raúl González", alias: ["raul", "raul gonzalez"] },
                    { nombre: "Alfredo Di Stéfano", alias: ["di stefano", "alfredo di stefano"] },
                    { nombre: "César Rodríguez", alias: ["cesar", "cesar rodriguez"] },
                    { nombre: "Quini", alias: ["quini", "enrique castro"] },
                    { nombre: "Pahiño", alias: ["pahino", "manuel fernandez"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Paris Saint-Germain (PSG)",
                respuestas: [
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr", "ney"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Randal Kolo Muani", alias: ["kolo muani", "randal kolo muani"] },
                    { nombre: "Achraf Hakimi", alias: ["hakimi", "achraf hakimi"] },
                    { nombre: "Gonçalo Ramos", alias: ["ramos", "goncalo ramos"] },
                    { nombre: "Edinson Cavani", alias: ["cavani", "edinson cavani", "matador cavani"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria"] },
                    { nombre: "Manuel Ugarte", alias: ["ugarte", "manuel ugarte"] },
                    { nombre: "João Neves", alias: ["joao neves", "neves"] },
                    { nombre: "Ousmane Dembélé", alias: ["dembele", "ousmane dembele"] }
                ]
            },
            {
                titulo: "Equipos italianos con más títulos de Serie A",
                respuestas: [
                    { nombre: "Juventus", alias: ["juventus", "juve", "vecchia signora"] },
                    { nombre: "Inter de Milán", alias: ["inter", "inter de milan", "internazionale"] },
                    { nombre: "AC Milan", alias: ["milan", "ac milan", "rossonero"] },
                    { nombre: "Genoa", alias: ["genoa", "genoa cfc"] },
                    { nombre: "Torino", alias: ["torino", "il toro", "torino fc"] },
                    { nombre: "Bologna", alias: ["bologna", "bologna fc"] },
                    { nombre: "Pro Vercelli", alias: ["pro vercelli"] },
                    { nombre: "AS Roma", alias: ["roma", "as roma", "la loba"] },
                    { nombre: "Napoli", alias: ["napoli", "ssc napoli"] },
                    { nombre: "Lazio", alias: ["lazio", "ss lazio"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de Independiente",
                respuestas: [
                    { nombre: "Arsenio Erico", alias: ["erico", "arsenio erico"] },
                    { nombre: "Vicente de la Mata", alias: ["de la mata", "vicente de la mata", "capote"] },
                    { nombre: "Antonio Sastre", alias: ["sastre", "antonio sastre"] },
                    { nombre: "Ricardo Bochini", alias: ["bochini", "ricardo bochini", "bocha"] },
                    { nombre: "Manuel Seoane", alias: ["seoane", "manuel seoane", "la chancha"] },
                    { nombre: "Norberto Outes", alias: ["outes", "norberto outes"] },
                    { nombre: "Raúl Bernao", alias: ["bernao", "raul bernao", "loco bernao"] },
                    { nombre: "Ernesto Grillo", alias: ["grillo", "ernesto grillo"] },
                    { nombre: "Daniel Bertoni", alias: ["bertoni", "daniel bertoni"] },
                    { nombre: "Luis Artime", alias: ["artime", "luis artime"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Bundesliga",
                respuestas: [
                    { nombre: "Gerd Müller", alias: ["muller", "gerd muller", "bombardero de la nacion"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski", "tito lewandowski"] },
                    { nombre: "Klaus Fischer", alias: ["fischer", "klaus fischer"] },
                    { nombre: "Jupp Heynckes", alias: ["heynckes", "jupp heynckes"] },
                    { nombre: "Manfred Burgsmüller", alias: ["burgsmuller", "manfred burgsmuller"] },
                    { nombre: "Claudio Pizarro", alias: ["pizarro", "claudio pizarro", "bombardero de los andes"] },
                    { nombre: "Thomas Müller", alias: ["thomas muller", "muller"] },
                    { nombre: "Ulf Kirsten", alias: ["kirsten", "ulf kirsten"] },
                    { nombre: "Stefan Kuntz", alias: ["kuntz", "stefan kuntz"] },
                    { nombre: "Dieter Müller", alias: ["dieter muller", "muller"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia de la Juventus",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Matthijs de Ligt", alias: ["de ligt", "matthijs de ligt"] },
                    { nombre: "Dušan Vlahović", alias: ["vlahovic", "dusan vlahovic"] },
                    { nombre: "Arthur Melo", alias: ["arthur", "arthur melo"] },
                    { nombre: "Gianluigi Buffon", alias: ["buffon", "gianluigi buffon", "gigi"] },
                    { nombre: "Pavel Nedvěd", alias: ["nedved", "pavel nedved"] },
                    { nombre: "João Cancelo", alias: ["cancelo", "joao cancelo"] },
                    { nombre: "Douglas Costa", alias: ["douglas costa", "costa"] },
                    { nombre: "Gleison Bremer", alias: ["bremer", "gleison bremer"] }
                ]
            },
            {
                titulo: "Clubes ingleses con más títulos de Primera División",
                respuestas: [
                    { nombre: "Manchester United", alias: ["manchester united", "man united", "red devils"] },
                    { nombre: "Liverpool", alias: ["liverpool", "liverpool fc", "reds"] },
                    { nombre: "Arsenal", alias: ["arsenal", "arsenal fc", "gunners"] },
                    { nombre: "Manchester City", alias: ["manchester city", "man city", "citizens"] },
                    { nombre: "Everton", alias: ["everton", "everton fc", "toffees"] },
                    { nombre: "Aston Villa", alias: ["aston villa", "villa"] },
                    { nombre: "Sunderland", alias: ["sunderland", "sunderland afc", "black cats"] },
                    { nombre: "Chelsea", alias: ["chelsea", "chelsea fc", "blues"] },
                    { nombre: "Newcastle United", alias: ["newcastle", "newcastle united", "magpies"] },
                    { nombre: "Sheffield Wednesday", alias: ["sheffield wednesday", "sheffield wed"] }
                ]
            },
            {
                titulo: "Técnicos que dirigieron a Argentina en más Mundiales",
                respuestas: [
                    { nombre: "Carlos Bilardo", alias: ["bilardo", "carlos bilardo", "narigon"] },
                    { nombre: "César Luis Menotti", alias: ["menotti", "cesar luis menotti", "el flaco"] },
                    { nombre: "Guillermo Stábile", alias: ["stabile", "guillermo stabile"] },
                    { nombre: "Alejandro Sabella", alias: ["sabella", "alejandro sabella", "pachorra"] },
                    { nombre: "José Pékerman", alias: ["pekerman", "jose pekerman"] },
                    { nombre: "Lionel Scaloni", alias: ["scaloni", "lionel scaloni"] },
                    { nombre: "Marcelo Bielsa", alias: ["bielsa", "marcelo bielsa", "loco bielsa"] },
                    { nombre: "Diego Maradona", alias: ["maradona", "diego maradona", "diego"] },
                    { nombre: "Daniel Passarella", alias: ["passarella", "daniel passarella", "kaiser"] },
                    { nombre: "Alfio Basile", alias: ["basile", "alfio basile", "coco basile"] }
                ]
            },
            {
                titulo: "Clubes con más Copas Sudamericanas",
                respuestas: [
                    { nombre: "LDU Quito", alias: ["ldu", "ldu quito", "liga de quito"] },
                    { nombre: "Independiente del Valle", alias: ["idv", "independiente del valle"] },
                    { nombre: "Boca Juniors", alias: ["boca", "boca juniors", "cabj"] },
                    { nombre: "Independiente", alias: ["independiente", "cai"] },
                    { nombre: "Athletico Paranaense", alias: ["athletico paranaense", "paranaense"] },
                    { nombre: "San Lorenzo", alias: ["san lorenzo", "casla"] },
                    { nombre: "River Plate", alias: ["river", "river plate", "carp"] },
                    { nombre: "São Paulo", alias: ["sao paulo", "san pablo"] },
                    { nombre: "Internacional", alias: ["internacional", "inter de porto alegre"] },
                    { nombre: "Lanús", alias: ["lanus"] }
                ]
            }
            ,{
                titulo: "Máximos goleadores históricos de Boca Juniors",
                respuestas: [
                    { nombre: "Martín Palermo", alias: ["palermo", "martin palermo", "el titan", "loco palermo"] },
                    { nombre: "Roberto Cherro", alias: ["cherro", "roberto cherro", "cabecita de oro"] },
                    { nombre: "Francisco Varallo", alias: ["varallo", "francisco varallo", "pancho varallo"] },
                    { nombre: "Domingo Tarasconi", alias: ["tarasconi", "domingo tarasconi"] },
                    { nombre: "Jaime Sarlanga", alias: ["sarlanga", "jaime sarlanga"] },
                    { nombre: "Mario Boyé", alias: ["boye", "mario boye", "atomico boye"] },
                    { nombre: "Delfín Benítez Cáceres", alias: ["benitez caceres", "delfin benitez caceres"] },
                    { nombre: "Pedro Calomino", alias: ["calomino", "pedro calomino"] },
                    { nombre: "Carlos Tevez", alias: ["tevez", "carlos tevez", "apache", "carlitos"] },
                    { nombre: "Juan Román Riquelme", alias: ["riquelme", "juan roman riquelme", "roman", "topo gigio"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de River Plate",
                respuestas: [
                    { nombre: "Ángel Labruna", alias: ["labruna", "angel labruna", "el feo"] },
                    { nombre: "Oscar Más", alias: ["mas", "oscar mas", "pinino mas"] },
                    { nombre: "Bernabé Ferreyra", alias: ["ferreyra", "bernabe ferreyra", "el mortero de rufino"] },
                    { nombre: "José Manuel Moreno", alias: ["moreno", "jose manuel moreno", "el charro"] },
                    { nombre: "Norberto Alonso", alias: ["alonso", "norberto alonso", "beto alonso"] },
                    { nombre: "Adolfo Pedernera", alias: ["pedernera", "adolfo pedernera"] },
                    { nombre: "Enzo Francescoli", alias: ["francescoli", "enzo francescoli", "el principe"] },
                    { nombre: "Carlos Peucelle", alias: ["peucelle", "carlos peucelle"] },
                    { nombre: "Fernando Cavenaghi", alias: ["cavenaghi", "fernando cavenaghi", "torito", "cavegol"] },
                    { nombre: "Daniel Onega", alias: ["onega", "daniel onega"] }
                ]
            },
            {
                titulo: "Fichajes más caros de jugadores argentinos",
                respuestas: [
                    { nombre: "Enzo Fernández", alias: ["enzo", "enzo fernandez"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Lisandro Martínez", alias: ["lisandro martinez", "licha martinez"] },
                    { nombre: "Hernán Crespo", alias: ["crespo", "hernan crespo", "valdanito"] },
                    { nombre: "Cristian Romero", alias: ["romero", "cristian romero", "cuti", "cuti romero"] },
                    { nombre: "Alexis Mac Allister", alias: ["mac allister", "alexis mac allister"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Juan Sebastián Verón", alias: ["veron", "juan sebastian veron", "la brujita veron"] }
                ]
            },
            {
                titulo: "Máximos goleadores del Mundial Qatar 2022",
                respuestas: [
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Olivier Giroud", alias: ["giroud", "olivier giroud"] },
                    { nombre: "Marcus Rashford", alias: ["rashford", "marcus rashford"] },
                    { nombre: "Gonçalo Ramos", alias: ["ramos", "goncalo ramos"] },
                    { nombre: "Richarlison", alias: ["richarlison"] },
                    { nombre: "Bukayo Saka", alias: ["saka", "bukayo saka"] },
                    { nombre: "Cody Gakpo", alias: ["gakpo", "cody gakpo"] },
                    { nombre: "Álvaro Morata", alias: ["morata", "alvaro morata"] }
                ]
            },
            {
                titulo: "Clubes con más Copas Intercontinentales / Mundiales de Clubes",
                respuestas: [
                    { nombre: "Real Madrid", alias: ["real madrid", "madrid"] },
                    { nombre: "Bayern Múnich", alias: ["bayern munich", "bayern", "bayern de munich"] },
                    { nombre: "AC Milan", alias: ["milan", "ac milan"] },
                    { nombre: "Boca Juniors", alias: ["boca", "boca juniors", "cabj"] },
                    { nombre: "Peñarol", alias: ["penarol", "ca penarol"] },
                    { nombre: "Nacional", alias: ["nacional", "club nacional", "nacional de montevideo"] },
                    { nombre: "Barcelona", alias: ["barcelona", "fc barcelona", "barca"] },
                    { nombre: "Inter de Milán", alias: ["inter", "inter de milan"] },
                    { nombre: "São Paulo", alias: ["sao paulo", "san pablo"] },
                    { nombre: "Manchester United", alias: ["manchester united", "man united"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la historia de Boca Juniors",
                respuestas: [
                    { nombre: "Roberto Mouzo", alias: ["mouzo", "roberto mouzo"] },
                    { nombre: "Hugo Gatti", alias: ["gatti", "hugo gatti", "loco gatti"] },
                    { nombre: "Silvio Marzolini", alias: ["marzolini", "silvio marzolini"] },
                    { nombre: "Martín Palermo", alias: ["palermo", "martin palermo", "titan"] },
                    { nombre: "Carlos Navarro Montoya", alias: ["navarro montoya", "mono navarro montoya", "carlos navarro montoya"] },
                    { nombre: "Juan Román Riquelme", alias: ["riquelme", "juan roman riquelme", "roman"] },
                    { nombre: "Antonio Rattín", alias: ["rattin", "antonio rattin", "rata rattin"] },
                    { nombre: "Ernesto Lazzatti", alias: ["lazzatti", "ernesto lazzatti", "el pibe de oro"] },
                    { nombre: "Rubén Suñé", alias: ["sune", "ruben sune", "chapa sune"] },
                    { nombre: "Diego Cagna", alias: ["cagna", "diego cagna"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Manchester City",
                respuestas: [
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Eric Brook", alias: ["brook", "eric brook"] },
                    { nombre: "Tommy Johnson", alias: ["johnson", "tommy johnson"] },
                    { nombre: "Colin Bell", alias: ["bell", "colin bell"] },
                    { nombre: "Joe Hayes", alias: ["hayes", "joe hayes"] },
                    { nombre: "Billy Meredith", alias: ["meredith", "billy meredith"] },
                    { nombre: "Raheem Sterling", alias: ["sterling", "raheem sterling"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Shaun Goater", alias: ["goater", "shaun goater"] },
                    { nombre: "Francis Lee", alias: ["lee", "francis lee"] }
                ]
            },
            {
                titulo: "Jugadores argentinos con más goles en la Champions League",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Hernán Crespo", alias: ["crespo", "hernan crespo"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Julio Cruz", alias: ["cruz", "julio cruz", "jardinero cruz"] },
                    { nombre: "Lisandro López", alias: ["lopez", "lisandro lopez", "licha lopez"] },
                    { nombre: "Paulo Dybala", alias: ["dybala", "paulo dybala", "joya"] },
                    { nombre: "Lautaro Martínez", alias: ["martinez", "lautaro martinez", "toro"] },
                    { nombre: "Javier Saviola", alias: ["saviola", "javier saviola", "conejito saviola"] }
                ]
            },
            {
                titulo: "Entrenadores con más partidos en la Selección Argentina",
                respuestas: [
                    { nombre: "Guillermo Stábile", alias: ["stabile", "guillermo stabile"] },
                    { nombre: "Carlos Bilardo", alias: ["bilardo", "carlos bilardo"] },
                    { nombre: "César Luis Menotti", alias: ["menotti", "cesar luis menotti"] },
                    { nombre: "Marcelo Bielsa", alias: ["bielsa", "marcelo bielsa"] },
                    { nombre: "Lionel Scaloni", alias: ["scaloni", "lionel scaloni"] },
                    { nombre: "Alfio Basile", alias: ["basile", "alfio basile", "coco basile"] },
                    { nombre: "Daniel Passarella", alias: ["passarella", "daniel passarella"] },
                    { nombre: "José Pékerman", alias: ["pekerman", "jose pekerman"] },
                    { nombre: "Alejandro Sabella", alias: ["sabella", "alejandro sabella"] },
                    { nombre: "Gerardo Martino", alias: ["martino", "gerardo martino", "tata martino"] }
                ]
            },
            {
                titulo: "Jugadores con más premios Bota de Oro",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry"] },
                    { nombre: "Diego Forlán", alias: ["forlan", "diego forlan"] },
                    { nombre: "Gerd Müller", alias: ["muller", "gerd muller"] },
                    { nombre: "Eusébio", alias: ["eusebio", "eusebio da silva ferreira"] },
                    { nombre: "Fernando Gomes", alias: ["gomes", "fernando gomes"] },
                    { nombre: "Ally McCoist", alias: ["mccoist", "ally mccoist"] }
                ]
            }
            ,{
                titulo: "Máximos goleadores históricos de Racing Club",
                respuestas: [
                    { nombre: "Evaristo Barrera", alias: ["barrera", "evaristo barrera", "el ombu"] },
                    { nombre: "Juan José Pizzuti", alias: ["pizzuti", "juan jose pizzuti", "tito pizzuti"] },
                    { nombre: "Rubén Bravo", alias: ["bravo", "ruben bravo"] },
                    { nombre: "Llamil Simes", alias: ["simes", "llamil simes"] },
                    { nombre: "Alberto Ohaco", alias: ["ohaco", "alberto ohaco"] },
                    { nombre: "Alberto Marcovecchio", alias: ["marcovecchio", "alberto marcovecchio"] },
                    { nombre: "Orestes Corbatta", alias: ["corbatta", "orestes corbatta", "el loco corbatta"] },
                    { nombre: "Lisandro López", alias: ["lisandro lopez", "licha", "licha lopez"] },
                    { nombre: "Juan Carlos Cárdenas", alias: ["cardenas", "chango cardenas", "juan carlos cardenas"] },
                    { nombre: "Diego Milito", alias: ["milito", "diego milito", "el principe"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de San Lorenzo",
                respuestas: [
                    { nombre: "José Sanfilippo", alias: ["sanfilippo", "jose sanfilippo", "nene sanfilippo"] },
                    { nombre: "Rinaldo Martino", alias: ["martino", "rinaldo martino", "mamucho martino"] },
                    { nombre: "Héctor Scotta", alias: ["scotta", "hector scotta", "gringo scotta"] },
                    { nombre: "Alberto Acosta", alias: ["acosta", "alberto acosta", "beto acosta"] },
                    { nombre: "Rodolfo Fischer", alias: ["fischer", "rodolfo fischer", "el lobo fischer"] },
                    { nombre: "Bernardo Romeo", alias: ["romeo", "bernardo romeo", "bernie"] },
                    { nombre: "Diego García", alias: ["garcia", "diego garcia"] },
                    { nombre: "Walter Perazzo", alias: ["perazzo", "walter perazzo"] },
                    { nombre: "Rubén Ayala", alias: ["ayala", "ruben ayala", "raton ayala"] },
                    { nombre: "Leandro Romagnoli", alias: ["romagnoli", "leandro romagnoli", "pipi romagnoli"] }
                ]
            },
            {
                titulo: "Clubes con más títulos de Champions League",
                respuestas: [
                    { nombre: "Real Madrid", alias: ["real madrid", "madrid", "merengues"] },
                    { nombre: "AC Milan", alias: ["milan", "ac milan", "rossoneri"] },
                    { nombre: "Bayern Múnich", alias: ["bayern munich", "bayern", "bayern de munich"] },
                    { nombre: "Liverpool", alias: ["liverpool", "liverpool fc", "reds"] },
                    { nombre: "Barcelona", alias: ["barcelona", "fc barcelona", "barca"] },
                    { nombre: "Ajax", alias: ["ajax", "afc ajax", "ajax de amsterdam"] },
                    { nombre: "Inter de Milán", alias: ["inter", "inter de milan", "internazionale"] },
                    { nombre: "Manchester United", alias: ["manchester united", "man united"] },
                    { nombre: "Juventus", alias: ["juventus", "juve", "vecchia signora"] },
                    { nombre: "Chelsea", alias: ["chelsea", "chelsea fc", "blues"] }
                ]
            },
            {
                titulo: "Jugadores sudamericanos con más goles en la Premier League",
                respuestas: [
                    { nombre: "Sergio Agüero", alias: ["aguero", "kun aguero", "sergio aguero"] },
                    { nombre: "Roberto Firmino", alias: ["firmino", "roberto firmino", "bobby firmino"] },
                    { nombre: "Gabriel Jesus", alias: ["gabriel jesus", "jesus"] },
                    { nombre: "Carlos Tevez", alias: ["tevez", "carlos tevez", "carlitos"] },
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez", "lucho suarez"] },
                    { nombre: "Richarlison", alias: ["richarlison"] },
                    { nombre: "Alexis Sánchez", alias: ["alexis sanchez", "alexis", "niño maravilla"] },
                    { nombre: "Willian", alias: ["willian", "willian borges"] },
                    { nombre: "Gustavo Poyet", alias: ["poyet", "gustavo poyet"] },
                    { nombre: "Philippe Coutinho", alias: ["coutinho", "philippe coutinho"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Chelsea",
                respuestas: [
                    { nombre: "Enzo Fernández", alias: ["enzo fernandez", "enzo"] },
                    { nombre: "Moisés Caicedo", alias: ["caicedo", "moises caicedo"] },
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] },
                    { nombre: "Wesley Fofana", alias: ["fofana", "wesley fofana"] },
                    { nombre: "Mykhailo Mudryk", alias: ["mudryk", "mykhailo mudryk"] },
                    { nombre: "Kai Havertz", alias: ["havertz", "kai havertz"] },
                    { nombre: "Kepa Arrizabalaga", alias: ["kepa", "kepa arrizabalaga"] },
                    { nombre: "Álvaro Morata", alias: ["morata", "alvaro morata"] },
                    { nombre: "Marc Cucurella", alias: ["cucurella", "marc cucurella"] },
                    { nombre: "Christian Pulisic", alias: ["pulisic", "christian pulisic"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Manchester United",
                respuestas: [
                    { nombre: "Wayne Rooney", alias: ["rooney", "wayne rooney"] },
                    { nombre: "Sir Bobby Charlton", alias: ["charlton", "bobby charlton"] },
                    { nombre: "Denis Law", alias: ["law", "denis law"] },
                    { nombre: "Jack Rowley", alias: ["rowley", "jack rowley"] },
                    { nombre: "Dennis Viollet", alias: ["viollet", "dennis viollet"] },
                    { nombre: "George Best", alias: ["best", "george best"] },
                    { nombre: "Ryan Giggs", alias: ["giggs", "ryan giggs"] },
                    { nombre: "Mark Hughes", alias: ["hughes", "mark hughes"] },
                    { nombre: "Paul Scholes", alias: ["scholes", "paul scholes"] },
                    { nombre: "Ruud van Nistelrooy", alias: ["van nistelrooy", "ruud van nistelrooy"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Atlético de Madrid",
                respuestas: [
                    { nombre: "João Félix", alias: ["joao felix", "felix"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Thomas Lemar", alias: ["lemar", "thomas lemar"] },
                    { nombre: "Diego Costa", alias: ["diego costa", "costa"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Álvaro Morata", alias: ["morata", "alvaro morata"] },
                    { nombre: "Jackson Martínez", alias: ["jackson martinez", "jackson"] },
                    { nombre: "Radamel Falcao", alias: ["falcao", "radamel falcao", "tigre falcao"] },
                    { nombre: "Rodrigo De Paul", alias: ["de paul", "rodrigo de paul", "motorcito"] },
                    { nombre: "Vitolo", alias: ["vitolo", "victor machin"] }
                ]
            },
            {
                titulo: "Arqueros con más partidos en la Selección Argentina",
                respuestas: [
                    { nombre: "Sergio Romero", alias: ["romero", "sergio romero", "chiquito romero"] },
                    { nombre: "Ubaldo Fillol", alias: ["fillol", "ubaldo fillol", "pato fillol"] },
                    { nombre: "Emiliano Martínez", alias: ["martinez", "emiliano martinez", "dibu", "dibu martinez"] },
                    { nombre: "Roberto Abbondanzieri", alias: ["abbondanzieri", "roberto abbondanzieri", "pato abbondanzieri"] },
                    { nombre: "Sergio Goycochea", alias: ["goycochea", "sergio goycochea", "goyco"] },
                    { nombre: "Nery Pumpido", alias: ["pumpido", "nery pumpido"] },
                    { nombre: "Germán Burgos", alias: ["burgos", "german burgos", "mono burgos"] },
                    { nombre: "Luis Islas", alias: ["islas", "luis islas"] },
                    { nombre: "Mariano Andújar", alias: ["andujar", "mariano andujar"] },
                    { nombre: "Carlos Roa", alias: ["roa", "carlos roa", "lechuga roa"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2005",
                respuestas: [
                    { nombre: "Ronaldinho", alias: ["ronaldinho", "ronaldinho gaucho", "dinho"] },
                    { nombre: "Frank Lampard", alias: ["lampard", "frank lampard"] },
                    { nombre: "Steven Gerrard", alias: ["gerrard", "steven gerrard"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry", "titi henry"] },
                    { nombre: "Andriy Shevchenko", alias: ["shevchenko", "andriy shevchenko"] },
                    { nombre: "Paolo Maldini", alias: ["maldini", "paolo maldini"] },
                    { nombre: "Adriano", alias: ["adriano", "adriano leite", "el emperador"] },
                    { nombre: "Zlatan Ibrahimović", alias: ["ibrahimovic", "zlatan", "zlatan ibrahimovic"] },
                    { nombre: "Kaká", alias: ["kaka", "ricardo kaka"] },
                    { nombre: "Samuel Eto'o", alias: ["etoo", "samuel etoo"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Eurocopa",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Michel Platini", alias: ["platini", "michel platini"] },
                    { nombre: "Alan Shearer", alias: ["shearer", "alan shearer"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Álvaro Morata", alias: ["morata", "alvaro morata"] },
                    { nombre: "Ruud van Nistelrooy", alias: ["van nistelrooy", "ruud van nistelrooy"] },
                    { nombre: "Patrick Kluivert", alias: ["kluivert", "patrick kluivert"] },
                    { nombre: "Wayne Rooney", alias: ["rooney", "wayne rooney"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry"] },
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] }
                ]
            }
            ,{
                titulo: "Fichajes más caros de la historia del Manchester United",
                respuestas: [
                    { nombre: "Paul Pogba", alias: ["pogba", "paul pogba"] },
                    { nombre: "Antony", alias: ["antony", "antony matheus dos santos"] },
                    { nombre: "Harry Maguire", alias: ["maguire", "harry maguire"] },
                    { nombre: "Jadon Sancho", alias: ["sancho", "jadon sancho"] },
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Mason Mount", alias: ["mount", "mason mount"] },
                    { nombre: "Casemiro", alias: ["casemiro", "carlos casemiro"] },
                    { nombre: "Bruno Fernandes", alias: ["bruno fernandes", "bruno"] },
                    { nombre: "Anthony Martial", alias: ["martial", "anthony martial"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2006",
                respuestas: [
                    { nombre: "Fabio Cannavaro", alias: ["cannavaro", "fabio cannavaro"] },
                    { nombre: "Gianluigi Buffon", alias: ["buffon", "gianluigi buffon", "gigi buffon"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry", "titi"] },
                    { nombre: "Ronaldinho", alias: ["ronaldinho", "ronaldinho gaucho", "dinho"] },
                    { nombre: "Zinedine Zidane", alias: ["zidane", "zinedine zidane", "zizou"] },
                    { nombre: "Samuel Eto'o", alias: ["etoo", "samuel etoo"] },
                    { nombre: "Miroslav Klose", alias: ["klose", "miroslav klose"] },
                    { nombre: "Didier Drogba", alias: ["drogba", "didier drogba"] },
                    { nombre: "Andrea Pirlo", alias: ["pirlo", "andrea pirlo"] },
                    { nombre: "Jens Lehmann", alias: ["lehmann", "jens lehmann"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Liverpool",
                respuestas: [
                    { nombre: "Ian Rush", alias: ["rush", "ian rush"] },
                    { nombre: "Roger Hunt", alias: ["hunt", "roger hunt"] },
                    { nombre: "Gordon Hodgson", alias: ["hodgson", "gordon hodgson"] },
                    { nombre: "Billy Liddell", alias: ["liddell", "billy liddell"] },
                    { nombre: "Mohamed Salah", alias: ["salah", "mohamed salah", "mo salah"] },
                    { nombre: "Steven Gerrard", alias: ["gerrard", "steven gerrard", "stevie g"] },
                    { nombre: "Robbie Fowler", alias: ["fowler", "robbie fowler"] },
                    { nombre: "Kenny Dalglish", alias: ["dalglish", "kenny dalglish", "king kenny"] },
                    { nombre: "Michael Owen", alias: ["owen", "michael owen"] },
                    { nombre: "Harry Chambers", alias: ["chambers", "harry chambers"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos jugados en la historia de los Mundiales",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Lothar Matthäus", alias: ["matthaus", "lothar matthaus"] },
                    { nombre: "Miroslav Klose", alias: ["klose", "miroslav klose"] },
                    { nombre: "Paolo Maldini", alias: ["maldini", "paolo maldini"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Diego Maradona", alias: ["maradona", "diego maradona", "diego"] },
                    { nombre: "Uwe Seeler", alias: ["seeler", "uwe seeler"] },
                    { nombre: "Władysław Żmuda", alias: ["zmuda", "wladyslaw zmuda"] },
                    { nombre: "Hugo Lloris", alias: ["lloris", "hugo lloris"] },
                    { nombre: "Cafu", alias: ["cafu", "marcos evangelista de moraes"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Liverpool",
                respuestas: [
                    { nombre: "Darwin Núñez", alias: ["nunez", "darwin nunez", "darwin"] },
                    { nombre: "Virgil van Dijk", alias: ["van dijk", "virgil van dijk", "vvd"] },
                    { nombre: "Alisson Becker", alias: ["alisson", "alisson becker"] },
                    { nombre: "Dominik Szoboszlai", alias: ["szoboszlai", "dominik szoboszlai"] },
                    { nombre: "Naby Keïta", alias: ["keita", "naby keita"] },
                    { nombre: "Luis Díaz", alias: ["diaz", "luis diaz", "lucho diaz"] },
                    { nombre: "Christian Benteke", alias: ["benteke", "christian benteke"] },
                    { nombre: "Fabinho", alias: ["fabinho", "fabio henrique tavares"] },
                    { nombre: "Diogo Jota", alias: ["jota", "diogo jota"] },
                    { nombre: "Alexis Mac Allister", alias: ["mac allister", "alexis mac allister"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Inter de Milán",
                respuestas: [
                    { nombre: "Giuseppe Meazza", alias: ["meazza", "giuseppe meazza"] },
                    { nombre: "Alessandro Altobelli", alias: ["altobelli", "alessandro altobelli"] },
                    { nombre: "Roberto Boninsegna", alias: ["boninsegna", "roberto boninsegna"] },
                    { nombre: "Sandro Mazzola", alias: ["mazzola", "sandro mazzola"] },
                    { nombre: "Luigi Cevenini", alias: ["cevenini", "luigi cevenini"] },
                    { nombre: "Benito Lorenzi", alias: ["lorenzi", "benito lorenzi"] },
                    { nombre: "István Nyers", alias: ["nyers", "istvan nyers"] },
                    { nombre: "Lautaro Martínez", alias: ["lautaro", "lautaro martinez", "el toro"] },
                    { nombre: "Julio Cruz", alias: ["cruz", "julio cruz", "jardinero cruz"] },
                    { nombre: "Mauro Icardi", alias: ["icardi", "mauro icardi"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2018",
                respuestas: [
                    { nombre: "Luka Modrić", alias: ["modric", "luka modric"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Mohamed Salah", alias: ["salah", "mohamed salah"] },
                    { nombre: "Raphaël Varane", alias: ["varane", "raphael varane"] },
                    { nombre: "Eden Hazard", alias: ["hazard", "eden hazard"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Harry Kane", alias: ["kane", "harry kane"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la historia del Barcelona",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Xavi Hernández", alias: ["xavi", "xavi hernandez"] },
                    { nombre: "Sergio Busquets", alias: ["busquets", "sergio busquets", "busi"] },
                    { nombre: "Andrés Iniesta", alias: ["iniesta", "andres iniesta", "cerebro"] },
                    { nombre: "Gerard Piqué", alias: ["pique", "gerard pique"] },
                    { nombre: "Carles Puyol", alias: ["puyol", "carles puyol", "tarzan puyol"] },
                    { nombre: "Víctor Valdés", alias: ["valdes", "victor valdes"] },
                    { nombre: "Jordi Alba", alias: ["alba", "jordi alba"] },
                    { nombre: "Migueli", alias: ["migueli", "miguel bernardo bianquetti"] },
                    { nombre: "Carles Rexach", alias: ["rexach", "carles rexach"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la historia del Real Madrid",
                respuestas: [
                    { nombre: "Raúl González", alias: ["raul", "raul gonzalez", "el angel de madrid"] },
                    { nombre: "Iker Casillas", alias: ["casillas", "iker casillas", "san iker"] },
                    { nombre: "Manolo Sanchís", alias: ["sanchis", "manolo sanchis", "manuel sanchis"] },
                    { nombre: "Sergio Ramos", alias: ["ramos", "sergio ramos"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema", "el gato"] },
                    { nombre: "Carlos Santillana", alias: ["santillana", "carlos santillana"] },
                    { nombre: "Fernando Hierro", alias: ["hierro", "fernando hierro"] },
                    { nombre: "Paco Gento", alias: ["gento", "paco gento", "francisco gento"] },
                    { nombre: "José Antonio Camacho", alias: ["camacho", "jose antonio camacho"] },
                    { nombre: "Pirri", alias: ["pirri", "jose martinez sanchez"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Arsenal",
                respuestas: [
                    { nombre: "Declan Rice", alias: ["rice", "declan rice"] },
                    { nombre: "Nicolas Pépé", alias: ["pepe", "nicolas pepe"] },
                    { nombre: "Kai Havertz", alias: ["havertz", "kai havertz"] },
                    { nombre: "Pierre-Emerick Aubameyang", alias: ["aubameyang", "pierre-emerick aubameyang"] },
                    { nombre: "Ben White", alias: ["white", "ben white", "benjamin white"] },
                    { nombre: "Alexandre Lacazette", alias: ["lacazette", "alexandre lacazette"] },
                    { nombre: "Gabriel Jesus", alias: ["gabriel jesus", "jesus"] },
                    { nombre: "Thomas Partey", alias: ["partey", "thomas partey"] },
                    { nombre: "Jurriën Timber", alias: ["timber", "jurrien timber"] },
                    { nombre: "Mesut Özil", alias: ["ozil", "mesut ozil"] }
                ]
            }
            ,{
                titulo: "Jugadores con más partidos en la Selección de Turquía",
                respuestas: [
                    { nombre: "Rüştü Reçber", alias: ["rustu", "rustu recber"] },
                    { nombre: "Hakan Şükür", alias: ["hakan sukur", "sukur"] },
                    { nombre: "Bülent Korkmaz", alias: ["korkmaz", "bulent korkmaz"] },
                    { nombre: "Emre Belözoğlu", alias: ["emre", "emre belozoglu"] },
                    { nombre: "Arda Turan", alias: ["arda", "arda turan", "turan"] },
                    { nombre: "Tugay Kerimoğlu", alias: ["tugay", "tugay kerimoglu"] },
                    { nombre: "Alpay Özalan", alias: ["alpay", "alpay ozalan", "ozalan"] },
                    { nombre: "Hakan Çalhanoğlu", alias: ["calhanoglu", "hakan calhanoglu"] },
                    { nombre: "Hamit Altıntop", alias: ["altintop", "hamit altintop"] },
                    { nombre: "Tuncay Şanlı", alias: ["tuncay", "tuncay sanli", "sanli"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Paris Saint-Germain (PSG)",
                respuestas: [
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Edinson Cavani", alias: ["cavani", "edinson cavani", "matador cavani"] },
                    { nombre: "Zlatan Ibrahimović", alias: ["ibrahimovic", "zlatan", "zlatan ibrahimovic"] },
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr", "ney"] },
                    { nombre: "Pauleta", alias: ["pauleta", "pedro pauleta"] },
                    { nombre: "Dominique Rocheteau", alias: ["rocheteau", "dominique rocheteau"] },
                    { nombre: "Mustapha Dahleb", alias: ["dahleb", "mustapha dahleb"] },
                    { nombre: "François M'Pelé", alias: ["mpele", "francois mpele"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Safet Sušić", alias: ["susic", "safet susic"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Copa América",
                respuestas: [
                    { nombre: "Norberto Méndez", alias: ["mendez", "norberto mendez", "tucho mendez"] },
                    { nombre: "Zizinho", alias: ["zizinho", "thomaz soares da silva"] },
                    { nombre: "Teodoro Fernández", alias: ["fernandez", "teodoro fernandez", "lolo fernandez"] },
                    { nombre: "Severino Varela", alias: ["varela", "severino varela"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Paolo Guerrero", alias: ["guerrero", "paolo guerrero"] },
                    { nombre: "Eduardo Vargas", alias: ["vargas", "eduardo vargas", "turboman"] },
                    { nombre: "Gabriel Batistuta", alias: ["batistuta", "gabriel batistuta", "bati"] },
                    { nombre: "Héctor Scarone", alias: ["scarone", "hector scarone", "el mago"] },
                    { nombre: "Ademir", alias: ["ademir", "ademir marques de menezes"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Inter de Milán",
                respuestas: [
                    { nombre: "Romelu Lukaku", alias: ["lukaku", "romelu lukaku"] },
                    { nombre: "Christian Vieri", alias: ["vieri", "christian vieri", "bobo vieri"] },
                    { nombre: "Nicolò Barella", alias: ["barella", "nicolo barella"] },
                    { nombre: "Achraf Hakimi", alias: ["hakimi", "achraf hakimi"] },
                    { nombre: "João Mário", alias: ["joao mario", "mario"] },
                    { nombre: "Radja Nainggolan", alias: ["nainggolan", "radja nainggolan", "ninja"] },
                    { nombre: "Milan Škriniar", alias: ["skriniar", "milan skriniar"] },
                    { nombre: "Alessandro Bastoni", alias: ["bastoni", "alessandro bastoni"] },
                    { nombre: "Gabriel Barbosa", alias: ["gabigol", "gabriel barbosa"] },
                    { nombre: "Geoffrey Kondogbia", alias: ["kondogbia", "geoffrey kondogbia"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del AC Milan",
                respuestas: [
                    { nombre: "Rafael Leão", alias: ["leao", "rafael leao"] },
                    { nombre: "Rui Costa", alias: ["rui costa", "manuel rui costa"] },
                    { nombre: "Leonardo Bonucci", alias: ["bonucci", "leonardo bonucci"] },
                    { nombre: "Lucas Paquetá", alias: ["paqueta", "lucas paqueta"] },
                    { nombre: "André Silva", alias: ["andre silva", "silva"] },
                    { nombre: "Filippo Inzaghi", alias: ["inzaghi", "filippo inzaghi", "pippo inzaghi"] },
                    { nombre: "Fikayo Tomori", alias: ["tomori", "fikayo tomori"] },
                    { nombre: "Krzysztof Piątek", alias: ["piatek", "krzysztof piatek"] },
                    { nombre: "Charles De Ketelaere", alias: ["de ketelaere", "charles de ketelaere"] },
                    { nombre: "Carlos Bacca", alias: ["bacca", "carlos bacca"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de Uruguay",
                respuestas: [
                    { nombre: "Luis Suárez", alias: ["suarez", "luis suarez", "lucho suarez", "pistolero"] },
                    { nombre: "Edinson Cavani", alias: ["cavani", "edinson cavani", "matador"] },
                    { nombre: "Diego Forlán", alias: ["forlan", "diego forlan", "cachavacha"] },
                    { nombre: "Héctor Scarone", alias: ["scarone", "hector scarone", "el mago"] },
                    { nombre: "Pedro Petrone", alias: ["petrone", "pedro petrone"] },
                    { nombre: "Fernando Morena", alias: ["morena", "fernando morena"] },
                    { nombre: "Carlos Aguilera", alias: ["aguilera", "carlos aguilera", "pato aguilera"] },
                    { nombre: "Sebastián Abreu", alias: ["abreu", "sebastian abreu", "loco abreu"] },
                    { nombre: "Óscar Míguez", alias: ["miguez", "oscar miguez", "cotorra miguez"] },
                    { nombre: "Héctor Castro", alias: ["castro", "hector castro", "el manco castro"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de Chile",
                respuestas: [
                    { nombre: "Alexis Sánchez", alias: ["alexis sanchez", "alexis", "niño maravilla"] },
                    { nombre: "Eduardo Vargas", alias: ["vargas", "eduardo vargas", "turboman"] },
                    { nombre: "Marcelo Salas", alias: ["salas", "marcelo salas", "matador salas"] },
                    { nombre: "Iván Zamorano", alias: ["zamorano", "ivan zamorano", "bam bam"] },
                    { nombre: "Arturo Vidal", alias: ["vidal", "arturo vidal", "king arturo"] },
                    { nombre: "Carlos Caszely", alias: ["caszely", "carlos caszely", "rey del metro cuadrado"] },
                    { nombre: "Leonel Sánchez", alias: ["leonel sanchez", "sanchez"] },
                    { nombre: "Jorge Aravena", alias: ["aravena", "jorge aravena", "mortero aravena"] },
                    { nombre: "Humberto Suazo", alias: ["suazo", "humberto suazo", "chupete suazo"] },
                    { nombre: "Juan Carlos Letelier", alias: ["letelier", "juan carlos letelier"] }
                ]
            },
            {
                titulo: "Arqueros con más vallas invictas en la Champions League",
                respuestas: [
                    { nombre: "Manuel Neuer", alias: ["neuer", "manuel neuer"] },
                    { nombre: "Iker Casillas", alias: ["casillas", "iker casillas", "san iker"] },
                    { nombre: "Gianluigi Buffon", alias: ["buffon", "gianluigi buffon", "gigi buffon"] },
                    { nombre: "Edwin van der Sar", alias: ["van der sar", "edwin van der sar"] },
                    { nombre: "Petr Čech", alias: ["cech", "petr cech"] },
                    { nombre: "Víctor Valdés", alias: ["valdes", "victor valdes"] },
                    { nombre: "Dida", alias: ["dida", "nelson de jesus silva"] },
                    { nombre: "Oliver Kahn", alias: ["kahn", "oliver kahn"] },
                    { nombre: "Jan Oblak", alias: ["oblak", "jan oblak"] },
                    { nombre: "Ederson", alias: ["ederson", "ederson santana de moraes"] }
                ]
            },
            {
                titulo: "Jugadores sudamericanos con más partidos en la Champions League",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Roberto Carlos", alias: ["roberto carlos"] },
                    { nombre: "Dani Alves", alias: ["dani alves", "daniel alves"] },
                    { nombre: "Javier Zanetti", alias: ["zanetti", "javier zanetti", "pupi zanetti"] },
                    { nombre: "Fernandinho", alias: ["fernandinho", "fernando luiz roza"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] },
                    { nombre: "Thiago Silva", alias: ["thiago silva"] },
                    { nombre: "Marcelo", alias: ["marcelo", "marcelo vieira"] },
                    { nombre: "Maxwell", alias: ["maxwell", "maxwell scherrer"] },
                    { nombre: "Javier Mascherano", alias: ["mascherano", "javier mascherano", "jefecito"] }
                ]
            },
            {
                titulo: "Clubes brasileños con más títulos de Primera División (Brasileirão)",
                respuestas: [
                    { nombre: "Palmeiras", alias: ["palmeiras", "sociedade esportiva palmeiras", "verdao"] },
                    { nombre: "Santos", alias: ["santos", "santos fc", "peixe"] },
                    { nombre: "Corinthians", alias: ["corinthians", "sport club corinthians paulista", "timao"] },
                    { nombre: "Flamengo", alias: ["flamengo", "clube de regatas do flamengo", "mengao"] },
                    { nombre: "São Paulo", alias: ["sao paulo", "san pablo", "tricolor paulista"] },
                    { nombre: "Cruzeiro", alias: ["cruzeiro", "cruzeiro esporte clube", "raposa"] },
                    { nombre: "Vasco da Gama", alias: ["vasco da gama", "vasco"] },
                    { nombre: "Fluminense", alias: ["fluminense", "fluminense football club", "flu"] },
                    { nombre: "Internacional", alias: ["internacional", "inter de porto alegre", "colorado"] },
                    { nombre: "Atlético Mineiro", alias: ["atletico mineiro", "galo", "clube atletico mineiro"] }
                ]
            }
            ,{
                titulo: "Máximos goleadores históricos de la Selección de Colombia",
                respuestas: [
                    { nombre: "Radamel Falcao", alias: ["falcao", "radamel falcao", "el tigre", "tigre falcao"] },
                    { nombre: "James Rodríguez", alias: ["james", "james rodriguez"] },
                    { nombre: "Arnoldo Iguarán", alias: ["iguaran", "arnoldo iguaran", "el guajiro"] },
                    { nombre: "Faustino Asprilla", alias: ["asprilla", "faustino asprilla", "tino asprilla"] },
                    { nombre: "Freddy Rincón", alias: ["rincon", "freddy rincon", "coloso de buenaventura"] },
                    { nombre: "Carlos Bacca", alias: ["bacca", "carlos bacca"] },
                    { nombre: "Teófilo Gutiérrez", alias: ["teo", "teofilo gutierrez", "teo gutierrez"] },
                    { nombre: "Víctor Aristizábal", alias: ["aristizabal", "victor aristizabal"] },
                    { nombre: "Adolfo Valencia", alias: ["valencia", "adolfo valencia", "el tren valencia"] },
                    { nombre: "Iván Valenciano", alias: ["valenciano", "ivan valenciano", "bombardero"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Manchester City",
                respuestas: [
                    { nombre: "Jack Grealish", alias: ["grealish", "jack grealish"] },
                    { nombre: "Joško Gvardiol", alias: ["gvardiol", "josko gvardiol"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Rúben Dias", alias: ["dias", "ruben dias"] },
                    { nombre: "Riyad Mahrez", alias: ["mahrez", "riyad mahrez"] },
                    { nombre: "João Cancelo", alias: ["cancelo", "joao cancelo"] },
                    { nombre: "Aymeric Laporte", alias: ["laporte", "aymeric laporte"] },
                    { nombre: "Raheem Sterling", alias: ["sterling", "raheem sterling"] },
                    { nombre: "Rodri", alias: ["rodri", "rodrigo hernandez"] },
                    { nombre: "Erling Haaland", alias: ["haaland", "erling haaland"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Napoli",
                respuestas: [
                    { nombre: "Dries Mertens", alias: ["mertens", "dries mertens", "ciro mertens"] },
                    { nombre: "Lorenzo Insigne", alias: ["insigne", "lorenzo insigne"] },
                    { nombre: "Marek Hamšík", alias: ["hamsik", "marek hamsik"] },
                    { nombre: "Diego Maradona", alias: ["maradona", "diego maradona", "diego", "pelusa"] },
                    { nombre: "Edinson Cavani", alias: ["cavani", "edinson cavani", "matador"] },
                    { nombre: "Antonio Vojak", alias: ["vojak", "antonio vojak"] },
                    { nombre: "José Altafini", alias: ["altafini", "jose altafini"] },
                    { nombre: "Careca", alias: ["careca", "antonio de oliveira filho"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Victor Osimhen", alias: ["osimhen", "victor osimhen"] }
                ]
            },
            {
                titulo: "Equipos con más títulos de Copa del Rey (España)",
                respuestas: [
                    { nombre: "Barcelona", alias: ["barcelona", "fc barcelona", "barca"] },
                    { nombre: "Athletic Club", alias: ["athletic", "athletic club", "athletic de bilbao"] },
                    { nombre: "Real Madrid", alias: ["real madrid", "madrid"] },
                    { nombre: "Atlético de Madrid", alias: ["atletico de madrid", "atletico madrid", "atleti"] },
                    { nombre: "Valencia", alias: ["valencia", "valencia cf"] },
                    { nombre: "Real Zaragoza", alias: ["zaragoza", "real zaragoza"] },
                    { nombre: "Sevilla", alias: ["sevilla", "sevilla fc"] },
                    { nombre: "Espanyol", alias: ["espanyol", "rcd espanyol"] },
                    { nombre: "Real Unión", alias: ["real union", "real union club"] },
                    { nombre: "Real Sociedad", alias: ["real sociedad", "la real"] }
                ]
            },
            {
                titulo: "Arqueros con más partidos en la historia de la Premier League",
                respuestas: [
                    { nombre: "David James", alias: ["james", "david james"] },
                    { nombre: "Mark Schwarzer", alias: ["schwarzer", "mark schwarzer"] },
                    { nombre: "Shay Given", alias: ["given", "shay given"] },
                    { nombre: "Petr Čech", alias: ["cech", "petr cech"] },
                    { nombre: "David de Gea", alias: ["de gea", "david de gea"] },
                    { nombre: "Jussi Jääskeläinen", alias: ["jaaskelainen", "jussi jaaskelainen"] },
                    { nombre: "Brad Friedel", alias: ["friedel", "brad friedel"] },
                    { nombre: "Tim Howard", alias: ["howard", "tim howard"] },
                    { nombre: "Hugo Lloris", alias: ["lloris", "hugo lloris"] },
                    { nombre: "Joe Hart", alias: ["hart", "joe hart"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 1998",
                respuestas: [
                    { nombre: "Zinedine Zidane", alias: ["zidane", "zinedine zidane", "zizou"] },
                    { nombre: "Davor Šuker", alias: ["suker", "davor suker"] },
                    { nombre: "Ronaldo", alias: ["ronaldo", "ronaldo nazario", "el fenomeno"] },
                    { nombre: "Michael Owen", alias: ["owen", "michael owen"] },
                    { nombre: "Rivaldo", alias: ["rivaldo", "vitor borba ferreira"] },
                    { nombre: "Gabriel Batistuta", alias: ["batistuta", "gabriel batistuta", "bati"] },
                    { nombre: "Lilian Thuram", alias: ["thuram", "lilian thuram"] },
                    { nombre: "Edgar Davids", alias: ["davids", "edgar davids", "pitbull"] },
                    { nombre: "Dennis Bergkamp", alias: ["bergkamp", "dennis bergkamp"] },
                    { nombre: "Marcel Desailly", alias: ["desailly", "marcel desailly"] }
                ]
            },
            {
                titulo: "Fichajes más caros de la historia del Tottenham Hotspur",
                respuestas: [
                    { nombre: "Tanguy Ndombele", alias: ["ndombele", "tanguy ndombele"] },
                    { nombre: "Richarlison", alias: ["richarlison", "richarlison de andrade"] },
                    { nombre: "Brennan Johnson", alias: ["johnson", "brennan johnson"] },
                    { nombre: "Cristian Romero", alias: ["romero", "cristian romero", "cuti", "cuti romero"] },
                    { nombre: "James Maddison", alias: ["maddison", "james maddison"] },
                    { nombre: "Pedro Porro", alias: ["porro", "pedro porro"] },
                    { nombre: "Dejan Kulusevski", alias: ["kulusevski", "dejan kulusevski"] },
                    { nombre: "Micky van de Ven", alias: ["van de ven", "micky van de ven"] },
                    { nombre: "Giovani Lo Celso", alias: ["lo celso", "giovani lo celso", "gio lo celso"] },
                    { nombre: "Davinson Sánchez", alias: ["sanchez", "davinson sanchez"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de México",
                respuestas: [
                    { nombre: "Javier Hernández", alias: ["chicharito", "chicharito hernandez", "javier hernandez"] },
                    { nombre: "Jared Borgetti", alias: ["borgetti", "jared borgetti"] },
                    { nombre: "Cuauhtémoc Blanco", alias: ["blanco", "cuauhtemoc blanco"] },
                    { nombre: "Luis Hernández", alias: ["hernandez", "luis hernandez", "el matador"] },
                    { nombre: "Carlos Hermosillo", alias: ["hermosillo", "carlos hermosillo", "grandote de cerro azul"] },
                    { nombre: "Enrique Borja", alias: ["borja", "enrique borja"] },
                    { nombre: "Hugo Sánchez", alias: ["hugo sanchez", "sanchez", "hugol"] },
                    { nombre: "Luis Roberto Alves", alias: ["zague", "luis roberto alves"] },
                    { nombre: "Oribe Peralta", alias: ["peralta", "oribe peralta", "cepillo peralta"] },
                    { nombre: "Raúl Jiménez", alias: ["jimenez", "raul jimenez"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la historia del Bayern Múnich",
                respuestas: [
                    { nombre: "Thomas Müller", alias: ["muller", "thomas muller"] },
                    { nombre: "Sepp Maier", alias: ["maier", "sepp maier"] },
                    { nombre: "Oliver Kahn", alias: ["kahn", "oliver kahn", "el titan"] },
                    { nombre: "Philipp Lahm", alias: ["lahm", "philipp lahm"] },
                    { nombre: "Franz Beckenbauer", alias: ["beckenbauer", "franz beckenbauer", "kaiser"] },
                    { nombre: "Gerd Müller", alias: ["gerd muller", "bombardero"] },
                    { nombre: "Manuel Neuer", alias: ["neuer", "manuel neuer"] },
                    { nombre: "Hans-Georg Schwarzenbeck", alias: ["schwarzenbeck", "katsche", "hans-georg schwarzenbeck"] },
                    { nombre: "Klaus Augenthaler", alias: ["augenthaler", "klaus augenthaler"] },
                    { nombre: "Bastian Schweinsteiger", alias: ["schweinsteiger", "bastian schweinsteiger"] }
                ]
            },
            {
                titulo: "Máximos goleadores argentinos en la historia de los Mundiales",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Gabriel Batistuta", alias: ["batistuta", "gabriel batistuta", "bati"] },
                    { nombre: "Diego Maradona", alias: ["maradona", "diego maradona", "diego", "pelusa"] },
                    { nombre: "Guillermo Stábile", alias: ["stabile", "guillermo stabile", "el filtrador"] },
                    { nombre: "Mario Kempes", alias: ["kempes", "mario kempes", "el matador"] },
                    { nombre: "Gonzalo Higuaín", alias: ["higuain", "gonzalo higuain", "pipita"] },
                    { nombre: "Julián Álvarez", alias: ["julian alvarez", "araña", "julian"] },
                    { nombre: "Claudio Caniggia", alias: ["caniggia", "claudio caniggia", "el pajaro"] },
                    { nombre: "Hernán Crespo", alias: ["crespo", "hernan crespo", "valdanito"] },
                    { nombre: "Jorge Valdano", alias: ["valdano", "jorge valdano"] }
                ]
            }
            ,{
                titulo: "Máximos goleadores históricos de la Juventus",
                respuestas: [
                    { nombre: "Alessandro Del Piero", alias: ["del piero", "alessandro del piero", "pinturicchio"] },
                    { nombre: "Giampiero Boniperti", alias: ["boniperti", "giampiero boniperti"] },
                    { nombre: "Roberto Bettega", alias: ["bettega", "roberto bettega"] },
                    { nombre: "David Trezeguet", alias: ["trezeguet", "david trezeguet", "rey david"] },
                    { nombre: "Omar Sívori", alias: ["sivori", "omar sivori", "cabezon sivori"] },
                    { nombre: "Felice Borel", alias: ["borel", "felice borel"] },
                    { nombre: "Pietro Anastasi", alias: ["anastasi", "pietro anastasi"] },
                    { nombre: "John Hansen", alias: ["hansen", "john hansen"] },
                    { nombre: "Roberto Baggio", alias: ["baggio", "roberto baggio", "il divin codino"] },
                    { nombre: "Paulo Dybala", alias: ["dybala", "paulo dybala", "joya"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del Chelsea",
                respuestas: [
                    { nombre: "Frank Lampard", alias: ["lampard", "frank lampard"] },
                    { nombre: "Bobby Tambling", alias: ["tambling", "bobby tambling"] },
                    { nombre: "Kerry Dixon", alias: ["dixon", "kerry dixon"] },
                    { nombre: "Didier Drogba", alias: ["drogba", "didier drogba"] },
                    { nombre: "Roy Bentley", alias: ["bentley", "roy bentley"] },
                    { nombre: "Peter Osgood", alias: ["osgood", "peter osgood"] },
                    { nombre: "Jimmy Greaves", alias: ["greaves", "jimmy greaves"] },
                    { nombre: "George Mills", alias: ["mills", "george mills"] },
                    { nombre: "Eden Hazard", alias: ["hazard", "eden hazard"] },
                    { nombre: "George Hilsdon", alias: ["hilsdon", "george hilsdon"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de España",
                respuestas: [
                    { nombre: "David Villa", alias: ["villa", "david villa", "guaje villa"] },
                    { nombre: "Raúl González", alias: ["raul", "raul gonzalez"] },
                    { nombre: "Fernando Torres", alias: ["torres", "fernando torres", "niño torres"] },
                    { nombre: "Álvaro Morata", alias: ["morata", "alvaro morata"] },
                    { nombre: "David Silva", alias: ["silva", "david silva"] },
                    { nombre: "Fernando Hierro", alias: ["hierro", "fernando hierro"] },
                    { nombre: "Fernando Morientes", alias: ["morientes", "fernando morientes", "moro"] },
                    { nombre: "Emilio Butragueño", alias: ["butragueno", "emilio butragueno", "el buitre"] },
                    { nombre: "Alfredo Di Stéfano", alias: ["di stefano", "alfredo di stefano"] },
                    { nombre: "Julio Salinas", alias: ["salinas", "julio salinas"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2021",
                respuestas: [
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski"] },
                    { nombre: "Jorginho", alias: ["jorginho", "jorge luiz frello"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema"] },
                    { nombre: "N'Golo Kanté", alias: ["kante", "ngolo kante"] },
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Mohamed Salah", alias: ["salah", "mohamed salah"] },
                    { nombre: "Kevin De Bruyne", alias: ["de bruyne", "kevin de bruyne", "kdb"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Gianluigi Donnarumma", alias: ["donnarumma", "gianluigi donnarumma", "gigio donnarumma"] }
                ]
            },
            {
                titulo: "Jugadores con más partidos en la Selección de Brasil",
                respuestas: [
                    { nombre: "Cafu", alias: ["cafu", "marcos evangelista de moraes"] },
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr", "ney"] },
                    { nombre: "Dani Alves", alias: ["dani alves", "daniel alves"] },
                    { nombre: "Roberto Carlos", alias: ["roberto carlos"] },
                    { nombre: "Thiago Silva", alias: ["thiago silva"] },
                    { nombre: "Pelé", alias: ["pele", "edson arantes do nascimento"] },
                    { nombre: "Djalma Santos", alias: ["djalma santos", "santos"] },
                    { nombre: "Cláudio Taffarel", alias: ["taffarel", "claudio taffarel"] },
                    { nombre: "Lúcio", alias: ["lucio", "lucimar da silva ferreira"] },
                    { nombre: "Marquinhos", alias: ["marquinhos", "marcos aoas correa"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Europa League / Copa de la UEFA",
                respuestas: [
                    { nombre: "Pierre-Emerick Aubameyang", alias: ["aubameyang", "pierre-emerick aubameyang"] },
                    { nombre: "Henrik Larsson", alias: ["larsson", "henrik larsson"] },
                    { nombre: "Klaas-Jan Huntelaar", alias: ["huntelaar", "klaas-jan huntelaar", "cazador"] },
                    { nombre: "Radamel Falcao", alias: ["falcao", "radamel falcao", "el tigre"] },
                    { nombre: "Aritz Aduriz", alias: ["aduriz", "aritz aduriz"] },
                    { nombre: "Dieter Müller", alias: ["muller", "dieter muller"] },
                    { nombre: "Alfredo Morelos", alias: ["morelos", "alfredo morelos"] },
                    { nombre: "Shota Arveladze", alias: ["arveladze", "shota arveladze"] },
                    { nombre: "Munas Dabbur", alias: ["dabbur", "munas dabbur"] },
                    { nombre: "Kevin Gameiro", alias: ["gameiro", "kevin gameiro"] }
                ]
            },
            {
                titulo: "Top 10 Balón de Oro 2014",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi"] },
                    { nombre: "Manuel Neuer", alias: ["neuer", "manuel neuer"] },
                    { nombre: "Arjen Robben", alias: ["robben", "arjen robben"] },
                    { nombre: "Thomas Müller", alias: ["muller", "thomas muller"] },
                    { nombre: "Philipp Lahm", alias: ["lahm", "philipp lahm"] },
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr"] },
                    { nombre: "James Rodríguez", alias: ["james", "james rodriguez"] },
                    { nombre: "Toni Kroos", alias: ["kroos", "toni kroos"] },
                    { nombre: "Ángel Di María", alias: ["di maria", "angel di maria", "fideo"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos de la Selección de Francia",
                respuestas: [
                    { nombre: "Olivier Giroud", alias: ["giroud", "olivier giroud"] },
                    { nombre: "Thierry Henry", alias: ["henry", "thierry henry", "titi"] },
                    { nombre: "Kylian Mbappé", alias: ["mbappe", "kylian mbappe"] },
                    { nombre: "Antoine Griezmann", alias: ["griezmann", "antoine griezmann"] },
                    { nombre: "Michel Platini", alias: ["platini", "michel platini"] },
                    { nombre: "Karim Benzema", alias: ["benzema", "karim benzema"] },
                    { nombre: "David Trezeguet", alias: ["trezeguet", "david trezeguet"] },
                    { nombre: "Zinedine Zidane", alias: ["zidane", "zinedine zidane", "zizou"] },
                    { nombre: "Just Fontaine", alias: ["fontaine", "just fontaine"] },
                    { nombre: "Jean-Pierre Papin", alias: ["papin", "jean-pierre papin"] }
                ]
            },
            {
                titulo: "Fichajes más caros de jugadores brasileños",
                respuestas: [
                    { nombre: "Neymar Jr", alias: ["neymar", "neymar jr"] },
                    { nombre: "Philippe Coutinho", alias: ["coutinho", "philippe coutinho"] },
                    { nombre: "Antony", alias: ["antony", "antony matheus dos santos"] },
                    { nombre: "Arthur Melo", alias: ["arthur", "arthur melo"] },
                    { nombre: "Casemiro", alias: ["casemiro", "carlos casemiro"] },
                    { nombre: "Alisson Becker", alias: ["alisson", "alisson becker"] },
                    { nombre: "Kaká", alias: ["kaka", "ricardo kaka"] },
                    { nombre: "Fred", alias: ["fred", "frederico rodrigues"] },
                    { nombre: "Oscar", alias: ["oscar", "oscar dos santos"] },
                    { nombre: "Raphinha", alias: ["raphinha"] }
                ]
            },
            {
                titulo: "Máximos goleadores históricos del fútbol mundial",
                respuestas: [
                    { nombre: "Cristiano Ronaldo", alias: ["cristiano", "ronaldo", "cr7"] },
                    { nombre: "Lionel Messi", alias: ["messi", "leo messi", "lionel messi"] },
                    { nombre: "Pelé", alias: ["pele", "edson arantes do nascimento", "o rei"] },
                    { nombre: "Romário", alias: ["romario", "romario de souza faria"] },
                    { nombre: "Ferenc Puskás", alias: ["puskas", "ferenc puskas"] },
                    { nombre: "Josef Bican", alias: ["bican", "josef bican"] },
                    { nombre: "Jimmy Jones", alias: ["jones", "jimmy jones"] },
                    { nombre: "Gerd Müller", alias: ["muller", "gerd muller", "bombardero"] },
                    { nombre: "Robert Lewandowski", alias: ["lewandowski", "robert lewandowski"] },
                    { nombre: "Eusébio", alias: ["eusebio", "eusebio da silva ferreira"] }
                ]
            }
        ];
