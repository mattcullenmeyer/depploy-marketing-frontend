import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@twilio-paste/core/box';
import { CtaButton } from '../CtaButton';
import { Heading1 } from '../Heading1';
import { Paragraph } from '../Paragraph';
import { HelpText } from '@twilio-paste/core/help-text';
import styles from './index.module.scss';

interface HeroSectionProps {
  heading: string | React.ReactElement;
  subheading: string;
  buttonText: string;
  buttonUrl: string;
  maxWidth?: string;
  objectionBustingCopy?: string;
  children: React.ReactElement;
}

export function HeroSection({
  heading,
  subheading,
  buttonText,
  buttonUrl,
  maxWidth = '640px',
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
      <Box className={styles.textColumn} maxWidth={maxWidth}>
        <Heading1 heading={heading} />
        <Box className={styles.heroParagraph}>
          <Paragraph text={subheading} />
        </Box>
        <CtaButton
          buttonText={buttonText}
          onClickButton={() => {
            router.push(buttonUrl);
          }}
          marginTop
        />

        {objectionBustingCopy && (
          <Box
            marginTop="space70"
            display="flex"
            className={styles.objectionBustingCopy}
          >
            <HelpText>{objectionBustingCopy}</HelpText>
          </Box>
        )}
      </Box>
      <Box className={styles.imageColumn}>{children}</Box>
    </Box>
  );
}
