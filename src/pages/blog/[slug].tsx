import { GetStaticPaths, GetStaticProps } from 'next';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { client } from '../../../client';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import { Layout } from '../../components/Layout';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { LeftSideNav } from '../../components/Blog/components/LeftSideNav';
import { ContentArea } from '../../components/Blog/components/ContentArea';
import { RightSideNav } from '../../components/Blog/components/RightSideNav';
import { BlogParagraph } from '../../components/Blog/components/BlogParagraph';
import styles from './blog.module.scss';

interface Post {
  title: string;
  body: any[];
  author: string;
  publishedAt: string;
  _updatedAt: string;
  categories: any[];
  image: any[];
}

interface PostProps {
  post: Post;
}

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
        />
      );
    },
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

function Post({ post }: PostProps) {
  const {
    title,
    author,
    body,
    categories,
    publishedAt,
    _updatedAt: updatedAt,
  } = post;

  const headingItems = post.body.filter((item) => item.style === 'h2');
  const headings = headingItems.map(({ children }) => children[0].text);

  return (
    <Layout paddingTop={false}>
      <Box className={styles.container}>
        <LeftSideNav headings={headings} />

        <ContentArea
          title={title}
          author={author}
          categories={categories}
          publishedAt={publishedAt}
          updatedAt={updatedAt}
        >
          <PortableText value={body} components={portableTextComponents} />
        </ContentArea>

        <RightSideNav />
      </Box>
    </Layout>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  "author": author->name,
  publishedAt,
  _updatedAt,
  "categories": categories[]->title
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params as { slug: string };
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
};

export default Post;
