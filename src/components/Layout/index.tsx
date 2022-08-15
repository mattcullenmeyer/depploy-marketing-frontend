import { Box } from '@twilio-paste/core/box';
import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactElement;
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return <Box className={styles.layout}>{children}</Box>;
}
