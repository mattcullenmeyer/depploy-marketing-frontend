import Image from 'next/image';
import squiggleImg from '/images/purple_squiggle.svg';

interface SquiggleTextProps {
  text: string;
  imageAlt: string;
}

export function SquiggleText({
  text,
  imageAlt,
}: SquiggleTextProps): React.ReactElement {
  return (
    <span style={{ position: 'relative' }}>
      {text}
      <span style={{ position: 'absolute', left: 0, top: '15px' }}>
        <Image src={squiggleImg} alt={imageAlt} layout="intrinsic" />
      </span>
    </span>
  );
}
