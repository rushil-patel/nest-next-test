import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Post } from 'src/shared/types/post';
import { fetch } from 'src/shared/utils/fetch';

type THomeProps = {
  posts: Post[];
};

const Home: FC<THomeProps> = ({ posts = [] }) => {
  return (
    <div>
      <h1>Home</h1>
      {posts.map(({ title, id }) => {
        return (
          <div key={id}>
            <Link href={`/${id}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async (
  ctx,
) => {
  const posts = await fetch('/api/posts');
  console.log('result', posts);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
