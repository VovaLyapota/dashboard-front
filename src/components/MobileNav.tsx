import { AnimatePresence, motion } from 'framer-motion';

import CloseIcon from '@/assets/icons/quit-icon.svg';

import LogoutButton from './LogoutButton';
import NavLinks from './NavLinks';

const MobileNav = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    // overlay
    <AnimatePresence>
      {isVisible && (
        // overlay
        <motion.div
          className="absolute z-[999] h-screen w-screen bg-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.1 } }}
          transition={{ duration: 0.05 }}
        >
          {/* nav */}
          <motion.nav
            className="flex h-screen w-20 flex-col items-center bg-background p-5 md:w-[84px]"
            initial={{ translateX: -90 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -90, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1, delay: 0.06 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseIcon className="mb-10 h-8 w-8" onClick={onClose} />
            <NavLinks onNavigate={onClose} />
            <LogoutButton />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
