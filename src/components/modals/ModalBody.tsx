import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import CloseIcon from '@/assets/icons/quit-icon.svg';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

const ModalBody = ({
  children,
  className,
  title,
  onClose,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  onClose: () => void;
}) => {
  return (
    <div className="absolute inset-1/2 size-fit -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className={cn(
          'relative h-1/2 w-1/2 rounded-xl bg-white px-5 py-10 md:px-10',
          className,
        )}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.1 } }}
        transition={{ duration: 0.1, delay: 0.06 }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h3 className="text-xl font-semibold text-text md:text-2xl">
            {title}
          </h3>
        )}
        {children}
        <Button
          type="button"
          variant="link"
          className="absolute right-2 top-2 h-7 w-7 p-0 duration-300 ease-linear hover:scale-105 active:scale-100"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </motion.div>
    </div>
  );
};

export default ModalBody;
