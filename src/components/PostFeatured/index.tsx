import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export const PostFeatured = () => {
  const postLink = `/post/dasds`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/image-1.jpg',
          alt: 'Descrição da imagem',
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          dateTime='2025-08-30'
          className='text-slate-600 text-sm/tight block'
        >
          30/08/2025 09:30
        </time>

        <PostHeading url={postLink} as='h1'>
          Um título maneiro
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          quae nulla assumenda eveniet enim saepe dolorem ullam hic laudantium
          consectetur, ipsam exercitationem est ad, magnam velit commodi esse
          provident delectus!
        </p>
      </div>
    </section>
  );
};
