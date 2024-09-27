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
          className="absolute h-screen w-screen bg-overlay z-[999]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.1 } }}
          transition={{ duration: 0.05 }}
        >
          {/* nav */}
          <motion.nav
            className="h-screen w-20 md:w-[84px] bg-background p-5 flex flex-col items-center"
            initial={{ translateX: -90 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -90, transition: { duration: 0.1 } }}
            transition={{ duration: 0.1, delay: 0.06 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseIcon className="w-8 h-8 mb-10" onClick={onClose} />
            <NavLinks onNavigate={onClose} />
            <LogoutButton />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
