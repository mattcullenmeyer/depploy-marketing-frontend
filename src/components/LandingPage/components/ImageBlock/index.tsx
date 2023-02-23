import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';

interface ImageBlockProps {
  src: string;
  alt: string;
  width?: string;
  priority?: boolean;
}

export function ImageBlock({
  src,
  alt,
  width = '400px',
  priority = false,
}: ImageBlockProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Box width={width}>
        <Image src={src} layout="responsive" alt={alt} priority={priority} />
      </Box>
    </Box>
  );
}
