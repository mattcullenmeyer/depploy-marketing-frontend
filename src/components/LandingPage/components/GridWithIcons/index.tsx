import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';
import { IconBackground } from '../IconBackground';
import { ParagraphSmall } from '../ParagraphSmall';
import styles from './gridWithIcons.module.scss';

export interface GridItemProps {
  icon: React.ReactNode;
  heading: string;
  subheading: string;
}

export const GridWithIcons = ({
  gridItems,
}: {
  gridItems: GridItemProps[];
}) => (
  <Box
    display="grid"
    gridAutoRows="1fr"
    rowGap="space190"
    columnGap="space190"
    paddingY="space190"
    className={styles.gridContainer}
  >
    {gridItems.map((gridItem) => (
      <GridItem
        key={gridItem.heading}
        icon={gridItem.icon}
        heading={gridItem.heading}
        subheading={gridItem.subheading}
      />
    ))}
  </Box>
);

const GridItem = ({ icon, heading, subheading }: GridItemProps) => (
  <Box display="flex" flexDirection="column">
    <IconBackground>{icon}</IconBackground>
    <Heading as="h4" variant="heading30">
      {heading}
    </Heading>
    <ParagraphSmall text={subheading} />
  </Box>
);
