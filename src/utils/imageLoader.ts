interface ImageLoaderProps {
  src: string;
}

export const imageLoader = ({ src }: ImageLoaderProps) => {
  return `/api/imageproxy?imageUrl=${encodeURIComponent(src)}`;
};
