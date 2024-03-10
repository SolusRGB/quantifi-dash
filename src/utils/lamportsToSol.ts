// Convert lamports to SOL
export function lamportsToSOL(lamports: number) {
  const LAMPORTS_PER_SOL = 1000000000; // 1 SOL = 1,000,000,000 lamports
  return lamports / LAMPORTS_PER_SOL;
}
// Convert lamports to USD
export function lamportsToUSD(lamports: number, solToUsdRate: number) {
  const sol = lamportsToSOL(lamports);
  return sol * solToUsdRate;
}
