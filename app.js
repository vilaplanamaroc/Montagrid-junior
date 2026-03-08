const chapters = [
  {
    id: 1,
    title: "Chapitre 1 – La nuit du secret",
    text: `Il y a quinze ans, dans un royaume où les châteaux touchaient les nuages, le roi Robert Valmont vivait avec sa famille dans un palais rempli de rires et de secrets magiques. Mais une nuit sombre, tout changea. Darron, un homme ambitieux, entra dans le palais par une trahison cachée. Les gardes fidèles au roi se battaient avec courage, leurs épées claquant comme des éclairs dans la tempête. Le roi se tenait au centre de la grande salle, robe de chambre flottant au vent des portes ouvertes. Il regarda Darron sans peur et refusa de donner son trône. Avec un grand rire courageux, il dit : « Un trône volé n’est qu’un siège de bois ! » Il voulait protéger sa famille, ses enfants qui jouaient encore dans les jardins l’après-midi même. Il fit tout pour qu’ils s’échappent, tenant les ennemis à distance avec son épée qui brillait à la lumière des torches.

Deux princesses, Ellerys l’aînée au regard sage et Serrena la joyeuse, furent sauvées par leur tante Iselda. Elle les emmena en hâte à Montagride, un endroit sûr avec des montagnes hautes comme des géants. Là, elles pouvaient se cacher et grandir en sécurité. Théo, le prince de 13 ans, fut caché par Daghota, un ami fidèle du roi. Ils coururent dans un passage secret rempli d’échos, le cœur de Théo battant comme un tambour. Daghota échangea ses vêtements avec ceux d’un autre enfant qui avait été touché dans la confusion. Darron crut que Théo était parti pour toujours. Mais Théo vivait, prêt à apprendre et à attendre le bon moment pour revenir.`,
    intro: "Lis l’histoire, puis teste ta mémoire avec les jeux du chapitre 1.",
    quiz: [
      { q: "Qui attaque le palais ?", options: ["Aldric", "Darron", "Léo"], answer: 1 },
      { q: "Qui aide les princesses à s’enfuir ?", options: ["Iselda", "Melissa", "Mira"], answer: 0 },
      { q: "Qui cache Théo ?", options: ["Daghota", "Robert", "Goliath"], answer: 0 }
    ],
    tf: [
      { q: "Le roi Robert abandonne son trône.", answer: false },
      { q: "Théo est sauvé par Daghota.", answer: true },
      { q: "Les princesses partent avec Iselda.", answer: true },
      { q: "Darron croit que Théo est vivant.", answer: false }
    ],
    quote: {
      sentence: "« Un trône volé n’est qu’un siège de bois ! »",
      options: ["Robert Valmont", "Darron", "Théo"],
      answer: 0
    },
    riddles: [
      { q: "Quel est l’objet qui est précieux mais qui n’a pas de prix ?", a: "Une famille" },
      { q: "Je suis un roi sans couronne, qui rit dans la nuit. Qui suis-je ?", a: "Un lion courageux" }
    ],
    wordsearchWords: ["ROBERT", "DARRON", "THEO", "ISELDA", "SECRET", "TRONE"],
    cross: [
      { clue: "Le jeune prince caché", answer: "THEO" },
      { clue: "L’homme qui trahit le roi", answer: "DARRON" },
      { clue: "Le siège du roi", answer: "TRONE" }
    ]
  },
  {
    id: 2,
    title: "Chapitre 2 – Les maîtres de Théo",
    text: `Théo grandit dans une ferme isolée, entourée de forêts où les oiseaux chantaient des chansons d’aventure. Daghota, grand et fort comme un arbre, l’entraîna chaque jour. Au lever du soleil, Théo courait dans la boue, épée en bois à la main, apprenant à être courageux. « La force vient du cœur », disait Daghota en lui montrant comment parer un coup. Théo trébuchait souvent au début, mais il riait et se relevait, muscles qui se durcissaient un peu plus chaque fois. Aldric, le moine sage avec sa robe qui flottait au vent, lui apprit la patience. Ils s’asseyaient sous un arbre géant, et Aldric racontait des histoires de rois qui attendaient le bon moment pour agir. « La sagesse est comme un arbre : elle grandit lentement mais dure pour toujours », expliquait-il. Théo écoutait, imaginant comment utiliser ces leçons pour sauver son royaume.

Le Fantôme, un homme mystérieux qui apparaissait comme par magie, lui apprit à être rapide et malin. Il arrivait sans bruit, et Théo devait deviner où il était. « Utilise tes sens, pas seulement tes yeux », disait-il en montrant des gestes vifs comme l’éclair. Théo grandit avec son ami Léo, qui s’entraînait avec lui. Ils couraient dans les bois, épées en bois claquant, riant quand l’un trébuchait. Léa, la petite sœur de Léo, les suivait souvent. Elle sautait vers Théo avec un grand sourire : « Théo, un jour je me marierai avec toi ! » Théo riait et répondait : « Tu seras une grande aventurière, Léa, avec des trésors à découvrir ! » Léa imaginait des mariages magiques avec des dragons comme invités, et tout le monde riait autour du feu le soir. Mira rencontra Théo plus tard lors d’une aventure. Elle soignait les blessés avec des herbes magiques et savait se défendre avec une épée courte. « Je suis là pour aider », disait-elle en souriant. Elle devint son amie fidèle, toujours prête pour une nouvelle quête.`,
    intro: "Découvre comment Théo apprend la force, la sagesse et la ruse.",
    quiz: [
      { q: "Qui apprend le combat à Théo ?", options: ["Daghota", "Mira", "Léo"], answer: 0 },
      { q: "Qui enseigne la patience ?", options: ["Le Fantôme", "Aldric", "Léa"], answer: 1 },
      { q: "Qui est la petite sœur de Léo ?", options: ["Serrena", "Léa", "Elora"], answer: 1 }
    ],
    tf: [
      { q: "Théo s’entraîne tous les jours.", answer: true },
      { q: "Le Fantôme est toujours facile à voir.", answer: false },
      { q: "Mira soigne les blessés.", answer: true },
      { q: "Aldric apprend à courir très vite.", answer: false }
    ],
    quote: {
      sentence: "« La force vient du cœur »",
      options: ["Daghota", "Aldric", "Théo"],
      answer: 0
    },
    riddles: [
      { q: "Je suis invisible mais je fais bouger les choses. Qui suis-je ?", a: "Le vent" },
      { q: "Je suis un maître qui disparaît, mais je ne suis pas un magicien. Qui suis-je ?", a: "Le Fantôme" }
    ],
    wordsearchWords: ["DAGHOTA", "ALDRIC", "FANTOME", "LEO", "LEA", "MIRA"],
    cross: [
      { clue: "Le moine sage", answer: "ALDRIC" },
      { clue: "L’ami de Théo", answer: "LEO" },
      { clue: "La soigneuse", answer: "MIRA" }
    ]
  },
  {
    id: 3,
    title: "Chapitre 3 – La vie à Montagride",
    text: `Montagride était comme un château enchanté au sommet d’une montagne, avec des jardins pleins d’iris violets et blancs qui dansaient au vent. Ellerys, Serrena et Martha vivaient chez tante Iselda, une dame gentille qui racontait des histoires de magie. Chaque jour, les trois filles descendaient au village avec des paniers remplis de bonnes choses. Elles apportaient de la nourriture chaude, des couvertures douces pour les nuits froides, et surtout des sourires qui réchauffaient les cœurs. « Regardez, les princesses arrivent ! » criaient les enfants en courant vers elles. Ellerys organisait les distributions, Serrena racontait des histoires pour faire rire, et Martha jouait à cache-cache avec les petits. Elles aidaient les familles qui en avaient besoin, et en échange, elles recevaient des dessins ou des fleurs cueillies dans les champs.

Elles s’entraînaient aussi avec des épées en bois dans le jardin. Ellerys était la plus sérieuse : « Il faut être prêt pour protéger ceux qu’on aime. » Serrena tournoyait avec grâce, et Martha trébuchait souvent en riant : « Oups, je suis une princesse maladroite ! » Elles riaient beaucoup, car elles savaient que leur vraie force était l’amitié. « Nous protégeons avec le cœur », disait Ellerys, et les autres hochaient la tête en souriant. Tante Iselda les regardait, fière. Elle leur racontait comment leur maman avait été choisie par le roi Robert Valmont parce qu’elle chantait comme un oiseau magique. Les filles imaginaient leur maman dansant dans les jardins, et cela les rendait joyeuses. Elles se sentaient fortes ensemble, prêtes pour n’importe quelle aventure.`,
    intro: "À Montagride, les sœurs aident le village et grandissent ensemble.",
    quiz: [
      { q: "Qui organise l’aide au village ?", options: ["Martha", "Ellerys", "Léa"], answer: 1 },
      { q: "Avec quoi s’entraînent-elles ?", options: ["Des épées en bois", "Des flèches", "Des lances"], answer: 0 },
      { q: "Qui joue souvent avec les petits ?", options: ["Serrena", "Martha", "Iselda"], answer: 1 }
    ],
    tf: [
      { q: "Les sœurs vivent chez Iselda.", answer: true },
      { q: "Elles refusent d’aider le village.", answer: false },
      { q: "Elles s’entraînent dans le jardin.", answer: true },
      { q: "Leur vraie force est l’amitié.", answer: true }
    ],
    quote: {
      sentence: "« Nous protégeons avec le cœur »",
      options: ["Ellerys", "Serrena", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis doux mais je peux réchauffer, je suis donné avec amour. Qui suis-je ?", a: "Un sourire" },
      { q: "Je suis une épée en bois qui fait rire. Qui suis-je ?", a: "Une épée magique de princesse" }
    ],
    wordsearchWords: ["ELLERYS", "SERRENA", "MARTHA", "ISELDA", "VILLAGE", "COEUR"],
    cross: [
      { clue: "La tante qui les protège", answer: "ISELDA" },
      { clue: "La sœur sérieuse", answer: "ELLERYS" },
      { clue: "Le lieu où elles aident", answer: "VILLAGE" }
    ]
  },
  {
    id: 4,
    title: "Chapitre 4 – Le marché et la gifle",
    text: `Le marché était un endroit magique plein de couleurs et d’odeurs. Des fruits rouges brillaient au soleil, des épices jaunes sentaient bon, et des tissus verts claquaient au vent. Ellerys marchait avec un panier, souriante. Un garçon rapide vola sa sacoche. Elle ne paniqua pas. Elle demanda au soldat : « Rattrapez-le ! » Le soldat rit : « C’est rien ! » Ellerys répondit : « C’est le geste qui compte. » Il attrapa son bras. Elle le gifla gentiment pour lui apprendre la politesse. La foule s’arrêta, surprise.

Melissa, en cape rouge comme une héroïne, sauta du toit et arrêta le soldat sans le blesser. « Nous sommes toujours là pour toi, princesse », dit-elle avant de disparaître comme une ombre magique. Un officier gentil arriva et punit le soldat. Le petit garçon, caché, regarda avec des yeux écarquillés. Il pensa : « C’est comme une aventure ! »`,
    intro: "Au marché, Ellerys montre qu’elle sait réagir avec courage.",
    quiz: [
      { q: "Qui vole la sacoche ?", options: ["Un soldat", "Un garçon", "Un marchand"], answer: 1 },
      { q: "Qui saute du toit ?", options: ["Melissa", "Mira", "Serrena"], answer: 0 },
      { q: "Qui punit le soldat ?", options: ["Darron", "L’officier", "Théo"], answer: 1 }
    ],
    tf: [
      { q: "Ellerys panique au marché.", answer: false },
      { q: "Melissa intervient.", answer: true },
      { q: "Le soldat aide tout de suite Ellerys.", answer: false },
      { q: "Un officier règle la situation.", answer: true }
    ],
    quote: {
      sentence: "« Nous sommes toujours là pour toi, princesse »",
      options: ["Melissa", "Mira", "Ellerys"],
      answer: 0
    },
    riddles: [
      { q: "Je suis rouge et je vole sans ailes, qui suis-je ?", a: "La cape de Melissa" },
      { q: "Je suis un voleur qui devient un héros. Qui suis-je ?", a: "Le garçon du marché" }
    ],
    wordsearchWords: ["MELISSA", "MARCHE", "SOLDAT", "OFFICIER", "CAPE", "ELLERYS"],
    cross: [
      { clue: "Héroïne à cape rouge", answer: "MELISSA" },
      { clue: "Lieu plein de marchands", answer: "MARCHE" },
      { clue: "Princesse du chapitre", answer: "ELLERYS" }
    ]
  },
  {
    id: 5,
    title: "Chapitre 5 – L’étau",
    text: `Darron voulait tout savoir. Il envoya des gardes discrets pour surveiller les temples, les routes et les ports. Ils notaient tout sans faire de bruit. Il fit arrêter le moine Aldric parce qu’il soupçonnait quelque chose. Théo, malin, prévint les capuchonnés avec un message secret. Ils se réunirent et décidèrent de sauver Aldric. Théo dit : « Je vous aide de l’intérieur. » Ils préparèrent un plan astucieux, comme un jeu de cache-cache géant.`,
    intro: "Darron surveille tout, mais Théo agit en secret.",
    quiz: [
      { q: "Qui est arrêté ?", options: ["Aldric", "Léo", "Mira"], answer: 0 },
      { q: "Qui prévient les capuchonnés ?", options: ["Darron", "Théo", "Iselda"], answer: 1 },
      { q: "Que préparent-ils ?", options: ["Une fête", "Un plan de sauvetage", "Un voyage en bateau"], answer: 1 }
    ],
    tf: [
      { q: "Darron veut tout savoir.", answer: true },
      { q: "Les gardes surveillent discrètement.", answer: true },
      { q: "Théo oublie Aldric.", answer: false },
      { q: "Ils décident de sauver Aldric.", answer: true }
    ],
    quote: {
      sentence: "« Je vous aide de l’intérieur. »",
      options: ["Théo", "Darron", "Aldric"],
      answer: 0
    },
    riddles: [
      { q: "Je suis discret comme une souris, mais je protège les amis. Qui suis-je ?", a: "Un secret" },
      { q: "Je suis un moine qui reste calme comme une statue. Qui suis-je ?", a: "Aldric" }
    ],
    wordsearchWords: ["ALDRIC", "SECRET", "PLAN", "GARDE", "TEMPLE", "DARRON"],
    cross: [
      { clue: "Le moine arrêté", answer: "ALDRIC" },
      { clue: "Le chef ennemi", answer: "DARRON" },
      { clue: "Ce que Théo envoie", answer: "SECRET" }
    ]
  },
  {
    id: 6,
    title: "Chapitre 6 – Le sauvetage",
    text: `Les capuchonnés entrèrent par un passage secret comme des ninjas. Ils trouvèrent Aldric dans sa cellule. Il refusa de partir : « Si je sors, ils sauront que nous existons. Restez cachés et soyez courageux. » Des gardes arrivèrent, surpris. Un petit combat éclata, avec des esquives rapides. Elora fut touchée à l’épaule par une flèche, mais Théo la sauva vite. Il l’emmena chez Mira pour des soins magiques, puis chez Iselda. Mira vit le tatouage et dit : « C’est ta sœur, Théo ! » Théo sauta de joie et pleura des larmes heureuses.`,
    intro: "Le sauvetage d’Aldric mène à une découverte incroyable.",
    quiz: [
      { q: "Par où entrent les capuchonnés ?", options: ["Par un passage secret", "Par le pont", "Par la fenêtre du roi"], answer: 0 },
      { q: "Qui est blessée ?", options: ["Serrena", "Elora", "Melissa"], answer: 1 },
      { q: "Qui reconnaît le tatouage ?", options: ["Léo", "Mira", "Darron"], answer: 1 }
    ],
    tf: [
      { q: "Aldric veut partir tout de suite.", answer: false },
      { q: "Il y a un petit combat.", answer: true },
      { q: "Théo abandonne Elora.", answer: false },
      { q: "Elora est la sœur de Théo.", answer: true }
    ],
    quote: {
      sentence: "« C’est ta sœur, Théo ! »",
      options: ["Mira", "Iselda", "Elora"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une marque magique sur la peau, qui unit la famille. Qui suis-je ?", a: "Le tatouage" },
      { q: "Je suis un passage qui mène au trésor, mais je suis secret. Qui suis-je ?", a: "Un tunnel magique" }
    ],
    wordsearchWords: ["ELORA", "MIRA", "TATOUAGE", "THEO", "ALDRIC", "TUNNEL"],
    cross: [
      { clue: "La sœur retrouvée", answer: "ELORA" },
      { clue: "La soigneuse", answer: "MIRA" },
      { clue: "La marque familiale", answer: "TATOUAGE" }
    ]
  },
  {
    id: 7,
    title: "Chapitre 7 – Réunion chez Iselda",
    text: `Ellerys, Serrena et Martha descendirent les escaliers, curieuses. Elles virent Théo avec Elora. Elles touchèrent les tatouages qui brillaient comme de la magie. « Nous sommes trois sœurs et une cousine », dit Ellerys avec un grand sourire. Elles s’enlacèrent, rirent et pleurèrent de joie. Mira aida à soigner Elora avec des herbes magiques. Léo et Léa arrivèrent. Léa sauta dans les bras de Théo : « Tu as retrouvé tout le monde ! » Tout le monde se serra fort, comme une grande famille heureuse.`,
    intro: "Chez Iselda, les retrouvailles remplissent la maison de joie.",
    quiz: [
      { q: "Qui est la cousine ?", options: ["Martha", "Léa", "Mira"], answer: 0 },
      { q: "Qui aide à soigner Elora ?", options: ["Mira", "Darron", "Melissa"], answer: 0 },
      { q: "Qui saute dans les bras de Théo ?", options: ["Ellerys", "Léa", "Serrena"], answer: 1 }
    ],
    tf: [
      { q: "Les sœurs se retrouvent.", answer: true },
      { q: "Elora est ignorée.", answer: false },
      { q: "Léo et Léa arrivent.", answer: true },
      { q: "La scène est triste du début à la fin.", answer: false }
    ],
    quote: {
      sentence: "« Nous sommes trois sœurs et une cousine »",
      options: ["Ellerys", "Martha", "Elora"],
      answer: 0
    },
    riddles: [
      { q: "Nous sommes quatre mains jointes, mais une famille unie. Qui sommes-nous ?", a: "Les sœurs" },
      { q: "Je suis une petite sœur qui saute comme un lapin. Qui suis-je ?", a: "Léa" }
    ],
    wordsearchWords: ["FAMILLE", "SOEURS", "LEA", "LEO", "ELORA", "ISELDA"],
    cross: [
      { clue: "La petite sœur joyeuse", answer: "LEA" },
      { clue: "La grande maison protectrice", answer: "ISELDA" },
      { clue: "Ce qui unit tout le monde", answer: "FAMILLE" }
    ]
  },
  {
    id: 8,
    title: "Chapitre 8 – Serment des quatre sœurs",
    text: `Les trois sœurs et Martha se réunirent dans le jardin fleuri. Elles posèrent les mains ensemble, comme si elles faisaient un cercle magique. « Nous ne nous cacherons plus », dit Ellerys avec courage. « Nous aiderons le royaume », ajouta Serrena avec un sourire. « Avec du courage et des rires », conclut Martha en riant. Un cercle lumineux doux apparut autour d’elles, comme une promesse magique. Elles sourirent, et le vent répondit en faisant danser les fleurs.`,
    intro: "Dans le jardin, les quatre jeunes filles font un beau serment.",
    quiz: [
      { q: "Où se réunissent-elles ?", options: ["Au marché", "Dans le jardin", "Au port"], answer: 1 },
      { q: "Que veulent-elles faire ?", options: ["Se cacher encore", "Aider le royaume", "Quitter Montagride"], answer: 1 },
      { q: "Que forme la lumière autour d’elles ?", options: ["Un cercle lumineux", "Une tour", "Un bateau"], answer: 0 }
    ],
    tf: [
      { q: "Ellerys veut continuer à se cacher.", answer: false },
      { q: "Serrena veut aider le royaume.", answer: true },
      { q: "Martha parle de courage et de rires.", answer: true },
      { q: "Le vent accompagne la promesse.", answer: true }
    ],
    quote: {
      sentence: "« Nous aiderons le royaume »",
      options: ["Serrena", "Ellerys", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis lumineux et je scelle un serment. Qui suis-je ?", a: "Le cercle magique" },
      { q: "Je suis un vent qui applaudit. Qui suis-je ?", a: "Une promesse joyeuse" }
    ],
    wordsearchWords: ["SERMENT", "MAGIE", "VENT", "FLEUR", "ROYAUME", "MARTHA"],
    cross: [
      { clue: "La promesse commune", answer: "SERMENT" },
      { clue: "Ce que les filles veulent aider", answer: "ROYAUME" },
      { clue: "La cousine rieuse", answer: "MARTHA" }
    ]
  },
  {
    id: 9,
    title: "Chapitre 9 – Batailles et retour",
    text: `Théo partit avec l’armée pour protéger le royaume. Il gagna la bataille navale avec Léo en utilisant des plans malins, sans blesser inutilement. Il gagna la bataille terrestre en montrant qu’il était le fils de Robert. Le roi du Nord reconnut le tatouage magique et ordonna le repli. La guerre s’arrêta comme par magie.`,
    intro: "Théo gagne par intelligence et non par violence inutile.",
    quiz: [
      { q: "Qui accompagne Théo dans la bataille navale ?", options: ["Léo", "Darron", "Mira"], answer: 0 },
      { q: "Comment Théo gagne-t-il ?", options: ["Avec des plans malins", "En détruisant tout", "En fuyant"], answer: 0 },
      { q: "Que reconnaît le roi du Nord ?", options: ["Un bateau", "Le tatouage royal", "Une épée en bois"], answer: 1 }
    ],
    tf: [
      { q: "Théo cherche à blesser inutilement.", answer: false },
      { q: "Il y a une bataille navale.", answer: true },
      { q: "Le tatouage aide à arrêter la guerre.", answer: true },
      { q: "Léo est absent du chapitre.", answer: false }
    ],
    quote: {
      sentence: "Le roi du Nord reconnut le tatouage magique et ordonna le repli.",
      options: ["Narrateur", "Théo", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis un tatouage qui arrête une guerre. Qui suis-je ?", a: "Le tatouage royal" },
      { q: "Je suis une bataille gagnée avec un sourire. Qui suis-je ?", a: "Une victoire maline" }
    ],
    wordsearchWords: ["BATAILLE", "NAVALE", "LEO", "THEO", "TATOUAGE", "ROBERT"],
    cross: [
      { clue: "Le compagnon de Théo", answer: "LEO" },
      { clue: "Le type de bataille sur mer", answer: "NAVALE" },
      { clue: "Le héros du chapitre", answer: "THEO" }
    ]
  },
  {
    id: 10,
    title: "Chapitre 10 – Le retour du prince",
    text: `Théo rentra à la capitale comme un héros. La foule cria son nom avec joie. Il parla d’une voix forte : « Je suis revenu pour restaurer la justice. » L’armée s’agenouilla avec respect. Le peuple acclama et dansa.`,
    intro: "La capitale retrouve son prince, et l’espoir revient avec lui.",
    quiz: [
      { q: "Où Théo revient-il ?", options: ["À la capitale", "À la forêt", "Au port du Nord"], answer: 0 },
      { q: "Que veut restaurer Théo ?", options: ["La justice", "Le marché", "Le temple"], answer: 0 },
      { q: "Que fait l’armée ?", options: ["Elle part", "Elle s’agenouille", "Elle se cache"], answer: 1 }
    ],
    tf: [
      { q: "La foule crie le nom de Théo.", answer: true },
      { q: "Théo refuse de parler.", answer: false },
      { q: "Le peuple acclame.", answer: true },
      { q: "Le retour est triste.", answer: false }
    ],
    quote: {
      sentence: "« Je suis revenu pour restaurer la justice. »",
      options: ["Théo", "Robert", "Darron"],
      answer: 0
    },
    riddles: [
      { q: "Je suis un prince qui rentre chez lui. Qui suis-je ?", a: "Théo" },
      { q: "Je suis une foule qui saute de joie. Qui suis-je ?", a: "Un peuple heureux" }
    ],
    wordsearchWords: ["PRINCE", "JUSTICE", "PEUPLE", "ARMEE", "CAPITALE", "THEO"],
    cross: [
      { clue: "Le héros revenu", answer: "THEO" },
      { clue: "Ce qu’il veut restaurer", answer: "JUSTICE" },
      { clue: "La grande ville royale", answer: "CAPITALE" }
    ]
  },
  {
    id: 11,
    title: "Chapitre 11 – Le dernier combat",
    text: `Darron et Goliath sortirent pour parler. Mais leurs mots ne convainquirent personne. Le combat éclata comme un jeu d’échecs géant. Théo affronta Goliath. Il le désarma avec adresse, sans le blesser trop. Une pierre lancée par le petit garçon du marché fit tomber Goliath. Darron fut capturé avec douceur.`,
    intro: "Le dernier combat montre que courage et adresse peuvent suffire.",
    quiz: [
      { q: "Qui affronte Théo ?", options: ["Goliath", "Léo", "Aldric"], answer: 0 },
      { q: "Comment Théo gagne-t-il contre Goliath ?", options: ["Il le désarme", "Il fuit", "Il appelle un dragon"], answer: 0 },
      { q: "Qui fait tomber Goliath ?", options: ["Melissa", "Le petit garçon du marché", "Iselda"], answer: 1 }
    ],
    tf: [
      { q: "Les mots de Darron convainquent tout le monde.", answer: false },
      { q: "Théo désarme Goliath.", answer: true },
      { q: "Le petit garçon intervient.", answer: true },
      { q: "Darron s’échappe librement.", answer: false }
    ],
    quote: {
      sentence: "Le combat éclata comme un jeu d’échecs géant.",
      options: ["Narrateur", "Théo", "Darron"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une pierre qui gagne un combat. Qui suis-je ?", a: "Une pierre courageuse" },
      { q: "Je suis un combat gagné par un petit lanceur. Qui suis-je ?", a: "Une surprise rigolote" }
    ],
    wordsearchWords: ["GOLIATH", "PIERRE", "COMBAT", "DARRON", "THEO", "MARCHE"],
    cross: [
      { clue: "Le géant affronté", answer: "GOLIATH" },
      { clue: "L’objet lancé", answer: "PIERRE" },
      { clue: "Le méchant capturé", answer: "DARRON" }
    ]
  },
  {
    id: 12,
    title: "Chapitre 12 – Le couronnement",
    text: `Ellerys posa la couronne sur Théo avec un grand sourire. Mira s’approcha : « Je t’ai aimé sans savoir. » Théo répondit : « Je t’ai aimé sachant que j’étais juste un homme qui devait tenir. » Le royaume respira de joie. Théo régna avec sagesse. Les sœurs restèrent unies. Un enfant joua avec un lance-pierre en riant. Théo murmura : « Le jour a commencé ce soir-là. »

Fin de l’histoire.`,
    intro: "Le royaume retrouve la paix, et Théo devient un roi sage.",
    quiz: [
      { q: "Qui pose la couronne sur Théo ?", options: ["Ellerys", "Mira", "Serrena"], answer: 0 },
      { q: "Qui parle d’amour à Théo ?", options: ["Melissa", "Mira", "Léa"], answer: 1 },
      { q: "Comment Théo règne-t-il ?", options: ["Avec sagesse", "Avec colère", "Avec peur"], answer: 0 }
    ],
    tf: [
      { q: "Théo devient roi.", answer: true },
      { q: "Le royaume est triste à la fin.", answer: false },
      { q: "Les sœurs restent unies.", answer: true },
      { q: "Personne ne rit à la fin.", answer: false }
    ],
    quote: {
      sentence: "« Le jour a commencé ce soir-là. »",
      options: ["Théo", "Robert", "Léo"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une couronne qui unit. Qui suis-je ?", a: "Un symbole de famille" },
      { q: "Je suis un jour qui commence la nuit. Qui suis-je ?", a: "Un début magique" }
    ],
    wordsearchWords: ["COURONNE", "MIRA", "THEO", "ROYAUME", "SAGESSE", "ELLERYS"],
    cross: [
      { clue: "L’amie amoureuse du roi", answer: "MIRA" },
      { clue: "Le symbole posé sur Théo", answer: "COURONNE" },
      { clue: "La qualité du règne", answer: "SAGESSE" }
    ]
  }
];

const characters = [
  { name: "Théo", file: "theo.jpg", desc: "Prince caché puis héros du royaume. Courageux, loyal et patient." },
  { name: "Ellerys", file: "ellerys.jpg", desc: "Princesse sage et protectrice. Elle agit toujours avec cœur." },
  { name: "Serrena", file: "serrena.jpg", desc: "Princesse joyeuse et lumineuse, pleine d’élan et d’espoir." },
  { name: "Martha", file: "martha.jpg", desc: "Cousine affectueuse et drôle, toujours prête à encourager les autres." },
  { name: "Mira", file: "mira.jpg", desc: "Soigneuse habile et fidèle alliée de Théo." },
  { name: "Léo", file: "leo.jpg", desc: "Ami d’entraînement de Théo, courageux et digne de confiance." },
  { name: "Léa", file: "lea.jpg", desc: "Petite sœur vive et tendre, toujours pleine d’imagination." },
  { name: "Melissa", file: "melissa.jpg", desc: "Capuchonnée rouge, mystérieuse protectrice à l’arrivée fulgurante." },
  { name: "Robert", file: "robert.jpg", desc: "Roi courageux qui protège sa famille jusqu’au bout." },
  { name: "Darron", file: "darron.jpg", desc: "Ambitieux et dangereux, il vole le trône par trahison." },
  { name: "Iselda", file: "iselda.jpg", desc: "Tante protectrice, refuge affectueux et solide pour les enfants." },
  { name: "Daghota", file: "daghota.jpg", desc: "Guerrier fidèle qui cache Théo et lui apprend la force." },
  { name: "Aldric", file: "aldrich.jpg", desc: "Moine sage qui enseigne la patience et le bon moment pour agir." },
  { name: "Elora", file: "elora.jpg", desc: "Sœur retrouvée, signe vivant que la famille peut renaître." }
];

let currentChapterIndex = 0;
let riddlesVisible = false;

const homeView = document.getElementById("homeView");
const storyView = document.getElementById("storyView");
const charactersView = document.getElementById("charactersView");
const gamesView = document.getElementById("gamesView");
const views = [homeView, storyView, charactersView, gamesView];

const chapterSelect = document.getElementById("chapterSelect");
const gamesChapterSelect = document.getElementById("gamesChapterSelect");
const chapterList = document.getElementById("chapterList");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const gamesChapterTitle = document.getElementById("gamesChapterTitle");
const gamesIntro = document.getElementById("gamesIntro");
const quizContainer = document.getElementById("quizContainer");
const tfContainer = document.getElementById("tfContainer");
const quoteContainer = document.getElementById("quoteContainer");
const riddlesContainer = document.getElementById("riddlesContainer");
const wordSearchGrid = document.getElementById("wordSearchGrid");
const wordSearchWords = document.getElementById("wordSearchWords");
const crosswordContainer = document.getElementById("crosswordContainer");
const quizResult = document.getElementById("quizResult");
const tfResult = document.getElementById("tfResult");
const quoteResult = document.getElementById("quoteResult");
const crosswordResult = document.getElementById("crosswordResult");

function showView(viewId){
  views.forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
}

function bindOpenButtons(){
  document.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-open");
      showView(id);
    });
  });
}

function populateSelectors(){
  chapters.forEach((chapter, index)=>{
    const option1 = document.createElement("option");
    option1.value = index;
    option1.textContent = chapter.title;
    chapterSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = index;
    option2.textContent = chapter.title;
    gamesChapterSelect.appendChild(option2);

    const btn = document.createElement("button");
    btn.className = "chapter-link";
    btn.textContent = chapter.title;
    btn.addEventListener("click", ()=>{
      currentChapterIndex = index;
      updateStory();
      updateGames();
      showView("storyView");
    });
    chapterList.appendChild(btn);
  });
}

function updateChapterListActive(){
  const buttons = document.querySelectorAll(".chapter-link");
  buttons.forEach((b, i)=>{
    b.classList.toggle("active", i === currentChapterIndex);
  });
}

function updateStory(){
  const chapter = chapters[currentChapterIndex];
  chapterTitle.textContent = chapter.title;
  chapterText.textContent = chapter.text;
  chapterSelect.value = currentChapterIndex;
  updateChapterListActive();
}

function updateGames(){
  const chapter = chapters[currentChapterIndex];
  gamesChapterTitle.textContent = chapter.title;
  gamesIntro.textContent = chapter.intro;
  gamesChapterSelect.value = currentChapterIndex;

  renderQuiz(chapter);
  renderTf(chapter);
  renderQuote(chapter);
  renderRiddles(chapter);
  renderWordSearch(chapter.wordsearchWords);
  renderCrossword(chapter.cross);

  quizResult.textContent = "";
  tfResult.textContent = "";
  quoteResult.textContent = "";
  crosswordResult.textContent = "";
}

function changeChapter(step){
  currentChapterIndex += step;
  if(currentChapterIndex < 0) currentChapterIndex = chapters.length - 1;
  if(currentChapterIndex >= chapters.length) currentChapterIndex = 0;
  updateStory();
  updateGames();
}

document.getElementById("homeBtn").addEventListener("click", ()=>showView("homeView"));
document.getElementById("prevChapterBtn").addEventListener("click", ()=>changeChapter(-1));
document.getElementById("nextChapterBtn").addEventListener("click", ()=>changeChapter(1));
document.getElementById("gamesPrevBtn").addEventListener("click", ()=>changeChapter(-1));
document.getElementById("gamesNextBtn").addEventListener("click", ()=>changeChapter(1));

chapterSelect.addEventListener("change", e=>{
  currentChapterIndex = Number(e.target.value);
  updateStory();
  updateGames();
});

gamesChapterSelect.addEventListener("change", e=>{
  currentChapterIndex = Number(e.target.value);
  updateStory();
  updateGames();
});

document.getElementById("openCurrentGamesBtn").addEventListener("click", ()=>{
  showView("gamesView");
});

function renderQuiz(chapter){
  quizContainer.innerHTML = "";
  chapter.quiz.forEach((item, qIndex)=>{
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `<h4>${qIndex + 1}. ${item.q}</h4>`;

    item.options.forEach((option, optIndex)=>{
      const row = document.createElement("div");
      row.className = "option-row";
      row.innerHTML = `
        <input type="radio" name="quiz-${qIndex}" id="quiz-${qIndex}-${optIndex}" value="${optIndex}">
        <label for="quiz-${qIndex}-${optIndex}">${option}</label>
      `;
      block.appendChild(row);
    });

    quizContainer.appendChild(block);
  });
}

function renderTf(chapter){
  tfContainer.innerHTML = "";
  chapter.tf.forEach((item, index)=>{
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <h4>${index + 1}. ${item.q}</h4>
      <div class="option-row">
        <input type="radio" name="tf-${index}" id="tf-${index}-true" value="true">
        <label for="tf-${index}-true">Vrai</label>
      </div>
      <div class="option-row">
        <input type="radio" name="tf-${index}" id="tf-${index}-false" value="false">
        <label for="tf-${index}-false">Faux</label>
      </div>
    `;
    tfContainer.appendChild(block);
  });
}

function renderQuote(chapter){
  quoteContainer.innerHTML = "";
  const box = document.createElement("div");
  box.className = "quote-box";
  box.innerHTML = `<p><strong>${chapter.quote.sentence}</strong></p>`;

  chapter.quote.options.forEach((option, index)=>{
    const row = document.createElement("div");
    row.className = "option-row";
    row.innerHTML = `
      <input type="radio" name="quote-choice" id="quote-${index}" value="${index}">
      <label for="quote-${index}">${option}</label>
    `;
    box.appendChild(row);
  });

  quoteContainer.appendChild(box);
}

function renderRiddles(chapter){
  riddlesContainer.innerHTML = "";
  chapter.riddles.forEach((item, index)=>{
    const div = document.createElement("div");
    div.className = "riddle-item";
    div.innerHTML = `
      <div><strong>Énigme ${index + 1} :</strong> ${item.q}</div>
      <div class="riddle-answer ${riddlesVisible ? "show" : ""}">Réponse : ${item.a}</div>
    `;
    riddlesContainer.appendChild(div);
  });
}

document.getElementById("showRiddlesBtn").addEventListener("click", ()=>{
  riddlesVisible = !riddlesVisible;
  renderRiddles(chapters[currentChapterIndex]);
});

document.getElementById("checkQuizBtn").addEventListener("click", ()=>{
  const chapter = chapters[currentChapterIndex];
  let score = 0;

  chapter.quiz.forEach((item, index)=>{
    const checked = document.querySelector(`input[name="quiz-${index}"]:checked`);
    if(checked && Number(checked.value) === item.answer) score++;
  });

  quizResult.textContent = `Résultat : ${score} / ${chapter.quiz.length}`;
  quizResult.className = "result-text " + (score === chapter.quiz.length ? "good" : "bad");
});

document.getElementById("checkTfBtn").addEventListener("click", ()=>{
  const chapter = chapters[currentChapterIndex];
  let score = 0;

  chapter.tf.forEach((item, index)=>{
    const checked = document.querySelector(`input[name="tf-${index}"]:checked`);
    if(checked && String(item.answer) === checked.value) score++;
  });

  tfResult.textContent = `Résultat : ${score} / ${chapter.tf.length}`;
  tfResult.className = "result-text " + (score === chapter.tf.length ? "good" : "bad");
});

document.getElementById("checkQuoteBtn").addEventListener("click", ()=>{
  const answer = document.querySelector(`input[name="quote-choice"]:checked`);
  const chapter = chapters[currentChapterIndex];
  const ok = answer && Number(answer.value) === chapter.quote.answer;

  quoteResult.textContent = ok ? "Bravo, c’est la bonne réponse." : "Essaie encore.";
  quoteResult.className = "result-text " + (ok ? "good" : "bad");
});

function randomLetter(){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
}

function createEmptyGrid(size){
  return Array.from({length:size}, ()=>Array.from({length:size}, ()=>""));
}

function placeWord(grid, word){
  const size = grid.length;
  const directions = [[0,1],[1,0],[1,1],[-1,1]];

  for(let tries = 0; tries < 200; tries++){
    const [dr, dc] = directions[Math.floor(Math.random() * directions.length)];
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    let fits = true;
    let r = row;
    let c = col;

    for(let i = 0; i < word.length; i++){
      if(r < 0 || r >= size || c < 0 || c >= size){
        fits = false;
        break;
      }
      const cell = grid[r][c];
      if(cell !== "" && cell !== word[i]){
        fits = false;
        break;
      }
      r += dr;
      c += dc;
    }

    if(!fits) continue;

    r = row;
    c = col;
    for(let i = 0; i < word.length; i++){
      grid[r][c] = word[i];
      r += dr;
      c += dc;
    }
    return true;
  }

  return false;
}

function renderWordSearch(words){
  const size = 12;
  const grid = createEmptyGrid(size);

  words.forEach(word => placeWord(grid, word.toUpperCase()));

  for(let r = 0; r < size; r++){
    for(let c = 0; c < size; c++){
      if(grid[r][c] === "") grid[r][c] = randomLetter();
    }
  }

  wordSearchGrid.innerHTML = "";
  wordSearchWords.innerHTML = "";

  grid.forEach(row=>{
    row.forEach(letter=>{
      const cell = document.createElement("div");
      cell.className = "ws-cell";
      cell.textContent = letter;
      wordSearchGrid.appendChild(cell);
    });
  });

  words.forEach(word=>{
    const tag = document.createElement("div");
    tag.className = "word-tag";
    tag.textContent = word;
    wordSearchWords.appendChild(tag);
  });
}

document.getElementById("newWordSearchBtn").addEventListener("click", ()=>{
  renderWordSearch(chapters[currentChapterIndex].wordsearchWords);
});

function renderCrossword(items){
  crosswordContainer.innerHTML = "";
  const list = document.createElement("div");
  list.className = "cross-list";

  items.forEach((item, index)=>{
    const row = document.createElement("div");
    row.className = "cross-item";
    row.innerHTML = `
      <div><strong>${index + 1}.</strong> ${item.clue}</div>
      <input type="text" data-cross-index="${index}" placeholder="Ta réponse">
    `;
    list.appendChild(row);
  });

  crosswordContainer.appendChild(list);
}

document.getElementById("checkCrossBtn").addEventListener("click", ()=>{
  const chapter = chapters[currentChapterIndex];
  const inputs = document.querySelectorAll("[data-cross-index]");
  let score = 0;

  inputs.forEach(input=>{
    const index = Number(input.getAttribute("data-cross-index"));
    const val = input.value.trim().toUpperCase();
    if(val === chapter.cross[index].answer.toUpperCase()){
      score++;
      input.style.borderColor = "#2aa36b";
      input.style.background = "#effcf5";
    } else {
      input.style.borderColor = "#d9534f";
      input.style.background = "#fff3f3";
    }
  });

  crosswordResult.textContent = `Résultat : ${score} / ${chapter.cross.length}`;
  crosswordResult.className = "result-text " + (score === chapter.cross.length ? "good" : "bad");
});

function renderCharacters(){
  const grid = document.getElementById("charactersGrid");
  grid.innerHTML = "";

  characters.forEach(character=>{
    const initials = character.name.charAt(0).toUpperCase();

    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="char-visual">
            <img
              src="images/${character.file}"
              alt="${character.name}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="char-fallback" style="display:none">${initials}</div>
          </div>
          <div class="char-name">${character.name}</div>
        </div>
        <div class="flip-face flip-back">
          <h3>${character.name}</h3>
          <p>${character.desc}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", ()=>{
      card.classList.toggle("flipped");
    });

    grid.appendChild(card);
  });
}

const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
const drawColor = document.getElementById("drawColor");
const drawSize = document.getElementById("drawSize");
const clearCanvasBtn = document.getElementById("clearCanvasBtn");

let drawing = false;

function setupCanvasBackground(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "#d7e1f1";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(120, 120, 55, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(250, 260);
  ctx.lineTo(330, 170);
  ctx.lineTo(410, 260);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(520, 120, 160, 120);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(760, 190, 45, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#8b97af";
  ctx.font = "20px Trebuchet MS";
  ctx.fillText("Dessine ou colorie ici ton univers Montagrid", 24, 34);
  ctx.fillText("Soleil", 94, 126);
  ctx.fillText("Montagne", 282, 282);
  ctx.fillText("Château", 558, 188);
  ctx.fillText("Bouclier", 728, 198);
}

function getPos(e){
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (clientX - rect.left) * (canvas.width / rect.width),
    y: (clientY - rect.top) * (canvas.height / rect.height)
  };
}

function startDraw(e){
  drawing = true;
  const p = getPos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
}

function draw(e){
  if(!drawing) return;
  const p = getPos(e);
  ctx.lineTo(p.x, p.y);
  ctx.strokeStyle = drawColor.value;
  ctx.lineWidth = Number(drawSize.value);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function stopDraw(){
  drawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

canvas.addEventListener("touchstart", e=>{
  e.preventDefault();
  startDraw(e);
}, { passive:false });

canvas.addEventListener("touchmove", e=>{
  e.preventDefault();
  draw(e);
}, { passive:false });

canvas.addEventListener("touchend", stopDraw);

clearCanvasBtn.addEventListener("click", setupCanvasBackground);

populateSelectors();
bindOpenButtons();
renderCharacters();
updateStory();
updateGames();
setupCanvasBackground();