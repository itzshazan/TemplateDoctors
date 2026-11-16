// Card data for grid pages. The /service grid is built from services.ts in pages.ts.

export interface Card {
  title: string;
  image: string;
  link: string;
}

export const cardGrids: Record<string, { sub: string; cards: Card[] }> = {};
