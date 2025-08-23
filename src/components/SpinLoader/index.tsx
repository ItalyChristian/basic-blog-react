import clsx from 'clsx';

export const SpinLoader = () => {
  const styles = clsx('flex', 'items-center', 'justify-center', 'h-40');

  return (
    <div className={styles}>
      <div className={clsx('w-10 h-10, ')}></div>
    </div>
  );
};
