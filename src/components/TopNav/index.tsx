import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';
import { Text } from '@twilio-paste/core/text';
import { useRouter } from 'next/router';
import { MenuLink } from './components/MenuLink';
import styles from './topNav.module.css';

export function TopNav(): React.ReactElement {
  const router = useRouter();

  const onClickGetStarted = () => {
    router.push('#');
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
            <MenuLink href="#" label="Product" />
            <MenuLink href="#" label="Pricing" />
            <MenuLink href="#" label="Blog" />
          </Stack>
        </Box>
        <Box>
          <Stack orientation="horizontal" spacing="space70">
            <Text
              as="a"
              href="#"
              fontSize="fontSize40"
              fontWeight="fontWeightSemibold"
              textDecoration="none"
              className={styles.login_link}
            >
              Sign in
            </Text>
            <Button variant="primary" onClick={onClickGetStarted}>
              Get started
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
