import { FC } from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoad: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoad }) => {
  return (
    <div className={styles.loadMore}>
      <button type="button" onClick={onLoad}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
