import Image from 'next/image';
import {
  MediaBody,
  MediaFigure,
  MediaObject,
} from '@twilio-paste/core/media-object';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { links } from '../words';
import depployLogoImage from '/images/depploy-logo.svg';

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
      <MediaObject verticalAlign="center">
        <MediaFigure spacing="space40">
          <Image
            src={depployLogoImage}
            alt="Depploy logo"
            height="31px"
            width="31px"
          />
        </MediaFigure>
        <MediaBody>
          <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
            depploy
          </Text>
        </MediaBody>
      </MediaObject>
    </Box>
  );
}
