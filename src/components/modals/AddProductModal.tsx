import ModalOverlay from './ModalOverlay';

const AddProductModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalOverlay isVisible={isVisible} onClose={onClose}>
      <div>modal</div>
    </ModalOverlay>
  );
};

export default AddProductModal;
