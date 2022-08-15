import { Box } from '@twilio-paste/core/box';
import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactElement;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return <Box className={styles.layout}>{children}</Box>;
}
