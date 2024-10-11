import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root')!;

const ModalOverlay = ({
  children,
  isVisible,
  onClose,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}) => {
  const onOverlayClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', onOverlayClose);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onOverlayClose);
      document.body.style.overflow = '';
    };
  }, [isVisible, onClose]);

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-screen w-screen bg-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.1 } }}
          transition={{ duration: 0.05 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot,
  );
};

export default ModalOverlay;
