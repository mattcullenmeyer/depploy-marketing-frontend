import React from 'react';
import { Text } from '@twilio-paste/core/text';

export function BlogParagraph({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Text
      as="p"
      fontSize="fontSize50"
      lineHeight="lineHeight50"
      marginY="space50"
    >
      {children}
    </Text>
  );
}
