import styles from './ctaButton.module.scss';

interface CtaButtonProps {
  buttonText: string;
  onClickButton: () => void;
}

export function CtaButton({ buttonText, onClickButton }: CtaButtonProps) {
  return (
    <button className={styles.ctaButton} onClick={onClickButton}>
      {buttonText}
    </button>
  );
}
