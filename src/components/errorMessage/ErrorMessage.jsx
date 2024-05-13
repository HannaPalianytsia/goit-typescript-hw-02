import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <p>Something wrong. Please try again later!</p>
    </div>
  );
};

export default ErrorMessage;
