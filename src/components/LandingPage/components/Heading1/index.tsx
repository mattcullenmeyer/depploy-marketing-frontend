import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface Heading1Props {
  heading: string | React.ReactElement;
}

export function Heading1({ heading }: Heading1Props) {
  return (
    <Box marginTop="space200">
      <Text
        as="h1"
        fontSize="fontSize100"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight100"
        marginBottom="space40"
      >
        {heading}
      </Text>
    </Box>
  );
}
