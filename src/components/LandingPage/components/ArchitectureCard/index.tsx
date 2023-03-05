import Image from 'next/image';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { HelpText } from '@twilio-paste/core/help-text';
import {
  MediaBody,
  MediaFigure,
  MediaObject,
} from '@twilio-paste/core/media-object';
import { ParagraphSmall } from '../ParagraphSmall';
import styles from './architectureCard.module.scss';

interface ArchitectureCardProps {
  image: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  description: string;
}

export const ArchitectureCard = ({
  image,
  imageAlt,
  heading,
  subheading,
  description,
}: ArchitectureCardProps) => (
  <Box
    borderRadius="borderRadius30"
    padding="space90"
    boxShadow="shadow"
    backgroundColor="colorBackgroundBody"
    className={styles.architectureCard}
  >
    <MediaObject verticalAlign="center">
      <MediaFigure spacing="space40">
        <Image src={image} alt={imageAlt} height="45px" width="45px" />
      </MediaFigure>
      <MediaBody>
        <Heading as="h4" variant="heading30" marginBottom="space0">
          {heading}
        </Heading>
        <HelpText marginTop="space0">{subheading}</HelpText>
      </MediaBody>
    </MediaObject>
    <Box marginTop="space70">
      <ParagraphSmall text={description} />
    </Box>
  </Box>
);

export const ArchitectureCardGrid = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    display="grid"
    gridAutoRows="1fr"
    rowGap="space90"
    columnGap="space90"
    paddingY="space190"
    className={styles.architectureGridContainer}
  >
    {children}
  </Box>
);
