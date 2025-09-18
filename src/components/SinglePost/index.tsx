import { findPostBySlug } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import { CleanMarkdown } from '../CleanMarkdown';

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlug(slug);

  return (
    <article className='mb-16'>
      <div className='group flex flex-col gap-4 mb-4'>
        <Image
          className='rounded-xl'
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </div>

      <p className='text-xl mb-4 text-slate-600'>{post.excerpt}</p>

      <CleanMarkdown markdown={post.content} />
    </article>
  );
}
