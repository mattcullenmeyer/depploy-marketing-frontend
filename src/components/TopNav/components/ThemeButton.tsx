import { Box } from '@twilio-paste/core/box';
import { DarkModeIcon } from '@twilio-paste/icons/cjs/DarkModeIcon';
import { LightModeIcon } from '@twilio-paste/icons/cjs/LightModeIcon';
import { THEME_MODE } from '../../../constants/localStorage';
import { useGlobalContext } from '../../../state/context';
import { ThemeMode } from '../../../types/user';
import styles from '../index.module.scss';

export function ThemeButton() {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  const handleThemeChange = () => {
    localStorage.setItem(
      THEME_MODE,
      isDarkMode ? ThemeMode.Default : ThemeMode.Dark
    );
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      onClick={handleThemeChange}
      style={{ cursor: 'pointer' }}
      className={styles.theme_button}
    >
      {isDarkMode ? (
        <LightModeIcon
          decorative={false}
          title="Switch to light theme"
          size="sizeIcon60"
        />
      ) : (
        <DarkModeIcon
          decorative={false}
          title="Switch to dark theme"
          size="sizeIcon60"
        />
      )}
    </Box>
  );
}
