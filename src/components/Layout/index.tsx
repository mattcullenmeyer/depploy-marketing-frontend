import { Box } from '@twilio-paste/core/box';
import styles from './layout.module.scss';

interface LayoutProps {
  paddingTop?: boolean;
  children: React.ReactElement;
}

export function Layout({
  paddingTop = true,
  children,
}: LayoutProps): React.ReactElement {
  const layoutClassName =
    styles.layout + (paddingTop ? ` ${styles.paddingTop}` : '');

  return <Box className={layoutClassName}>{children}</Box>;
}
