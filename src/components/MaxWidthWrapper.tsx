import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <section
      className={cn(
        'mx-auto h-full w-full max-w-[1440px] px-5 md:px-8',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
