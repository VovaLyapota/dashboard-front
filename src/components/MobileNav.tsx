import { motion } from 'framer-motion';

import CloseIcon from '@/assets/icons/quit-icon.svg';

import LogoutButton from './LogoutButton';
import ModalOverlay from './modals/ModalOverlay';
import NavLinks from './NavLinks';

const MobileNav = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
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
    </ModalOverlay>
  );
};

export default MobileNav;
