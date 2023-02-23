import { Box } from '@twilio-paste/core/box';
import { DarkModeIcon } from '@twilio-paste/icons/cjs/DarkModeIcon';
import { LightModeIcon } from '@twilio-paste/icons/cjs/LightModeIcon';
import { THEME_MODE } from '../../../constants/localStorage';
import { useGlobalContext } from '../../../state/context';
import { ThemeMode } from '../../../types/user';

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
    <Box onClick={handleThemeChange} style={{ cursor: 'pointer' }}>
      {isDarkMode ? (
        <LightModeIcon
          decorative={false}
          title="Switch to light mode"
          size="sizeIcon60"
        />
      ) : (
        <DarkModeIcon
          decorative={false}
          title="Switch to dark mode"
          size="sizeIcon60"
        />
      )}
    </Box>
  );
}
