import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export const PostSummary = ({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) => {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time
        dateTime={createdAt}
        className='text-slate-600 text-sm/tight block'
        title={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
};
