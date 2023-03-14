import { useRouter } from 'next/router';
import { Box } from '@twilio-paste/core/box';
import { CtaButton } from '../CtaButton';
import { Heading2 } from '../Heading2';
import { Paragraph } from '../Paragraph';

interface CtaSectionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonUrl: string;
}

export const CtaSection = ({
  heading,
  subheading,
  buttonText,
  buttonUrl,
}: CtaSectionProps) => {
  const router = useRouter();

  return (
    <Box
      backgroundColor="colorBackgroundBodyInverse"
      borderRadius="borderRadius30"
      marginBottom="space190"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      padding="space90"
    >
      <Heading2
        heading={heading}
        maxWidth="1200px"
        inverseColor
        marginBottom={false}
      />
      <Box marginTop="space30">
        <Paragraph text={subheading} inverseColor maxWidth="750px" />
      </Box>

      <CtaButton
        buttonText={buttonText}
        onClickButton={() => router.push(buttonUrl)}
        marginTop
        secondaryColor
      />
    </Box>
  );
};
