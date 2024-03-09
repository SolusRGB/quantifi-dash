// Constants
const LAMPORTS_PER_SOL = 1000000000; // 1 SOL = 1,000,000,000 lamports

// Function to convert lamports to SOL
export function lamportsToSOL(lamports: number) {
  return lamports / LAMPORTS_PER_SOL;
}
