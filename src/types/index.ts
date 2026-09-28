export interface Dish {
  id: string;
  courseTag: string;
  title: string;
  description: string;
  badge?: string;
  tags: string[];
  pairing: string;
  supplement?: string;
}

export interface TastingMenuOption {
  id: 'odyssee' | 'ephemere' | 'pairings';
  name: string;
  subTitle: string;
  description: string;
  pricePerPatron: number;
  optionalPairingPrice?: number;
  dishes?: Dish[];
  flights?: WineFlight[];
}

export interface WineFlight {
  id: string;
  flightTag: string;
  title: string;
  description: string;
  poursCount: string;
  price: number;
  isSommelierPick?: boolean;
  selections: string[];
}

export interface WineVintage {
  id: string;
  binNumber: string;
  region: 'burgundy' | 'jura' | 'rhone' | 'champagne';
  regionLabel: string;
  appellation: string;
  vintageYear: number;
  domain: string;
  name: string;
  tastingNotes: string;
  priceEur: number;
  bottlesInCellar: number;
  organicOrBiodynamic: boolean;
}

export interface TableStatus {
  id: string;
  label: string;
  capacity: number;
  section: 'Main Dining' | 'Chef Counter' | 'Salon Privé Céleste';
  status: 'available' | 'locked' | 'seated' | 'reserved';
  lockTtlRemaining?: number; // seconds
  patronName?: string;
}

export interface ReservationPayload {
  guests: string;
  date: string;
  time: string;
  experience: string;
  fullName: string;
  email: string;
  dietaryNotes: string;
  cardGuaranteeAuthorized: boolean;
  depositAmount: number;
  transactionHash?: string;
}

export interface TelemetryPoint {
  time: string;
  tps: number;
  p99LatencyMs: number;
  activeLocks: number;
  dbPoolActive: number;
}

export interface SystemEvent {
  id: string;
  timestamp: string;
  stage: '01. INGESTION' | '02. SEAT MUTEX' | '03. GUARANTEE' | '04. PERSISTENCE';
  description: string;
  status: 'success' | 'warning' | 'in_progress';
}
