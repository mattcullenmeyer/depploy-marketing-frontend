import { Text } from '@twilio-paste/core/text';
import styles from '../index.module.scss';

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
      fontSize="fontSize40"
      textDecoration="none"
      className={styles.mobile_menu_link}
    >
      {label}
    </Text>
  );
}
