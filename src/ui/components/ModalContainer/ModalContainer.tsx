import ImageWrapper from "../ImageWrapper/ImageWrapper";
import styles from "./modalcontainer.module.css";
import closeIcon from "../../../assets/icons/close.svg";

export default function ModalContainer({ children, close }: { children: JSX.Element; close: () => void }) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_bg} onClick={close}></div>

      <div className={styles.content_container}>{children}</div>

      <div className={styles.close_btn} onClick={close}>
        <ImageWrapper imgFile={closeIcon} width="40px" height="40px" />
      </div>
    </div>
  );
}
