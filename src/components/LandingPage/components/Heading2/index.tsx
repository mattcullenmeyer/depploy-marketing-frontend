import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface Heading2Props {
  heading: React.ReactNode;
  maxWidth: string;
}

export function Heading2({ heading, maxWidth }: Heading2Props) {
  return (
    <Box marginBottom="space50" maxWidth={maxWidth}>
      <Text
        as="h2"
        fontSize="fontSize100"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight100"
      >
        {heading}
      </Text>
    </Box>
  );
}
