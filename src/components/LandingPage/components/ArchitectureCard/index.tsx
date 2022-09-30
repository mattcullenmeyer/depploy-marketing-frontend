import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Text } from '@twilio-paste/core/text';
import styles from './architectureCard.module.scss';

interface ArchitectureCardProps {
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
}

export function ArchitectureCard({
  image,
  imageAlt,
  heading,
  description,
}: ArchitectureCardProps): React.ReactElement {
  return (
    <Box className={styles.architectureCard}>
      <Box width="60px" marginBottom="space30">
        <Image src={image} alt={imageAlt} />
      </Box>
      <Heading as="h4" variant="heading40">
        {heading}
      </Heading>
      <Text as="p" fontSize="fontSize40" lineHeight="lineHeight40">
        {description}
      </Text>
    </Box>
  );
}
