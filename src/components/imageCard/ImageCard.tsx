import { FC } from "react";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  small: string;
  regular: string;
  alt_description: string;
  openModal: (url: string, alt: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({
  small,
  regular,
  alt_description,
  openModal,
}) => {
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
