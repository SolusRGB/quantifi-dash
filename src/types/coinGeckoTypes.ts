export type TokenInformation = {
  usd: number;
  usd_24h_change: number;
  last_updated_at: number;
};

export type CryptocurrencyData = {
  solana: TokenInformation;
};
