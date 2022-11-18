import { GetStaticPaths, GetStaticProps } from 'next';
import groq from 'groq';
import { client } from '../../../client';
import { Box } from '@twilio-paste/core/box';
import { Layout } from '../../components/Layout';
import { LeftSideNav } from '../../components/Blog/components/LeftSideNav';
import { RightSideNav } from '../../components/Blog/components/RightSideNav';
import { ContentContainer } from '../../components/Blog/components/ContentArea/Container';
import styles from './blog.module.scss';

export interface PostStaticProps {
  title: string;
  body: any[];
  author: string;
  categories: any[];
  publishedAt: string;
  _updatedAt: string;
  // image: any[];
}

interface PostProps {
  post: PostStaticProps;
}

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

        <ContentContainer
          title={title}
          author={author}
          categories={categories}
          publishedAt={publishedAt}
          updatedAt={updatedAt}
          body={body}
        />

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
