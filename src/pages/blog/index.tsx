import { Heading } from '@twilio-paste/core/heading';
import { Card } from '@twilio-paste/core/card';
import groq from 'groq';
import { GetStaticProps } from 'next';
import { client } from '../../../client';
import { Layout } from '../../components/Layout';
import { Box } from '@twilio-paste/core/box';
import { useRouter } from 'next/router';

interface Post {
  title: string;
  slug: {
    _type: string;
    current: string;
  };
}

interface BlogProps {
  posts: Post[];
}

function Blog({ posts }: BlogProps) {
  const router = useRouter();

  return (
    <Layout>
      <>
        <Box display="flex" justifyContent="center">
          <Heading as="h1" variant="heading10">
            The Depploy Blog
          </Heading>
        </Box>
        {posts.map((post) => (
          <Card
            key={post.title}
            onClick={() => router.push(`blog/${post.slug.current}`)}
            style={{ cursor: 'pointer' }}
          >
            <Heading as="h3" variant="heading30">
              {post.title}
            </Heading>
          </Card>
        ))}
      </>
    </Layout>
  );
}

const query = groq`*[_type == "post"]{
  title,
  slug
}`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
