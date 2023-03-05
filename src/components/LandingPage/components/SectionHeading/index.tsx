import { Box } from '@twilio-paste/core/box';
import { Heading2 } from '../Heading2';
import { Paragraph } from '../Paragraph';

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
      paddingTop="space190"
    >
      <Heading2 heading={heading} maxWidth="1200px" />
      {subheading && (
        <Box textAlign="center">
          <Paragraph text={subheading} maxWidth="700px" />
        </Box>
      )}
    </Box>
  );
};
