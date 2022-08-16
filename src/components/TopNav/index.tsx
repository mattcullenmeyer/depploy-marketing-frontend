import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { useRouter } from 'next/router';
import { MenuLink } from './components/MenuLink';
import { MobileMenuButton } from './components/MobileMenuButton';
import styles from './topNav.module.scss';
import { words, links } from './words';

export function TopNav(): React.ReactElement {
  const router = useRouter();

  const onClickGetStarted = () => {
    router.push(links.signup);
  };

  return (
    <Box as="header" className={styles.top_nav_container}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={styles.top_nav_layout}
      >
        <Box>
          <Text
            as="a"
            href="/"
            fontSize="fontSize70"
            fontWeight="fontWeightBold"
            textDecoration="none"
            padding="space20"
            color="colorTextLink"
          >
            depploy
          </Text>
        </Box>
        <Box as="nav">
          <Stack orientation="horizontal" spacing="space90">
            <MenuLink href={links.products} label={words.products} />
            <MenuLink href={links.blog} label={words.blog} />
            <MenuLink href={links.pricing} label={words.pricing} />
          </Stack>
        </Box>
        <Box>
          <Stack orientation="horizontal" spacing="space70">
            <MenuLink href={links.signin} label={words.signin} />
            <Box className={styles.menu_signup_button}>
              <Button variant="primary" onClick={onClickGetStarted}>
                {words.getStarted}
              </Button>
            </Box>
            <MobileMenuButton />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
