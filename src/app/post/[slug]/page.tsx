import { findPostBySlug } from '@/lib/post/queries';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlug(slug);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
