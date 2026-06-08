const caminoData = [
    {
        titulo: "Camino de Argentina Campeona - Qatar 2022",
        equipos: ["Arabia Saudita", "México", "Polonia", "Australia", "Países Bajos", "Croacia", "Francia"],
        rivalesExtra: ["Brasil", "Alemania", "Bélgica"]
    },
    {
        titulo: "Camino del Real Madrid Campeón - Champions 2023/24",
        equipos: ["Union Berlin", "Napoli", "Braga", "RB Leipzig", "Manchester City", "Bayern Múnich", "Borussia Dortmund"],
        rivalesExtra: ["PSG", "Inter", "Atlético de Madrid"]
    },
    {
        titulo: "Camino de Italia Campeona - Eurocopa 2020",
        equipos: ["Turquía", "Suiza", "Gales", "Austria", "Bélgica", "España", "Inglaterra"],
        rivalesExtra: ["Francia", "Alemania", "Portugal"]
    },
    {
        titulo: "Camino de River Campeón - Libertadores 2018",
        equipos: ["Flamengo", "Santa Fe", "Emelec", "Racing Club", "Independiente", "Gremio", "Boca Juniors"],
        rivalesExtra: ["Palmeiras", "Colo Colo", "Cruzeiro"]
    },
    {
        titulo: "Camino de Argentina Campeona - Copa América 2021",
        equipos: ["Chile", "Uruguay", "Paraguay", "Bolivia", "Ecuador", "Colombia", "Brasil"],
        rivalesExtra: ["Perú", "Venezuela", "Estados Unidos"]
    },
    {
        titulo: "Camino de la España Campeona - Mundial 2010",
        equipos: ["Suiza", "Honduras", "Chile", "Portugal", "Paraguay", "Alemania", "Países Bajos"],
        rivalesExtra: ["Brasil", "Italia", "Argentina"]
    },
    {
        titulo: "Camino de Boca Campeón - Intercontinental 2000",
        equipos: ["Real Madrid"],
        rivalesExtra: ["Manchester United", "Bayern Múnich", "Vasco da Gama"]
    },
    {
        titulo: "Camino de Argentina Campeona - Copa América 2024",
        equipos: ["Canadá", "Chile", "Perú", "Ecuador", "Canadá (SF)", "Colombia"],
        rivalesExtra: ["Uruguay", "Brasil", "Panamá"]
    },
    {
        titulo: "Camino de Brasil Campeón - Corea/Japón 2002",
        equipos: ["Turquía", "China", "Costa Rica", "Bélgica", "Inglaterra", "Turquía (SF)", "Alemania"],
        rivalesExtra: ["Italia", "España", "Argentina"]
    },
    {
        titulo: "Camino de Alemania Campeona - Brasil 2014",
        equipos: ["Portugal", "Ghana", "EE. UU.", "Argelia", "Francia", "Brasil", "Argentina"],
        rivalesExtra: ["Holanda", "Chile", "Colombia"]
    },
    {
        titulo: "Camino del Liverpool Campeón - Champions 2004/05",
        equipos: ["Mónaco", "Olympiacos", "Deportivo", "Leverkusen", "Juventus", "Chelsea", "Milan"],
        rivalesExtra: ["Real Madrid", "Inter", "Arsenal"]
    },
    {
        titulo: "Camino de Francia Campeona - Rusia 2018",
        equipos: ["Australia", "Perú", "Dinamarca", "Argentina", "Uruguay", "Bélgica", "Croacia"],
        rivalesExtra: ["Brasil", "España", "Portugal"]
    },
    {
        titulo: "Camino del Barcelona Campeón - Champions 2014/15",
        equipos: ["APOEL", "PSG", "Ajax", "Manchester City", "PSG (4tos)", "Bayern Múnich", "Juventus"],
        rivalesExtra: ["Real Madrid", "Chelsea", "Arsenal"]
    },
    {
        titulo: "Camino de Argentina Campeona - México 1986",
        equipos: ["Corea del Sur", "Italia", "Bulgaria", "Uruguay", "Inglaterra", "Bélgica", "Alemania Federal"],
        rivalesExtra: ["Brasil", "Francia", "España"]
    },
    {
        titulo: "Camino de Portugal Campeón - Eurocopa 2016",
        equipos: ["Islandia", "Austria", "Hungría", "Croacia", "Polonia", "Gales", "Francia"],
        rivalesExtra: ["Alemania", "Italia", "España"]
    },
    {
        titulo: "Camino de San Lorenzo Campeón - Libertadores 2014",
        equipos: ["Botafogo", "Unión Española", "Ind. del Valle", "Gremio", "Cruzeiro", "Bolívar", "Nacional (PAR)"],
        rivalesExtra: ["River Plate", "Boca Juniors", "Atlético Mineiro"]
    },
    {
        titulo: "Camino de Grecia Campeona - Eurocopa 2004",
        equipos: ["Portugal", "España", "Rusia", "Francia", "República Checa", "Portugal (F)"],
        rivalesExtra: ["Inglaterra", "Holanda", "Italia"]
    },
    {
        titulo: "Camino del Chelsea Campeón - Champions 2011/12",
        equipos: ["Leverkusen", "Valencia", "Genk", "Napoli", "Benfica", "Barcelona", "Bayern Múnich"],
        rivalesExtra: ["Real Madrid", "Inter", "Milan"]
    },
    {
        titulo: "Camino del Real Madrid Campeón - Champions 2021/22",
        equipos: ["Inter", "Sheriff", "Shakhtar", "PSG", "Chelsea", "Manchester City", "Liverpool"],
        rivalesExtra: ["Bayern Múnich", "Juventus", "Ajax"]
    },
    {
        titulo: "Camino de Uruguay Campeón - Copa América 2011",
        equipos: ["Perú", "Chile", "México", "Argentina", "Perú (SF)", "Paraguay"],
        rivalesExtra: ["Brasil", "Colombia", "Ecuador"]
    },
    {
        titulo: "Camino de Chile Campeón - Copa América 2015",
        equipos: ["Ecuador", "México", "Bolivia", "Uruguay", "Perú", "Argentina"],
        rivalesExtra: ["Brasil", "Colombia", "Paraguay"]
    },
    {
        titulo: "Camino del Flamengo Campeón - Libertadores 2019",
        equipos: ["San José", "LDU Quito", "Peñarol", "Emelec", "Internacional", "Gremio", "River Plate"],
        rivalesExtra: ["Boca Juniors", "Palmeiras", "Olimpia"]
    },
    {
        titulo: "Camino del Bayern Múnich Campeón - Champions 2019/20",
        equipos: ["Estrella Roja", "Tottenham", "Olympiacos", "Chelsea", "Barcelona", "Lyon", "PSG"],
        rivalesExtra: ["Manchester City", "Real Madrid", "Liverpool"]
    },
    {
        titulo: "Camino de Egipto Campeón - AFCON 2006",
        equipos: ["Libia", "Costa de Marfil", "Marruecos", "RD Congo", "Senegal", "Costa de Marfil (F)"],
        rivalesExtra: ["Camerún", "Nigeria", "Túnez"]
    },
    {
        titulo: "Camino de Egipto Campeón - AFCON 2008",
        equipos: ["Camerún", "Sudán", "Zambia", "Angola", "Costa de Marfil", "Camerún (F)"],
        rivalesExtra: ["Ghana", "Nigeria", "Guinea"]
    },
    {
        titulo: "Camino de Egipto Campeón - AFCON 2010",
        equipos: ["Nigeria", "Mozambique", "Benín", "Argelia", "Ghana"],
        rivalesExtra: ["Costa de Marfil", "Camerún", "Zambia"]
    },
    {
        titulo: "Camino de Zambia Campeón - AFCON 2012",
        equipos: ["Senegal", "Libia", "Guinea Ecuatorial", "Sudán", "Ghana", "Costa de Marfil"],
        rivalesExtra: ["Marruecos", "Túnez", "Gabón"]
    },
    {
        titulo: "Camino de Nigeria Campeón - AFCON 2013",
        equipos: ["Burkina Faso", "Zambia", "Etiopía", "Costa de Marfil", "Malí", "Burkina Faso (F)"],
        rivalesExtra: ["Sudáfrica", "Ghana", "Togo"]
    },
    {
        titulo: "Camino de Costa de Marfil Campeón - AFCON 2015",
        equipos: ["Guinea", "Malí", "Camerún", "Argelia", "RD Congo", "Ghana"],
        rivalesExtra: ["Senegal", "Túnez", "Congo"]
    },
    {
        titulo: "Camino de Camerún Campeón - AFCON 2017",
        equipos: ["Burkina Faso", "Guinea-Bissau", "Gabón", "Senegal", "Ghana", "Egipto"],
        rivalesExtra: ["Marruecos", "Túnez", "RD Congo"]
    },
    {
        titulo: "Camino de Argelia Campeón - AFCON 2019",
        equipos: ["Kenia", "Senegal", "Tanzania", "Guinea", "Costa de Marfil", "Nigeria", "Senegal (F)"],
        rivalesExtra: ["Madagascar", "Túnez", "Benín"]
    },
    {
        titulo: "Camino de Senegal Campeón - AFCON 2021",
        equipos: ["Zimbabue", "Guinea", "Malaui", "Cabo Verde", "Guinea Ecuatorial", "Burkina Faso", "Egipto"],
        rivalesExtra: ["Camerún", "Marruecos", "Malí"]
    },
    {
        titulo: "Camino de Costa de Marfil Campeón - AFCON 2023",
        equipos: ["Guinea-Bissau", "Nigeria", "Guinea Ecuatorial", "Senegal", "Malí", "RD Congo", "Nigeria (F)"],
        rivalesExtra: ["Marruecos", "Sudáfrica", "Cabo Verde"]
    },
    {
        titulo: "Camino de Japón Campeón - Copa Asiática 2000",
        equipos: ["Arabia Saudita", "Uzbekistán", "Qatar", "Irak", "China", "Arabia Saudita (F)"],
        rivalesExtra: ["Corea del Sur", "Irán", "Kuwait"]
    },
    {
        titulo: "Camino de Japón Campeón - Copa Asiática 2004",
        equipos: ["Omán", "Tailandia", "Irán", "Jordania", "Baréin", "China"],
        rivalesExtra: ["Corea del Sur", "Uzbekistán", "Irak"]
    },
    {
        titulo: "Camino de Irak Campeón - Copa Asiática 2007",
        equipos: ["Tailandia", "Australia", "Omán", "Vietnam", "Corea del Sur", "Arabia Saudita"],
        rivalesExtra: ["Japón", "Irán", "Uzbekistán"]
    },
    {
        titulo: "Camino de Japón Campeón - Copa Asiática 2011",
        equipos: ["Jordania", "Siria", "Arabia Saudita", "Qatar", "Corea del Sur", "Australia"],
        rivalesExtra: ["Uzbekistán", "Irán", "Irak"]
    },
    {
        titulo: "Camino de Australia Campeón - Copa Asiática 2015",
        equipos: ["Kuwait", "Omán", "Corea del Sur", "China", "Emiratos Árabes", "Corea del Sur (F)"],
        rivalesExtra: ["Japón", "Irán", "Irak"]
    },
    {
        titulo: "Camino de Qatar Campeón - Copa Asiática 2019",
        equipos: ["Líbano", "Corea del Norte", "Arabia Saudita", "Irak", "Corea del Sur", "Emiratos Árabes", "Japón"],
        rivalesExtra: ["Irán", "Australia", "Vietnam"]
    },
    {
        titulo: "Camino de Qatar Campeón - Copa Asiática 2023",
        equipos: ["Líbano", "Tayikistán", "China", "Palestina", "Uzbekistán", "Irán", "Jordania"],
        rivalesExtra: ["Corea del Sur", "Japón", "Australia"]
    },
    {
        titulo: "Camino de Arabia Saudita Campeón - Copa Asiática 1996",
        equipos: ["Tailandia", "Irak", "Irán", "China", "Emiratos Árabes"],
        rivalesExtra: ["Kuwait", "Japón", "Corea del Sur"]
    },
    {
        titulo: "Camino de Camerún Campeón - AFCON 2002",
        equipos: ["RD Congo", "Costa de Marfil", "Togo", "Egipto", "Malí", "Senegal"],
        rivalesExtra: ["Nigeria", "Sudáfrica", "Ghana"]
    },
    {
        titulo: "Camino de Sudáfrica Campeón - AFCON 1996",
        equipos: ["Camerún", "Angola", "Egipto", "Argelia", "Ghana", "Túnez"],
        rivalesExtra: ["Nigeria", "Zambia", "Costa de Marfil"]
    },
    {
        titulo: "Camino de Holanda Subcampeona - Mundial 1974",
        equipos: ["Uruguay", "Suecia", "Bulgaria", "Brasil", "Alemania Oriental", "Argentina", "Alemania Federal"],
        rivalesExtra: ["Italia", "Polonia", "Escocia"]
    },
    {
        titulo: "Camino de Holanda Subcampeona - Mundial 1978",
        equipos: ["Irán", "Perú", "Escocia", "Austria", "Alemania Federal", "Italia", "Argentina"],
        rivalesExtra: ["Brasil", "Francia", "España"]
    },
    {
        titulo: "Camino de Holanda Subcampeona - Mundial 2010",
        equipos: ["Dinamarca", "Japón", "Camerún", "Eslovaquia", "Brasil", "Uruguay", "España"],
        rivalesExtra: ["Alemania", "Argentina", "Paraguay"]
    },
    {
        titulo: "Camino de Hungría Subcampeona - Mundial 1954",
        equipos: ["Corea del Sur", "Alemania Federal (G)", "Brasil", "Uruguay", "Alemania Federal (F)"],
        rivalesExtra: ["Austria", "Inglaterra", "Italia"]
    },
    {
        titulo: "Camino de Brasil Subcampeón - Mundial 1950",
        equipos: ["México", "Suiza", "Yugoslavia", "Suecia", "España", "Uruguay"],
        rivalesExtra: ["Inglaterra", "Chile", "Italia"]
    },
    {
        titulo: "Camino del Milan Subcampeón - Champions 2004/05",
        equipos: ["Shakhtar", "Celtic", "Barcelona", "Man United", "Inter", "PSV", "Liverpool"],
        rivalesExtra: ["Lyon", "Chelsea", "Bayern Múnich"]
    },
    {
        titulo: "Camino del Atlético de Madrid Subcampeón - Champions 2013/14",
        equipos: ["Zenit", "Porto", "Austria Viena", "Milan", "Barcelona", "Chelsea", "Real Madrid"],
        rivalesExtra: ["Man City", "PSG", "Bayern Múnich"]
    },
    {
        titulo: "Camino de Francia Subcampeona - Mundial 2006",
        equipos: ["Suiza", "Corea del Sur", "Togo", "España", "Brasil", "Portugal", "Italia"],
        rivalesExtra: ["Alemania", "Argentina", "Inglaterra"]
    },
    {
        titulo: "Camino de Alemania Subcampeona - Mundial 2002",
        equipos: ["Arabia Saudita", "Irlanda", "Camerún", "Paraguay", "EE. UU.", "Corea del Sur", "Brasil"],
        rivalesExtra: ["Inglaterra", "España", "Italia"]
    },
    {
        titulo: "Camino de la Juventus Subcampeona - Champions 2016/17",
        equipos: ["Sevilla", "Lyon", "Dinamo Zagreb", "Porto", "Barcelona", "Mónaco", "Real Madrid"],
        rivalesExtra: ["Bayern Múnich", "Man City", "Borussia Dortmund"]
    },
    {
        titulo: "Camino de Italia Subcampeona - Mundial 1994",
        equipos: ["Irlanda", "Noruega", "México", "Nigeria", "España", "Bulgaria", "Brasil"],
        rivalesExtra: ["Alemania", "Argentina", "Suecia"]
    },
    {
        titulo: "Camino de Francia Subcampeona - Mundial 2022",
        equipos: ["Australia", "Dinamarca", "Túnez", "Polonia", "Inglaterra", "Marruecos", "Argentina"],
        rivalesExtra: ["Brasil", "Croacia", "Portugal"]
    },
    {
        titulo: "Camino de Portugal Subcampeón - Eurocopa 2004",
        equipos: ["Grecia (G)", "Rusia", "España", "Inglaterra", "Países Bajos", "Grecia (F)"],
        rivalesExtra: ["Francia", "Italia", "República Checa"]
    },
    {
        titulo: "Camino de River Plate Subcampeón - Libertadores 2019",
        equipos: ["Alianza Lima", "Palestino", "Internacional", "Cruzeiro", "Cerro Porteño", "Boca Juniors", "Flamengo"],
        rivalesExtra: ["Grêmio", "Libertad", "Nacional"]
    },
    {
        titulo: "Camino de Boca Juniors Subcampeón - Libertadores 2012",
        equipos: ["Zamora", "Fluminense (G)", "Arsenal", "Unión Española", "Fluminense (4tos)", "U. de Chile", "Corinthians"],
        rivalesExtra: ["Santos", "Vélez Sarsfield", "Internacional"]
    },
    {
        titulo: "Camino de Argentina Subcampeona - Mundial 2014",
        equipos: ["Bosnia", "Irán", "Nigeria", "Suiza", "Bélgica", "Países Bajos", "Alemania"],
        rivalesExtra: ["Brasil", "Colombia", "Francia"]
    },
    {
        titulo: "Camino de Argentina Subcampeona - Mundial 1990",
        equipos: ["Camerún", "URSS", "Rumania", "Brasil", "Yugoslavia", "Italia", "Alemania"],
        rivalesExtra: ["Inglaterra", "Holanda", "Escocia"]
    },
    {
        titulo: "Camino de Lanús Subcampeón - Libertadores 2017",
        equipos: ["Nacional", "Chapecoense", "Zulia", "The Strongest", "San Lorenzo", "River Plate", "Grêmio"],
        rivalesExtra: ["Atlético Nacional", "Barcelona SC", "Palmeiras"]
    },
    {
        titulo: "Camino de Argentina Subcampeona - Copa América 2015",
        equipos: ["Paraguay", "Uruguay", "Jamaica", "Colombia", "Paraguay (SF)", "Chile"],
        rivalesExtra: ["Brasil", "Perú", "Bolivia"]
    },
    {
        titulo: "Camino de Argentina Subcampeona - Copa América 2016",
        equipos: ["Chile (G)", "Panamá", "Bolivia", "Venezuela", "EE. UU.", "Chile (F)"],
        rivalesExtra: ["Colombia", "México", "Uruguay"]
    }
];