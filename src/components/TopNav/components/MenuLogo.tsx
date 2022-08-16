import { Box } from '@twilio-paste/core/box';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { GiFairyWings } from 'react-icons/gi';
import { links } from '../words';
import variables from '../../../styles/variables.module.scss';

export function MenuLogo() {
  return (
    <Box as="a" href={links.home} textDecoration="none">
      <Stack orientation="horizontal" spacing="space40">
        <Box as="div" display="flex" alignItems="center">
          <GiFairyWings
            style={{ fontSize: '40px', color: variables.primaryColor }}
          />
        </Box>
        <Stack orientation="vertical" spacing="space10">
          <Text as="div" fontSize="fontSize40" fontWeight="fontWeightSemibold">
            Depploy
          </Text>
          <Text as="div" fontSize="fontSize30" fontWeight="fontWeightMedium">
            Infrastructure as Code
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
