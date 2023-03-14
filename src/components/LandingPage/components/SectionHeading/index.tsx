import { Box } from '@twilio-paste/core/box';
import { Heading2 } from '../Heading2';
import { Paragraph } from '../Paragraph';
import styles from './index.module.scss';

interface SectionHeadingProps {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  inverseColor?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subheading,
  inverseColor = false,
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
      <Heading2
        heading={heading}
        maxWidth="1200px"
        inverseColor={inverseColor}
        marginBottom={false}
      />
      {subheading && (
        <Box marginTop="space50">
          <Paragraph
            text={subheading}
            inverseColor={inverseColor}
            maxWidth="750px"
          />
        </Box>
      )}
    </Box>
  );
};
