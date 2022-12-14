import { Heading } from '@twilio-paste/core/heading';
import { Box } from '@twilio-paste/core/box';
import { generateHref } from '../../helpers/generateHref';
import { useGlobalContext } from '../../../../state/context';
import styles from '../../blog.module.scss';

interface LeftSideNavProps {
  headings: string[];
}

export function LeftSideNav({
  headings,
}: LeftSideNavProps): React.ReactElement {
  const { isDarkMode } = useGlobalContext();
  const sideNavClassName =
    styles.sideNav + ' ' + (isDarkMode ? styles.dark : styles.default);

  return (
    <Box as="aside" className={styles.sideNavContainer}>
      <Box as="nav" className={sideNavClassName}>
        <Heading as="div" variant="heading40">
          Contents
        </Heading>

        <ul>
          {headings.map((heading) => (
            <li key={heading}>
              <a href={`#${generateHref(heading)}`}>{heading}</a>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
