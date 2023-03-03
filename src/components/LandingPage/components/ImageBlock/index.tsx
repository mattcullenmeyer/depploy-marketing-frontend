import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';

interface ImageBlockProps {
  src: string;
  alt: string;
  width?: string;
  justifyContent?: string;
  priority?: boolean;
}

export function ImageBlock({
  src,
  alt,
  width = '350px',
  justifyContent = 'center',
  priority = false,
}: ImageBlockProps) {
  return (
    <Box display="flex" justifyContent={justifyContent}>
      <Box width={width}>
        <Image src={src} layout="responsive" alt={alt} priority={priority} />
      </Box>
    </Box>
  );
}
