import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface Heading1Props {
  heading: React.ReactNode;
  maxWidth: string;
}

export function Heading1({ heading, maxWidth }: Heading1Props) {
  return (
    <Box
      marginBottom="space50"
      maxWidth={maxWidth}
      className={styles.heading1Container}
    >
      <Text as="h1" fontWeight="fontWeightBold" className={styles.heading1}>
        {heading}
      </Text>
    </Box>
  );
}
