import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublishedPostsCached = cache(
  async () => await postRepository.findAllPublished(),
);

export const findPublicPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublished(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});
