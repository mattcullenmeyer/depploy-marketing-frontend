import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';

interface ImageBlockProps {
  src: string;
  alt: string;
}

export function ImageBlock({ src, alt }: ImageBlockProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="450px">
        <Image src={src} layout="responsive" alt={alt} />
      </Box>
    </Box>
  );
}
