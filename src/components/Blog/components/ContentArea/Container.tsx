import React from 'react';
import { ContentArea, ContentAreaProps } from './index';
import { PortableText } from '@portabletext/react';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { BlogParagraph } from '../BlogParagraph';
import { SanityCodeBlock, SyntaxHighlighter } from '../SyntaxHighlighter';
import { getSanityImageUrl } from '../../helpers/getSanityImageUrl';
import { generateHref } from '../../helpers/generateHref';

interface ImageValue {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt: string;
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={value.alt || ' '}
          loading="lazy"
          // src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          src={getSanityImageUrl(value)}
          style={{ width: '100%', borderRadius: '24px' }}
        />
      );
    },
    code: ({ value }: { value: SanityCodeBlock }) => (
      <SyntaxHighlighter value={value} />
    ),
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <BlogParagraph>{children}</BlogParagraph>
    ),
    h2: ({ children }: any) => (
      <Box marginTop="space100">
        <Heading id={generateHref(children[0])} as="h2" variant="heading20">
          {children}
        </Heading>
      </Box>
    ),
  },
};

interface ContentContainerProps extends ContentAreaProps {
  body: any[];
}

export function ContentContainer({
  title,
  author,
  categories,
  publishedAt,
  updatedAt,
  body,
  mainImage,
}: ContentContainerProps) {
  return (
    <ContentArea
      title={title}
      author={author}
      categories={categories}
      publishedAt={publishedAt}
      updatedAt={updatedAt}
      mainImage={mainImage}
    >
      <PortableText value={body} components={portableTextComponents} />
    </ContentArea>
  );
}
