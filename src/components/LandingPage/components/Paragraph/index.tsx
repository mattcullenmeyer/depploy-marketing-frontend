import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

interface ParagraphProps {
  text: string;
  maxWidth?: string;
}

export function Paragraph({ text, maxWidth = '600px' }: ParagraphProps) {
  return (
    <Box marginBottom="space90" maxWidth={maxWidth}>
      <Text
        as="p"
        fontSize="fontSize50"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight60"
      >
        {text}
      </Text>
    </Box>
  );
}
