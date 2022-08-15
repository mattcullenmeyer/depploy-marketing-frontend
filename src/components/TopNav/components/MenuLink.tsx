import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import styles from '../topNav.module.scss';

interface MenuLinkProps {
  href: string;
  label: string;
}

export function MenuLink({ href, label }: MenuLinkProps): React.ReactElement {
  return (
    <Box
      as="a"
      href={href}
      display="flex"
      alignItems="center"
      textDecoration="none"
      className={styles.menu_link}
    >
      <Text
        as="div"
        fontSize="fontSize40"
        fontWeight="fontWeightSemibold"
        textDecoration="none"
      >
        {label}
      </Text>
    </Box>
  );
}
