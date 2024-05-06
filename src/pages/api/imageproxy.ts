import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

/**
 * This is an API route handler that acts as an image proxy.
 * It allows your application to fetch and serve images from external URLs through your own server.
 *
 * The main purpose of using an image proxy is to:
 * - Hide the original image URLs from the client-side for security reasons.
 * - Implement access control mechanisms to validate and authorize requests before serving images.
 * - Apply caching strategies to improve performance and reduce load on the original image source.
 * - Perform transformations or optimizations on the images before serving them to the client.
 * - Handle scenarios where the external image source is unavailable or responds with errors.
 *
 * How it works:
 * 1. The client sends a request to this API route, including the `imageUrl` as a query parameter.
 * 2. The server extracts the `imageUrl` from the query parameters and validates it.
 * 3. If the `imageUrl` is valid, the server sends a request to fetch the image from the provided URL.
 * 4. If the image fetch is successful, the server sets the appropriate `Content-Type` header based on the image's content type.
 * 5. The server then pipes the fetched image data to the response object, effectively serving the image to the client.
 * 6. If any errors occur during the image fetching process, the server catches the error, logs it, and sends an appropriate error response.
 *
 * By using this image proxy, your application can serve images from external URLs while having control over the image fetching process,
 * security, and performance optimizations on the server-side.
 */

/**
 * This is handling the image proxy API request.
 * What does this mean?
 * Proxies the image from the provided imageUrl and sends it as a response to use in the frontend.
 */

/**
 * Handles the image proxy API request.
 * Proxies the image from the provided imageUrl and sends it as a response.
 * @param req - The NextApiRequest object representing the incoming request.
 * @param res - The NextApiResponse object representing the outgoing response.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Extract the imageUrl from the query parameters
  const { imageUrl } = req.query;

  // Check if imageUrl is a string
  if (typeof imageUrl !== "string") {
    // If imageUrl is not a string, send a 400 status code with an "Invalid query" message
    res.status(400).send("Invalid query");
    return;
  }

  try {
    // Send a request to fetch the image from the provided imageUrl
    const response = await fetch(imageUrl);

    // Check if the response is not successful (status code outside the 200-299 range)
    if (!response.ok) {
      throw new Error("Failed to fetch the image.");
    }

    // Set the Content-Type header of the response based on the fetched image's Content-Type
    res.setHeader("Content-Type", response.headers.get("Content-Type") ?? "");

    // Check if the response body exists
    if (response.body) {
      // If the response body exists, pipe it to the response object to send the image data
      response.body.pipe(res);
    } else {
      // If the response body is null, throw an error
      throw new Error("Response body is null.");
    }
  } catch (error) {
    // If an error occurs during the image fetching process, log the error and send a 500 status code with a "Failed to proxy the image." message
    console.error(error);
    res.status(500).send("Failed to proxy the image.");
  }
}
