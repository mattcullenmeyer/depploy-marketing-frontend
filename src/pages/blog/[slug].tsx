import { GetStaticPaths, GetStaticProps } from 'next';
import groq from 'groq';
import { PortableText } from '@portabletext/react';
import client from '../../../client';

interface PostProps {
  post: {
    title: string;
    body: any[];
  };
}

interface TextBlock {
  value: {
    children: [{ text: string }];
  };
}

const portableTextComponents = {
  types: {
    block: ({ value }: TextBlock) => {
      return <div>{value.children[0].text}</div>;
    },
  },
};

function Post({ post }: PostProps) {
  return (
    <>
      <>{post?.title}</>
      <PortableText value={post?.body} components={portableTextComponents} />
    </>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  _updatedAt
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
