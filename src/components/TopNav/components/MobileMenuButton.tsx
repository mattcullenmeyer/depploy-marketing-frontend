import { useRouter } from 'next/router';
import { useGlobalContext } from '../../../state/context';
import { THEME_MODE } from '../../../constants/localStorage';
import { ThemeMode } from '../../../types/user';
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Text } from '@twilio-paste/core/text';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  useMenuState,
} from '@twilio-paste/core/menu';
import { AiOutlineMenu } from 'react-icons/ai';
import { MobileMenuLink } from './MobileMenuLink';
import { words, links } from '../words';
import styles from '../index.module.scss';

export function MobileMenuButton() {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  const menu = useMenuState();
  const router = useRouter();

  const onClickSignup = () => {
    router.push(links.signup);
  };
  const onClickSignin = () => {
    router.push(links.signin);
  };

  const handleThemeChange = () => {
    localStorage.setItem(
      THEME_MODE,
      isDarkMode ? ThemeMode.Default : ThemeMode.Dark
    );
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box className={styles.menu_nav_button}>
      <MenuButton {...menu} variant="secondary">
        <AiOutlineMenu style={{ fontSize: '20px' }} />
      </MenuButton>
      <Menu {...menu} aria-label="Menu">
        <MenuItem {...menu}>
          <MobileMenuLink href={links.products} label={words.products} />
        </MenuItem>
        <MenuItem {...menu}>
          <MobileMenuLink href={links.blog} label={words.blog} />
        </MenuItem>
        <MenuItem {...menu}>
          <MobileMenuLink href={links.pricing} label={words.pricing} />
        </MenuItem>
        <MenuItem {...menu}>
          <Text
            as="a"
            fontSize="fontSize40"
            textDecoration="none"
            onClick={handleThemeChange}
          >
            {isDarkMode ? 'Light theme' : 'Dark theme'}
          </Text>
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>
          <Button variant="primary" fullWidth={true} onClick={onClickSignup}>
            {words.signup}
          </Button>
        </MenuItem>
        <MenuItem {...menu}>
          <Button variant="secondary" fullWidth={true} onClick={onClickSignin}>
            {words.signin}
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}
