import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Separator } from '@twilio-paste/core/separator';
import { ParagraphSmall } from '../ParagraphSmall';
import styles from './index.module.scss';

export interface ContentBlock {
  heading: string;
  paragraph: string;
}

export interface ContentSeparatedSection {
  content: ContentBlock[];
}

export function ContentSeparatedSection({
  content,
}: ContentSeparatedSection): React.ReactElement {
  const contentBlocks: ContentBlock[] = [];
  content.forEach((value, index) => {
    if (index === content.length - 1) {
      contentBlocks.push(value);
    } else {
      contentBlocks.push(value, { heading: '', paragraph: '' });
    }
  });

  return (
    <Box className={styles.contentSeparatedContainer}>
      <ContentSeparatedRow content={contentBlocks} />
      <ContentSeparatedColumn content={contentBlocks} />
    </Box>
  );
}

function ContentSeparatedRow({
  content,
}: {
  content: ContentBlock[];
}): React.ReactElement {
  return (
    <Box padding="space50" className={styles.contentSeparatedRow}>
      {content.map((block, index) => {
        if (block.heading === '') {
          return (
            <Separator
              key={index}
              orientation="vertical"
              horizontalSpacing="space40"
            />
          );
        } else {
          return (
            <Box
              key={index}
              paddingX="space70"
              display="flex"
              flexDirection="column"
            >
              <Heading as="h4" variant="heading30">
                {block.heading}
              </Heading>
              <ParagraphSmall text={block.paragraph} />
            </Box>
          );
        }
      })}
    </Box>
  );
}

function ContentSeparatedColumn({
  content,
}: {
  content: ContentBlock[];
}): React.ReactElement {
  return (
    <Box flexDirection="column" className={styles.contentSeparatedColumn}>
      {content.map((block, index) => {
        if (block.heading === '') {
          return (
            <Separator
              key={index}
              orientation="horizontal"
              verticalSpacing="space80"
            />
          );
        } else {
          return (
            <Box key={index} display="flex" flexDirection="column">
              <Heading as="h4" variant="heading30">
                {block.heading}
              </Heading>
              <ParagraphSmall text={block.paragraph} />
            </Box>
          );
        }
      })}
    </Box>
  );
}
