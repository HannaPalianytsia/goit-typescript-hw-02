import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoad }) => {
  return (
    <div className={styles.loadMore}>
      <button type="button" onClick={onLoad}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
