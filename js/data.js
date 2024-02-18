const SCRAP_DATE = "18/02/2024";
let MAX_VUES = 0;
let MAX_TIME = 0;

const dataDirect = [
    {
        "rawTime": "1:47:08  ",
        "rawVues": "248k",
        "title": "Fichage politique, où va la France ? Marion Maréchal [EN DIRECT]",
        "time": 6428,
        "vues": 248000
    },
    {
        "rawTime": "2:53:08  ",
        "rawVues": "131k",
        "title": "La mort de l'agriculture française ? Pierrick Horel et Quentin Le Guillous [EN DIRECT]",
        "time": 10388,
        "vues": 131000
    },
    {
        "rawTime": "2:08:19  ",
        "rawVues": "248k",
        "title": "Mon Afrique va mal ? Tiken Jah Fakoly [EN DIRECT]",
        "time": 7699,
        "vues": 248000
    },
    {
        "rawTime": "2:59:37  ",
        "rawVues": "220k",
        "title": "La Finance peut-elle arrêter de ruiner la planète ? Bertrand Badré [EN DIRECT]",
        "time": 10777,
        "vues": 220000
    },
    {
        "rawTime": "1:55:17  ",
        "rawVues": "778k",
        "title": "Fabrice Éboué, plus rien à perdre ? [EN DIRECT]",
        "time": 6917,
        "vues": 778000
    },
    {
        "rawTime": "2:24:08  ",
        "rawVues": "319k",
        "title": "Inflation, bientôt la révolution ? Dominique Schelcher [EN DIRECT]",
        "time": 8648,
        "vues": 319000
    },
    {
        "rawTime": "2:18:12  ",
        "rawVues": "299k",
        "title": "Accueillir des migrants avec moins d'énergie ?  O. Delamarche et Charles-Henri Gallois [EN DIRECT]",
        "time": 8292,
        "vues": 299000
    },
    {
        "rawTime": "2:20:21  ",
        "rawVues": "430k",
        "title": "Trahison des chefs, où va la France ? Guillaume Bigot [EN DIRECT]",
        "time": 8421,
        "vues": 430000
    },
    {
        "rawTime": "2:16:16  ",
        "rawVues": "365k",
        "title": "IA : notre futur assistant ou nouveau maître ? Justine Cassell et Cédric Villani [EN DIRECT]",
        "time": 8176,
        "vues": 365000
    },
    {
        "rawTime": "2:34:40  ",
        "rawVues": "241k",
        "title": "Souveraineté alimentaire face au dérèglement climatique ? Serge Zaka [EN DIRECT]",
        "time": 9280,
        "vues": 241000
    },
    {
        "rawTime": "2:45:46  ",
        "rawVues": "298k",
        "title": "Deux économistes sous stress-test ? Julia Cagé et Thomas Piketty [EN DIRECT]",
        "time": 9946,
        "vues": 298000
    },
    {
        "rawTime": "2:09:35  ",
        "rawVues": "535k",
        "title": "Comment devient-on bourreau ? Pierre Conesa [EN DIRECT]",
        "time": 7775,
        "vues": 535000
    },
    {
        "rawTime": "1:58:02  ",
        "rawVues": "195k",
        "title": "Produire en France, au-delà de l'inquiétude ? Loïk Le Floch-Prigent et Nicolas Meilhan [EN DIRECT]",
        "time": 7082,
        "vues": 195000
    },
    {
        "rawTime": "2:28:06  ",
        "rawVues": "608k",
        "title": "Dans le mur, quoi qu’il en coûte ? François Lenglet [EN DIRECT]",
        "time": 8886,
        "vues": 608000
    },
    {
        "rawTime": "2:28:26  ",
        "rawVues": "453k",
        "title": "IA : le devenir légume de l’humanité ? Éric Sadin [EN DIRECT]",
        "time": 8906,
        "vues": 453000
    },
    {
        "rawTime": "2:23:42  ",
        "rawVues": "447k",
        "title": "La faillite du système bancaire ? Jacques de Larosière et Tom Benoit [EN DIRECT]",
        "time": 8622,
        "vues": 447000
    },
    {
        "rawTime": "1:20:44  ",
        "rawVues": "245k",
        "title": "Faillite des élites ? Alexandre Moatti [EN DIRECT]",
        "time": 4844,
        "vues": 245000
    },
    {
        "rawTime": "2:41:07  ",
        "rawVues": "665k",
        "title": "Bataille de civilisation dans un monde en ruine ? Jean-Luc Mélenchon [EN DIRECT]",
        "time": 9667,
        "vues": 665000
    },
    {
        "rawTime": "2:18:25  ",
        "rawVues": "439k",
        "title": "La guerre des intelligences ? Laurent Alexandre [EN DIRECT]",
        "time": 8305,
        "vues": 439000
    },
    {
        "rawTime": "2:36:22  ",
        "rawVues": "1,1Mde",
        "title": "Sobriété, déconsommateurs : cache-misère des gouvernements ? Jean-Marc Jancovici [EN DIRECT]",
        "time": 9382,
        "vues": 1100000
    },
    {
        "rawTime": "1:15:15  ",
        "rawVues": "692k",
        "title": "Second tour, fable politique ? Albert Dupontel [EN DIRECT]",
        "time": 4515,
        "vues": 692000
    },
    {
        "rawTime": "2:15:33  ",
        "rawVues": "249k",
        "title": "Prix Nobel d'économie : face à la pauvreté ? Esther Duflo [EN DIRECT]",
        "time": 8133,
        "vues": 249000
    },
    {
        "rawTime": "2:44:49  ",
        "rawVues": "1Mde",
        "title": "Quand est-ce que l'on touche le fond ? Pierre Sabatier et Olivier Delamarche [EN DIRECT]",
        "time": 9889,
        "vues": 1000000
    },
    {
        "rawTime": "2:43:34  ",
        "rawVues": "266k",
        "title": "Criminalisation des luttes : écoterrorisme ? M. Dulac, C. Bonneuil, A. Planchard [EN DIRECT]",
        "time": 9814,
        "vues": 266000
    },
    {
        "rawTime": "1:55:22  ",
        "rawVues": "382k",
        "title": "Les émeutes de la pauvreté ? Olivier De Schutter [EN DIRECT]",
        "time": 6922,
        "vues": 382000
    },
    {
        "rawTime": "3:19:15  ",
        "rawVues": "763k",
        "title": "Stratège de guerre : Sabotages, Cupidité et Agressions ? Jérôme Clech [EN DIRECT]",
        "time": 11955,
        "vues": 763000
    },
    {
        "rawTime": "2:17:47  ",
        "rawVues": "247k",
        "title": "Effondrement, pénurie de médicaments ? Clémence Marque [EN DIRECT]",
        "time": 8267,
        "vues": 247000
    },
    {
        "rawTime": "1:43:28  ",
        "rawVues": "357k",
        "title": "Immigration, où va la France ? Estelle Youssouffa [EN DIRECT]",
        "time": 6208,
        "vues": 357000
    },
    {
        "rawTime": "2:19:50  ",
        "rawVues": "527k",
        "title": "Domination Globale : Taïwan ? Wu Chih-chung [EN DIRECT]",
        "time": 8390,
        "vues": 527000
    },
    {
        "rawTime": "3:17:20  ",
        "rawVues": "1,1Mde",
        "title": "Semaine de 4 jours, taxe sur la spéculation ? Pierre Larrouturou [EN DIRECT]",
        "time": 11840,
        "vues": 1100000
    },
    {
        "rawTime": "2:12:06  ",
        "rawVues": "926k",
        "title": "France : la stratégie du canard sans tête ? Yves Bréchet [EN DIRECT]",
        "time": 7926,
        "vues": 926000
    },
    {
        "rawTime": "2:06:25  ",
        "rawVues": "319k",
        "title": "Analyser un monde anesthésié par l’horreur ? Jean-Jacques Tyszler [EN DIRECT]",
        "time": 7585,
        "vues": 319000
    },
    {
        "rawTime": "2:00:37  ",
        "rawVues": "254k",
        "title": "Marchés financiers sans éthique : quels sont les risques ? Eva Sadoun [EN DIRECT]",
        "time": 7237,
        "vues": 254000
    },
    {
        "rawTime": "2:33:19  ",
        "rawVues": "1Mde",
        "title": "Où sont les risques, où va la France ? Henri Guaino [EN DIRECT]",
        "time": 9199,
        "vues": 1000000
    },
    {
        "rawTime": "1:39:24  ",
        "rawVues": "354k",
        "title": "Qui aurait pu prédire : la guerre économique ? Christian Harbulot [EN DIRECT]",
        "time": 5964,
        "vues": 354000
    },
    {
        "rawTime": "3:02:04  ",
        "rawVues": "1,1Mde",
        "title": "Effondrement : notre civilisation au bord du gouffre ? Aurore Stéphant [EN DIRECT]",
        "time": 10924,
        "vues": 1100000
    },
    {
        "rawTime": "2:25:11  ",
        "rawVues": "1Mde",
        "title": "Les sols à l'agonie, peut-on encore les sauver ? Lydia et Claude Bourguignon [EN DIRECT]",
        "time": 8711,
        "vues": 1000000
    },
    {
        "rawTime": "1:21:33  ",
        "rawVues": "457k",
        "title": "EDF : Saccagé délibérément par l'Europe ? Henri Proglio [EN DIRECT]",
        "time": 4893,
        "vues": 457000
    },
    {
        "rawTime": "2:18:58  ",
        "rawVues": "956k",
        "title": "Souveraineté énergétique : vers une tiers-mondisation de la France ? Hervé Machenaud [EN DIRECT]",
        "time": 8338,
        "vues": 956000
    },
    {
        "rawTime": "2:02:00  ",
        "rawVues": "451k",
        "title": "[VF] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        "time": 7320,
        "vues": 451000
    },
    {
        "rawTime": "1:32:36  ",
        "rawVues": "667k",
        "title": "La fin de l'abondance industrielle ? Louis Gallois et Olivier Lluansi [EN DIRECT]",
        "time": 5556,
        "vues": 667000
    },
    {
        "rawTime": "2:06:50  ",
        "rawVues": "492k",
        "title": "Une formidable crise financière en perspective ? Jézabel Couppey-Soubeyran [EN DIRECT]",
        "time": 7610,
        "vues": 492000
    },
    {
        "rawTime": "2:25:11  ",
        "rawVues": "980k",
        "title": "Comment la France va-t-elle s’en sortir ? Loïk Le Floch-Prigent [EN DIRECT]",
        "time": 8711,
        "vues": 980000
    },
    {
        "rawTime": "2:26:17  ",
        "rawVues": "668k",
        "title": "En route vers un confinement énergétique ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        "time": 8777,
        "vues": 668000
    },
    {
        "rawTime": "1:30:05  ",
        "rawVues": "356k",
        "title": "Les coulisses édifiantes des paradis fiscaux ? Renaud Van Ruymbeke [EN DIRECT]",
        "time": 5405,
        "vues": 356000
    },
    {
        "rawTime": "3:06:32  ",
        "rawVues": "811k",
        "title": "Crise financière, réchauffement climatique, où va l'Afrique ? Lionel Zinsou [EN DIRECT]",
        "time": 11192,
        "vues": 811000
    },
    {
        "rawTime": "2:19:25  ",
        "rawVues": "762k",
        "title": "En bande organisée ? Flore Vasseur [EN DIRECT]",
        "time": 8365,
        "vues": 762000
    },
    {
        "rawTime": "2:50:15  ",
        "rawVues": "2,6Mde",
        "title": "Crise financière: la descente aux enfers? Gaël Giraud, Raphaël Rossello & Gilles Raveaud [EN DIRECT]",
        "time": 10215,
        "vues": 2600000
    },
    {
        "rawTime": "1:51:49  ",
        "rawVues": "525k",
        "title": "La malbouffe contre-attaque ? Christophe Brusset [EN DIRECT]",
        "time": 6709,
        "vues": 525000
    },
    {
        "rawTime": "2:48:31  ",
        "rawVues": "1,3Mde",
        "title": "Où va la France ? François Ruffin [EN DIRECT]",
        "time": 10111,
        "vues": 1300000
    },
    {
        "rawTime": "1:43:17  ",
        "rawVues": "270k",
        "title": "Le chimpanzé qui murmurait à l'oreille de l'homme ? Frans de Waal [EN DIRECT]",
        "time": 6197,
        "vues": 270000
    },
    {
        "rawTime": "1:37:50  ",
        "rawVues": "456k",
        "title": "Faut-il accepter de négocier avec le diable ? Pierre Hazan [EN DIRECT]",
        "time": 5870,
        "vues": 456000
    },
    {
        "rawTime": "2:09:57  ",
        "rawVues": "1,6Mde",
        "title": "Anesthésie générale ? Jérémy Ferrari [EN DIRECT]",
        "time": 7797,
        "vues": 1600000
    },
    {
        "rawTime": "2:27:07  ",
        "rawVues": "1,2Mde",
        "title": "Nous sommes en guerre, la stratégie française ? Général Didier Castres [EN DIRECT]",
        "time": 8827,
        "vues": 1200000
    },
    {
        "rawTime": "1:39:23  ",
        "rawVues": "893k",
        "title": "Les bellicistes de plateaux TV, complexe militaro-intellectuel ? Pierre Conesa [EN DIRECT]",
        "time": 5963,
        "vues": 893000
    },
    {
        "rawTime": "2:35:59  ",
        "rawVues": "698k",
        "title": "Nucléaire : Choc énergétique, inflationniste, écologique ? Nicolas Nace & Gilles Babinet [EN DIRECT]",
        "time": 9359,
        "vues": 698000
    },
    {
        "rawTime": "3:01:00  ",
        "rawVues": "5,8Mde",
        "title": "Effondrement économique, monétaire & civilisationnel ? Charles Gave & Olivier Delamarche [EN DIRECT]",
        "time": 10860,
        "vues": 5800000
    },
    {
        "rawTime": "2:10:29  ",
        "rawVues": "219k",
        "title": "La science-fiction prédit la guerre ? August Cole [EN DIRECT]",
        "time": 7829,
        "vues": 219000
    },
    {
        "rawTime": "2:11:53  ",
        "rawVues": "311k",
        "title": "Perte de liberté et grogne sociale ? Michel Wieviorka [EN DIRECT]",
        "time": 7913,
        "vues": 311000
    },
    {
        "rawTime": "2:04:47  ",
        "rawVues": "752k",
        "title": "35 ans de DGSE, une pointe de diamant ? Alain Chouet [EN DIRECT]",
        "time": 7487,
        "vues": 752000
    },
    {
        "rawTime": "2:05:41  ",
        "rawVues": "1Mde",
        "title": "Crise de l'eau, planète terre invivable ? Emma Haziza [EN DIRECT]",
        "time": 7541,
        "vues": 1000000
    },
    {
        "rawTime": "2:05:34  ",
        "rawVues": "742k",
        "title": "Tempête géopolitique ? Pascal Boniface [EN DIRECT]",
        "time": 7534,
        "vues": 742000
    },
    {
        "rawTime": "1:43:14  ",
        "rawVues": "316k",
        "title": "Vivre en dictature ? Sacha Filipenko [EN DIRECT]",
        "time": 6194,
        "vues": 316000
    },
    {
        "rawTime": "2:07:24  ",
        "rawVues": "706k",
        "title": "L'Europe à court d'énergie ? Nicolas Meilhan et Francis Perrin [EN DIRECT]",
        "time": 7644,
        "vues": 706000
    },
    {
        "rawTime": "2:11:24  ",
        "rawVues": "957k",
        "title": "Où va la France ? Jean-Luc Mélenchon - Part 2 [EN DIRECT]",
        "time": 7884,
        "vues": 957000
    },
    {
        "rawTime": "2:30:39  ",
        "rawVues": "337k",
        "title": "Coup d'état numérique, la matrice ? Christophe Deloire [EN DIRECT]",
        "time": 9039,
        "vues": 337000
    },
    {
        "rawTime": "1:59:18  ",
        "rawVues": "1,4Mde",
        "title": "Comment arrive -t-on à la guerre ? Pierre Conesa [EN DIRECT]",
        "time": 7158,
        "vues": 1400000
    },
    {
        "rawTime": "1:50:26  ",
        "rawVues": "487k",
        "title": "Crash des médias ? Crash des journalistes ? Paul Moreira et Edwy Plenel [EN DIRECT]",
        "time": 6626,
        "vues": 487000
    },
    {
        "rawTime": "3:04:16  ",
        "rawVues": "1,3Mde",
        "title": "L'emprise, la France sous influence ? Marc Endeweld [EN DIRECT]",
        "time": 11056,
        "vues": 1300000
    },
    {
        "rawTime": "2:48:27  ",
        "rawVues": "1,3Mde",
        "title": "Éviter l’effondrement ? Jean-Marc Jancovici - Laurent Morel [EN DIRECT]",
        "time": 10107,
        "vues": 1300000
    },
    {
        "rawTime": "2:12:24  ",
        "rawVues": "383k",
        "title": "La France face à la nouvelle mondialisation ? Geoffroy Roux de Bézieux [EN DIRECT]",
        "time": 7944,
        "vues": 383000
    },
    {
        "rawTime": "3:12:02  ",
        "rawVues": "2,2Mde",
        "title": "L'effondrement : le point critique ? Aurore Stéphant [EN DIRECT]",
        "time": 11522,
        "vues": 2200000
    },
    {
        "rawTime": "2:12:55  ",
        "rawVues": "1,5Mde",
        "title": "Où va la France ? Jean-Luc Mélenchon - Part 1 [EN DIRECT]",
        "time": 7975,
        "vues": 1500000
    },
    {
        "rawTime": "2:06:28  ",
        "rawVues": "544k",
        "title": "L'art de la guerre et du commandement ? Loïc Finaz [EN DIRECT]",
        "time": 7588,
        "vues": 544000
    },
    {
        "rawTime": "1:19:09  ",
        "rawVues": "823k",
        "title": "Science et société, où va-t-on ? Étienne Klein [EN DIRECT]",
        "time": 4749,
        "vues": 823000
    },
    {
        "rawTime": "2:12:28  ",
        "rawVues": "932k",
        "title": "Militarisation de la langue ? Clément Viktorovitch [EN DIRECT]",
        "time": 7948,
        "vues": 932000
    },
    {
        "rawTime": "2:33:27  ",
        "rawVues": "356k",
        "title": "Désamorcer notre impuissance politique ? Eric Sadin [EN DIRECT]",
        "time": 9207,
        "vues": 356000
    },
    {
        "rawTime": "1:26:41  ",
        "rawVues": "188k",
        "title": "Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        "time": 5201,
        "vues": 188000
    },
    {
        "rawTime": "2:35:00  ",
        "rawVues": "616k",
        "title": "De la récession à la crypto ?  Raphaël Rossello et Owen Simonin [EN DIRECT]",
        "time": 9300,
        "vues": 616000
    },
    {
        "rawTime": "1:36:18  ",
        "rawVues": "441k",
        "title": "Réindustrialisation : reprendre son autonomie ? Anais Voy Gillis [EN DIRECT]",
        "time": 5778,
        "vues": 441000
    },
    {
        "rawTime": "1:36:15  ",
        "rawVues": "2,5Mde",
        "title": "Où va la France ? Eric Zemmour [EN DIRECT]",
        "time": 5775,
        "vues": 2500000
    },
    {
        "rawTime": "2:40:16  ",
        "rawVues": "250k",
        "title": "Journaliste sous les balles ? Régis Le Sommier [EN DIRECT]",
        "time": 9616,
        "vues": 250000
    },
    {
        "rawTime": "1:54:24  ",
        "rawVues": "654k",
        "title": "La Finance destructrice de démocratie ? Georges Ugeux [EN DIRECT]",
        "time": 6864,
        "vues": 654000
    },
    {
        "rawTime": "2:39:32  ",
        "rawVues": "676k",
        "title": "Le hacking au XXIe siècle ? Zax et Doomer [EN DIRECT]",
        "time": 9572,
        "vues": 676000
    },
    {
        "rawTime": "3:29:35  ",
        "rawVues": "2,5Mde",
        "title": "Ambassadeur de Chine sans filtre ? Lu Shaye [EN DIRECT]",
        "time": 12575,
        "vues": 2500000
    },
    {
        "rawTime": "1:57:26  ",
        "rawVues": "1Mde",
        "title": "La fin de la guerre classique ? Alain Juillet [EN DIRECT]",
        "time": 7046,
        "vues": 1000000
    },
    {
        "rawTime": "2:19:12  ",
        "rawVues": "996k",
        "title": "Le rapport qui annonce l'apocalypse ? Valérie Masson-Delmotte et Pierre Larrouturou  [EN DIRECT]",
        "time": 8352,
        "vues": 996000
    },
    {
        "rawTime": "1:54:36  ",
        "rawVues": "695k",
        "title": "Pas de prison pour les grands escrocs ? Renaud Van Ruymbeke [EN DIRECT]",
        "time": 6876,
        "vues": 695000
    },
    {
        "rawTime": "1:55:59  ",
        "rawVues": "307k",
        "title": "66% d'abstention : la grande confusion ? Philippe Corcuff [EN DIRECT]",
        "time": 6959,
        "vues": 307000
    },
    {
        "rawTime": "2:09:00  ",
        "rawVues": "834k",
        "title": "Pass sanitaire, géopolitique de la Data, copie privée ? Benjamin Bayart et Marc Rees [EN DIRECT]",
        "time": 7740,
        "vues": 834000
    },
    {
        "rawTime": "1:44:27  ",
        "rawVues": "363k",
        "title": "La satire avant la guerre ? Bruno Gaccio [EN DIRECT]",
        "time": 6267,
        "vues": 363000
    },
    {
        "rawTime": "2:31:53  ",
        "rawVues": "671k",
        "title": "Militaires en colère ? Henri Bentégeat [EN DIRECT]",
        "time": 9113,
        "vues": 671000
    },
    {
        "rawTime": "2:58:06  ",
        "rawVues": "2,2Mde",
        "title": "Géopolitique : Le désastre Français ? Hubert Védrine [EN DIRECT]",
        "time": 10686,
        "vues": 2200000
    },
    {
        "rawTime": "3:32:30  ",
        "rawVues": "3Mde",
        "title": "Philippe de Villiers sans filtre ? [EN DIRECT]",
        "time": 12750,
        "vues": 3000000
    },
    {
        "rawTime": "2:00:42  ",
        "rawVues": "410k",
        "title": "Au cœur des soulèvements ? Gaspard Glanz [EN DIRECT]",
        "time": 7242,
        "vues": 410000
    },
    {
        "rawTime": "2:20:30  ",
        "rawVues": "645k",
        "title": "Démocratie : Épiphénomène historique, sécession des élites ? Barbara Stiegler [EN DIRECT]",
        "time": 8430,
        "vues": 645000
    },
    {
        "rawTime": "1:41:44  ",
        "rawVues": "530k",
        "title": "Covid : aux origines du mal ? Brice Perrier [EN DIRECT]",
        "time": 6104,
        "vues": 530000
    },
    {
        "rawTime": "2:19:57  ",
        "rawVues": "897k",
        "title": "Les radicalismes religieux et le Lobby Saoudien en France ? Pierre Conesa [EN DIRECT]",
        "time": 8397,
        "vues": 897000
    },
    {
        "rawTime": "2:23:27  ",
        "rawVues": "659k",
        "title": "Désinformation en temps d'épidémie ? Pr Renaud Piarroux [EN DIRECT]",
        "time": 8607,
        "vues": 659000
    },
    {
        "rawTime": "2:28:40  ",
        "rawVues": "2,2Mde",
        "title": "Crise gigantesque en approche ? Gilles Raveaud [ EN DIRECT ]",
        "time": 8920,
        "vues": 2200000
    },
    {
        "rawTime": "2:03:47  ",
        "rawVues": "553k",
        "title": "France : Corruption à tous les étages ? Elise Van Beneden, Anticor[ EN DIRECT ]",
        "time": 7427,
        "vues": 553000
    },
    {
        "rawTime": "1:46:13  ",
        "rawVues": "472k",
        "title": "Guillaume Meurice : Le bouffon du Roi ? [ EN DIRECT ]",
        "time": 6373,
        "vues": 472000
    },
    {
        "rawTime": "2:20:10  ",
        "rawVues": "743k",
        "title": "Banquier d'affaires face aux crises ? Raphaël Rossello [ EN DIRECT ]",
        "time": 8410,
        "vues": 743000
    },
    {
        "rawTime": "2:31:48  ",
        "rawVues": "347k",
        "title": "La France en cours de tiers-mondisation ? Yves Jégo  [ EN DIRECT ]",
        "time": 9108,
        "vues": 347000
    },
    {
        "rawTime": "1:50:43  ",
        "rawVues": "328k",
        "title": "50 ans d'Utopie ? Yann Arthus-Bertrand  [ EN DIRECT ]",
        "time": 6643,
        "vues": 328000
    },
    {
        "rawTime": "2:50:28  ",
        "rawVues": "876k",
        "title": "COVID 19 : La faillite occidentale ? Renaud Piarroux [ EN DIRECT ]",
        "time": 10228,
        "vues": 876000
    },
    {
        "rawTime": "2:55:04  ",
        "rawVues": "651k",
        "title": "En route vers la dictature ? Christophe Deloire [EN DIRECT]",
        "time": 10504,
        "vues": 651000
    },
    {
        "rawTime": "2:29:20  ",
        "rawVues": "312k",
        "title": "La Justice face aux Politiques, aux terroristes ? Béatrice Brugère [EN DIRECT]",
        "time": 8960,
        "vues": 312000
    },
    {
        "rawTime": "1:55:23  ",
        "rawVues": "378k",
        "title": "Partout où nécessité fait loi ? Cédric Herrou",
        "time": 6923,
        "vues": 378000
    },
    {
        "rawTime": "2:48:51  ",
        "rawVues": "2,1Mde",
        "title": "La police en déconfiture ? Alexandre Langlois et Noam Anouar [ En direct ]",
        "time": 10131,
        "vues": 2100000
    },
    {
        "rawTime": "2:01:22  ",
        "rawVues": "481k",
        "title": "Journalisme de façade, de cour, de trottoir ? Julia Cagé [ En direct ]",
        "time": 7282,
        "vues": 481000
    },
    {
        "rawTime": "2:32:32  ",
        "rawVues": "1,4Mde",
        "title": "L'espion qui nous veut du bien ? Marc Eichinger [ En direct ]",
        "time": 9152,
        "vues": 1400000
    },
    {
        "rawTime": "1:34:46  ",
        "rawVues": "487k",
        "title": "France : réveiller nos vieux démons ? Arnaud Montebourg [ En direct ]",
        "time": 5686,
        "vues": 487000
    },
    {
        "rawTime": "1:52:03  ",
        "rawVues": "442k",
        "title": "Le Covid, les fake news, les journalistes ? Noël Mamère [ En direct ]",
        "time": 6723,
        "vues": 442000
    },
    {
        "rawTime": "2:44:42  ",
        "rawVues": "409k",
        "title": "L'État démissionnaire ? Anne-Laure Kiechel [ En direct ]",
        "time": 9882,
        "vues": 409000
    },
    {
        "rawTime": "2:02:12  ",
        "rawVues": "585k",
        "title": "Nager avec les requins ? Denis Robert [ En direct ]",
        "time": 7332,
        "vues": 585000
    },
    {
        "rawTime": "1:33:18  ",
        "rawVues": "567k",
        "title": "Le futur, entre 5G et Amish ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        "time": 5598,
        "vues": 567000
    },
    {
        "rawTime": "1:39:27  ",
        "rawVues": "2,5Mde",
        "title": "Adieu les cons, transhumance suicidaire ? Albert Dupontel [EN DIRECT]",
        "time": 5967,
        "vues": 2500000
    },
    {
        "rawTime": "3:03:40  ",
        "rawVues": "882k",
        "title": "La fin d’un monde commun ? Éric Sadin [EN DIRECT]",
        "time": 11020,
        "vues": 882000
    },
    {
        "rawTime": "2:00:42  ",
        "rawVues": "1,4Mde",
        "title": "Chaos économique, blanchiment bancaire ? Gaël Giraud [EN DIRECT]",
        "time": 7242,
        "vues": 1400000
    },
    {
        "rawTime": "1:28:50  ",
        "rawVues": "386k",
        "title": "Les sangsues de la République ? Isabelle Saporta [EN DIRECT]",
        "time": 5330,
        "vues": 386000
    },
    {
        "rawTime": "2:06:32  ",
        "rawVues": "551k",
        "title": "Crise économique, débats interdits en France ? Jean-Paul Fitoussi [EN DIRECT]",
        "time": 7592,
        "vues": 551000
    },
    {
        "rawTime": "2:18:49  ",
        "rawVues": "479k",
        "title": "Souveraineté numérique, la douche froide ? Tariq Krim et Bernard Benhamou [EN DIRECT]",
        "time": 8329,
        "vues": 479000
    },
    {
        "rawTime": "2:28:33  ",
        "rawVues": "3,3Mde",
        "title": "Où en est la France ? Michel Onfray [EN DIRECT]",
        "time": 8913,
        "vues": 3300000
    },
    {
        "rawTime": "2:14:58  ",
        "rawVues": "1,3Mde",
        "title": "L'espion, le Covid et le truand ? Maxime Renahy [EN DIRECT]",
        "time": 8098,
        "vues": 1300000
    },
    {
        "rawTime": "1:44:13  ",
        "rawVues": "795k",
        "title": "Économie sous perfusion, les risques ? Olivier Delamarche [EN DIRECT]",
        "time": 6253,
        "vues": 795000
    },
    {
        "rawTime": "2:23:08  ",
        "rawVues": "308k",
        "title": "Solidité du système financier et des retraites ? F.X. Selleret et P. Sabatier [EN DIRECT]",
        "time": 8588,
        "vues": 308000
    },
    {
        "rawTime": "1:48:34  ",
        "rawVues": "361k",
        "title": "Choc économique : Perspectives alternatives ? Isabelle Delannoy [EN DIRECT]",
        "time": 6514,
        "vues": 361000
    },
    {
        "rawTime": "2:01:51  ",
        "rawVues": "315k",
        "title": "Un monde malade : quelles sont les pistes ? DataGueule [EN DIRECT]",
        "time": 7311,
        "vues": 315000
    },
    {
        "rawTime": "2:47:56  ",
        "rawVues": "460k",
        "title": "COVID-19, panique sociale, scientifique et politique ? Philippe Douste-Blazy [EN DIRECT]",
        "time": 10076,
        "vues": 460000
    },
    {
        "rawTime": "2:20:35  ",
        "rawVues": "638k",
        "title": "COVID-19, Crise financière, Chine, Menace sur la France. Christian Harbulot [EN DIRECT]",
        "time": 8435,
        "vues": 638000
    },
    {
        "rawTime": "2:32:01  ",
        "rawVues": "956k",
        "title": "Insurrections, Espions, COVID-19, Crise mondiales. Bernard Squarcini [EN DIRECT]",
        "time": 9121,
        "vues": 956000
    },
    {
        "rawTime": "1:34:54  ",
        "rawVues": "215k",
        "title": "Migrants/Réfugiés, le grand scandale ? Jean Ziegler [EN DIRECT]",
        "time": 5694,
        "vues": 215000
    },
    {
        "rawTime": "1:46:22  ",
        "rawVues": "142k",
        "title": "[ VO ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        "time": 6382,
        "vues": 142000
    },
    {
        "rawTime": "1:38:30  ",
        "rawVues": "358k",
        "title": "Général 5 étoiles face à la bombe nucléaire ? Bernard Norlain [EN DIRECT]",
        "time": 5910,
        "vues": 358000
    },
    {
        "rawTime": "2:08:54  ",
        "rawVues": "597k",
        "title": "Les politiques, l'important c'est pas la chute ? Virginie Martin [EN DIRECT]",
        "time": 7734,
        "vues": 597000
    },
    {
        "rawTime": "2:03:55  ",
        "rawVues": "355k",
        "title": "La religion de la croissance économique? Delphine Batho [EN DIRECT]",
        "time": 7435,
        "vues": 355000
    },
    {
        "rawTime": "1:29:12  ",
        "rawVues": "288k",
        "title": "Radars : un pognon de dingue ? Reflets + Extra-Muros [EN DIRECT]",
        "time": 5352,
        "vues": 288000
    },
    {
        "rawTime": "1:39:03  ",
        "rawVues": "728k",
        "title": "Humour, pensée formatée et politiquement correct ? Thomas Wiesel [EN DIRECT]",
        "time": 5943,
        "vues": 728000
    },
    {
        "rawTime": "2:43:52  ",
        "rawVues": "1,7Mde",
        "title": "Macron : les réseaux secrets ? Marc Endeweld [EN DIRECT]",
        "time": 9832,
        "vues": 1700000
    },
    {
        "rawTime": "1:30:47  ",
        "rawVues": "867k",
        "title": "L'enfumage de la transition écologique ? Guillaume Pitron [EN DIRECT]",
        "time": 5447,
        "vues": 867000
    },
    {
        "rawTime": "2:11:11  ",
        "rawVues": "286k",
        "title": "Guerre économique, surveillance de masse ? Cédric O [EN DIRECT]",
        "time": 7871,
        "vues": 286000
    },
    {
        "rawTime": "2:31:38  ",
        "rawVues": "508k",
        "title": "Propagande et contre-propagande ? Christophe Stalla-Bourdillon [EN DIRECT]",
        "time": 9098,
        "vues": 508000
    },
    {
        "rawTime": "2:28:50  ",
        "rawVues": "409k",
        "title": "Crise de la masculinité ? Francis Dupuis-Déri [EN DIRECT]",
        "time": 8930,
        "vues": 409000
    },
    {
        "rawTime": "2:08:05  ",
        "rawVues": "314k",
        "title": "Camisole numérique pour votre bien ? Gilles Babinet [EN DIRECT]",
        "time": 7685,
        "vues": 314000
    },
    {
        "rawTime": "3:04:40  ",
        "rawVues": "4Mde",
        "title": "L’agroalimentaire vu de l’intérieur, intoxication ? Christophe Brusset [EN DIRECT]",
        "time": 11080,
        "vues": 4000000
    },
    {
        "rawTime": "1:09:16  ",
        "rawVues": "212k",
        "title": "Europe, dictature technocratique ? Costa-Gavras [EN DIRECT]",
        "time": 4156,
        "vues": 212000
    },
    {
        "rawTime": "2:20:47  ",
        "rawVues": "721k",
        "title": "Clientélisme politique et Moyen-Orient : Agnès Levallois et Pierre Conesa [EN DIRECT]",
        "time": 8447,
        "vues": 721000
    },
    {
        "rawTime": "2:07:49  ",
        "rawVues": "1,2Mde",
        "title": "Médias, les nouveaux GUIGNOLS ? Bruno Gaccio [EN DIRECT]",
        "time": 7669,
        "vues": 1200000
    },
    {
        "rawTime": "2:31:12  ",
        "rawVues": "861k",
        "title": "L'explosion des banques ? Christophe Nijdam & Jérôme Cazes [EN DIRECT]",
        "time": 9072,
        "vues": 861000
    },
    {
        "rawTime": "1:23:09  ",
        "rawVues": "378k",
        "title": "GIEC : Le climat survivra-t-il au capitalisme ? Jouzel & Larrouturou [EN DIRECT]",
        "time": 4989,
        "vues": 378000
    },
    {
        "rawTime": "2:03:18  ",
        "rawVues": "318k",
        "title": "Un prix Nobel face au krach à venir ? Joseph Stiglitz [EN DIRECT]",
        "time": 7398,
        "vues": 318000
    },
    {
        "rawTime": "2:21:14  ",
        "rawVues": "854k",
        "title": "DGSE : Face à la réalité ? Talk with a spy [EN DIRECT]",
        "time": 8474,
        "vues": 854000
    },
    {
        "rawTime": "2:29:10  ",
        "rawVues": "442k",
        "title": "Guerre économique sans pitié pour la France ? Olivier Marleix [EN DIRECT]",
        "time": 8950,
        "vues": 442000
    },
    {
        "rawTime": "1:33:36  ",
        "rawVues": "521k",
        "title": "La France en danger: où en est le renseignement ? Eric Dénécé [EN DIRECT]",
        "time": 5616,
        "vues": 521000
    },
    {
        "rawTime": "1:57:21  ",
        "rawVues": "368k",
        "title": "Football : du pain, des jeux et des magouilles ? Vikash Dhorasoo [EN DIRECT]",
        "time": 7041,
        "vues": 368000
    },
    {
        "rawTime": "1:42:58  ",
        "rawVues": "523k",
        "title": "DGSE : l'impuissance de l'état ? Maxime Renahy [ EN DIRECT ]",
        "time": 6178,
        "vues": 523000
    },
    {
        "rawTime": "1:45:11  ",
        "rawVues": "939k",
        "title": "USA : Nos anciens alliés ? Arnaud Montebourg [EN DIRECT]",
        "time": 6311,
        "vues": 939000
    },
    {
        "rawTime": "2:14:49  ",
        "rawVues": "3Mde",
        "title": "Alstom : la France vendue à la découpe ? Frédéric Pierucci [EN DIRECT]",
        "time": 8089,
        "vues": 3000000
    },
    {
        "rawTime": "1:20:41  ",
        "rawVues": "1,1Mde",
        "title": "Arabie Saoudite, un pays protégé ? Pierre Conesa [EN DIRECT]",
        "time": 4841,
        "vues": 1100000
    },
    {
        "rawTime": "1:22:42  ",
        "rawVues": "530k",
        "title": "Ecologie, Transport et Mythomanie : Laurent Castaignède [EN DIRECT]",
        "time": 4962,
        "vues": 530000
    },
    {
        "rawTime": "1:43:58  ",
        "rawVues": "616k",
        "title": "Débat : L'avenir de l'humanité ? Laurent Alexandre et Philippe Bihouix [EN DIRECT]",
        "time": 6238,
        "vues": 616000
    },
    {
        "rawTime": "1:59:41  ",
        "rawVues": "294k",
        "title": "Laherrère, Meilhan: Croissance, énergie, le point de non-retour ? [EN DIRECT]",
        "time": 7181,
        "vues": 294000
    },
    {
        "rawTime": "2:12:59  ",
        "rawVues": "885k",
        "title": "Jean Ziegler : Pourquoi il faut détruire le capitalisme ? [EN DIRECT]",
        "time": 7979,
        "vues": 885000
    },
    {
        "rawTime": "1:53:01  ",
        "rawVues": "215k",
        "title": "Alain Grandjean : la finance va-t-elle sauver la planète ? [EN DIRECT]",
        "time": 6781,
        "vues": 215000
    },
    {
        "rawTime": "1:30:31  ",
        "rawVues": "1,6Mde",
        "title": "Monique Pinçon-Charlot : Casse sociale, le début ? [EN DIRECT]",
        "time": 5431,
        "vues": 1600000
    },
    {
        "rawTime": "1:31:48  ",
        "rawVues": "909k",
        "title": "Mediapart : Benalla, Macron, le journalisme menacé ?  [EN DIRECT]",
        "time": 5508,
        "vues": 909000
    },
    {
        "rawTime": "1:24:55  ",
        "rawVues": "795k",
        "title": "Barbara Stiegler : S'adapter à une société malade ? [EN DIRECT]",
        "time": 5095,
        "vues": 795000
    },
    {
        "rawTime": "1:43:32  ",
        "rawVues": "539k",
        "title": "Philippe Bihouix : Prophète de l’apocalypse ? [EN DIRECT]",
        "time": 6212,
        "vues": 539000
    },
    {
        "rawTime": "1:18:34  ",
        "rawVues": "356k",
        "title": "Union Européenne pour ou contre ? Coralie Delaume [EN DIRECT]",
        "time": 4714,
        "vues": 356000
    },
    {
        "rawTime": "2:41:08  ",
        "rawVues": "2,3Mde",
        "title": "Jean-Luc Mélenchon : face à la réalité ? [EN DIRECT]",
        "time": 9668,
        "vues": 2300000
    },
    {
        "rawTime": "1:30:55  ",
        "rawVues": "444k",
        "title": "Bernard Stiegler : Etat d'urgence, géopolitique, Médias, Gilets Jaunes [EN DIRECT]",
        "time": 5455,
        "vues": 444000
    },
    {
        "rawTime": "1:37:11  ",
        "rawVues": "176k",
        "title": "Champagne, Duplessy et Fontaine : Investigation sans filtre ? [EN DIRECT]",
        "time": 5831,
        "vues": 176000
    },
    {
        "rawTime": "1:38:55  ",
        "rawVues": "298k",
        "title": "Charles Rojzman : Vers les Guerres civiles ? [EN DIRECT]",
        "time": 5935,
        "vues": 298000
    },
    {
        "rawTime": "1:41:20  ",
        "rawVues": "620k",
        "title": "Alain Damasio : l'intuition de la science-fiction ? [EN DIRECT]",
        "time": 6080,
        "vues": 620000
    },
    {
        "rawTime": "1:46:04  ",
        "rawVues": "278k",
        "title": "Géopolitique : Cynisme et bons sentiments ? Caroline Galacteros [EN DIRECT]",
        "time": 6364,
        "vues": 278000
    },
    {
        "rawTime": "1:59:30  ",
        "rawVues": "625k",
        "title": "Noam Anouar : Lucidité face aux terrorismes ?  [EN DIRECT]",
        "time": 7170,
        "vues": 625000
    },
    {
        "rawTime": "1:36:14  ",
        "rawVues": "2,3Mde",
        "title": "Gaël Giraud : Tsunami financier, désastre humanitaire ? [EN DIRECT]",
        "time": 5774,
        "vues": 2300000
    },
    {
        "rawTime": "2:04:52  ",
        "rawVues": "4,9Mde",
        "title": "L'illusion de la démocratie en France ? Juan Branco [EN DIRECT]",
        "time": 7492,
        "vues": 4900000
    },
    {
        "rawTime": "1:36:17  ",
        "rawVues": "379k",
        "title": "Société à bout de souffle ? Aymeric Caron [EN DIRECT]",
        "time": 5777,
        "vues": 379000
    },
    {
        "rawTime": "2:12:15  ",
        "rawVues": "699k",
        "title": "Démocratie : Marketing politique pour les pauvres? Francis Dupuis-Déri [EN DIRECT]",
        "time": 7935,
        "vues": 699000
    },
    {
        "rawTime": "1:46:52  ",
        "rawVues": "696k",
        "title": "Gilets Jaunes : Avant la révolution ? François Boulo [EN DIRECT]",
        "time": 6412,
        "vues": 696000
    },
    {
        "rawTime": "1:25:42  ",
        "rawVues": "931k",
        "title": "François Bégaudeau : Gilets Jaunes, Populisme, Bourgeois ? [EN DIRECT]",
        "time": 5142,
        "vues": 931000
    },
    {
        "rawTime": "46:11  ",
        "rawVues": "69k",
        "title": "Khalid Essa: Taxi un métier en danger ? [EN DIRECT]",
        "time": 2771,
        "vues": 69000
    },
    {
        "rawTime": "2:02:49  ",
        "rawVues": "208k",
        "title": "Yánis Varoufákis, la fin de l'Europe et de l'Euro ? [EN DIRECT]",
        "time": 7369,
        "vues": 208000
    },
    {
        "rawTime": "2:08:35  ",
        "rawVues": "1,2Mde",
        "title": "Jean-Marc Jancovici et Philippe Bihouix : Croissance et Effondrement [EN DIRECT]",
        "time": 7715,
        "vues": 1200000
    },
    {
        "rawTime": "1:00:30  ",
        "rawVues": "366k",
        "title": "Natacha Polony : Journalisme et #LigueduLOL [EN DIRECT]",
        "time": 3630,
        "vues": 366000
    },
    {
        "rawTime": "1:14:43  ",
        "rawVues": "748k",
        "title": "Alexandre Langlois : Violences policières et Gilets Jaunes [EN DIRECT]",
        "time": 4483,
        "vues": 748000
    },
    {
        "rawTime": "1:20:37  ",
        "rawVues": "261k",
        "title": "Vincent Cespedes : Gilets Jaunes : Comprendre la violence ? [EN DIRECT]",
        "time": 4837,
        "vues": 261000
    },
    {
        "rawTime": "1:24:58  ",
        "rawVues": "165k",
        "title": "Aminata Dramane Traoré : Afrique, Gilets Jaunes depuis 150 ans ? [EN DIRECT]",
        "time": 5098,
        "vues": 165000
    },
    {
        "rawTime": "1:20:30  ",
        "rawVues": "535k",
        "title": "Les milliardaires gavés au sang des gilets jaunes ? Denis Robert [EN DIRECT]",
        "time": 4830,
        "vues": 535000
    },
    {
        "rawTime": "2:14:13  ",
        "rawVues": "1,1Mde",
        "title": "Jacques Sapir, Olivier Berruyer et Olivier Delamarche : Gilets Jaunes, début de la fin pour l'UE ?",
        "time": 8053,
        "vues": 1100000
    },
    {
        "rawTime": "1:40:54  ",
        "rawVues": "598k",
        "title": "Alekseï Pouchkov : Futur de l'ordre mondial, la menace russe ? [EN DIRECT]",
        "time": 6054,
        "vues": 598000
    },
    {
        "rawTime": "1:04:33  ",
        "rawVues": "292k",
        "title": "Corruption, : Maladie de la France ?Jean-Christophe Picard, Anticor sans filtre [EN DIRECT]",
        "time": 3873,
        "vues": 292000
    },
    {
        "rawTime": "1:06:36  ",
        "rawVues": "176k",
        "title": "Une Justice sous Macron ? Carbon de Seze [EN DIRECT]",
        "time": 3996,
        "vues": 176000
    },
    {
        "rawTime": "1:32:29  ",
        "rawVues": "708k",
        "title": "Jérémy Ferrari : la révolte par l'humour ? [EN DIRECT]",
        "time": 5549,
        "vues": 708000
    },
    {
        "rawTime": "1:50:10  ",
        "rawVues": "306k",
        "title": "Armée française : Quelle stratégie ? Général Vincent Desportes [EN DIRECT]",
        "time": 6610,
        "vues": 306000
    },
    {
        "rawTime": "1:57:03  ",
        "rawVues": "2,4Mde",
        "title": "Kémi Séba : Panafricanisme 2.0 ? [EN DIRECT]",
        "time": 7023,
        "vues": 2400000
    },
    {
        "rawTime": "1:58:25  ",
        "rawVues": "124k",
        "title": "Migrants / Réfugiés / Immigration : problèmes inextricables ? Frédéric Penard [EN DIRECT]",
        "time": 7105,
        "vues": 124000
    },
    {
        "rawTime": "1:36:42  ",
        "rawVues": "337k",
        "title": "Autopsie du Journalisme, de Hitler à Trump : Daniel Schneidermann [EN DIRECT]",
        "time": 5802,
        "vues": 337000
    },
    {
        "rawTime": "2:19:59  ",
        "rawVues": "696k",
        "title": "Éric Sadin : l'asservissement par l'Intelligence Artificielle ? [EN DIRECT]",
        "time": 8399,
        "vues": 696000
    },
    {
        "rawTime": "2:13:51  ",
        "rawVues": "1,6Mde",
        "title": "Emmanuel Todd : Trahison des élites françaises ? [EN DIRECT]",
        "time": 8031,
        "vues": 1600000
    },
    {
        "rawTime": "1:35:56  ",
        "rawVues": "1,2Mde",
        "title": "La France interdite ? Laurent Obertone [EN DIRECT]",
        "time": 5756,
        "vues": 1200000
    },
    {
        "rawTime": "2:10:25  ",
        "rawVues": "267k",
        "title": "Terrorisme ou Légitime défense ? Thibault de Montbrial [EN DIRECT]",
        "time": 7825,
        "vues": 267000
    },
    {
        "rawTime": "1:26:24  ",
        "rawVues": "341k",
        "title": "Jérémie Zimmermann : 1984, un manuel d'instructions ? [EN DIRECT]",
        "time": 5184,
        "vues": 341000
    },
    {
        "rawTime": "1:38:30  ",
        "rawVues": "456k",
        "title": "P. Servigne & J. Blamont : Introduction au siècle des menaces [EN DIRECT]",
        "time": 5910,
        "vues": 456000
    },
    {
        "rawTime": "1:54:31  ",
        "rawVues": "443k",
        "title": "Anarchie VS Capitalisme ? Tancrède Ramonet EN DIRECT]",
        "time": 6871,
        "vues": 443000
    },
    {
        "rawTime": "1:59:43  ",
        "rawVues": "406k",
        "title": "École de Guerre : L’état du monde. Olivier Delamarche, Pierre Sabatier et Alain Juillet [EN DIRECT]",
        "time": 7183,
        "vues": 406000
    },
    {
        "rawTime": "1:58:49  ",
        "rawVues": "180k",
        "title": "Ambassade de Russie : Acte 2, Espions, Guerre Froide sans filtre [EN DIRECT]",
        "time": 7129,
        "vues": 180000
    },
    {
        "rawTime": "1:26:33  ",
        "rawVues": "165k",
        "title": "Ex-députée écolo : sans langue de bois ? Isabelle Attard [EN DIRECT]",
        "time": 5193,
        "vues": 165000
    },
    {
        "rawTime": "1:11:02  ",
        "rawVues": "456k",
        "title": "Edgar Morin : L’effondrement ? [EN DIRECT]",
        "time": 4262,
        "vues": 456000
    },
    {
        "rawTime": "1:21:58  ",
        "rawVues": "91k",
        "title": "Greenpeace : Menaces Nucléaire ? Yannick Rousselet [EN DIRECT]",
        "time": 4918,
        "vues": 91000
    },
    {
        "rawTime": "1:25:29  ",
        "rawVues": "490k",
        "title": "Pierre Conesa : Guerres, Embargos et Propagandes [EN DIRECT]",
        "time": 5129,
        "vues": 490000
    },
    {
        "rawTime": "1:38:48  ",
        "rawVues": "2Mde",
        "title": "Quand la Science appelle à l'aide pour l'humanité ? Aurélien Barrau [EN DIRECT]",
        "time": 5928,
        "vues": 2000000
    },
    {
        "rawTime": "1:22:41  ",
        "rawVues": "228k",
        "title": "Sankara, Françafrique, CFA, où va l'Afrique ? Louis Magloire Keumayou [EN DIRECT]",
        "time": 4961,
        "vues": 228000
    },
    {
        "rawTime": "1:36:13  ",
        "rawVues": "458k",
        "title": "Climat : Trois quarts de l'humanité menacés de mort ? Pierre Larrouturou [EN DIRECT]",
        "time": 5773,
        "vues": 458000
    },
    {
        "rawTime": "1:40:26  ",
        "rawVues": "238k",
        "title": "Surveillance, Hacker et Journaliste. Antoine Champagne et Olivier Laurelli Aka Bluetouff [EN DIRECT]",
        "time": 6026,
        "vues": 238000
    },
    {
        "rawTime": "2:15:52  ",
        "rawVues": "222k",
        "title": "Économie en danger ? Flux migratoires, Brexit et Mondialisation. M. Bruyère, E. Berr et D. Cayla",
        "time": 8152,
        "vues": 222000
    },
    {
        "rawTime": "1:42:25  ",
        "rawVues": "169k",
        "title": "Blockchain, gouvernance et énergie ? Primavera De Filippi et Remy Bourganel [EN DIRECT]",
        "time": 6145,
        "vues": 169000
    },
    {
        "rawTime": "2:04:59  ",
        "rawVues": "187k",
        "title": "Non Violence VS Urgence Climatique : Jon Palais [EN DIRECT]",
        "time": 7499,
        "vues": 187000
    },
    {
        "rawTime": "2:01:56  ",
        "rawVues": "1,6Mde",
        "title": "Jean-Pierre Petit : Modèle Janus et Armes russes [EN DIRECT]",
        "time": 7316,
        "vues": 1600000
    },
    {
        "rawTime": "1:58:02  ",
        "rawVues": "553k",
        "title": "François Ruffin, sans filtre : Journaliste VS Politique ? [EN DIRECT]",
        "time": 7082,
        "vues": 553000
    },
    {
        "rawTime": "1:10:20  ",
        "rawVues": "445k",
        "title": "Gunter Pauli : Biomimétisme et économie bleue [EN DIRECT]",
        "time": 4220,
        "vues": 445000
    },
    {
        "rawTime": "1:11:07  ",
        "rawVues": "2Mde",
        "title": "Étienne Klein : la structure fondamentale de la matière : le boson de higgs [EN DIRECT]",
        "time": 4267,
        "vues": 2000000
    },
    {
        "rawTime": "1:59:58  ",
        "rawVues": "1,6Mde",
        "title": "Sarkozy, corruption, assassinat et affaire d'état ? Fabrice Arfi (Mediapart) [EN DIRECT]",
        "time": 7198,
        "vues": 1600000
    },
    {
        "rawTime": "1:24:26  ",
        "rawVues": "283k",
        "title": "Survivre au système éducatif, Hackers et Crapauds fous. Thanh Nghiem [EN DIRECT]",
        "time": 5066,
        "vues": 283000
    },
    {
        "rawTime": "1:16:37  ",
        "rawVues": "310k",
        "title": "Le langage au service des puissants ? Alain Deneault [EN DIRECT]",
        "time": 4597,
        "vues": 310000
    },
    {
        "rawTime": "1:39:32  ",
        "rawVues": "206k",
        "title": "Criminalisation de la lutte sociale ? Jérémie Assous : Affaire Tarnac [EN DIRECT]",
        "time": 5972,
        "vues": 206000
    },
    {
        "rawTime": "1:46:15  ",
        "rawVues": "949k",
        "title": "Pierre Conesa : Propagande de Guerre, Cinéma, Géopolitique, Opinion publique [EN DIRECT]",
        "time": 6375,
        "vues": 949000
    },
    {
        "rawTime": "2:05:09  ",
        "rawVues": "360k",
        "title": "Ambassade de Russie, Espions, Guerre Froide sans filtre [EN DIRECT]",
        "time": 7509,
        "vues": 360000
    },
    {
        "rawTime": "2:21:12  ",
        "rawVues": "2,8Mde",
        "title": "DGSE, Espions, Secrets des Affaires, Crises mondiales. Alain Juillet [EN DIRECT]",
        "time": 8472,
        "vues": 2800000
    },
    {
        "rawTime": "2:21:28  ",
        "rawVues": "1,1Mde",
        "title": "Delamarche, Gave, Sabatier : Géopolitique, macroéconomie sans filtre [EN DIRECT]",
        "time": 8488,
        "vues": 1100000
    },
    {
        "rawTime": "1:54:33  ",
        "rawVues": "288k",
        "title": "Big Brother habite Place Beauvau ? Exégèse en libertés [EN DIRECT]",
        "time": 6873,
        "vues": 288000
    },
    {
        "rawTime": "1:18:34  ",
        "rawVues": "204k",
        "title": "Santé VS Nourriture ? Isabelle Saporta [EN DIRECT]",
        "time": 4714,
        "vues": 204000
    },
    {
        "rawTime": "1:32:24  ",
        "rawVues": "547k",
        "title": "Bernard Friot : Théorie du revenu universel / salaire à la qualification ? [EN DIRECT]",
        "time": 5544,
        "vues": 547000
    },
    {
        "rawTime": "1:53:40  ",
        "rawVues": "391k",
        "title": "Natacha Polony : Journalistes et médias sous contrôles ? [EN DIRECT]",
        "time": 6820,
        "vues": 391000
    },
    {
        "rawTime": "1:24:27  ",
        "rawVues": "269k",
        "title": "Aude Lancelin : Indépendance des médias ? [EN DIRECT]",
        "time": 5067,
        "vues": 269000
    },
    {
        "rawTime": "1:51:27  ",
        "rawVues": "1,7Mde",
        "title": "Effondrement de la civilisation ? Pablo Servigne [EN DIRECT]",
        "time": 6687,
        "vues": 1700000
    },
    {
        "rawTime": "56:58  ",
        "rawVues": "109k",
        "title": "Lord Esperanza : Rap nouvelle génération ? [EN DIRECT]",
        "time": 3418,
        "vues": 109000
    },
    {
        "rawTime": "1:14:17  ",
        "rawVues": "3,8Mde",
        "title": "Idriss Aberkane sans filtre [EN DIRECT]",
        "time": 4457,
        "vues": 3800000
    },
    {
        "rawTime": "1:21:04  ",
        "rawVues": "82k",
        "title": "Journalistes et liberté d'expression en danger ? [EN DIRECT]",
        "time": 4864,
        "vues": 82000
    },
    {
        "rawTime": "1:35:59  ",
        "rawVues": "188k",
        "title": "La police au service du marché ? Mathieu Rigouste [EN DIRECT]",
        "time": 5759,
        "vues": 188000
    },
    {
        "rawTime": "1:04:41  ",
        "rawVues": "821k",
        "title": "Étienne Klein : Éthique et philosophie des sciences, le rôle des scientifiques ? [EN DIRECT]",
        "time": 3881,
        "vues": 821000
    },
    {
        "rawTime": "1:14:41  ",
        "rawVues": "447k",
        "title": "Bernard Stiegler : mutations sociales, politiques, économiques et psychologiques [EN DIRECT]",
        "time": 4481,
        "vues": 447000
    },
    {
        "rawTime": "1:34:33  ",
        "rawVues": "149k",
        "title": "Propagande VS Journalisme ? RT France, Xenia Fedorova [EN DIRECT]",
        "time": 5673,
        "vues": 149000
    },
    {
        "rawTime": "1:50:51  ",
        "rawVues": "765k",
        "title": "Philippe Bihouix : Le mensonge de la croissance verte ? [EN DIRECT]",
        "time": 6651,
        "vues": 765000
    },
    {
        "rawTime": "1:35:01  ",
        "rawVues": "95k",
        "title": "L214 : Exploitation animale & Alimentation - Souffrance du 21ème siècle ? [EN DIRECT]",
        "time": 5701,
        "vues": 95000
    },
    {
        "rawTime": "1:22:38  ",
        "rawVues": "83k",
        "title": "Pollution atmosphérique : après l'amiante, un nouveau scandale d'Etat ? Solutions ? [EN DIRECT]",
        "time": 4958,
        "vues": 83000
    },
    {
        "rawTime": "57:38  ",
        "rawVues": "174k",
        "title": "Périco Légasse : Malbouffe et Mondialisation ? [EN DIRECT]",
        "time": 3458,
        "vues": 174000
    },
    {
        "rawTime": "47:22  ",
        "rawVues": "1,1Mde",
        "title": "Jean-Marc Jancovici : Anticiper l’effondrement énergétique ? [EN DIRECT]",
        "time": 2842,
        "vues": 1100000
    },
    {
        "rawTime": "2:02:52  ",
        "rawVues": "205k",
        "title": "Les Éconoclastes à l'École de Guerre : Le Jour d'après [EN DIRECT]",
        "time": 7372,
        "vues": 205000
    },
    {
        "rawTime": "1:15:03  ",
        "rawVues": "625k",
        "title": "Frédéric Taddeï : Les limites du débat ? [EN DIRECT]",
        "time": 4503,
        "vues": 625000
    },
    {
        "rawTime": "1:18:56  ",
        "rawVues": "649k",
        "title": "Cédric Villani : Intelligence artificielle perspectives futures [EN DIRECT]",
        "time": 4736,
        "vues": 649000
    },
    {
        "rawTime": "45:38  ",
        "rawVues": "39k",
        "title": "Philippe Tixier, Inventeur du Dirigeable du Futur ? [EN DIRECT]",
        "time": 2738,
        "vues": 39000
    },
    {
        "rawTime": "1:31:55  ",
        "rawVues": "2,6Mde",
        "title": "Changement de Civilisation ? Marc Luyckx Ghisi [EN DIRECT]",
        "time": 5515,
        "vues": 2600000
    },
    {
        "rawTime": "1:17:05  ",
        "rawVues": "460k",
        "title": "Laurent Alexandre : Intelligence artificielle [EN DIRECT]",
        "time": 4625,
        "vues": 460000
    },
    {
        "rawTime": "1:10:06  ",
        "rawVues": "222k",
        "title": "Bruno Parmentier : Nourrir l'humanité ? [EN DIRECT]",
        "time": 4206,
        "vues": 222000
    },
    {
        "rawTime": "1:02:02  ",
        "rawVues": "458k",
        "title": "Vincent Mignerot : Anticiper l'effondrement ? [EN DIRECT]",
        "time": 3722,
        "vues": 458000
    },
    {
        "rawTime": "1:03:50  ",
        "rawVues": "590k",
        "title": "Philippe Pascot, Corruption et Politique [EN DIRECT]",
        "time": 3830,
        "vues": 590000
    },
    {
        "rawTime": "1:13:21  ",
        "rawVues": "538k",
        "title": "Olivier Delamarche, Analyste financier [EN DIRECT]",
        "time": 4401,
        "vues": 538000
    },
    {
        "rawTime": "2:06:08  ",
        "rawVues": "1,4Mde",
        "title": "Étienne Chouard [EN DIRECT]",
        "time": 7568,
        "vues": 1400000
    },
    {
        "rawTime": "1:10:30  ",
        "rawVues": "156k",
        "title": "Du Sextoy au \"Dark Web\" : Rayna Stamboliyska [EN DIRECT]",
        "time": 4230,
        "vues": 156000
    },
    {
        "rawTime": "43:38  ",
        "rawVues": "161k",
        "title": "Énergie nucléaire ? José Pluki [EN DIRECT]",
        "time": 2618,
        "vues": 161000
    },
    {
        "rawTime": "1:04:48  ",
        "rawVues": "421k",
        "title": "Benjamin Bayart, Grand Sorcier de l'Internet option vie privée [EN DIRECT]",
        "time": 3888,
        "vues": 421000
    },
    {
        "rawTime": "1:02:44  ",
        "rawVues": "475k",
        "title": "Guillaume Ancel, Lieutenant Colonel / Force d'action rapide [EN DIRECT]",
        "time": 3764,
        "vues": 475000
    },
    {
        "rawTime": "1:10:10  ",
        "rawVues": "148k",
        "title": "Stéphanie Gibaud, Lanceuse d'Alerte SwissLeaks [EN DIRECT]",
        "time": 4210,
        "vues": 148000
    },
    {
        "rawTime": "1:12:25  ",
        "rawVues": "443k",
        "title": "Juan Branco, avocat de Wikileaks [EN DIRECT]",
        "time": 4345,
        "vues": 443000
    },
    {
        "rawTime": "1:04:25  ",
        "rawVues": "110k",
        "title": "Lilian Thuram : football, racisme et géopolitique [EN DIRECT]",
        "time": 3865,
        "vues": 110000
    }
]

const dataVideo = [
    {
        "rawTime": "2:02:00  ",
        "rawVues": "186k",
        "title": "[VO] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        "time": 7320,
        "vues": 186000
    },
    {
        "rawTime": "2:10:49  ",
        "rawVues": "134k",
        "title": "La science-fiction prédit la guerre ? August Cole [VO]",
        "time": 7849,
        "vues": 134000
    },
    {
        "rawTime": "1:26:02  ",
        "rawVues": "216k",
        "title": "[VF] Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        "time": 5162,
        "vues": 216000
    },
    {
        "rawTime": "1:46:28  ",
        "rawVues": "288k",
        "title": "[ VF ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        "time": 6388,
        "vues": 288000
    },
    {
        "rawTime": "1:02:48  ",
        "rawVues": "115k",
        "title": "Lutter sans violence ? Jean-Marie Muller [EN DIRECT]",
        "time": 3768,
        "vues": 115000
    },
    {
        "rawTime": "1:07:53  ",
        "rawVues": "89k",
        "title": "Mounir Mahjoubi, Ministre chargé du Numérique [EN DIRECT]",
        "time": 4073,
        "vues": 89000
    },
    {
        "rawTime": "1:04:09  ",
        "rawVues": "80k",
        "title": "la Nef - Banque éthique / Coopérative financière",
        "time": 3849,
        "vues": 80000
    },
    {
        "rawTime": "1:07:17  ",
        "rawVues": "228k",
        "title": "Sputnik France - Sans Filtre",
        "time": 4037,
        "vues": 228000
    },
    {
        "rawTime": "1:04:00  ",
        "rawVues": "242k",
        "title": "DATAGUEULE - Sans Filtre",
        "time": 3840,
        "vues": 242000
    },
    {
        "rawTime": "51:23  ",
        "rawVues": "138k",
        "title": "David Koubbi : Justice VS Finance",
        "time": 3083,
        "vues": 138000
    },
    {
        "rawTime": "1:09:32  ",
        "rawVues": "277k",
        "title": "France, terrorisme et diplomatie en carton",
        "time": 4172,
        "vues": 277000
    },
    {
        "rawTime": "49:18  ",
        "rawVues": "127k",
        "title": "États-Unis-Russie : Tensions Géopolitiques et Terrorisme",
        "time": 2958,
        "vues": 127000
    },
    {
        "rawTime": "44:43  ",
        "rawVues": "112k",
        "title": "Paul Watson, fondateur de Sea Shepherd : Plongée en eaux troubles",
        "time": 2683,
        "vues": 112000
    },
    {
        "rawTime": "1:05:24  ",
        "rawVues": "91k",
        "title": "Terrorisme VS Big Brother",
        "time": 3924,
        "vues": 91000
    },
    {
        "rawTime": "1:09:55  ",
        "rawVues": "141k",
        "title": "L'énergie des conflits, les conflits de l'énergie",
        "time": 4195,
        "vues": 141000
    },
    {
        "rawTime": "58:48  ",
        "rawVues": "94k",
        "title": "Henri Maler, ACRIMED : Discutons de l'information entre générations",
        "time": 3528,
        "vues": 94000
    },
    {
        "rawTime": "58:44  ",
        "rawVues": "143k",
        "title": "200 terroristes sur le territoire ? Entre Ukraine, Irak, Terrorisme, Reporter de Guerre et après ?",
        "time": 3524,
        "vues": 143000
    },
    {
        "rawTime": "1:19:00  ",
        "rawVues": "216k",
        "title": "David Koubbi, Affaire Kerviel, Justice et Société Générale ?",
        "time": 4740,
        "vues": 216000
    },
    {
        "rawTime": "49:58  ",
        "rawVues": "1,4Mde",
        "title": "Elise Lucet sans filtre, Cash investigation, Panama Papers, l'offensive des journalistes ?",
        "time": 2998,
        "vues": 1400000
    },
    {
        "rawTime": "59:49  ",
        "rawVues": "1Mde",
        "title": "Propagande de Guerre, festival de médias mensonges et complot ?",
        "time": 3589,
        "vues": 1000000
    },
    {
        "rawTime": "32:52  ",
        "rawVues": "65k",
        "title": "De l'éducation à la guerre ou De la guerre, à l'éducation ?",
        "time": 1972,
        "vues": 65000
    },
    {
        "rawTime": "1:09:38  ",
        "rawVues": "216k",
        "title": "Schizophrénie financière, casse du siècle ou injure sur l'avenir ?",
        "time": 4178,
        "vues": 216000
    },
    {
        "rawTime": "1:07:04  ",
        "rawVues": "605k",
        "title": "Natacha Polony : Police de la pensée, journalistes en laisse ?",
        "time": 4024,
        "vues": 605000
    },
    {
        "rawTime": "1:09:02  ",
        "rawVues": "236k",
        "title": "Charlie Hebdo sans filtre par Denis Robert",
        "time": 4142,
        "vues": 236000
    },
    {
        "rawTime": "1:19:59  ",
        "rawVues": "70k",
        "title": "Ambassadeur de Russie face à l'augmentation des tensions",
        "time": 4799,
        "vues": 70000
    },
    {
        "rawTime": "1:24:54  ",
        "rawVues": "161k",
        "title": "Terrorisme, Etat d'Urgence, où sont les solutions ? Journaliste, Renseignement, Stratégiste, Hacker.",
        "time": 5094,
        "vues": 161000
    },
    {
        "rawTime": "1:19:22  ",
        "rawVues": "259k",
        "title": "Géopolitique, Russie, Terrorisme, Finance - 6/11/15",
        "time": 4762,
        "vues": 259000
    },
    {
        "rawTime": "1:13:29  ",
        "rawVues": "194k",
        "title": "Crédit Mutuel, Censure, Bolloré, Canal+ et TAFTA | Guerre contre le journalisme",
        "time": 4409,
        "vues": 194000
    },
    {
        "rawTime": "31:38  ",
        "rawVues": "286k",
        "title": "Pierre Conesa : Arabie Saoudite, Théâtre de Dupes, Stratégie planétaire. (Ex Affaires Stratégiques)",
        "time": 1898,
        "vues": 286000
    },
    {
        "rawTime": "47:46  ",
        "rawVues": "104k",
        "title": "Député, qui va payer ? Entre TAFTA, Monsanto et la Syrie ? (Jean Lassalle)",
        "time": 2866,
        "vues": 104000
    },
    {
        "rawTime": "45:30  ",
        "rawVues": "102k",
        "title": "CGT-Police et Loi renseignement",
        "time": 2730,
        "vues": 102000
    },
    {
        "rawTime": "1:17:47  ",
        "rawVues": "110k",
        "title": "Pétrole et gaz de schiste, où va-t-on ?",
        "time": 4667,
        "vues": 110000
    },
    {
        "rawTime": "1:03:32  ",
        "rawVues": "40k",
        "title": "Ministre, Loi renseignement, Stratégie européenne",
        "time": 3812,
        "vues": 40000
    },
    {
        "rawTime": "1:07:28  ",
        "rawVues": "52k",
        "title": "Terrorisme/Internet : Liberté d'expression menacée en France ?",
        "time": 4048,
        "vues": 52000
    },
    {
        "rawTime": "31:01  ",
        "rawVues": "77k",
        "title": "Religion, Terrorisme et paradis. Pierre Conesa ( Ex Affaires Stratégiques )",
        "time": 1861,
        "vues": 77000
    },
    {
        "rawTime": "1:45:25  ",
        "rawVues": "166k",
        "title": "USA, Europe, LuxLeaks : Le grand marché des inégalités",
        "time": 6325,
        "vues": 166000
    },
    {
        "rawTime": "1:14:29  ",
        "rawVues": "211k",
        "title": "Interview Pierre Conesa. Politique de contre-radicalisation en France ( Ex Affaires stratégiques )",
        "time": 4469,
        "vues": 211000
    },
    {
        "rawTime": "26:46  ",
        "rawVues": "23k",
        "title": "Reporter de guerre et journaliste : Bob Coen et Eric Nadler",
        "time": 1606,
        "vues": 23000
    },
    {
        "rawTime": "2:58  ",
        "rawVues": "30k",
        "title": "Les Econoclastes",
        "time": 178,
        "vues": 30000
    },
    {
        "rawTime": "33:48  ",
        "rawVues": "51k",
        "title": "Benjamin Bayart - Neutralité du net",
        "time": 2028,
        "vues": 51000
    },
    {
        "rawTime": "27:45  ",
        "rawVues": "33k",
        "title": "Gilles Babinet - Le Big Data",
        "time": 1665,
        "vues": 33000
    },
    {
        "rawTime": "24:45  ",
        "rawVues": "28k",
        "title": "Hacker VS Justice - Affaire \"Bluetouff\" (O. Iteanu)",
        "time": 1485,
        "vues": 28000
    },
    {
        "rawTime": "1:02:12  ",
        "rawVues": "58k",
        "title": "Où va le monde financier ? (J-M. Rozan & H. de Carmoy)",
        "time": 3732,
        "vues": 58000
    },
    {
        "rawTime": "1:41  ",
        "rawVues": "29k",
        "title": "Réalité bancaire camouflée, imposture des journalistes ?",
        "time": 101,
        "vues": 29000
    },
    {
        "rawTime": "16:09  ",
        "rawVues": "55k",
        "title": "Allons nous vers une Cyber Dictature ? E. Filiol (ex DGSE, hacker) , J. Zimmermann (QDN)",
        "time": 969,
        "vues": 55000
    },
    {
        "rawTime": "37:40  ",
        "rawVues": "29k",
        "title": "Loi de programmation militaire et neutralité du réseau, vie privée et démocratie en danger ?",
        "time": 2260,
        "vues": 29000
    },
    {
        "rawTime": "1:41:43  ",
        "rawVues": "88k",
        "title": "H. de Carmoy, P. Béchade, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        "time": 6103,
        "vues": 88000
    },
    {
        "rawTime": "44:35  ",
        "rawVues": "57k",
        "title": "Michel Éléftériadès",
        "time": 2675,
        "vues": 57000
    },
    {
        "rawTime": "1:02:35  ",
        "rawVues": "80k",
        "title": "Peter Dale Scott",
        "time": 3755,
        "vues": 80000
    },
    {
        "rawTime": "41:41  ",
        "rawVues": "58k",
        "title": "Denis Robert (journaliste, écrivain, whistleblower)",
        "time": 2501,
        "vues": 58000
    },
    {
        "rawTime": "5:18  ",
        "rawVues": "5,7k",
        "title": "Thinkerview - (Trailer) Interview de Denis Robert (journaliste, écrivain, whistleblower)",
        "time": 318,
        "vues": 5000
    },
    {
        "rawTime": "23:04  ",
        "rawVues": "96k",
        "title": "Jérémie Zimmermann",
        "time": 1384,
        "vues": 96000
    },
    {
        "rawTime": "22:15  ",
        "rawVues": "189k",
        "title": "Eric Filiol (hacker, cryptanalyste, ancien de la DGSE)",
        "time": 1335,
        "vues": 189000
    },
    {
        "rawTime": "16:26  ",
        "rawVues": "93k",
        "title": "Alain Chouet (Ancien chef de service à la D.G.S.E.)",
        "time": 986,
        "vues": 93000
    },
    {
        "rawTime": "1:21:57  ",
        "rawVues": "81k",
        "title": "B.Esambert, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        "time": 4917,
        "vues": 81000
    },
    {
        "rawTime": "36:52  ",
        "rawVues": "107k",
        "title": "Olivier Delamarche",
        "time": 2212,
        "vues": 107000
    },
    {
        "rawTime": "40:20  ",
        "rawVues": "83k",
        "title": "Jacques Blamont",
        "time": 2420,
        "vues": 83000
    }
]