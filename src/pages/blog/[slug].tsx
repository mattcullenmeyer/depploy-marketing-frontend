import { GetStaticPaths, GetStaticProps } from 'next';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import { client } from '../../../client';
import styles from './blog.module.scss';
import { Box } from '@twilio-paste/core/box';
import { Heading } from '@twilio-paste/core/heading';
import React from 'react';
import { Paragraph } from '@twilio-paste/core';

interface PostProps {
  post: {
    title: string;
    body: any[];
    // headings: any[];
  };
}

// interface PortableTextBlockComponent {
//   children: [{ text: string }];
// }

// interface TextBlock {
//   value: {
//     children: [{ text: string }];
//     style: string;
//   };
// }

const generateHref = (heading: string) => {
  const headingArray = heading.split(' ');
  const lowerCaseHeadingArray = headingArray.map((text) => text.toLowerCase());
  const result = lowerCaseHeadingArray.join('-');
  return result;
};

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <Paragraph>{children}</Paragraph>,
    h2: ({ children }: any) => (
      <Heading as="h2" variant="heading20">
        {children}
      </Heading>
    ),
  },
};

function Post({ post }: PostProps) {
  if (!post) {
    return;
  }

  const headingItems = post.body.filter((item) => item.style === 'h2');
  const headings = headingItems.map(({ children }) => children[0].text);

  return (
    <Box className={styles.container}>
      <Box>
        <Heading as="div" variant="heading40">
          Contents
        </Heading>
        <ul style={{ paddingInlineStart: '0' }}>
          {headings.map((heading) => (
            <li>
              <a href={`#${generateHref(heading)}`}>{heading}</a>
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Heading as="h1" variant="heading10">
          {post.title}
        </Heading>
        <PortableText value={post.body} components={portableTextComponents} />
      </Box>
      <Box>
        <Heading as="div" variant="heading40">
          Popular Posts
        </Heading>
      </Box>
    </Box>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  // _updatedAt,
  // "headings": body[string::startsWith(style, "h")],
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
