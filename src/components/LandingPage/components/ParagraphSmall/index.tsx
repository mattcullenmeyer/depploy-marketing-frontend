import { Text } from '@twilio-paste/core/text';

export const ParagraphSmall = ({ text }: { text: string }) => (
  <Text
    as="p"
    fontSize="fontSize40"
    lineHeight="lineHeight40"
    fontWeight="fontWeightNormal"
  >
    {text}
  </Text>
);
