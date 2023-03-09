import { Box } from '@twilio-paste/core/box';
import { Heading3 } from '../Heading3';
import { ImageBlock } from '../ImageBlock';
import { Paragraph } from '../Paragraph';
import styles from './index.module.scss';

interface SideComponentProps {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  text: string;
}

interface SideBySideProps {
  leftSide: SideComponentProps;
  rightSide: SideComponentProps;
}

export function SideBySide({
  leftSide,
  rightSide,
}: SideBySideProps): React.ReactElement {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      columnGap="space190"
      className={styles.sideBySideContainer}
    >
      <SideComponent
        imgSrc={leftSide.imgSrc}
        imgAlt={leftSide.imgAlt}
        heading={leftSide.heading}
        text={leftSide.text}
      />
      <SideComponent
        imgSrc={rightSide.imgSrc}
        imgAlt={rightSide.imgAlt}
        heading={rightSide.heading}
        text={rightSide.text}
      />
    </Box>
  );
}

const SideComponent: React.FC<SideComponentProps> = ({
  imgSrc,
  imgAlt,
  heading,
  text,
}) => (
  <Box display="flex" className={styles.sideColumnContainer}>
    <Box
      marginBottom="space90"
      height="200px"
      display="flex"
      alignItems="center"
      className={styles.sideColumnImageBlock}
    >
      <ImageBlock
        src={imgSrc}
        alt={imgAlt}
        width="300px"
        justifyContent="flex-start"
      />
    </Box>
    <Box>
      <Heading3 heading={heading} />
      <Paragraph text={text} />
    </Box>
  </Box>
);
