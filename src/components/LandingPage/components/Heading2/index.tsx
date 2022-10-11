import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface Heading2Props {
  heading: string;
}

export function Heading2({ heading }: Heading2Props) {
  return (
    <Box maxWidth="370px" marginBottom="space120">
      <Text
        as="h2"
        fontSize="fontSize60"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight70"
      >
        {heading}
      </Text>
    </Box>
  );
}
