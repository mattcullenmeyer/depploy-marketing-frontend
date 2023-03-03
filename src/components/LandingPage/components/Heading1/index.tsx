import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface Heading1Props {
  heading: React.ReactNode;
  maxWidth: string;
}

export function Heading1({ heading, maxWidth }: Heading1Props) {
  return (
    <Box marginTop="space190" marginBottom="space50" maxWidth={maxWidth}>
      <Text
        as="h1"
        fontSize="fontSize110"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight110"
      >
        {heading}
      </Text>
    </Box>
  );
}
