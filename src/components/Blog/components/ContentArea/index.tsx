import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';
import { formatDate } from '../../helpers/formatDate';
import {
  DisplayPill,
  DisplayPillGroup,
} from '@twilio-paste/core/display-pill-group';
import { Text } from '@twilio-paste/core/text';
import { PostStaticProps } from '../../../../pages/blog/[slug]';
import styles from '../../blog.module.scss';
import { getSanityImageUrl } from '../../helpers/getSanityImageUrl';
import Image from 'next/image';

export interface ContentAreaProps
  extends Omit<PostStaticProps, '_updatedAt' | 'body'> {
  updatedAt: string;
  children?: React.ReactNode;
}

export function ContentArea({
  title,
  author,
  categories,
  publishedAt,
  updatedAt,
  mainImage,
  children,
}: ContentAreaProps) {
  const publishedDate = formatDate(publishedAt);
  const updatedDate = formatDate(updatedAt);

  let dateParagraph = `Published on ${publishedDate}`;

  if (publishedDate !== updatedDate) {
    dateParagraph += ` // Updated on ${updatedDate}`;
  }

  return (
    <Box as="main" className={styles.mainBody}>
      <Heading as="h1" variant="heading10" marginBottom="space0">
        {title}
      </Heading>

      <Text
        as="div"
        fontSize="fontSize50"
        color="colorTextWeak"
        marginY="space50"
      >
        {dateParagraph}
      </Text>

      <Box marginY="space50" className={styles.categoryGroup}>
        <DisplayPillGroup aria-label="Blog Categories">
          {categories.map((category) => (
            <DisplayPill key={category} href={`/blog?category=${category}`}>
              {category}
            </DisplayPill>
          ))}
        </DisplayPillGroup>
      </Box>

      <Box marginBottom="space100">
        <Heading as="div" variant="heading40">
          {`By ${author}`}
        </Heading>
      </Box>

      {/* https://nextjs.org/docs/api-reference/next/image */}
      <Image
        alt={mainImage.alt || ' '}
        src={getSanityImageUrl(mainImage.asset._ref)}
        loading="lazy"
        style={{ borderRadius: '24px' }}
        width={750}
        height={375}
        loader={({ src }) => src}
      />
      {children}
    </Box>
  );
}
