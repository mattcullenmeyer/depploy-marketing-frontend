import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@twilio-paste/core/box';
import { CtaButton } from '../CtaButton';
import { Heading1 } from '../Heading1';
import { Paragraph } from '../Paragraph';
import styles from './heroSection.module.scss';

interface HeroSectionProps {
  heading: string | React.ReactElement;
  subheading: string;
  headingMaxWidth?: string;
  subheadingMaxWidth?: string;
  buttonText: string;
  buttonUrl: string;
  children: React.ReactElement;
}

export function HeroSection({
  heading,
  headingMaxWidth = '640px',
  subheading,
  subheadingMaxWidth = '640px',
  buttonText,
  buttonUrl,
  children,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      rowGap="space190"
      columnGap="space190"
      marginBottom="space190"
      className={styles.heroSectionContainer}
    >
      <Box className={styles.textColumn}>
        <Heading1 heading={heading} maxWidth={headingMaxWidth} />
        <Paragraph text={subheading} maxWidth={subheadingMaxWidth} />
        <CtaButton
          buttonText={buttonText}
          onClickButton={() => {
            router.push(buttonUrl);
          }}
          marginTop
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
