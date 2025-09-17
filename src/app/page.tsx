import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostHeading } from '@/components/PostHeading';
import { PostCoverImage } from '@/components/PostCoverImage';

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: 'post/dakodpaskd',
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

          <PostHeading url='#' as='h1'>
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

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
