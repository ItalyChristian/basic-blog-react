import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { PostSummary } from '../PostSummary';

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

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt='2025-08-30T00:24:38.616Z'
        title='Um título maneiro'
        excerpt='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          quae nulla assumenda eveniet enim saepe dolorem ullam hic laudantium
          consectetur, ipsam exercitationem est ad, magnam velit commodi esse
          provident delectus!'
      />
    </section>
  );
};
