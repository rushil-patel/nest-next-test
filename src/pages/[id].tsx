import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { Post } from 'src/shared/types/post';
import { fetch } from 'src/shared/utils/fetch';

type TPostProps = {
  post: Post;
};

const PostComponent: FC<TPostProps> = ({ post = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>{post.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TPostProps> = async (
  ctx,
) => {
  const id = ctx.query.id;
  console.log('id on load', ctx);

  const post = await fetch(`/api/posts/${id}`);
  return {
    props: {
      post,
    },
  };
};

export default PostComponent;
