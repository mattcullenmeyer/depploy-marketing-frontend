import React from 'react';
import { useGlobalContext } from '../../../../state/context';
import { Text } from '@twilio-paste/core/text';
import styles from '../../blog.module.scss';

export function BlogParagraph({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { isDarkMode } = useGlobalContext();
  const blogParagraphClassName =
    styles.blogParagraph + ' ' + (isDarkMode ? styles.dark : styles.default);

  return (
    <Text
      className={blogParagraphClassName}
      as="p"
      fontSize="fontSize50"
      lineHeight="lineHeight70"
      marginY="space50"
    >
      {children}
    </Text>
  );
}
