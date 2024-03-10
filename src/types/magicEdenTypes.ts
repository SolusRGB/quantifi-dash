export type Collection = {
  symbol: string;
  name: string;
  description: string;
  image: string;
  floorPrice: number;
  volumeAll: number;
};

export type ApiResponse = {
  collections: Collection[];
};

export type PopularCollectionsResponse = {
  collections: Collection[];
};
