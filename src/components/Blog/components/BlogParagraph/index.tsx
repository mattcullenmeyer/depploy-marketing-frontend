import React from 'react';
import { Text } from '@twilio-paste/core/text';
import styles from '../../blog.module.scss';

export function BlogParagraph({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Text
      className={styles.blogParagraph}
      as="p"
      fontSize="fontSize50"
      lineHeight="lineHeight70"
      marginY="space50"
    >
      {children}
    </Text>
  );
}
