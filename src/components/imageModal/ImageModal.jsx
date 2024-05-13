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

const ImageModal = ({ showModal, modalUrl, modalAlt, closeModal }) => {
  return (
    <Modal
      isOpen={showModal}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={modalUrl} alt={modalAlt} />
    </Modal>
  );
};

export default ImageModal;
