import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, urls: { small, regular }, alt_description }) => (
        <li key={id} className={styles.item}>
          <ImageCard
            small={small}
            regular={regular}
            alt_description={alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
