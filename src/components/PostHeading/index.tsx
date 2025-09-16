import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url?: string;
};

export const PostHeading = ({ children = '', url }: PostHeadingProps) => {
  return (
    <p className='text-2xl/tight font-extrabold sm:text-4xl'>
      <Link href='#'>{children}</Link>
    </p>
  );
};
