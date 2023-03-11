import {
  Disclosure,
  DisclosureContent,
  DisclosureHeading,
} from '@twilio-paste/core';
import { Box } from '@twilio-paste/core/box';
import styles from './index.module.scss';

interface Faq {
  question: string;
  answer: string;
}

export const FaqSection = ({ faqs }: { faqs: Faq[] }) => (
  <Box columnGap="space100" className={styles.faqContainer}>
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
      <DisclosureContent>{answer}</DisclosureContent>
    </Disclosure>
  </Box>
);
