import { Box } from '@twilio-paste/core/box';
import { BackgroundColorsKeys } from '@twilio-paste/theme/dist/types/GenericThemeShape';
import styles from './index.module.scss';

interface LayoutProps {
  paddingTop?: boolean;
  borderTop?: boolean;
  backgroundColor?: BackgroundColorsKeys;
  children: React.ReactElement;
}

export function Layout({
  paddingTop = false,
  borderTop = false,
  backgroundColor = 'colorBackgroundBody',
  children,
}: LayoutProps): React.ReactElement {
  const layoutClassName =
    styles.layout + (paddingTop ? ` ${styles.paddingTop}` : '');

  return (
    <Box backgroundColor={backgroundColor}>
      <Box
        className={layoutClassName}
        style={{
          borderTop: borderTop ? '1px solid rgba(91, 97, 110, 0.2)' : 'none',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
