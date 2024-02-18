// DATA
const maxVues = 580000
const maxTime = 12750
const parsedData = [
    {
        "time": "1:47:08\n  ",
        "vues": "117k",
        "title": "Fichage politique, où va la France ? Marion Maréchal [EN DIRECT]",
        "sec": 6428,
        "total": 117000
    },
    {
        "time": "2:53:08\n  ",
        "vues": "116k",
        "title": "La mort de l'agriculture française ? Pierrick Horel et Quentin Le Guillous [EN DIRECT]",
        "sec": 10388,
        "total": 116000
    },
    {
        "time": "2:08:19\n  ",
        "vues": "241k",
        "title": "Mon Afrique va mal ? Tiken Jah Fakoly [EN DIRECT]",
        "sec": 7699,
        "total": 241000
    },
    {
        "time": "2:59:37\n  ",
        "vues": "218k",
        "title": "La Finance peut-elle arrêter de ruiner la planète ? Bertrand Badré [EN DIRECT]",
        "sec": 10777,
        "total": 218000
    },
    {
        "time": "1:55:17\n  ",
        "vues": "772k",
        "title": "Fabrice Éboué, plus rien à perdre ? [EN DIRECT]",
        "sec": 6917,
        "total": 772000
    },
    {
        "time": "2:24:08\n  ",
        "vues": "318k",
        "title": "Inflation, bientôt la révolution ? Dominique Schelcher [EN DIRECT]",
        "sec": 8648,
        "total": 318000
    },
    {
        "time": "2:18:12\n  ",
        "vues": "298k",
        "title": "Accueillir des migrants avec moins d'énergie ?  O. Delamarche et Charles-Henri Gallois [EN DIRECT]",
        "sec": 8292,
        "total": 298000
    },
    {
        "time": "2:20:21\n  ",
        "vues": "430k",
        "title": "Trahison des chefs, où va la France ? Guillaume Bigot [EN DIRECT]",
        "sec": 8421,
        "total": 430000
    },
    {
        "time": "2:16:16\n  ",
        "vues": "364k",
        "title": "IA : notre futur assistant ou nouveau maître ? Justine Cassell et Cédric Villani [EN DIRECT]",
        "sec": 8176,
        "total": 364000
    },
    {
        "time": "2:34:40\n  ",
        "vues": "241k",
        "title": "Souveraineté alimentaire face au dérèglement climatique ? Serge Zaka [EN DIRECT]",
        "sec": 9280,
        "total": 241000
    },
    {
        "time": "2:45:46\n  ",
        "vues": "297k",
        "title": "Deux économistes sous stress-test ? Julia Cagé et Thomas Piketty [EN DIRECT]",
        "sec": 9946,
        "total": 297000
    },
    {
        "time": "2:09:35\n  ",
        "vues": "535k",
        "title": "Comment devient-on bourreau ? Pierre Conesa [EN DIRECT]",
        "sec": 7775,
        "total": 535000
    },
    {
        "time": "1:58:02\n  ",
        "vues": "195k",
        "title": "Produire en France, au-delà de l'inquiétude ? Loïk Le Floch-Prigent et Nicolas Meilhan [EN DIRECT]",
        "sec": 7082,
        "total": 195000
    },
    {
        "time": "2:28:06\n  ",
        "vues": "607k",
        "title": "Dans le mur, quoi qu’il en coûte ? François Lenglet [EN DIRECT]",
        "sec": 8886,
        "total": 607000
    },
    {
        "time": "2:28:26\n  ",
        "vues": "452k",
        "title": "IA : le devenir légume de l’humanité ? Éric Sadin [EN DIRECT]",
        "sec": 8906,
        "total": 452000
    },
    {
        "time": "2:23:42\n  ",
        "vues": "447k",
        "title": "La faillite du système bancaire ? Jacques de Larosière et Tom Benoit [EN DIRECT]",
        "sec": 8622,
        "total": 447000
    },
    {
        "time": "1:20:44\n  ",
        "vues": "245k",
        "title": "Faillite des élites ? Alexandre Moatti [EN DIRECT]",
        "sec": 4844,
        "total": 245000
    },
    {
        "time": "2:41:07\n  ",
        "vues": "665k",
        "title": "Bataille de civilisation dans un monde en ruine ? Jean-Luc Mélenchon [EN DIRECT]",
        "sec": 9667,
        "total": 665000
    },
    {
        "time": "2:18:25\n  ",
        "vues": "439k",
        "title": "La guerre des intelligences ? Laurent Alexandre [EN DIRECT]",
        "sec": 8305,
        "total": 439000
    },
    {
        "time": "2:36:22\n  ",
        "vues": "1,1Mde",
        "title": "Sobriété, déconsommateurs : cache-misère des gouvernements ? Jean-Marc Jancovici [EN DIRECT]",
        "sec": 9382,
        "total": 1100000
    },
    {
        "time": "1:15:15\n  ",
        "vues": "691k",
        "title": "Second tour, fable politique ? Albert Dupontel [EN DIRECT]",
        "sec": 4515,
        "total": 691000
    },
    {
        "time": "2:15:33\n  ",
        "vues": "249k",
        "title": "Prix Nobel d'économie : face à la pauvreté ? Esther Duflo [EN DIRECT]",
        "sec": 8133,
        "total": 249000
    },
    {
        "time": "2:44:49\n  ",
        "vues": "1Mde",
        "title": "Quand est-ce que l'on touche le fond ? Pierre Sabatier et Olivier Delamarche [EN DIRECT]",
        "sec": 9889,
        "total": 1000000
    },
    {
        "time": "2:43:34\n  ",
        "vues": "266k",
        "title": "Criminalisation des luttes : écoterrorisme ? M. Dulac, C. Bonneuil, A. Planchard [EN DIRECT]",
        "sec": 9814,
        "total": 266000
    },
    {
        "time": "1:55:22\n  ",
        "vues": "382k",
        "title": "Les émeutes de la pauvreté ? Olivier De Schutter [EN DIRECT]",
        "sec": 6922,
        "total": 382000
    },
    {
        "time": "3:19:15\n  ",
        "vues": "762k",
        "title": "Stratège de guerre : Sabotages, Cupidité et Agressions ? Jérôme Clech [EN DIRECT]",
        "sec": 11955,
        "total": 762000
    },
    {
        "time": "2:17:47\n  ",
        "vues": "247k",
        "title": "Effondrement, pénurie de médicaments ? Clémence Marque [EN DIRECT]",
        "sec": 8267,
        "total": 247000
    },
    {
        "time": "1:43:28\n  ",
        "vues": "356k",
        "title": "Immigration, où va la France ? Estelle Youssouffa [EN DIRECT]",
        "sec": 6208,
        "total": 356000
    },
    {
        "time": "2:19:50\n  ",
        "vues": "527k",
        "title": "Domination Globale : Taïwan ? Wu Chih-chung [EN DIRECT]",
        "sec": 8390,
        "total": 527000
    },
    {
        "time": "3:17:20\n  ",
        "vues": "1,1Mde",
        "title": "Semaine de 4 jours, taxe sur la spéculation ? Pierre Larrouturou [EN DIRECT]",
        "sec": 11840,
        "total": 1100000
    },
    {
        "time": "2:12:06\n  ",
        "vues": "926k",
        "title": "France : la stratégie du canard sans tête ? Yves Bréchet [EN DIRECT]",
        "sec": 7926,
        "total": 926000
    },
    {
        "time": "2:06:25\n  ",
        "vues": "319k",
        "title": "Analyser un monde anesthésié par l’horreur ? Jean-Jacques Tyszler [EN DIRECT]",
        "sec": 7585,
        "total": 319000
    },
    {
        "time": "2:00:37\n  ",
        "vues": "254k",
        "title": "Marchés financiers sans éthique : quels sont les risques ? Eva Sadoun [EN DIRECT]",
        "sec": 7237,
        "total": 254000
    },
    {
        "time": "2:33:19\n  ",
        "vues": "1Mde",
        "title": "Où sont les risques, où va la France ? Henri Guaino [EN DIRECT]",
        "sec": 9199,
        "total": 1000000
    },
    {
        "time": "1:39:24\n  ",
        "vues": "354k",
        "title": "Qui aurait pu prédire : la guerre économique ? Christian Harbulot [EN DIRECT]",
        "sec": 5964,
        "total": 354000
    },
    {
        "time": "3:02:04\n  ",
        "vues": "1,1Mde",
        "title": "Effondrement : notre civilisation au bord du gouffre ? Aurore Stéphant [EN DIRECT]",
        "sec": 10924,
        "total": 1100000
    },
    {
        "time": "2:25:11\n  ",
        "vues": "1Mde",
        "title": "Les sols à l'agonie, peut-on encore les sauver ? Lydia et Claude Bourguignon [EN DIRECT]",
        "sec": 8711,
        "total": 1000000
    },
    {
        "time": "1:21:33\n  ",
        "vues": "457k",
        "title": "EDF : Saccagé délibérément par l'Europe ? Henri Proglio [EN DIRECT]",
        "sec": 4893,
        "total": 457000
    },
    {
        "time": "2:18:58\n  ",
        "vues": "956k",
        "title": "Souveraineté énergétique : vers une tiers-mondisation de la France ? Hervé Machenaud [EN DIRECT]",
        "sec": 8338,
        "total": 956000
    },
    {
        "time": "2:02:00\n  ",
        "vues": "451k",
        "title": "[VF] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        "sec": 7320,
        "total": 451000
    },
    {
        "time": "1:32:36\n  ",
        "vues": "667k",
        "title": "La fin de l'abondance industrielle ? Louis Gallois et Olivier Lluansi [EN DIRECT]",
        "sec": 5556,
        "total": 667000
    },
    {
        "time": "2:06:50\n  ",
        "vues": "492k",
        "title": "Une formidable crise financière en perspective ? Jézabel Couppey-Soubeyran [EN DIRECT]",
        "sec": 7610,
        "total": 492000
    },
    {
        "time": "2:25:11\n  ",
        "vues": "980k",
        "title": "Comment la France va-t-elle s’en sortir ? Loïk Le Floch-Prigent [EN DIRECT]",
        "sec": 8711,
        "total": 980000
    },
    {
        "time": "2:26:17\n  ",
        "vues": "668k",
        "title": "En route vers un confinement énergétique ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        "sec": 8777,
        "total": 668000
    },
    {
        "time": "1:30:05\n  ",
        "vues": "356k",
        "title": "Les coulisses édifiantes des paradis fiscaux ? Renaud Van Ruymbeke [EN DIRECT]",
        "sec": 5405,
        "total": 356000
    },
    {
        "time": "3:06:32\n  ",
        "vues": "811k",
        "title": "Crise financière, réchauffement climatique, où va l'Afrique ? Lionel Zinsou [EN DIRECT]",
        "sec": 11192,
        "total": 811000
    },
    {
        "time": "2:19:25\n  ",
        "vues": "762k",
        "title": "En bande organisée ? Flore Vasseur [EN DIRECT]",
        "sec": 8365,
        "total": 762000
    },
    {
        "time": "2:50:15\n  ",
        "vues": "2,6Mde",
        "title": "Crise financière: la descente aux enfers? Gaël Giraud, Raphaël Rossello & Gilles Raveaud [EN DIRECT]",
        "sec": 10215,
        "total": 2600000
    },
    {
        "time": "1:51:49\n  ",
        "vues": "525k",
        "title": "La malbouffe contre-attaque ? Christophe Brusset [EN DIRECT]",
        "sec": 6709,
        "total": 525000
    },
    {
        "time": "2:48:31\n  ",
        "vues": "1,3Mde",
        "title": "Où va la France ? François Ruffin [EN DIRECT]",
        "sec": 10111,
        "total": 1300000
    },
    {
        "time": "1:43:17\n  ",
        "vues": "270k",
        "title": "Le chimpanzé qui murmurait à l'oreille de l'homme ? Frans de Waal [EN DIRECT]",
        "sec": 6197,
        "total": 270000
    },
    {
        "time": "1:37:50\n  ",
        "vues": "456k",
        "title": "Faut-il accepter de négocier avec le diable ? Pierre Hazan [EN DIRECT]",
        "sec": 5870,
        "total": 456000
    },
    {
        "time": "2:09:57\n  ",
        "vues": "1,6Mde",
        "title": "Anesthésie générale ? Jérémy Ferrari [EN DIRECT]",
        "sec": 7797,
        "total": 1600000
    },
    {
        "time": "2:27:07\n  ",
        "vues": "1,2Mde",
        "title": "Nous sommes en guerre, la stratégie française ? Général Didier Castres [EN DIRECT]",
        "sec": 8827,
        "total": 1200000
    },
    {
        "time": "1:39:23\n  ",
        "vues": "892k",
        "title": "Les bellicistes de plateaux TV, complexe militaro-intellectuel ? Pierre Conesa [EN DIRECT]",
        "sec": 5963,
        "total": 892000
    },
    {
        "time": "2:35:59\n  ",
        "vues": "698k",
        "title": "Nucléaire : Choc énergétique, inflationniste, écologique ? Nicolas Nace & Gilles Babinet [EN DIRECT]",
        "sec": 9359,
        "total": 698000
    },
    {
        "time": "3:01:00\n  ",
        "vues": "5,8Mde",
        "title": "Effondrement économique, monétaire & civilisationnel ? Charles Gave & Olivier Delamarche [EN DIRECT]",
        "sec": 10860,
        "total": 5800000
    },
    {
        "time": "2:10:29\n  ",
        "vues": "219k",
        "title": "La science-fiction prédit la guerre ? August Cole [EN DIRECT]",
        "sec": 7829,
        "total": 219000
    },
    {
        "time": "2:11:53\n  ",
        "vues": "311k",
        "title": "Perte de liberté et grogne sociale ? Michel Wieviorka [EN DIRECT]",
        "sec": 7913,
        "total": 311000
    },
    {
        "time": "2:04:47\n  ",
        "vues": "751k",
        "title": "35 ans de DGSE, une pointe de diamant ? Alain Chouet [EN DIRECT]",
        "sec": 7487,
        "total": 751000
    },
    {
        "time": "2:05:41\n  ",
        "vues": "1Mde",
        "title": "Crise de l'eau, planète terre invivable ? Emma Haziza [EN DIRECT]",
        "sec": 7541,
        "total": 1000000
    },
    {
        "time": "2:05:34\n  ",
        "vues": "742k",
        "title": "Tempête géopolitique ? Pascal Boniface [EN DIRECT]",
        "sec": 7534,
        "total": 742000
    },
    {
        "time": "1:43:14\n  ",
        "vues": "316k",
        "title": "Vivre en dictature ? Sacha Filipenko [EN DIRECT]",
        "sec": 6194,
        "total": 316000
    },
    {
        "time": "2:07:24\n  ",
        "vues": "706k",
        "title": "L'Europe à court d'énergie ? Nicolas Meilhan et Francis Perrin [EN DIRECT]",
        "sec": 7644,
        "total": 706000
    },
    {
        "time": "2:11:24\n  ",
        "vues": "957k",
        "title": "Où va la France ? Jean-Luc Mélenchon - Part 2 [EN DIRECT]",
        "sec": 7884,
        "total": 957000
    },
    {
        "time": "2:30:39\n  ",
        "vues": "336k",
        "title": "Coup d'état numérique, la matrice ? Christophe Deloire [EN DIRECT]",
        "sec": 9039,
        "total": 336000
    },
    {
        "time": "1:59:18\n  ",
        "vues": "1,4Mde",
        "title": "Comment arrive -t-on à la guerre ? Pierre Conesa [EN DIRECT]",
        "sec": 7158,
        "total": 1400000
    },
    {
        "time": "1:50:26\n  ",
        "vues": "487k",
        "title": "Crash des médias ? Crash des journalistes ? Paul Moreira et Edwy Plenel [EN DIRECT]",
        "sec": 6626,
        "total": 487000
    },
    {
        "time": "3:04:16\n  ",
        "vues": "1,3Mde",
        "title": "L'emprise, la France sous influence ? Marc Endeweld [EN DIRECT]",
        "sec": 11056,
        "total": 1300000
    },
    {
        "time": "2:48:27\n  ",
        "vues": "1,3Mde",
        "title": "Éviter l’effondrement ? Jean-Marc Jancovici - Laurent Morel [EN DIRECT]",
        "sec": 10107,
        "total": 1300000
    },
    {
        "time": "2:12:24\n  ",
        "vues": "383k",
        "title": "La France face à la nouvelle mondialisation ? Geoffroy Roux de Bézieux [EN DIRECT]",
        "sec": 7944,
        "total": 383000
    },
    {
        "time": "3:12:02\n  ",
        "vues": "2,2Mde",
        "title": "L'effondrement : le point critique ? Aurore Stéphant [EN DIRECT]",
        "sec": 11522,
        "total": 2200000
    },
    {
        "time": "2:12:55\n  ",
        "vues": "1,5Mde",
        "title": "Où va la France ? Jean-Luc Mélenchon - Part 1 [EN DIRECT]",
        "sec": 7975,
        "total": 1500000
    },
    {
        "time": "2:06:28\n  ",
        "vues": "544k",
        "title": "L'art de la guerre et du commandement ? Loïc Finaz [EN DIRECT]",
        "sec": 7588,
        "total": 544000
    },
    {
        "time": "1:19:09\n  ",
        "vues": "823k",
        "title": "Science et société, où va-t-on ? Étienne Klein [EN DIRECT]",
        "sec": 4749,
        "total": 823000
    },
    {
        "time": "2:12:28\n  ",
        "vues": "932k",
        "title": "Militarisation de la langue ? Clément Viktorovitch [EN DIRECT]",
        "sec": 7948,
        "total": 932000
    },
    {
        "time": "2:33:27\n  ",
        "vues": "356k",
        "title": "Désamorcer notre impuissance politique ? Eric Sadin [EN DIRECT]",
        "sec": 9207,
        "total": 356000
    },
    {
        "time": "1:26:41\n  ",
        "vues": "188k",
        "title": "Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        "sec": 5201,
        "total": 188000
    },
    {
        "time": "2:35:00\n  ",
        "vues": "616k",
        "title": "De la récession à la crypto ?  Raphaël Rossello et Owen Simonin [EN DIRECT]",
        "sec": 9300,
        "total": 616000
    },
    {
        "time": "1:36:18\n  ",
        "vues": "441k",
        "title": "Réindustrialisation : reprendre son autonomie ? Anais Voy Gillis [EN DIRECT]",
        "sec": 5778,
        "total": 441000
    },
    {
        "time": "1:36:15\n  ",
        "vues": "2,5Mde",
        "title": "Où va la France ? Eric Zemmour [EN DIRECT]",
        "sec": 5775,
        "total": 2500000
    },
    {
        "time": "2:40:16\n  ",
        "vues": "250k",
        "title": "Journaliste sous les balles ? Régis Le Sommier [EN DIRECT]",
        "sec": 9616,
        "total": 250000
    },
    {
        "time": "1:54:24\n  ",
        "vues": "654k",
        "title": "La Finance destructrice de démocratie ? Georges Ugeux [EN DIRECT]",
        "sec": 6864,
        "total": 654000
    },
    {
        "time": "2:39:32\n  ",
        "vues": "676k",
        "title": "Le hacking au XXIe siècle ? Zax et Doomer [EN DIRECT]",
        "sec": 9572,
        "total": 676000
    },
    {
        "time": "3:29:35\n  ",
        "vues": "2,5Mde",
        "title": "Ambassadeur de Chine sans filtre ? Lu Shaye [EN DIRECT]",
        "sec": 12575,
        "total": 2500000
    },
    {
        "time": "1:57:26\n  ",
        "vues": "1Mde",
        "title": "La fin de la guerre classique ? Alain Juillet [EN DIRECT]",
        "sec": 7046,
        "total": 1000000
    },
    {
        "time": "2:19:12\n  ",
        "vues": "996k",
        "title": "Le rapport qui annonce l'apocalypse ? Valérie Masson-Delmotte et Pierre Larrouturou  [EN DIRECT]",
        "sec": 8352,
        "total": 996000
    },
    {
        "time": "1:54:36\n  ",
        "vues": "695k",
        "title": "Pas de prison pour les grands escrocs ? Renaud Van Ruymbeke [EN DIRECT]",
        "sec": 6876,
        "total": 695000
    },
    {
        "time": "1:55:59\n  ",
        "vues": "307k",
        "title": "66% d'abstention : la grande confusion ? Philippe Corcuff [EN DIRECT]",
        "sec": 6959,
        "total": 307000
    },
    {
        "time": "2:09:00\n  ",
        "vues": "834k",
        "title": "Pass sanitaire, géopolitique de la Data, copie privée ? Benjamin Bayart et Marc Rees [EN DIRECT]",
        "sec": 7740,
        "total": 834000
    },
    {
        "time": "1:44:27\n  ",
        "vues": "363k",
        "title": "La satire avant la guerre ? Bruno Gaccio [EN DIRECT]",
        "sec": 6267,
        "total": 363000
    },
    {
        "time": "2:31:53\n  ",
        "vues": "670k",
        "title": "Militaires en colère ? Henri Bentégeat [EN DIRECT]",
        "sec": 9113,
        "total": 670000
    },
    {
        "time": "2:58:06\n  ",
        "vues": "2,2Mde",
        "title": "Géopolitique : Le désastre Français ? Hubert Védrine [EN DIRECT]",
        "sec": 10686,
        "total": 2200000
    },
    {
        "time": "3:32:30\n  ",
        "vues": "3Mde",
        "title": "Philippe de Villiers sans filtre ? [EN DIRECT]",
        "sec": 12750,
        "total": 3000000
    },
    {
        "time": "2:00:42\n  ",
        "vues": "410k",
        "title": "Au cœur des soulèvements ? Gaspard Glanz [EN DIRECT]",
        "sec": 7242,
        "total": 410000
    },
    {
        "time": "2:20:30\n  ",
        "vues": "645k",
        "title": "Démocratie : Épiphénomène historique, sécession des élites ? Barbara Stiegler [EN DIRECT]",
        "sec": 8430,
        "total": 645000
    },
    {
        "time": "1:41:44\n  ",
        "vues": "530k",
        "title": "Covid : aux origines du mal ? Brice Perrier [EN DIRECT]",
        "sec": 6104,
        "total": 530000
    },
    {
        "time": "2:19:57\n  ",
        "vues": "897k",
        "title": "Les radicalismes religieux et le Lobby Saoudien en France ? Pierre Conesa [EN DIRECT]",
        "sec": 8397,
        "total": 897000
    },
    {
        "time": "2:23:27\n  ",
        "vues": "659k",
        "title": "Désinformation en temps d'épidémie ? Pr Renaud Piarroux [EN DIRECT]",
        "sec": 8607,
        "total": 659000
    },
    {
        "time": "2:28:40\n  ",
        "vues": "2,2Mde",
        "title": "Crise gigantesque en approche ? Gilles Raveaud [ EN DIRECT ]",
        "sec": 8920,
        "total": 2200000
    },
    {
        "time": "2:03:47\n  ",
        "vues": "553k",
        "title": "France : Corruption à tous les étages ? Elise Van Beneden, Anticor[ EN DIRECT ]",
        "sec": 7427,
        "total": 553000
    },
    {
        "time": "1:46:13\n  ",
        "vues": "472k",
        "title": "Guillaume Meurice : Le bouffon du Roi ? [ EN DIRECT ]",
        "sec": 6373,
        "total": 472000
    },
    {
        "time": "2:20:10\n  ",
        "vues": "743k",
        "title": "Banquier d'affaires face aux crises ? Raphaël Rossello [ EN DIRECT ]",
        "sec": 8410,
        "total": 743000
    },
    {
        "time": "2:31:48\n  ",
        "vues": "347k",
        "title": "La France en cours de tiers-mondisation ? Yves Jégo  [ EN DIRECT ]",
        "sec": 9108,
        "total": 347000
    },
    {
        "time": "1:50:43\n  ",
        "vues": "328k",
        "title": "50 ans d'Utopie ? Yann Arthus-Bertrand  [ EN DIRECT ]",
        "sec": 6643,
        "total": 328000
    },
    {
        "time": "2:50:28\n  ",
        "vues": "876k",
        "title": "COVID 19 : La faillite occidentale ? Renaud Piarroux [ EN DIRECT ]",
        "sec": 10228,
        "total": 876000
    },
    {
        "time": "2:55:04\n  ",
        "vues": "651k",
        "title": "En route vers la dictature ? Christophe Deloire [EN DIRECT]",
        "sec": 10504,
        "total": 651000
    },
    {
        "time": "2:29:20\n  ",
        "vues": "312k",
        "title": "La Justice face aux Politiques, aux terroristes ? Béatrice Brugère [EN DIRECT]",
        "sec": 8960,
        "total": 312000
    },
    {
        "time": "1:55:23\n  ",
        "vues": "378k",
        "title": "Partout où nécessité fait loi ? Cédric Herrou",
        "sec": 6923,
        "total": 378000
    },
    {
        "time": "2:48:51\n  ",
        "vues": "2,1Mde",
        "title": "La police en déconfiture ? Alexandre Langlois et Noam Anouar [ En direct ]",
        "sec": 10131,
        "total": 2100000
    },
    {
        "time": "2:01:22\n  ",
        "vues": "481k",
        "title": "Journalisme de façade, de cour, de trottoir ? Julia Cagé [ En direct ]",
        "sec": 7282,
        "total": 481000
    },
    {
        "time": "2:32:32\n  ",
        "vues": "1,4Mde",
        "title": "L'espion qui nous veut du bien ? Marc Eichinger [ En direct ]",
        "sec": 9152,
        "total": 1400000
    },
    {
        "time": "1:34:46\n  ",
        "vues": "487k",
        "title": "France : réveiller nos vieux démons ? Arnaud Montebourg [ En direct ]",
        "sec": 5686,
        "total": 487000
    },
    {
        "time": "1:52:03\n  ",
        "vues": "442k",
        "title": "Le Covid, les fake news, les journalistes ? Noël Mamère [ En direct ]",
        "sec": 6723,
        "total": 442000
    },
    {
        "time": "2:44:42\n  ",
        "vues": "409k",
        "title": "L'État démissionnaire ? Anne-Laure Kiechel [ En direct ]",
        "sec": 9882,
        "total": 409000
    },
    {
        "time": "2:02:12\n  ",
        "vues": "585k",
        "title": "Nager avec les requins ? Denis Robert [ En direct ]",
        "sec": 7332,
        "total": 585000
    },
    {
        "time": "1:33:18\n  ",
        "vues": "567k",
        "title": "Le futur, entre 5G et Amish ? Nicolas Meilhan et Philippe Bihouix [EN DIRECT]",
        "sec": 5598,
        "total": 567000
    },
    {
        "time": "1:39:27\n  ",
        "vues": "2,5Mde",
        "title": "Adieu les cons, transhumance suicidaire ? Albert Dupontel [EN DIRECT]",
        "sec": 5967,
        "total": 2500000
    },
    {
        "time": "3:03:40\n  ",
        "vues": "882k",
        "title": "La fin d’un monde commun ? Éric Sadin [EN DIRECT]",
        "sec": 11020,
        "total": 882000
    },
    {
        "time": "2:00:42\n  ",
        "vues": "1,4Mde",
        "title": "Chaos économique, blanchiment bancaire ? Gaël Giraud [EN DIRECT]",
        "sec": 7242,
        "total": 1400000
    },
    {
        "time": "1:28:50\n  ",
        "vues": "386k",
        "title": "Les sangsues de la République ? Isabelle Saporta [EN DIRECT]",
        "sec": 5330,
        "total": 386000
    },
    {
        "time": "2:06:32\n  ",
        "vues": "551k",
        "title": "Crise économique, débats interdits en France ? Jean-Paul Fitoussi [EN DIRECT]",
        "sec": 7592,
        "total": 551000
    },
    {
        "time": "2:18:49\n  ",
        "vues": "479k",
        "title": "Souveraineté numérique, la douche froide ? Tariq Krim et Bernard Benhamou [EN DIRECT]",
        "sec": 8329,
        "total": 479000
    },
    {
        "time": "2:28:33\n  ",
        "vues": "3,3Mde",
        "title": "Où en est la France ? Michel Onfray [EN DIRECT]",
        "sec": 8913,
        "total": 3300000
    },
    {
        "time": "2:14:58\n  ",
        "vues": "1,3Mde",
        "title": "L'espion, le Covid et le truand ? Maxime Renahy [EN DIRECT]",
        "sec": 8098,
        "total": 1300000
    },
    {
        "time": "1:44:13\n  ",
        "vues": "795k",
        "title": "Économie sous perfusion, les risques ? Olivier Delamarche [EN DIRECT]",
        "sec": 6253,
        "total": 795000
    },
    {
        "time": "2:23:08\n  ",
        "vues": "308k",
        "title": "Solidité du système financier et des retraites ? F.X. Selleret et P. Sabatier [EN DIRECT]",
        "sec": 8588,
        "total": 308000
    },
    {
        "time": "1:48:34\n  ",
        "vues": "361k",
        "title": "Choc économique : Perspectives alternatives ? Isabelle Delannoy [EN DIRECT]",
        "sec": 6514,
        "total": 361000
    },
    {
        "time": "2:01:51\n  ",
        "vues": "315k",
        "title": "Un monde malade : quelles sont les pistes ? DataGueule [EN DIRECT]",
        "sec": 7311,
        "total": 315000
    },
    {
        "time": "2:47:56\n  ",
        "vues": "460k",
        "title": "COVID-19, panique sociale, scientifique et politique ? Philippe Douste-Blazy [EN DIRECT]",
        "sec": 10076,
        "total": 460000
    },
    {
        "time": "2:20:35\n  ",
        "vues": "638k",
        "title": "COVID-19, Crise financière, Chine, Menace sur la France. Christian Harbulot [EN DIRECT]",
        "sec": 8435,
        "total": 638000
    },
    {
        "time": "2:32:01\n  ",
        "vues": "956k",
        "title": "Insurrections, Espions, COVID-19, Crise mondiales. Bernard Squarcini [EN DIRECT]",
        "sec": 9121,
        "total": 956000
    },
    {
        "time": "1:34:54\n  ",
        "vues": "215k",
        "title": "Migrants/Réfugiés, le grand scandale ? Jean Ziegler [EN DIRECT]",
        "sec": 5694,
        "total": 215000
    },
    {
        "time": "1:46:22\n  ",
        "vues": "142k",
        "title": "[ VO ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        "sec": 6382,
        "total": 142000
    },
    {
        "time": "1:38:30\n  ",
        "vues": "358k",
        "title": "Général 5 étoiles face à la bombe nucléaire ? Bernard Norlain [EN DIRECT]",
        "sec": 5910,
        "total": 358000
    },
    {
        "time": "2:08:54\n  ",
        "vues": "597k",
        "title": "Les politiques, l'important c'est pas la chute ? Virginie Martin [EN DIRECT]",
        "sec": 7734,
        "total": 597000
    },
    {
        "time": "2:03:55\n  ",
        "vues": "355k",
        "title": "La religion de la croissance économique? Delphine Batho [EN DIRECT]",
        "sec": 7435,
        "total": 355000
    },
    {
        "time": "1:29:12\n  ",
        "vues": "288k",
        "title": "Radars : un pognon de dingue ? Reflets + Extra-Muros [EN DIRECT]",
        "sec": 5352,
        "total": 288000
    },
    {
        "time": "1:39:03\n  ",
        "vues": "728k",
        "title": "Humour, pensée formatée et politiquement correct ? Thomas Wiesel [EN DIRECT]",
        "sec": 5943,
        "total": 728000
    },
    {
        "time": "2:43:52\n  ",
        "vues": "1,7Mde",
        "title": "Macron : les réseaux secrets ? Marc Endeweld [EN DIRECT]",
        "sec": 9832,
        "total": 1700000
    },
    {
        "time": "1:30:47\n  ",
        "vues": "867k",
        "title": "L'enfumage de la transition écologique ? Guillaume Pitron [EN DIRECT]",
        "sec": 5447,
        "total": 867000
    },
    {
        "time": "2:11:11\n  ",
        "vues": "286k",
        "title": "Guerre économique, surveillance de masse ? Cédric O [EN DIRECT]",
        "sec": 7871,
        "total": 286000
    },
    {
        "time": "2:31:38\n  ",
        "vues": "508k",
        "title": "Propagande et contre-propagande ? Christophe Stalla-Bourdillon [EN DIRECT]",
        "sec": 9098,
        "total": 508000
    },
    {
        "time": "2:28:50\n  ",
        "vues": "409k",
        "title": "Crise de la masculinité ? Francis Dupuis-Déri [EN DIRECT]",
        "sec": 8930,
        "total": 409000
    },
    {
        "time": "2:08:05\n  ",
        "vues": "314k",
        "title": "Camisole numérique pour votre bien ? Gilles Babinet [EN DIRECT]",
        "sec": 7685,
        "total": 314000
    },
    {
        "time": "3:04:40\n  ",
        "vues": "4Mde",
        "title": "L’agroalimentaire vu de l’intérieur, intoxication ? Christophe Brusset [EN DIRECT]",
        "sec": 11080,
        "total": 4000000
    },
    {
        "time": "1:09:16\n  ",
        "vues": "212k",
        "title": "Europe, dictature technocratique ? Costa-Gavras [EN DIRECT]",
        "sec": 4156,
        "total": 212000
    },
    {
        "time": "2:20:47\n  ",
        "vues": "721k",
        "title": "Clientélisme politique et Moyen-Orient : Agnès Levallois et Pierre Conesa [EN DIRECT]",
        "sec": 8447,
        "total": 721000
    },
    {
        "time": "2:07:49\n  ",
        "vues": "1,2Mde",
        "title": "Médias, les nouveaux GUIGNOLS ? Bruno Gaccio [EN DIRECT]",
        "sec": 7669,
        "total": 1200000
    },
    {
        "time": "2:31:12\n  ",
        "vues": "861k",
        "title": "L'explosion des banques ? Christophe Nijdam & Jérôme Cazes [EN DIRECT]",
        "sec": 9072,
        "total": 861000
    },
    {
        "time": "1:23:09\n  ",
        "vues": "378k",
        "title": "GIEC : Le climat survivra-t-il au capitalisme ? Jouzel & Larrouturou [EN DIRECT]",
        "sec": 4989,
        "total": 378000
    },
    {
        "time": "2:03:18\n  ",
        "vues": "318k",
        "title": "Un prix Nobel face au krach à venir ? Joseph Stiglitz [EN DIRECT]",
        "sec": 7398,
        "total": 318000
    },
    {
        "time": "2:21:14\n  ",
        "vues": "854k",
        "title": "DGSE : Face à la réalité ? Talk with a spy [EN DIRECT]",
        "sec": 8474,
        "total": 854000
    },
    {
        "time": "2:29:10\n  ",
        "vues": "442k",
        "title": "Guerre économique sans pitié pour la France ? Olivier Marleix [EN DIRECT]",
        "sec": 8950,
        "total": 442000
    },
    {
        "time": "1:33:36\n  ",
        "vues": "521k",
        "title": "La France en danger: où en est le renseignement ? Eric Dénécé [EN DIRECT]",
        "sec": 5616,
        "total": 521000
    },
    {
        "time": "1:57:21\n  ",
        "vues": "368k",
        "title": "Football : du pain, des jeux et des magouilles ? Vikash Dhorasoo [EN DIRECT]",
        "sec": 7041,
        "total": 368000
    },
    {
        "time": "1:42:58\n  ",
        "vues": "523k",
        "title": "DGSE : l'impuissance de l'état ? Maxime Renahy [ EN DIRECT ]",
        "sec": 6178,
        "total": 523000
    },
    {
        "time": "1:45:11\n  ",
        "vues": "939k",
        "title": "USA : Nos anciens alliés ? Arnaud Montebourg [EN DIRECT]",
        "sec": 6311,
        "total": 939000
    },
    {
        "time": "2:14:49\n  ",
        "vues": "3Mde",
        "title": "Alstom : la France vendue à la découpe ? Frédéric Pierucci [EN DIRECT]",
        "sec": 8089,
        "total": 3000000
    },
    {
        "time": "1:20:41\n  ",
        "vues": "1,1Mde",
        "title": "Arabie Saoudite, un pays protégé ? Pierre Conesa [EN DIRECT]",
        "sec": 4841,
        "total": 1100000
    },
    {
        "time": "1:22:42\n  ",
        "vues": "530k",
        "title": "Ecologie, Transport et Mythomanie : Laurent Castaignède [EN DIRECT]",
        "sec": 4962,
        "total": 530000
    },
    {
        "time": "1:43:58\n  ",
        "vues": "616k",
        "title": "Débat : L'avenir de l'humanité ? Laurent Alexandre et Philippe Bihouix [EN DIRECT]",
        "sec": 6238,
        "total": 616000
    },
    {
        "time": "1:59:41\n  ",
        "vues": "294k",
        "title": "Laherrère, Meilhan: Croissance, énergie, le point de non-retour ? [EN DIRECT]",
        "sec": 7181,
        "total": 294000
    },
    {
        "time": "2:12:59\n  ",
        "vues": "885k",
        "title": "Jean Ziegler : Pourquoi il faut détruire le capitalisme ? [EN DIRECT]",
        "sec": 7979,
        "total": 885000
    },
    {
        "time": "1:53:01\n  ",
        "vues": "215k",
        "title": "Alain Grandjean : la finance va-t-elle sauver la planète ? [EN DIRECT]",
        "sec": 6781,
        "total": 215000
    },
    {
        "time": "1:30:31\n  ",
        "vues": "1,6Mde",
        "title": "Monique Pinçon-Charlot : Casse sociale, le début ? [EN DIRECT]",
        "sec": 5431,
        "total": 1600000
    },
    {
        "time": "1:31:48\n  ",
        "vues": "909k",
        "title": "Mediapart : Benalla, Macron, le journalisme menacé ?  [EN DIRECT]",
        "sec": 5508,
        "total": 909000
    },
    {
        "time": "1:24:55\n  ",
        "vues": "795k",
        "title": "Barbara Stiegler : S'adapter à une société malade ? [EN DIRECT]",
        "sec": 5095,
        "total": 795000
    },
    {
        "time": "1:43:32\n  ",
        "vues": "539k",
        "title": "Philippe Bihouix : Prophète de l’apocalypse ? [EN DIRECT]",
        "sec": 6212,
        "total": 539000
    },
    {
        "time": "1:18:34\n  ",
        "vues": "356k",
        "title": "Union Européenne pour ou contre ? Coralie Delaume [EN DIRECT]",
        "sec": 4714,
        "total": 356000
    },
    {
        "time": "2:41:08\n  ",
        "vues": "2,3Mde",
        "title": "Jean-Luc Mélenchon : face à la réalité ? [EN DIRECT]",
        "sec": 9668,
        "total": 2300000
    },
    {
        "time": "1:30:55\n  ",
        "vues": "444k",
        "title": "Bernard Stiegler : Etat d'urgence, géopolitique, Médias, Gilets Jaunes [EN DIRECT]",
        "sec": 5455,
        "total": 444000
    },
    {
        "time": "1:37:11\n  ",
        "vues": "176k",
        "title": "Champagne, Duplessy et Fontaine : Investigation sans filtre ? [EN DIRECT]",
        "sec": 5831,
        "total": 176000
    },
    {
        "time": "1:38:55\n  ",
        "vues": "298k",
        "title": "Charles Rojzman : Vers les Guerres civiles ? [EN DIRECT]",
        "sec": 5935,
        "total": 298000
    },
    {
        "time": "1:41:20\n  ",
        "vues": "620k",
        "title": "Alain Damasio : l'intuition de la science-fiction ? [EN DIRECT]",
        "sec": 6080,
        "total": 620000
    },
    {
        "time": "1:46:04\n  ",
        "vues": "278k",
        "title": "Géopolitique : Cynisme et bons sentiments ? Caroline Galacteros [EN DIRECT]",
        "sec": 6364,
        "total": 278000
    },
    {
        "time": "1:59:30\n  ",
        "vues": "625k",
        "title": "Noam Anouar : Lucidité face aux terrorismes ?  [EN DIRECT]",
        "sec": 7170,
        "total": 625000
    },
    {
        "time": "1:36:14\n  ",
        "vues": "2,3Mde",
        "title": "Gaël Giraud : Tsunami financier, désastre humanitaire ? [EN DIRECT]",
        "sec": 5774,
        "total": 2300000
    },
    {
        "time": "2:04:52\n  ",
        "vues": "4,9Mde",
        "title": "L'illusion de la démocratie en France ? Juan Branco [EN DIRECT]",
        "sec": 7492,
        "total": 4900000
    },
    {
        "time": "1:36:17\n  ",
        "vues": "379k",
        "title": "Société à bout de souffle ? Aymeric Caron [EN DIRECT]",
        "sec": 5777,
        "total": 379000
    },
    {
        "time": "2:12:15\n  ",
        "vues": "699k",
        "title": "Démocratie : Marketing politique pour les pauvres? Francis Dupuis-Déri [EN DIRECT]",
        "sec": 7935,
        "total": 699000
    },
    {
        "time": "1:46:52\n  ",
        "vues": "696k",
        "title": "Gilets Jaunes : Avant la révolution ? François Boulo [EN DIRECT]",
        "sec": 6412,
        "total": 696000
    },
    {
        "time": "1:25:42\n  ",
        "vues": "931k",
        "title": "François Bégaudeau : Gilets Jaunes, Populisme, Bourgeois ? [EN DIRECT]",
        "sec": 5142,
        "total": 931000
    },
    {
        "time": "46:11\n  ",
        "vues": "69k",
        "title": "Khalid Essa: Taxi un métier en danger ? [EN DIRECT]",
        "sec": 2771,
        "total": 69000
    },
    {
        "time": "2:02:49\n  ",
        "vues": "208k",
        "title": "Yánis Varoufákis, la fin de l'Europe et de l'Euro ? [EN DIRECT]",
        "sec": 7369,
        "total": 208000
    },
    {
        "time": "2:08:35\n  ",
        "vues": "1,2Mde",
        "title": "Jean-Marc Jancovici et Philippe Bihouix : Croissance et Effondrement [EN DIRECT]",
        "sec": 7715,
        "total": 1200000
    },
    {
        "time": "1:00:30\n  ",
        "vues": "366k",
        "title": "Natacha Polony : Journalisme et #LigueduLOL [EN DIRECT]",
        "sec": 3630,
        "total": 366000
    },
    {
        "time": "1:14:43\n  ",
        "vues": "748k",
        "title": "Alexandre Langlois : Violences policières et Gilets Jaunes [EN DIRECT]",
        "sec": 4483,
        "total": 748000
    },
    {
        "time": "1:20:37\n  ",
        "vues": "261k",
        "title": "Vincent Cespedes : Gilets Jaunes : Comprendre la violence ? [EN DIRECT]",
        "sec": 4837,
        "total": 261000
    },
    {
        "time": "1:24:58\n  ",
        "vues": "165k",
        "title": "Aminata Dramane Traoré : Afrique, Gilets Jaunes depuis 150 ans ? [EN DIRECT]",
        "sec": 5098,
        "total": 165000
    },
    {
        "time": "1:20:30\n  ",
        "vues": "535k",
        "title": "Les milliardaires gavés au sang des gilets jaunes ? Denis Robert [EN DIRECT]",
        "sec": 4830,
        "total": 535000
    },
    {
        "time": "2:14:13\n  ",
        "vues": "1,1Mde",
        "title": "Jacques Sapir, Olivier Berruyer et Olivier Delamarche : Gilets Jaunes, début de la fin pour l'UE ?",
        "sec": 8053,
        "total": 1100000
    },
    {
        "time": "1:40:54\n  ",
        "vues": "598k",
        "title": "Alekseï Pouchkov : Futur de l'ordre mondial, la menace russe ? [EN DIRECT]",
        "sec": 6054,
        "total": 598000
    },
    {
        "time": "1:04:33\n  ",
        "vues": "292k",
        "title": "Corruption, : Maladie de la France ?Jean-Christophe Picard, Anticor sans filtre [EN DIRECT]",
        "sec": 3873,
        "total": 292000
    },
    {
        "time": "1:06:36\n  ",
        "vues": "176k",
        "title": "Une Justice sous Macron ? Carbon de Seze [EN DIRECT]",
        "sec": 3996,
        "total": 176000
    },
    {
        "time": "1:32:29\n  ",
        "vues": "708k",
        "title": "Jérémy Ferrari : la révolte par l'humour ? [EN DIRECT]",
        "sec": 5549,
        "total": 708000
    },
    {
        "time": "1:50:10\n  ",
        "vues": "306k",
        "title": "Armée française : Quelle stratégie ? Général Vincent Desportes [EN DIRECT]",
        "sec": 6610,
        "total": 306000
    },
    {
        "time": "1:57:03\n  ",
        "vues": "2,4Mde",
        "title": "Kémi Séba : Panafricanisme 2.0 ? [EN DIRECT]",
        "sec": 7023,
        "total": 2400000
    },
    {
        "time": "1:58:25\n  ",
        "vues": "124k",
        "title": "Migrants / Réfugiés / Immigration : problèmes inextricables ? Frédéric Penard [EN DIRECT]",
        "sec": 7105,
        "total": 124000
    },
    {
        "time": "1:36:42\n  ",
        "vues": "337k",
        "title": "Autopsie du Journalisme, de Hitler à Trump : Daniel Schneidermann [EN DIRECT]",
        "sec": 5802,
        "total": 337000
    },
    {
        "time": "2:19:59\n  ",
        "vues": "695k",
        "title": "Éric Sadin : l'asservissement par l'Intelligence Artificielle ? [EN DIRECT]",
        "sec": 8399,
        "total": 695000
    },
    {
        "time": "2:13:51\n  ",
        "vues": "1,6Mde",
        "title": "Emmanuel Todd : Trahison des élites françaises ? [EN DIRECT]",
        "sec": 8031,
        "total": 1600000
    },
    {
        "time": "1:35:56\n  ",
        "vues": "1,2Mde",
        "title": "La France interdite ? Laurent Obertone [EN DIRECT]",
        "sec": 5756,
        "total": 1200000
    },
    {
        "time": "2:10:25\n  ",
        "vues": "267k",
        "title": "Terrorisme ou Légitime défense ? Thibault de Montbrial [EN DIRECT]",
        "sec": 7825,
        "total": 267000
    },
    {
        "time": "1:26:24\n  ",
        "vues": "341k",
        "title": "Jérémie Zimmermann : 1984, un manuel d'instructions ? [EN DIRECT]",
        "sec": 5184,
        "total": 341000
    },
    {
        "time": "1:38:30\n  ",
        "vues": "456k",
        "title": "P. Servigne & J. Blamont : Introduction au siècle des menaces [EN DIRECT]",
        "sec": 5910,
        "total": 456000
    },
    {
        "time": "1:54:31\n  ",
        "vues": "443k",
        "title": "Anarchie VS Capitalisme ? Tancrède Ramonet EN DIRECT]",
        "sec": 6871,
        "total": 443000
    },
    {
        "time": "1:59:43\n  ",
        "vues": "406k",
        "title": "École de Guerre : L’état du monde. Olivier Delamarche, Pierre Sabatier et Alain Juillet [EN DIRECT]",
        "sec": 7183,
        "total": 406000
    },
    {
        "time": "1:58:49\n  ",
        "vues": "180k",
        "title": "Ambassade de Russie : Acte 2, Espions, Guerre Froide sans filtre [EN DIRECT]",
        "sec": 7129,
        "total": 180000
    },
    {
        "time": "1:26:33\n  ",
        "vues": "165k",
        "title": "Ex-députée écolo : sans langue de bois ? Isabelle Attard [EN DIRECT]",
        "sec": 5193,
        "total": 165000
    },
    {
        "time": "1:11:02\n  ",
        "vues": "455k",
        "title": "Edgar Morin : L’effondrement ? [EN DIRECT]",
        "sec": 4262,
        "total": 455000
    },
    {
        "time": "1:21:58\n  ",
        "vues": "91k",
        "title": "Greenpeace : Menaces Nucléaire ? Yannick Rousselet [EN DIRECT]",
        "sec": 4918,
        "total": 91000
    },
    {
        "time": "1:25:29\n  ",
        "vues": "490k",
        "title": "Pierre Conesa : Guerres, Embargos et Propagandes [EN DIRECT]",
        "sec": 5129,
        "total": 490000
    },
    {
        "time": "1:38:48\n  ",
        "vues": "2Mde",
        "title": "Quand la Science appelle à l'aide pour l'humanité ? Aurélien Barrau [EN DIRECT]",
        "sec": 5928,
        "total": 2000000
    },
    {
        "time": "1:22:41\n  ",
        "vues": "228k",
        "title": "Sankara, Françafrique, CFA, où va l'Afrique ? Louis Magloire Keumayou [EN DIRECT]",
        "sec": 4961,
        "total": 228000
    },
    {
        "time": "1:36:13\n  ",
        "vues": "458k",
        "title": "Climat : Trois quarts de l'humanité menacés de mort ? Pierre Larrouturou [EN DIRECT]",
        "sec": 5773,
        "total": 458000
    },
    {
        "time": "1:40:26\n  ",
        "vues": "238k",
        "title": "Surveillance, Hacker et Journaliste. Antoine Champagne et Olivier Laurelli Aka Bluetouff [EN DIRECT]",
        "sec": 6026,
        "total": 238000
    },
    {
        "time": "2:15:52\n  ",
        "vues": "222k",
        "title": "Économie en danger ? Flux migratoires, Brexit et Mondialisation. M. Bruyère, E. Berr et D. Cayla",
        "sec": 8152,
        "total": 222000
    },
    {
        "time": "1:42:25\n  ",
        "vues": "169k",
        "title": "Blockchain, gouvernance et énergie ? Primavera De Filippi et Remy Bourganel [EN DIRECT]",
        "sec": 6145,
        "total": 169000
    },
    {
        "time": "2:04:59\n  ",
        "vues": "187k",
        "title": "Non Violence VS Urgence Climatique : Jon Palais [EN DIRECT]",
        "sec": 7499,
        "total": 187000
    },
    {
        "time": "2:01:56\n  ",
        "vues": "1,6Mde",
        "title": "Jean-Pierre Petit : Modèle Janus et Armes russes [EN DIRECT]",
        "sec": 7316,
        "total": 1600000
    },
    {
        "time": "1:58:02\n  ",
        "vues": "553k",
        "title": "François Ruffin, sans filtre : Journaliste VS Politique ? [EN DIRECT]",
        "sec": 7082,
        "total": 553000
    },
    {
        "time": "1:10:20\n  ",
        "vues": "445k",
        "title": "Gunter Pauli : Biomimétisme et économie bleue [EN DIRECT]",
        "sec": 4220,
        "total": 445000
    },
    {
        "time": "1:11:07\n  ",
        "vues": "2Mde",
        "title": "Étienne Klein : la structure fondamentale de la matière : le boson de higgs [EN DIRECT]",
        "sec": 4267,
        "total": 2000000
    },
    {
        "time": "1:59:58\n  ",
        "vues": "1,6Mde",
        "title": "Sarkozy, corruption, assassinat et affaire d'état ? Fabrice Arfi (Mediapart) [EN DIRECT]",
        "sec": 7198,
        "total": 1600000
    },
    {
        "time": "1:24:26\n  ",
        "vues": "283k",
        "title": "Survivre au système éducatif, Hackers et Crapauds fous. Thanh Nghiem [EN DIRECT]",
        "sec": 5066,
        "total": 283000
    },
    {
        "time": "1:16:37\n  ",
        "vues": "310k",
        "title": "Le langage au service des puissants ? Alain Deneault [EN DIRECT]",
        "sec": 4597,
        "total": 310000
    },
    {
        "time": "1:39:32\n  ",
        "vues": "206k",
        "title": "Criminalisation de la lutte sociale ? Jérémie Assous : Affaire Tarnac [EN DIRECT]",
        "sec": 5972,
        "total": 206000
    },
    {
        "time": "1:46:15\n  ",
        "vues": "949k",
        "title": "Pierre Conesa : Propagande de Guerre, Cinéma, Géopolitique, Opinion publique [EN DIRECT]",
        "sec": 6375,
        "total": 949000
    },
    {
        "time": "2:05:09\n  ",
        "vues": "360k",
        "title": "Ambassade de Russie, Espions, Guerre Froide sans filtre [EN DIRECT]",
        "sec": 7509,
        "total": 360000
    },
    {
        "time": "2:21:12\n  ",
        "vues": "2,8Mde",
        "title": "DGSE, Espions, Secrets des Affaires, Crises mondiales. Alain Juillet [EN DIRECT]",
        "sec": 8472,
        "total": 2800000
    },
    {
        "time": "2:21:28\n  ",
        "vues": "1,1Mde",
        "title": "Delamarche, Gave, Sabatier : Géopolitique, macroéconomie sans filtre [EN DIRECT]",
        "sec": 8488,
        "total": 1100000
    },
    {
        "time": "1:54:33\n  ",
        "vues": "288k",
        "title": "Big Brother habite Place Beauvau ? Exégèse en libertés [EN DIRECT]",
        "sec": 6873,
        "total": 288000
    },
    {
        "time": "1:18:34\n  ",
        "vues": "204k",
        "title": "Santé VS Nourriture ? Isabelle Saporta [EN DIRECT]",
        "sec": 4714,
        "total": 204000
    },
    {
        "time": "1:32:24\n  ",
        "vues": "547k",
        "title": "Bernard Friot : Théorie du revenu universel / salaire à la qualification ? [EN DIRECT]",
        "sec": 5544,
        "total": 547000
    },
    {
        "time": "1:53:40\n  ",
        "vues": "391k",
        "title": "Natacha Polony : Journalistes et médias sous contrôles ? [EN DIRECT]",
        "sec": 6820,
        "total": 391000
    },
    {
        "time": "1:24:27\n  ",
        "vues": "269k",
        "title": "Aude Lancelin : Indépendance des médias ? [EN DIRECT]",
        "sec": 5067,
        "total": 269000
    },
    {
        "time": "1:51:27\n  ",
        "vues": "1,7Mde",
        "title": "Effondrement de la civilisation ? Pablo Servigne [EN DIRECT]",
        "sec": 6687,
        "total": 1700000
    },
    {
        "time": "56:58\n  ",
        "vues": "109k",
        "title": "Lord Esperanza : Rap nouvelle génération ? [EN DIRECT]",
        "sec": 3418,
        "total": 109000
    },
    {
        "time": "1:14:17\n  ",
        "vues": "3,8Mde",
        "title": "Idriss Aberkane sans filtre [EN DIRECT]",
        "sec": 4457,
        "total": 3800000
    },
    {
        "time": "1:21:04\n  ",
        "vues": "82k",
        "title": "Journalistes et liberté d'expression en danger ? [EN DIRECT]",
        "sec": 4864,
        "total": 82000
    },
    {
        "time": "1:35:59\n  ",
        "vues": "188k",
        "title": "La police au service du marché ? Mathieu Rigouste [EN DIRECT]",
        "sec": 5759,
        "total": 188000
    },
    {
        "time": "1:04:41\n  ",
        "vues": "821k",
        "title": "Étienne Klein : Éthique et philosophie des sciences, le rôle des scientifiques ? [EN DIRECT]",
        "sec": 3881,
        "total": 821000
    },
    {
        "time": "1:14:41\n  ",
        "vues": "447k",
        "title": "Bernard Stiegler : mutations sociales, politiques, économiques et psychologiques [EN DIRECT]",
        "sec": 4481,
        "total": 447000
    },
    {
        "time": "1:34:33\n  ",
        "vues": "149k",
        "title": "Propagande VS Journalisme ? RT France, Xenia Fedorova [EN DIRECT]",
        "sec": 5673,
        "total": 149000
    },
    {
        "time": "1:50:51\n  ",
        "vues": "765k",
        "title": "Philippe Bihouix : Le mensonge de la croissance verte ? [EN DIRECT]",
        "sec": 6651,
        "total": 765000
    },
    {
        "time": "1:35:01\n  ",
        "vues": "94k",
        "title": "L214 : Exploitation animale & Alimentation - Souffrance du 21ème siècle ? [EN DIRECT]",
        "sec": 5701,
        "total": 94000
    },
    {
        "time": "1:22:38\n  ",
        "vues": "83k",
        "title": "Pollution atmosphérique : après l'amiante, un nouveau scandale d'Etat ? Solutions ? [EN DIRECT]",
        "sec": 4958,
        "total": 83000
    },
    {
        "time": "57:38\n  ",
        "vues": "174k",
        "title": "Périco Légasse : Malbouffe et Mondialisation ? [EN DIRECT]",
        "sec": 3458,
        "total": 174000
    },
    {
        "time": "47:22\n  ",
        "vues": "1,1Mde",
        "title": "Jean-Marc Jancovici : Anticiper l’effondrement énergétique ? [EN DIRECT]",
        "sec": 2842,
        "total": 1100000
    },
    {
        "time": "2:02:52\n  ",
        "vues": "205k",
        "title": "Les Éconoclastes à l'École de Guerre : Le Jour d'après [EN DIRECT]",
        "sec": 7372,
        "total": 205000
    },
    {
        "time": "1:15:03\n  ",
        "vues": "625k",
        "title": "Frédéric Taddeï : Les limites du débat ? [EN DIRECT]",
        "sec": 4503,
        "total": 625000
    },
    {
        "time": "1:18:56\n  ",
        "vues": "648k",
        "title": "Cédric Villani : Intelligence artificielle perspectives futures [EN DIRECT]",
        "sec": 4736,
        "total": 648000
    },
    {
        "time": "45:38\n  ",
        "vues": "39k",
        "title": "Philippe Tixier, Inventeur du Dirigeable du Futur ? [EN DIRECT]",
        "sec": 2738,
        "total": 39000
    },
    {
        "time": "1:31:55\n  ",
        "vues": "2,6Mde",
        "title": "Changement de Civilisation ? Marc Luyckx Ghisi [EN DIRECT]",
        "sec": 5515,
        "total": 2600000
    },
    {
        "time": "1:17:05\n  ",
        "vues": "460k",
        "title": "Laurent Alexandre : Intelligence artificielle [EN DIRECT]",
        "sec": 4625,
        "total": 460000
    },
    {
        "time": "1:10:06\n  ",
        "vues": "222k",
        "title": "Bruno Parmentier : Nourrir l'humanité ? [EN DIRECT]",
        "sec": 4206,
        "total": 222000
    },
    {
        "time": "1:02:02\n  ",
        "vues": "458k",
        "title": "Vincent Mignerot : Anticiper l'effondrement ? [EN DIRECT]",
        "sec": 3722,
        "total": 458000
    },
    {
        "time": "1:03:50\n  ",
        "vues": "590k",
        "title": "Philippe Pascot, Corruption et Politique [EN DIRECT]",
        "sec": 3830,
        "total": 590000
    },
    {
        "time": "1:13:21\n  ",
        "vues": "538k",
        "title": "Olivier Delamarche, Analyste financier [EN DIRECT]",
        "sec": 4401,
        "total": 538000
    },
    {
        "time": "2:06:08\n  ",
        "vues": "1,4Mde",
        "title": "Étienne Chouard [EN DIRECT]",
        "sec": 7568,
        "total": 1400000
    },
    {
        "time": "1:10:30\n  ",
        "vues": "156k",
        "title": "Du Sextoy au \"Dark Web\" : Rayna Stamboliyska [EN DIRECT]",
        "sec": 4230,
        "total": 156000
    },
    {
        "time": "43:38\n  ",
        "vues": "161k",
        "title": "Énergie nucléaire ? José Pluki [EN DIRECT]",
        "sec": 2618,
        "total": 161000
    },
    {
        "time": "1:04:48\n  ",
        "vues": "421k",
        "title": "Benjamin Bayart, Grand Sorcier de l'Internet option vie privée [EN DIRECT]",
        "sec": 3888,
        "total": 421000
    },
    {
        "time": "1:02:44\n  ",
        "vues": "475k",
        "title": "Guillaume Ancel, Lieutenant Colonel / Force d'action rapide [EN DIRECT]",
        "sec": 3764,
        "total": 475000
    },
    {
        "time": "1:10:10\n  ",
        "vues": "148k",
        "title": "Stéphanie Gibaud, Lanceuse d'Alerte SwissLeaks [EN DIRECT]",
        "sec": 4210,
        "total": 148000
    },
    {
        "time": "1:12:25\n  ",
        "vues": "442k",
        "title": "Juan Branco, avocat de Wikileaks [EN DIRECT]",
        "sec": 4345,
        "total": 442000
    },
    {
        "time": "1:04:25\n  ",
        "vues": "110k",
        "title": "Lilian Thuram : football, racisme et géopolitique [EN DIRECT]",
        "sec": 3865,
        "total": 110000
    }
]
const mVues = 1400000
const mTime = 7849
const dataVideo = [
    {
        "time": "2:02:00\n  ",
        "vues": "186k",
        "title": "[VO] Mégamenaces, un avenir sombre, des politiques dans le déni ? Nouriel Roubini [EN DIRECT]",
        "sec": 7320,
        "total": 186000
    },
    {
        "time": "2:10:49\n  ",
        "vues": "134k",
        "title": "La science-fiction prédit la guerre ? August Cole [VO]",
        "sec": 7849,
        "total": 134000
    },
    {
        "time": "1:26:02\n  ",
        "vues": "215k",
        "title": "[VF] Julian Assange, torture made in Europe ? John Shipton [EN DIRECT]",
        "sec": 5162,
        "total": 215000
    },
    {
        "time": "1:46:28\n  ",
        "vues": "288k",
        "title": "[ VF ] Collapsologie, anxiété et dépression ? Glenn Albrecht [EN DIRECT]",
        "sec": 6388,
        "total": 288000
    },
    {
        "time": "1:02:48\n  ",
        "vues": "115k",
        "title": "Lutter sans violence ? Jean-Marie Muller [EN DIRECT]",
        "sec": 3768,
        "total": 115000
    },
    {
        "time": "1:07:53\n  ",
        "vues": "89k",
        "title": "Mounir Mahjoubi, Ministre chargé du Numérique [EN DIRECT]",
        "sec": 4073,
        "total": 89000
    },
    {
        "time": "1:04:09\n  ",
        "vues": "80k",
        "title": "la Nef - Banque éthique / Coopérative financière",
        "sec": 3849,
        "total": 80000
    },
    {
        "time": "1:07:17\n  ",
        "vues": "228k",
        "title": "Sputnik France - Sans Filtre",
        "sec": 4037,
        "total": 228000
    },
    {
        "time": "1:04:00\n  ",
        "vues": "241k",
        "title": "DATAGUEULE - Sans Filtre",
        "sec": 3840,
        "total": 241000
    },
    {
        "time": "51:23\n  ",
        "vues": "138k",
        "title": "David Koubbi : Justice VS Finance",
        "sec": 3083,
        "total": 138000
    },
    {
        "time": "1:09:32\n  ",
        "vues": "277k",
        "title": "France, terrorisme et diplomatie en carton",
        "sec": 4172,
        "total": 277000
    },
    {
        "time": "49:18\n  ",
        "vues": "127k",
        "title": "États-Unis-Russie : Tensions Géopolitiques et Terrorisme",
        "sec": 2958,
        "total": 127000
    },
    {
        "time": "44:43\n  ",
        "vues": "112k",
        "title": "Paul Watson, fondateur de Sea Shepherd : Plongée en eaux troubles",
        "sec": 2683,
        "total": 112000
    },
    {
        "time": "1:05:24\n  ",
        "vues": "91k",
        "title": "Terrorisme VS Big Brother",
        "sec": 3924,
        "total": 91000
    },
    {
        "time": "1:09:55\n  ",
        "vues": "141k",
        "title": "L'énergie des conflits, les conflits de l'énergie",
        "sec": 4195,
        "total": 141000
    },
    {
        "time": "58:48\n  ",
        "vues": "94k",
        "title": "Henri Maler, ACRIMED : Discutons de l'information entre générations",
        "sec": 3528,
        "total": 94000
    },
    {
        "time": "58:44\n  ",
        "vues": "143k",
        "title": "200 terroristes sur le territoire ? Entre Ukraine, Irak, Terrorisme, Reporter de Guerre et après ?",
        "sec": 3524,
        "total": 143000
    },
    {
        "time": "1:19:00\n  ",
        "vues": "216k",
        "title": "David Koubbi, Affaire Kerviel, Justice et Société Générale ?",
        "sec": 4740,
        "total": 216000
    },
    {
        "time": "49:58\n  ",
        "vues": "1,4Mde",
        "title": "Elise Lucet sans filtre, Cash investigation, Panama Papers, l'offensive des journalistes ?",
        "sec": 2998,
        "total": 1400000
    },
    {
        "time": "59:49\n  ",
        "vues": "1Mde",
        "title": "Propagande de Guerre, festival de médias mensonges et complot ?",
        "sec": 3589,
        "total": 1000000
    },
    {
        "time": "32:52\n  ",
        "vues": "65k",
        "title": "De l'éducation à la guerre ou De la guerre, à l'éducation ?",
        "sec": 1972,
        "total": 65000
    },
    {
        "time": "1:09:38\n  ",
        "vues": "216k",
        "title": "Schizophrénie financière, casse du siècle ou injure sur l'avenir ?",
        "sec": 4178,
        "total": 216000
    },
    {
        "time": "1:07:04\n  ",
        "vues": "605k",
        "title": "Natacha Polony : Police de la pensée, journalistes en laisse ?",
        "sec": 4024,
        "total": 605000
    },
    {
        "time": "1:09:02\n  ",
        "vues": "236k",
        "title": "Charlie Hebdo sans filtre par Denis Robert",
        "sec": 4142,
        "total": 236000
    },
    {
        "time": "1:19:59\n  ",
        "vues": "70k",
        "title": "Ambassadeur de Russie face à l'augmentation des tensions",
        "sec": 4799,
        "total": 70000
    },
    {
        "time": "1:24:54\n  ",
        "vues": "161k",
        "title": "Terrorisme, Etat d'Urgence, où sont les solutions ? Journaliste, Renseignement, Stratégiste, Hacker.",
        "sec": 5094,
        "total": 161000
    },
    {
        "time": "1:19:22\n  ",
        "vues": "259k",
        "title": "Géopolitique, Russie, Terrorisme, Finance - 6/11/15",
        "sec": 4762,
        "total": 259000
    },
    {
        "time": "1:13:29\n  ",
        "vues": "194k",
        "title": "Crédit Mutuel, Censure, Bolloré, Canal+ et TAFTA | Guerre contre le journalisme",
        "sec": 4409,
        "total": 194000
    },
    {
        "time": "31:38\n  ",
        "vues": "286k",
        "title": "Pierre Conesa : Arabie Saoudite, Théâtre de Dupes, Stratégie planétaire. (Ex Affaires Stratégiques)",
        "sec": 1898,
        "total": 286000
    },
    {
        "time": "47:46\n  ",
        "vues": "104k",
        "title": "Député, qui va payer ? Entre TAFTA, Monsanto et la Syrie ? (Jean Lassalle)",
        "sec": 2866,
        "total": 104000
    },
    {
        "time": "45:30\n  ",
        "vues": "102k",
        "title": "CGT-Police et Loi renseignement",
        "sec": 2730,
        "total": 102000
    },
    {
        "time": "1:17:47\n  ",
        "vues": "110k",
        "title": "Pétrole et gaz de schiste, où va-t-on ?",
        "sec": 4667,
        "total": 110000
    },
    {
        "time": "1:03:32\n  ",
        "vues": "40k",
        "title": "Ministre, Loi renseignement, Stratégie européenne",
        "sec": 3812,
        "total": 40000
    },
    {
        "time": "1:07:28\n  ",
        "vues": "52k",
        "title": "Terrorisme/Internet : Liberté d'expression menacée en France ?",
        "sec": 4048,
        "total": 52000
    },
    {
        "time": "31:01\n  ",
        "vues": "77k",
        "title": "Religion, Terrorisme et paradis. Pierre Conesa ( Ex Affaires Stratégiques )",
        "sec": 1861,
        "total": 77000
    },
    {
        "time": "1:45:25\n  ",
        "vues": "166k",
        "title": "USA, Europe, LuxLeaks : Le grand marché des inégalités",
        "sec": 6325,
        "total": 166000
    },
    {
        "time": "1:14:29\n  ",
        "vues": "211k",
        "title": "Interview Pierre Conesa. Politique de contre-radicalisation en France ( Ex Affaires stratégiques )",
        "sec": 4469,
        "total": 211000
    },
    {
        "time": "26:46\n  ",
        "vues": "23k",
        "title": "Reporter de guerre et journaliste : Bob Coen et Eric Nadler",
        "sec": 1606,
        "total": 23000
    },
    {
        "time": "2:58\n  ",
        "vues": "30k",
        "title": "Les Econoclastes",
        "sec": 178,
        "total": 30000
    },
    {
        "time": "33:48\n  ",
        "vues": "51k",
        "title": "Benjamin Bayart - Neutralité du net",
        "sec": 2028,
        "total": 51000
    },
    {
        "time": "27:45\n  ",
        "vues": "33k",
        "title": "Gilles Babinet - Le Big Data",
        "sec": 1665,
        "total": 33000
    },
    {
        "time": "24:45\n  ",
        "vues": "28k",
        "title": "Hacker VS Justice - Affaire \"Bluetouff\" (O. Iteanu)",
        "sec": 1485,
        "total": 28000
    },
    {
        "time": "1:02:12\n  ",
        "vues": "58k",
        "title": "Où va le monde financier ? (J-M. Rozan & H. de Carmoy)",
        "sec": 3732,
        "total": 58000
    },
    {
        "time": "1:41\n  ",
        "vues": "29k",
        "title": "Réalité bancaire camouflée, imposture des journalistes ?",
        "sec": 101,
        "total": 29000
    },
    {
        "time": "16:09\n  ",
        "vues": "55k",
        "title": "Allons nous vers une Cyber Dictature ? E. Filiol (ex DGSE, hacker) , J. Zimmermann (QDN)",
        "sec": 969,
        "total": 55000
    },
    {
        "time": "37:40\n  ",
        "vues": "29k",
        "title": "Loi de programmation militaire et neutralité du réseau, vie privée et démocratie en danger ?",
        "sec": 2260,
        "total": 29000
    },
    {
        "time": "1:41:43\n  ",
        "vues": "88k",
        "title": "H. de Carmoy, P. Béchade, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        "sec": 6103,
        "total": 88000
    },
    {
        "time": "44:35\n  ",
        "vues": "57k",
        "title": "Michel Éléftériadès",
        "sec": 2675,
        "total": 57000
    },
    {
        "time": "1:02:35\n  ",
        "vues": "80k",
        "title": "Peter Dale Scott",
        "sec": 3755,
        "total": 80000
    },
    {
        "time": "41:41\n  ",
        "vues": "58k",
        "title": "Denis Robert (journaliste, écrivain, whistleblower)",
        "sec": 2501,
        "total": 58000
    },
    {
        "time": "5:18\n  ",
        "vues": "5,7k",
        "title": "Thinkerview - (Trailer) Interview de Denis Robert (journaliste, écrivain, whistleblower)",
        "sec": 318,
        "total": 5000
    },
    {
        "time": "23:04\n  ",
        "vues": "96k",
        "title": "Jérémie Zimmermann",
        "sec": 1384,
        "total": 96000
    },
    {
        "time": "22:15\n  ",
        "vues": "189k",
        "title": "Eric Filiol (hacker, cryptanalyste, ancien de la DGSE)",
        "sec": 1335,
        "total": 189000
    },
    {
        "time": "16:26\n  ",
        "vues": "93k",
        "title": "Alain Chouet (Ancien chef de service à la D.G.S.E.)",
        "sec": 986,
        "total": 93000
    },
    {
        "time": "1:21:57\n  ",
        "vues": "81k",
        "title": "B.Esambert, O.Delamarche, O.Berruyer : Réfléchissons ensemble",
        "sec": 4917,
        "total": 81000
    },
    {
        "time": "36:52\n  ",
        "vues": "107k",
        "title": "Olivier Delamarche",
        "sec": 2212,
        "total": 107000
    },
    {
        "time": "40:20\n  ",
        "vues": "83k",
        "title": "Jacques Blamont",
        "sec": 2420,
        "total": 83000
    }
]
function addIfMore(acc, v) {
    if (v > acc) {
        return acc = v
    }
    return acc
}

function fillContainer(pdata, maxV, maxT, c, i) {
    let perVue = pdata.total * 100 / parsedData.map(d => d.total).reduce(addIfMore, 0);
    let perTime = pdata.sec * 100 / parsedData.map(d => d.sec).reduce(addIfMore, 0);
    if (perVue > 100) {
        console.log(i, perVue, pdata, pdata.total, maxV);
    }
    if (perTime > 100) {
        console.log(i, perTime, pdata, pdata.sec, maxT);
    }
    let vues = document.createElement('div');
    let time = document.createElement('div');
    let data = document.createElement('div');
    let nb = document.createElement('div');
    let title = document.createElement('div');
    let bloc = document.createElement('div');
    vues.className = "vues";
    time.className = 'time';
    data.className = 'data';
    nb.className = 'nb';
    title.className = 'title';
    bloc.className = 'bloc';

    vues.style.width = `${perVue}%`;
    time.style = `width: ${perTime}%`;
    vues.innerHTML = pdata.vues.replace('de', ''); //corrige '___Mde'
    time.innerHTML = pdata.time;
    title.innerHTML = pdata.title;
    nb.innerHTML = i;

    data.appendChild(vues);
    data.appendChild(time);
    bloc.appendChild(nb);
    bloc.appendChild(data);
    bloc.appendChild(title);
    c.appendChild(bloc);
}

for (let i = 0; i < parsedData.length; i++) {
    fillContainer(parsedData[i], maxVues, maxTime, document.querySelector('#container'), i)
}
//   for (var i = 0; i < dataVideo.length; i++) {
// fillContainer(dataVideo[i], mVues, mTime, document.querySelector('#container2'), i)
//   }
