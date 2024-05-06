import {
  type PopularCollectionsResponse,
  type Collection,
} from "@/types/magicEdenTypes";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Retrieves popular collections from the Magic Eden API.
 * @param req - The NextApiRequest object.
 * @param res - The NextApiResponse object that will be used to send the response.
 */
export default async function magicEdenCollections(
  req: NextApiRequest,
  res: NextApiResponse<PopularCollectionsResponse | { message: string }>,
) {
  // Define the endpoint for retrieving popular collections from Magic Eden API
  const endpoint =
    "https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections?timeRange=1d";

  try {
    // Send a request to the Magic Eden API endpoint
    const response = await fetch(endpoint);

    // Check if the response is not successful (status code outside the 200-299 range)
    if (!response.ok) {
      // If the response is not successful, extract the error message from the response body
      const message = await response.text();
      throw new Error(
        `API call failed with status: ${response.status} - ${message}`,
      );
    }

    // Parse the response body as JSON and cast it to an array of Collection objects
    const data = (await response.json()) as Collection[];

    // Check if the parsed data is an array
    if (Array.isArray(data)) {
      // If the data is an array, send a successful response with the collections data
      res.status(200).json({ collections: data });
    } else {
      // If the data is not an array, send an error response indicating an invalid data format
      res
        .status(500)
        .json({ message: "Invalid data format received from external API" });
    }
  } catch (error: unknown) {
    // If an error occurs during the API call or data processing, log the error
    console.error(error);

    // Send an error response with the error message or a generic message if the error is not of type Error
    res.status(500).json({
      message: (error as Error)?.message ?? "Internal server error",
    });
  }
}
