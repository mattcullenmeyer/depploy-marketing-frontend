import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface Heading1Props {
  heading: React.ReactNode;
}

export const Heading1 = ({ heading }: Heading1Props) => (
  <Box marginBottom="space50" className={styles.heading1Container}>
    <Text as="h1" fontWeight="fontWeightBold" className={styles.heading1}>
      {heading}
    </Text>
  </Box>
);
