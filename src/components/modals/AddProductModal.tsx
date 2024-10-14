import AddProductForm from '../forms/AddProductForm';
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
      <ModalBody
        onClose={onClose}
        title="Add new product"
        className="h-[480px] w-72"
      >
        <AddProductForm onClose={onClose} />
      </ModalBody>
    </ModalOverlay>
  );
};

export default AddProductModal;
