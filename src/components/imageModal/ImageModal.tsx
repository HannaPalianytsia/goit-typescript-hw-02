import { FC } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  showModal: boolean;
  modalUrl: string;
  modalAlt: string;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  showModal,
  modalUrl,
  modalAlt,
  closeModal,
}) => {
  return (
    <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
      <img src={modalUrl} alt={modalAlt} />
    </Modal>
  );
};

export default ImageModal;
