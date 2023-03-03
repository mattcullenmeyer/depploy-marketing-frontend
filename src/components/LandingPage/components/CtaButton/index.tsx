import { Box } from '@twilio-paste/core/box';
import styles from './ctaButton.module.scss';

interface CtaButtonProps {
  buttonText: string;
  onClickButton: () => void;
}

export function CtaButton({ buttonText, onClickButton }: CtaButtonProps) {
  return (
    <Box marginTop="space90">
      <button className={styles.ctaButton} onClick={onClickButton}>
        {buttonText}
      </button>
    </Box>
  );
}
