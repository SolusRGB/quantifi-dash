import { PrismaClient } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";

const prisma = new PrismaClient();

/**
 * Handles the API request for retrieving an image by ID.
 * @param req - The NextApiRequest object representing the incoming request.
 * @param res - The NextApiResponse object representing the outgoing response.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const project = await prisma.project.findUnique({
      where: { id: parseInt(id as string, 10) },
    });

    if (project?.image) {
      res.setHeader("Content-Type", "image/jpeg");
      res.send(project.image);
    } else {
      res.status(404).json({ message: "Image not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
