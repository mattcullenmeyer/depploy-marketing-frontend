import { Box } from '@twilio-paste/core/box';
import styles from './index.module.scss';

interface CtaButtonProps {
  buttonText: string;
  onClickButton: () => void;
  marginTop?: boolean;
  marginBottom?: boolean;
  center?: boolean;
}

export function CtaButton({
  buttonText,
  onClickButton,
  marginTop = false,
  marginBottom = false,
  center = false,
}: CtaButtonProps) {
  return (
    <Box
      display="flex"
      marginTop={marginTop ? 'space90' : 'space0'}
      justifyContent={center ? 'center' : 'flex-start'}
      className={marginBottom ? styles.ctaButtonContainer : ''}
    >
      <button className={styles.ctaButton} onClick={onClickButton}>
        {buttonText}
      </button>
    </Box>
  );
}
