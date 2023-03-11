import { Box } from '@twilio-paste/core/box';
import styles from './index.module.scss';

interface CtaButtonProps {
  buttonText: string;
  onClickButton: () => void;
  marginTop?: boolean;
  marginBottom?: boolean;
  center?: boolean;
  secondaryColor?: boolean;
}

export const CtaButton = ({
  buttonText,
  onClickButton,
  marginTop = false,
  marginBottom = false,
  center = false,
  secondaryColor = false,
}: CtaButtonProps) => (
  <Box
    display="flex"
    marginTop={marginTop ? 'space90' : 'space0'}
    justifyContent={center ? 'center' : 'flex-start'}
    className={marginBottom ? styles.ctaButtonContainer : ''}
  >
    <button
      className={
        styles.ctaButton +
        ' ' +
        (secondaryColor ? styles.secondaryBackground : styles.primaryBackground)
      }
      onClick={onClickButton}
    >
      {buttonText}
    </button>
  </Box>
);
