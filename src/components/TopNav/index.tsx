import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';
import { useRouter } from 'next/router';
import { MenuLink } from './components/MenuLink';
import { MenuLogo } from './components/MenuLogo';
import { MobileMenuButton } from './components/MobileMenuButton';
import { ThemeButton } from './components/ThemeButton';
import styles from './topNav.module.scss';
import { words, links } from './words';

export function TopNav(): React.ReactElement {
  const router = useRouter();

  const onClickGetStarted = () => {
    router.push(links.signup);
  };

  return (
    <Box
      as="header"
      className={styles.top_nav_container}
      backgroundColor="colorBackgroundBody"
      zIndex="zIndex90"
      boxShadow="shadowLow"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={styles.top_nav_layout}
      >
        <Box style={{ display: 'flex', gap: '25px' }}>
          <MenuLogo />
          <MenuLink href={links.products} label={words.products} />
          <MenuLink href={links.blog} label={words.blog} />
          <MenuLink href={links.pricing} label={words.pricing} />
        </Box>
        <Box style={{ display: 'flex' }}>
          <Stack orientation="horizontal" spacing="space60">
            <ThemeButton />
            <MenuLink href={links.signin} label={words.signin} />
            <Box className={styles.menu_signup_button}>
              <Button variant="primary" onClick={onClickGetStarted}>
                {words.getStarted}
              </Button>
            </Box>
          </Stack>
          <MobileMenuButton />
        </Box>
      </Box>
    </Box>
  );
}
