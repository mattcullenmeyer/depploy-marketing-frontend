import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { CtaButton } from '../CtaButton';
import styles from './featureSection.module.scss';
import globalStyles from '../../../../styles/variables.module.scss';

interface FeatureSectionProps {
  name: string;
  title: string;
  summary: string;
  buttonText: string;
  onClickButton: () => void;
  hasBorderTop?: boolean;
  children: React.ReactElement;
}

export function FeatureSection({
  name,
  title,
  summary,
  buttonText,
  onClickButton,
  hasBorderTop = false,
  children,
}: FeatureSectionProps) {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      rowGap="space200"
      paddingTop="space200"
      paddingBottom="space200"
      style={{
        borderTop: hasBorderTop ? '1px solid rgba(91, 97, 110, 0.2)' : 'none',
        marginTop: hasBorderTop ? '80px' : '0',
      }}
      className={styles.featureSectionContainer}
    >
      <Box className={styles.textColumn}>
        <Text
          as="h2"
          style={{
            color: globalStyles.secondaryColor,
            fontSize: '16px',
            letterSpacing: '1px',
          }}
          marginBottom="space30"
          fontWeight="fontWeightBold"
        >
          {name}
        </Text>
        <Text
          as="h3"
          fontSize="fontSize90"
          lineHeight="lineHeight90"
          marginBottom="space50"
        >
          {title}
        </Text>
        <Text
          as="p"
          fontSize="fontSize60"
          fontWeight="fontWeightNormal"
          lineHeight="lineHeight70"
          marginBottom="space80"
        >
          {summary}
        </Text>
        <CtaButton buttonText={buttonText} onClickButton={onClickButton} />
      </Box>
      <Box className={styles.imageColumn}>{children}</Box>
    </Box>
  );
}
