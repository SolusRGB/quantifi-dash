import { type CryptocurrencyData } from "@/types/coinGeckoTypes";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function solanaTokenPrice(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Define the CoinGecko API endpoint for fetching Solana token price
  const endpoint =
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true&precision=2&x_cg_demo_api_key=CG-97rkPtxMBDDxtgeTqW4BT22Y";

  try {
    // Send a request to the CoinGecko API endpoint
    const response = await fetch(endpoint);

    // Check if the response is not successful (status code outside the 200-299 range)
    if (!response.ok) {
      // If the response is not successful, throw an error with the status code and response text
      throw new Error(
        `API call failed with status: ${
          response.status
        } - ${await response.text()}`,
      );
    }

    // Parse the response body as JSON and cast it to the CryptocurrencyData type
    const data = (await response.json()) as CryptocurrencyData;

    // Send a successful response with the fetched data
    res.status(200).json(data);
  } catch (error: unknown) {
    // If an error occurs during the API call or data processing
    if (error instanceof Error) {
      // If the error is an instance of the Error class, log the error and send an error response with the error message
      console.error(error);
      res.status(500).json({ message: error.message });
    } else {
      // If the error is not an instance of the Error class, send a generic "Internal server error" response
      res.status(500).json({ message: "Internal server error" });
    }

    // Send an error response with the error message or a generic "Internal server error" message
    res
      .status(500)
      .json({ message: (error as Error) || "Internal server error" });
  }
}
