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
    <motion.div
      className={cn(
        'absolute inset-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white px-5 py-10 md:px-10',
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {title && (
        <h3 className="text-xl font-semibold text-text md:text-2xl">{title}</h3>
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
  );
};

export default ModalBody;
