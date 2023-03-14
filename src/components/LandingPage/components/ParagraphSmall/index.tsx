import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

export const ParagraphSmall = ({ text }: { text: React.ReactNode }) => (
  <Text as="p" fontWeight="fontWeightNormal" className={styles.paragraphSmall}>
    {text}
  </Text>
);
