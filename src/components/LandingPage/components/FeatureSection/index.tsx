import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { CtaButton } from '../CtaButton';
import { Paragraph } from '../Paragraph';
import { Heading3 } from '../Heading3';
import styles from './index.module.scss';

interface FeatureSectionProps {
  name: string;
  title: string;
  summary: string;
  buttonText?: string;
  onClickButton?: () => void;
  hasBorderTop?: boolean;
  reverse?: boolean;
  children: React.ReactElement;
}

export function FeatureSection({
  name,
  title,
  summary,
  buttonText,
  onClickButton,
  hasBorderTop = false,
  reverse = false,
  children,
}: FeatureSectionProps) {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      style={{
        borderTop: hasBorderTop ? '1px solid rgba(91, 97, 110, 0.2)' : 'none',
        marginTop: hasBorderTop ? '80px' : '0',
      }}
      className={`${styles.featureSectionContainer} ${
        reverse ? styles.reverse : ''
      }`}
    >
      <Box className={styles.textColumn}>
        <Text
          as="h2"
          // style={{
          //   color: globalStyles.secondaryColor,
          // }}
          marginBottom="space30"
          fontWeight="fontWeightBold"
          className={styles.featureTopic}
        >
          {name}
        </Text>
        <Heading3 heading={title} />
        <Paragraph text={summary} />
        {buttonText && onClickButton && (
          <CtaButton buttonText={buttonText} onClickButton={onClickButton} />
        )}
      </Box>
      <Box className={styles.imageColumn}>{children}</Box>
    </Box>
  );
}
