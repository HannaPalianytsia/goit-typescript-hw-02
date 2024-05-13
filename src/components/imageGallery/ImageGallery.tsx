import { FC } from "react";
import { Image } from "../../types";
import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGaleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

const ImageGallery: FC<ImageGaleryProps> = ({ images, openModal }) => {
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
