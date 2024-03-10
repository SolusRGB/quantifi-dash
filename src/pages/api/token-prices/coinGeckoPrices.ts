// pages/api/coinGeckoPrices.ts
import { type CryptocurrencyData } from "@/types/coinGeckoTypes";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function solanaTokenPrice(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const endpoint =
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true&precision=2";

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `API call failed with status: ${
          response.status
        } - ${await response.text()}`,
      );
    }
    const data = (await response.json()) as CryptocurrencyData;
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
    res
      .status(500)
      .json({ message: (error as Error) || "Internal server error" });
  }
}
