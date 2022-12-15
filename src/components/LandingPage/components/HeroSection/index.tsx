import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { CtaButton } from '../CtaButton';
import { Heading1 } from '../Heading1';
import { Heading2 } from '../Heading2';
import styles from './heroSection.module.scss';

interface HeroSectionProps {
  heading1: string;
  heading2: string;
  children: React.ReactElement;
}

export function HeroSection({
  heading1,
  heading2,
  children,
}: HeroSectionProps) {
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
          buttonText="Deploy React"
          onClickButton={() => {
            console.log('clicked');
          }}
        />
      </Box>

      {children}
    </Box>
  );
}
