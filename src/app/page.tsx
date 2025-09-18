import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostFeatured } from '@/components/PostFeatured';

export default async function Home() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostFeatured />

      <PostsList />
    </Suspense>
  );
}
