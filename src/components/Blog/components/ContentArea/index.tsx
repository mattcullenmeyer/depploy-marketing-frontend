import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';
import { BlogParagraph } from '../BlogParagraph';
import { formatDate } from '../../helpers/formatDate';
import styles from '../../blog.module.scss';
import {
  DisplayPill,
  DisplayPillGroup,
} from '@twilio-paste/core/display-pill-group';

interface ContentAreaProps {
  title: string;
  author: string;
  categories: string[];
  publishedAt: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function ContentArea({
  title,
  author,
  categories,
  publishedAt,
  updatedAt,
  children,
}: ContentAreaProps) {
  const dateParagraph = `Published on ${formatDate(
    publishedAt
  )} // Updated on ${formatDate(updatedAt)}`;

  return (
    <Box as="main" className={styles.mainBody}>
      <Heading as="h1" variant="heading10">
        {title}
      </Heading>

      <BlogParagraph>{dateParagraph}</BlogParagraph>

      <Box
        marginTop="space50"
        marginBottom="space50"
        className={styles.categoryGroup}
      >
        <DisplayPillGroup aria-label="Blog Categories">
          {categories.map((category) => (
            <DisplayPill key={category} href={`/blog?category=${category}`}>
              {category}
            </DisplayPill>
          ))}
        </DisplayPillGroup>
      </Box>

      <Heading as="div" variant="heading40">
        {`By ${author}`}
      </Heading>

      {children}
    </Box>
  );
}
