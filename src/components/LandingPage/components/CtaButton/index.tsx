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
}: CtaButtonProps) => {
  const paddingBottom = marginBottom ? styles.paddingBottom : '';
  const justifyContent = center ? styles.flexCenter : styles.flexStart;
  const className = `${paddingBottom} ${justifyContent}`;

  return (
    <Box
      display="flex"
      marginTop={marginTop ? 'space90' : 'space0'}
      className={className}
    >
      <button
        className={
          styles.ctaButton +
          ' ' +
          (secondaryColor
            ? styles.secondaryBackground
            : styles.primaryBackground)
        }
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </Box>
  );
};
