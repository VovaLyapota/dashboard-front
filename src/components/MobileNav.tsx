import { AnimatePresence, motion } from 'framer-motion';

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
        <motion.div
          className="absolute h-screen w-screen bg-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* nav */}
          <motion.nav>MobileNav</motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
