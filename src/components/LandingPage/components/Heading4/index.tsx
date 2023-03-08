import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface Heading3Props {
  heading: React.ReactNode;
}

export function Heading4({ heading }: Heading3Props) {
  return (
    <Box>
      <Text as="h4" fontWeight="fontWeightBold" className={styles.heading4}>
        {heading}
      </Text>
    </Box>
  );
}
