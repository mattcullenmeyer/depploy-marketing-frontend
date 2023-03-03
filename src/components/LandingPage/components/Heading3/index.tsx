import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface Heading3Props {
  heading: React.ReactNode;
  maxWidth?: string;
}

export function Heading3({ heading, maxWidth = '700px' }: Heading3Props) {
  return (
    <Box marginBottom="space50" maxWidth={maxWidth}>
      <Text
        as="h3"
        fontSize="fontSize80"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight80"
      >
        {heading}
      </Text>
    </Box>
  );
}
