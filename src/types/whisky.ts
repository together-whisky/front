export interface Whisky {
  id: number;
  name: string;
  brand: string;
  type: string;
  age?: number;
  abv: number;
  origin: string;
  description: string;
  price: number;
  imageUrl: string;
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
}

export interface PairingFood {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  pairedWhiskyIds: number[];
}

export interface Review {
  id: number;
  whiskyId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}