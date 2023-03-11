import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from './index.module.scss';

interface Heading2Props {
  heading: React.ReactNode;
  maxWidth: string;
  inverseColor?: boolean;
  marginBottom?: boolean;
}

export function Heading2({
  heading,
  maxWidth,
  inverseColor = false,
  marginBottom = true,
}: Heading2Props) {
  return (
    <Box marginBottom={marginBottom ? 'space50' : 'space0'} maxWidth={maxWidth}>
      <Text
        as="h2"
        color={inverseColor ? 'colorTextInverse' : 'colorText'}
        fontWeight="fontWeightBold"
        className={styles.heading2}
      >
        {heading}
      </Text>
    </Box>
  );
}
