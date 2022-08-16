import { Text } from '@twilio-paste/core/text';
import styles from '../topNav.module.scss';

interface MobileMenuLinkProps {
  href: string;
  label: string;
}

export function MobileMenuLink({
  href,
  label,
}: MobileMenuLinkProps): React.ReactElement {
  return (
    <Text
      as="a"
      href={href}
      fontSize="fontSize30"
      fontWeight="fontWeightSemibold"
      textDecoration="none"
      className={styles.mobile_menu_link}
    >
      {label}
    </Text>
  );
}
