import { Text } from '@twilio-paste/core/text';

interface ParagraphProps {
  text: string;
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <Text
      as="p"
      fontSize="fontSize60"
      fontWeight="fontWeightNormal"
      lineHeight="lineHeight70"
      marginBottom="space80"
    >
      {text}
    </Text>
  );
}
