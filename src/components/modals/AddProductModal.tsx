import ModalBody from './ModalBody';
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
      <ModalBody onClose={onClose} title="Add product">
        modal
      </ModalBody>
    </ModalOverlay>
  );
};

export default AddProductModal;
