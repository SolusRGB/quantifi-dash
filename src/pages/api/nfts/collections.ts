import type { NextApiRequest, NextApiResponse } from "next";

type Collection = {
  symbol: string;
  name: string;
  description: string;
  image: string;
  floorPrice: number;
  volumeAll: number;
};

type PopularCollectionsResponse = {
  collections: Collection[];
};

export default async function collections(
  req: NextApiRequest,
  res: NextApiResponse<PopularCollectionsResponse | { message: string }>,
) {
  const endpoint =
    "https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections?timeRange=1d";
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(
        `API call failed with status: ${response.status} - ${message}`,
      );
    }
    const data = (await response.json()) as Collection[];
    if (Array.isArray(data)) {
      res.status(200).json({ collections: data });
    } else {
      res
        .status(500)
        .json({ message: "Invalid data format received from external API" });
    }
  } catch (error: unknown) {
    console.error(error);
    res
      .status(500)
      .json({ message: (error as Error)?.message ?? "Internal server error" });
  }
}
