import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='flex flex-col gap-8'>
      {posts.map(post => {
        return (
          <p key={post.id} className='flex gap-4'>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />
          </p>
        );
      })}
    </div>
  );
}
