import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { GiFairyWings } from 'react-icons/gi';
import { links } from '../words';
import variables from '../../../styles/variables.module.scss';

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
      <Box as="div" display="flex">
        <GiFairyWings
          style={{ fontSize: '35px', color: variables.primaryColor }}
        />
      </Box>
      <Box as="div">
        <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
          Depploy
        </Text>
      </Box>
    </Box>
  );
}
