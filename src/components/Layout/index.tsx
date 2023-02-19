import { Box } from '@twilio-paste/core/box';
import { BackgroundColorsKeys } from '@twilio-paste/theme/dist/types/GenericThemeShape';
import styles from './layout.module.scss';

interface LayoutProps {
  paddingTop?: boolean;
  backgroundColor?: BackgroundColorsKeys;
  children: React.ReactElement;
}

export function Layout({
  paddingTop = true,
  backgroundColor = 'colorBackgroundBody',
  children,
}: LayoutProps): React.ReactElement {
  const layoutClassName =
    styles.layout + (paddingTop ? ` ${styles.paddingTop}` : '');

  return (
    <Box backgroundColor={backgroundColor}>
      <Box className={layoutClassName}>{children}</Box>
    </Box>
  );
}
