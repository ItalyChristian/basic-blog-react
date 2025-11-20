import { Metadata } from 'next';
import { Suspense } from 'react';
import PostsListAdmin from '@/components/PostsListAdmin';
import { SpinLoader } from '@/components/SpinLoader';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}
