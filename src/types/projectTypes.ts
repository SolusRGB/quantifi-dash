export interface ProjectData {
  id: number;
  name: string;
  assessDate: string;
  score: string | null;
  mintDate: string;
  image: Buffer | null;
  href: string;
  chain: string;
}

export interface TransformedProject {
  id: number;
  name: string;
  assessDate: string;
  score: string | null;
  mintDate: string;
  image: string | null; // Image as a base64 string
  href: string;
  chain: string;
}
