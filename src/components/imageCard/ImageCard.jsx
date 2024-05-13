import styles from "./ImageCard.module.css";

const ImageCard = ({ small, regular, alt_description, openModal }) => {
  return (
    <div className={styles.card}>
      <img
        src={small}
        alt={alt_description}
        className={styles.item}
        onClick={() => openModal(regular, alt_description)}
      />
    </div>
  );
};

export default ImageCard;
