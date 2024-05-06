/**
 * Image loader for Next.js Image component
 * This is used for loading images from external sources
 * and proxying them through the Next.js API.
 *
 * This is useful for preventing mixed-content error
 * Securing your site by not loading images from untrusted sources.
 *
 * @param src - The source URL of the image to load
 * @returns The proxied image URL
 */

interface ImageLoaderProps {
  src: string;
}

export const imageLoader = ({ src }: ImageLoaderProps) => {
  return `/api/imageproxy?imageUrl=${encodeURIComponent(src)}`;
};
