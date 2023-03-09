import Image from 'next/image';
import squiggleImg from '/images/purple_squiggle.svg';
import styles from './index.module.scss';

interface SquiggleTextProps {
  text: string;
  imageAlt: string;
}

export function SquiggleText({
  text,
  imageAlt,
}: SquiggleTextProps): React.ReactElement {
  return (
    <span className={styles.squiggleText}>
      {text}
      <span className={styles.squiggleImage}>
        <Image src={squiggleImg} alt={imageAlt} layout="intrinsic" />
      </span>
    </span>
  );
}
