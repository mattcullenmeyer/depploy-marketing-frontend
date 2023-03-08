import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface ParagraphProps {
  text: string;
  maxWidth?: string;
}

export function Paragraph({ text, maxWidth = '600px' }: ParagraphProps) {
  return (
    <Box maxWidth={maxWidth}>
      <Text as="p" fontWeight="fontWeightNormal" className={styles.paragraph}>
        {text}
      </Text>
    </Box>
  );
}
