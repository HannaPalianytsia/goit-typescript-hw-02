import { MagnifyingGlass } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass visible={true} glassColor="#cfeaf3" color="#2d3487" />
    </div>
  );
};

export default Loader;
