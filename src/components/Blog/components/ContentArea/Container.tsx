import { ContentArea, ContentAreaProps } from './index';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Heading } from '@twilio-paste/core/heading';
import { client } from '../../../../../client';
import { BlogParagraph } from '../BlogParagraph';
import { SanityCodeBlock, SyntaxHighlighter } from '../SyntaxHighlighter';

interface ImageValue {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

const generateHref = (heading: string) => {
  const headingArray = heading.split(' ');
  const lowerCaseHeadingArray = headingArray.map((text) => text.toLowerCase());
  const result = lowerCaseHeadingArray.join('-');
  return result;
};

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source).url();
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          // alt={value.alt || ' '}
          loading="lazy"
          // src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          src={urlFor(value)}
          style={{ width: '100%', borderRadius: '24px' }}
        />
      );
    },
    code: ({ value }: { value: SanityCodeBlock }) => (
      <SyntaxHighlighter value={value} />
    ),
  },
  block: {
    normal: ({ children }: any) => <BlogParagraph>{children}</BlogParagraph>,
    h2: ({ children }: any) => (
      <Heading id={generateHref(children[0])} as="h2" variant="heading20">
        {children}
      </Heading>
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
}: ContentContainerProps) {
  return (
    <ContentArea
      title={title}
      author={author}
      categories={categories}
      publishedAt={publishedAt}
      updatedAt={updatedAt}
    >
      <PortableText value={body} components={portableTextComponents} />
    </ContentArea>
  );
}
