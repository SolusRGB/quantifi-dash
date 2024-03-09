// pages/api/imageproxy.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { imageUrl } = req.query;
  if (typeof imageUrl !== "string") {
    res.status(400).send("Invalid query");
    return;
  }

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to fetch the image.");

    res.setHeader("Content-Type", response.headers.get("Content-Type") ?? "");
    if (response.body) {
      response.body.pipe(res);
    } else {
      throw new Error("Response body is null.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to proxy the image.");
  }
}
