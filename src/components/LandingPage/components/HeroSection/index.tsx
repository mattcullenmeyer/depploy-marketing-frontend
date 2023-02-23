import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@twilio-paste/core/box';
// import { Text } from '@twilio-paste/core/text';
import { CtaButton } from '../CtaButton';
import { Heading1 } from '../Heading1';
import { Heading2 } from '../Heading2';
import styles from './heroSection.module.scss';

interface HeroSectionProps {
  heading1: string | React.ReactElement;
  heading2: string;
  buttonText: string;
  buttonUrl: string;
  children: React.ReactElement;
}

export function HeroSection({
  heading1,
  heading2,
  buttonText,
  buttonUrl,
  children,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <Box
      as="section"
      display="flex"
      justifyContent="space-between"
      marginBottom="space200"
      className={styles.heroSectionContainer}
    >
      <Box
        display="flex"
        flexDirection="column"
        marginBottom="space200"
        className={styles.textColumn}
      >
        <Heading1 heading={heading1} />
        <Heading2 heading={heading2} />
        <CtaButton
          buttonText={buttonText}
          onClickButton={() => {
            router.push(buttonUrl);
          }}
        />
        {/* TODO: Add this marketing copy as an optional prop */}
        {/* <Text as="p" marginTop="space50">
          Deploy your first app free. Upgrade anytime.
        </Text> */}
      </Box>
      <Box className={styles.imageColumn}>{children}</Box>
    </Box>
  );
}
