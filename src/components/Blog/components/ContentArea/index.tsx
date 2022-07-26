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
  const dateParagraph = `Published on ${formatDate(
    publishedAt
  )} // Updated on ${formatDate(updatedAt)}`;

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

      <img
        alt={mainImage.alt || ' '}
        src={getSanityImageUrl(mainImage.asset._ref)}
        loading="lazy"
        style={{ width: '100%', borderRadius: '24px' }}
      />

      {children}
    </Box>
  );
}
