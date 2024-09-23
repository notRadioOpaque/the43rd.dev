import ImageWrapper from "../ImageWrapper/ImageWrapper";
import arrowBack from "../../../assets/icons/left-arrow.svg";
import { useNavigate } from "react-router";
import styles from "./pageheader.module.css";

function PageHeader({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className={styles.page_header_wrapper}>
      <div className={styles.back_btn} onClick={() => navigate(-1)}>
        <ImageWrapper imgFile={arrowBack} />
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default PageHeader;
