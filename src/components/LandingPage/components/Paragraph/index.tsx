import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface ParagraphProps {
  text: string;
  maxWidth?: string;
  inverseColor?: boolean;
}

export function Paragraph({
  text,
  maxWidth = '600px',
  inverseColor = false,
}: ParagraphProps) {
  return (
    <Box maxWidth={maxWidth}>
      <Text
        as="p"
        fontWeight="fontWeightNormal"
        color={inverseColor ? 'colorTextInverse' : 'colorText'}
        className={styles.paragraph}
      >
        {text}
      </Text>
    </Box>
  );
}
