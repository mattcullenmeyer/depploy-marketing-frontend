import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { links } from '../words';

export function MenuLogo() {
  return (
    <Box
      as="a"
      href={links.home}
      textDecoration="none"
      display="flex"
      alignItems="center"
      columnGap="space30"
    >
      <Box as="div">
        <Text as="div" fontSize="fontSize70" fontWeight="fontWeightSemibold">
          depploy
        </Text>
      </Box>
    </Box>
  );
}
