import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@twilio-paste/core/box';
import { CtaButton } from '../CtaButton';
import { Heading1 } from '../Heading1';
import { Paragraph } from '../Paragraph';
import { HelpText } from '@twilio-paste/core';
import styles from './index.module.scss';

interface HeroSectionProps {
  heading: string | React.ReactElement;
  subheading: string;
  headingMaxWidth?: string;
  subheadingMaxWidth?: string;
  buttonText: string;
  buttonUrl: string;
  objectionBustingCopy?: string;
  children: React.ReactElement;
}

export function HeroSection({
  heading,
  headingMaxWidth = '640px',
  subheading,
  subheadingMaxWidth = '640px',
  buttonText,
  buttonUrl,
  objectionBustingCopy,
  children,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      columnGap="space190"
      className={styles.heroSectionContainer}
    >
      <Box className={styles.textColumn}>
        <Heading1 heading={heading} maxWidth={headingMaxWidth} />
        <Box className={styles.heroParagraph}>
          <Paragraph text={subheading} maxWidth={subheadingMaxWidth} />
        </Box>
        <CtaButton
          buttonText={buttonText}
          onClickButton={() => {
            router.push(buttonUrl);
          }}
          marginTop
        />

        {objectionBustingCopy && (
          <Box marginTop="space70">
            <HelpText>{objectionBustingCopy}</HelpText>
          </Box>
        )}
      </Box>
      <Box className={styles.imageColumn}>{children}</Box>
    </Box>
  );
}
