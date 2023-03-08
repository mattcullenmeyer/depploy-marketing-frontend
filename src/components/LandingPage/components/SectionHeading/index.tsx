import { Box } from '@twilio-paste/core/box';
import { Heading2 } from '../Heading2';
import { Paragraph } from '../Paragraph';
import styles from './index.module.scss';

interface SectionHeadingProps {
  heading: string | React.ReactNode;
  subheading?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subheading,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      className={styles.sectionHeadingContainer}
    >
      <Heading2 heading={heading} maxWidth="1200px" />
      {subheading && <Paragraph text={subheading} maxWidth="750px" />}
    </Box>
  );
};
