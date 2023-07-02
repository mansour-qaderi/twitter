import Image, { ImageProps } from "next/image";

interface NextImageProps extends ImageProps {
  src: string;
  alt: string;
}

export const NextImage = ({ src, alt, ...rest }: NextImageProps) => {
  return <Image src={src} alt={alt} {...rest} />;
};
