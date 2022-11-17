import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';
import { generateHref } from '../../helpers/generateHref';
import styles from '../../blog.module.scss';

interface LeftSideNavProps {
  headings: string[];
}

export function LeftSideNav({
  headings,
}: LeftSideNavProps): React.ReactElement {
  return (
    <Box as="aside" className={styles.sideNavContainer}>
      <Box as="nav" className={styles.sideNav}>
        <Heading as="div" variant="heading40">
          Contents
        </Heading>

        <ul>
          {headings.map((heading) => (
            <li>
              <a href={`#${generateHref(heading)}`}>{heading}</a>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
