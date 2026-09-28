import { Dish, WineFlight, WineVintage, TableStatus } from '../types';

export const ODYSSEE_DISHES: Dish[] = [
  {
    id: 'dish-1',
    courseTag: 'Premier Éveil',
    title: 'Tartellette de Topinambour Fumé & Caviar Osciètre',
    description: 'Sunchoke skin crisp filled with smoked Jerusalem artichoke sabayon, cultured Normandy crème fraîche, and Royal Baerii Caviar harvested sustainably in Aquitaine.',
    badge: 'Included',
    tags: ['Pescatarian', 'Organic'],
    pairing: 'Champagne Jacques Selosse Initial Blanc de Blancs'
  },
  {
    id: 'dish-2',
    courseTag: 'Le Crustacé',
    title: 'Langoustine Royale de Guilvinec Rôtie',
    description: 'Gently flamed Brittany langoustine over preserved finger lime, crisp sea fennel, and an airy bisque infused with roasted shells and lemongrass oil.',
    badge: '+€45 Supp. Caviar',
    tags: ['Wild Caught', 'Gluten-Free'],
    pairing: '2020 Meursault Premier Cru, Domaine des Comtes Lafon'
  },
  {
    id: 'dish-3',
    courseTag: 'La Terre',
    title: 'Bœuf Wagyu A5 de Gunma Maturation 45 Jours',
    description: 'Charred over binchōtan charcoal, roasted morel mushrooms glazed in vin jaune, marrow brioche crust, and a 72-hour jus enriched with black winter truffles.',
    badge: 'Tasting Highlight',
    tags: ['A5 Grade', 'Charcoal Grill'],
    pairing: '2016 Côte-Rôtie La Mouline, E. Guigal'
  },
  {
    id: 'dish-4',
    courseTag: 'Le Sous-Bois',
    title: 'Velouté Onctueux aux Truffes Noires de Richerenches',
    description: 'Slow-steeped forest chestnuts, farm hen yolk confit at 63°C, shavings of Tuber melanosporum, paired with warm laminated butter feuilleté.',
    badge: 'Signature',
    tags: ['Vegetarian', 'Provenance Drôme'],
    pairing: '2018 Château-Chalon Vin Jaune, Jean Macle'
  },
  {
    id: 'dish-5',
    courseTag: 'Le Grand Final',
    title: 'Soufflé Chaud au Chocolat Grand Cru Guanaja & Crème Glacée Fleur de Sel',
    description: 'Poured tableside with warm Madagascar vanilla bean ganache, accompanied by smoked unpasteurized churned milk gelato and caramelized cacao nibs.',
    badge: 'Single Origin 75%',
    tags: ['Grand Cru Cocoa', 'Tableside Service'],
    pairing: '2005 Rivesaltes Ambré Domaine de Rancy'
  }
];

export const EPHEMERE_DISHES: Dish[] = [
  {
    id: 'e-1',
    courseTag: 'Entrée d’Automne',
    title: 'Carpaccio de Saint-Jacques de la Baie de Saint-Brieuc',
    description: 'Delicately sliced live scallops, compressed heritage quince, bergamot vinaigrette, preserved sea grapes, and chilled sea foam.',
    badge: 'Course I',
    tags: ['Raw Line-Caught', 'Seasonal'],
    pairing: '2021 Chablis 1er Cru Montée de Tonnerre, Domaine Raveneau'
  },
  {
    id: 'e-2',
    courseTag: 'Le Poisson Côtier',
    title: 'Turbot Sauvage Poêlé aux Algues Brunes',
    description: 'Breton wild turbot braised gently on the bone, infused dashi of kombu from Roscoff, razor clam ragout, and pickled chanterelles.',
    badge: 'Course II',
    tags: ['Sustainable Fishery', 'Sea Herb Emulsion'],
    pairing: '2019 Corton-Charlemagne Grand Cru, Bonneau du Martray'
  },
  {
    id: 'e-3',
    courseTag: 'Le Gibier',
    title: 'Pigeon Fermier du Poitou au Foin de Crau',
    description: 'Hay-smoked squab breast, braised leg pastilla with caramelized shallots, baby beetroot roasted in clay, and cassis-scented reduction.',
    badge: 'Course III',
    tags: ['Heritage Farm', 'Wood Smoke'],
    pairing: '2015 Chambertin Grand Cru, Domaine Armand Rousseau'
  },
  {
    id: 'e-4',
    courseTag: 'La Douceur Terroir',
    title: 'Mille-Feuille Léger aux Figues de Solliès & Feuille de Figuier',
    description: 'Caramelized puff pastry, infusion of fig leaf diplomate cream, poached Solliès figs, roasted almond praline, and reduction of aged balsamic.',
    badge: 'Course IV',
    tags: ['Pastry Signature', 'Heritage Orchard'],
    pairing: "2011 Château d'Yquem Premier Cru Supérieur"
  }
];

export const SOMMELIER_FLIGHTS: WineFlight[] = [
  {
    id: 'flight-1',
    flightTag: 'Flight I • Terroirs de France',
    title: 'Harmonie Classique',
    description: 'Five expressions from benchmark family domaines in Sancerre, Meursault, Vosne-Romanée, and Sauternes. Hand-harvested biodynamic parcels only.',
    poursCount: '5 Glass Pours',
    price: 140,
    selections: [
      '2021 Sancerre Monts Damnés, Dagueneau',
      '2020 Meursault Clos de la Barre, Comtes Lafon',
      '2017 Gevrey-Chambertin, Trapet Père & Fils',
      '2016 Condrieu La Doriane, Guigal',
      '2015 Sauternes, Château Suduiraut'
    ]
  },
  {
    id: 'flight-2',
    flightTag: 'Flight II • L’Étoile Prestige',
    title: 'La Réserve Antoine Moreau',
    description: 'Seven pours featuring Grand Cru allocations, rare library releases direct from the châteaux cellars, and pre-phylloxera ungrafted parcels.',
    poursCount: '7 Grand Cru Pours',
    price: 260,
    isSommelierPick: true,
    selections: [
      '2012 Dom Pérignon Vintage Champagne',
      '2018 Corton-Charlemagne Grand Cru, Coche-Dury',
      '2010 Château Margaux Premier Grand Cru Classé',
      '2014 Hermitage La Chapelle, Jaboulet',
      '2009 Romanée-Saint-Vivant, Domaine DRC',
      '2011 Château-Chalon Vin Jaune, Jean Macle',
      "2001 Château d'Yquem Premier Grand Cru"
    ]
  },
  {
    id: 'flight-3',
    flightTag: 'Flight III • Sans Alcool',
    title: 'Infusions & Botaniques',
    description: 'Crafted in our kitchen laboratory with wild botanicals, cold-extracted single-estate teas, fermented mountain fruits, and reduced sea broth infusions.',
    poursCount: '6 Elixir Pairings',
    price: 95,
    selections: [
      'Roasted Sunchoke Tea with Bergamot Peel',
      'Fermented White Pine & Cloudberry Cordial',
      'Sparkling Smoked Pear & Juniper Verjus',
      'Sea Kelp & Roasted Dashi Reduction',
      'Cold-Brewed Gyokuro with Salted Cherry Leaf',
      'Infused Quince & Honeycombe Nectar'
    ]
  }
];

export const CELLAR_VINTAGES: WineVintage[] = [
  {
    id: 'w-1',
    binNumber: '0842',
    region: 'burgundy',
    regionLabel: 'Burgundy • Allocation',
    appellation: 'Romanée-Saint-Vivant Grand Cru',
    vintageYear: 2017,
    domain: 'Domaine de la Romanée-Conti',
    name: 'Romanée-Saint-Vivant Grand Cru',
    tastingNotes: 'Pure rose petal, dried gentian, blood orange zest, and ethereal silky tannins with incredible persistence.',
    priceEur: 2450,
    bottlesInCellar: 2,
    organicOrBiodynamic: true
  },
  {
    id: 'w-2',
    binNumber: '0312',
    region: 'jura',
    regionLabel: 'Jura • Bio',
    appellation: 'Château-Chalon AOC',
    vintageYear: 2011,
    domain: 'Domaine Jean Macle',
    name: 'Château-Chalon Vin Jaune',
    tastingNotes: 'Aged 6 years and 3 months under voile. Green walnut, dry curry leaf, preserved Meyer lemon, intense mineral tension.',
    priceEur: 320,
    bottlesInCellar: 8,
    organicOrBiodynamic: true
  },
  {
    id: 'w-3',
    binNumber: '1109',
    region: 'rhone',
    regionLabel: 'Rhône • Rare',
    appellation: 'Hermitage Blanc AOC',
    vintageYear: 2014,
    domain: 'Domaine Jean-Louis Chave',
    name: 'Hermitage Blanc',
    tastingNotes: 'Marsanne & Roussanne from century-old granite hills. White peach, honeyed beeswax, and white truffle notes.',
    priceEur: 460,
    bottlesInCellar: 4,
    organicOrBiodynamic: true
  },
  {
    id: 'w-4',
    binNumber: '0019',
    region: 'champagne',
    regionLabel: 'Champagne • Solera',
    appellation: 'Champagne Grand Cru (Avize)',
    vintageYear: 2021,
    domain: 'Jacques Selosse',
    name: 'Substance Grand Cru Blanc de Blancs',
    tastingNotes: 'Perpetual solera reserve started in 1986. Brioche toast, hazelnut praline, and unmatched saline oceanic depth.',
    priceEur: 680,
    bottlesInCellar: 3,
    organicOrBiodynamic: true
  },
  {
    id: 'w-5',
    binNumber: '0450',
    region: 'burgundy',
    regionLabel: 'Burgundy • Premier Cru',
    appellation: 'Meursault Premier Cru',
    vintageYear: 2020,
    domain: 'Domaine des Comtes Lafon',
    name: 'Meursault 1er Cru Clos de la Barre',
    tastingNotes: 'Crisp flint, crushed limestone, toasted sesame, and unctuous cultured butter acidity.',
    priceEur: 390,
    bottlesInCellar: 6,
    organicOrBiodynamic: true
  },
  {
    id: 'w-6',
    binNumber: '0688',
    region: 'rhone',
    regionLabel: 'Rhône • Côte-Rôtie',
    appellation: 'Côte-Rôtie AOC',
    vintageYear: 2016,
    domain: 'E. Guigal',
    name: 'Côte-Rôtie La Mouline',
    tastingNotes: 'Syrah blended with 11% Viognier. Crushed blackberry, smoked bacon fat, violets, and graphite minerality.',
    priceEur: 520,
    bottlesInCellar: 5,
    organicOrBiodynamic: false
  },
  {
    id: 'w-7',
    binNumber: '0104',
    region: 'jura',
    regionLabel: 'Jura • Arbois',
    appellation: 'Arbois Pupillin',
    vintageYear: 2018,
    domain: 'Pierre Overnoy / Emmanuel Houillon',
    name: 'Arbois Savagnin Ouillé',
    tastingNotes: 'Unfiltered, zero added sulfur. Salted orchard apple, white peppercorn, and wild chamomile flower.',
    priceEur: 410,
    bottlesInCellar: 3,
    organicOrBiodynamic: true
  },
  {
    id: 'w-8',
    binNumber: '0032',
    region: 'champagne',
    regionLabel: 'Champagne • Grand Cru',
    appellation: 'Champagne (Ambonnay)',
    vintageYear: 2015,
    domain: 'Egly-Ouriet',
    name: 'Grand Cru Brut Millésimé',
    tastingNotes: '100% Grand Cru pinot noir & chardonnay. Pinot generosity, chalky purity, and dried red berries.',
    priceEur: 340,
    bottlesInCellar: 7,
    organicOrBiodynamic: true
  }
];

export const INITIAL_TABLES: TableStatus[] = [
  { id: 'T01', label: 'Table 01 (Bay Window)', capacity: 2, section: 'Main Dining', status: 'reserved', patronName: 'Countess de V.' },
  { id: 'T02', label: 'Table 02 (Alpaca Banquette)', capacity: 2, section: 'Main Dining', status: 'available' },
  { id: 'T03', label: 'Table 03 (Intimate Alcove)', capacity: 2, section: 'Main Dining', status: 'locked', lockTtlRemaining: 184, patronName: 'Dr. Alistair H.' },
  { id: 'T04', label: 'Table 04 (Grand Center)', capacity: 4, section: 'Main Dining', status: 'available' },
  { id: 'T05', label: 'Table 05 (Garden Vista)', capacity: 4, section: 'Main Dining', status: 'reserved', patronName: 'Lord & Lady S.' },
  { id: 'T06', label: 'Table 06 (Sommelier Nook)', capacity: 2, section: 'Main Dining', status: 'available' },
  { id: 'T07', label: 'Table 07 (Terrace Arch)', capacity: 3, section: 'Main Dining', status: 'available' },
  { id: 'T08', label: 'Table 08 (Vaulted Niche)', capacity: 2, section: 'Main Dining', status: 'seated', patronName: 'Gourmand Table' },
  { id: 'CC1', label: 'Chef Counter 01', capacity: 1, section: 'Chef Counter', status: 'available' },
  { id: 'CC2', label: 'Chef Counter 02', capacity: 1, section: 'Chef Counter', status: 'available' },
  { id: 'CC3', label: 'Chef Counter 03', capacity: 1, section: 'Chef Counter', status: 'locked', lockTtlRemaining: 242, patronName: 'M. Laurent G.' },
  { id: 'CC4', label: 'Chef Counter 04', capacity: 1, section: 'Chef Counter', status: 'available' },
  { id: 'SPC1', label: 'Salon Privé Céleste', capacity: 16, section: 'Salon Privé Céleste', status: 'reserved', patronName: 'Château d’Honneur Gala' }
];

export const INITIAL_TELEMETRY: {
  time: string;
  tps: number;
  latencyMs: number;
  dbPool: number;
  redisLocks: number;
}[] = [
  { time: '10:00:00', tps: 120, latencyMs: 14, dbPool: 8, redisLocks: 1 },
  { time: '10:00:15', tps: 450, latencyMs: 18, dbPool: 14, redisLocks: 3 },
  { time: '10:00:30', tps: 1420, latencyMs: 32, dbPool: 26, redisLocks: 8 },
  { time: '10:00:45', tps: 2840, latencyMs: 58, dbPool: 42, redisLocks: 19 },
  { time: '10:01:00', tps: 3410, latencyMs: 74, dbPool: 50, redisLocks: 24 },
  { time: '10:01:15', tps: 2200, latencyMs: 46, dbPool: 36, redisLocks: 16 },
  { time: '10:01:30', tps: 1100, latencyMs: 28, dbPool: 22, redisLocks: 9 },
  { time: '10:01:45', tps: 680, latencyMs: 19, dbPool: 15, redisLocks: 5 },
  { time: '10:02:00', tps: 320, latencyMs: 15, dbPool: 10, redisLocks: 2 }
];
