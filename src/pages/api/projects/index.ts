import { PrismaClient, type Project } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { type TransformedProject } from "../../../types/projectTypes";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransformedProject[] | { message: string }>,
) {
  try {
    // Fetch all projects from the database using Prisma
    const projects: Project[] = await prisma.project.findMany();

    // Transform the projects by converting the image Buffer to a base64 string
    const modifiedProjects: TransformedProject[] = projects.map((project) => ({
      ...project,
      image: project.image ? project.image.toString("base64") : null,
    }));

    // Send the transformed projects as a JSON response with a 200 status code
    res.status(200).json(modifiedProjects);
  } catch (error) {
    // If an error occurs, log the error and send a 500 status code with an error message
    console.error("Request error", error);
    res.status(500).json({ message: "Error fetching projects" });
  }
}
