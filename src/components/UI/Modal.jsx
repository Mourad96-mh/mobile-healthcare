import styles from "./Modal.module.css";

/* eslint-disable react/prop-types */
const Modal = ({ children }) => {
  return (
    <div className={styles["modal--overlay"]}>
      <div className={styles["modal--backdrop"]}>{children}</div>
    </div>
  );
};

export default Modal;
