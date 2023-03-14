import {
  Disclosure,
  DisclosureContent,
  DisclosureHeading,
} from '@twilio-paste/core/disclosure';
import { Box } from '@twilio-paste/core/box';
import { ParagraphSmall } from '../ParagraphSmall';
import styles from './index.module.scss';

interface Faq {
  question: string;
  answer: React.ReactNode[];
}

export const FaqSection = ({ faqs }: { faqs: Faq[] }) => (
  <Box columnGap="space90" className={styles.faqContainer}>
    {faqs.map(({ question, answer }) => (
      <FaqItem key={question} question={question} answer={answer} />
    ))}
  </Box>
);

const FaqItem = ({ question, answer }: Faq) => (
  <Box marginBottom="space90" style={{ breakInside: 'avoid-column' }}>
    <Disclosure variant="contained">
      <DisclosureHeading as="h4" variant="heading40">
        {question}
      </DisclosureHeading>
      <DisclosureContent>
        {answer.map((text, index) => (
          <Box key={index} marginTop={index === 0 ? 'space0' : 'space70'}>
            <ParagraphSmall text={text} />
          </Box>
        ))}
      </DisclosureContent>
    </Disclosure>
  </Box>
);
