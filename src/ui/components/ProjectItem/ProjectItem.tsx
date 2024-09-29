// import image from "../../../assets/images/map-image.jpg";
// import githubIcon from "../../../assets/icons/Github-Dark.svg";
// import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import styles from "./projectitem.module.css";

export default function ProjectItem({
  projectImgURL,
  projectDetails,
  projectTitle,
  langList,
  URL,
}: {
  projectImgURL: string;
  projectDetails: string;
  projectTitle: string;
  langList: string[];
  URL: string;
}) {
  return (
    <div className={styles.project_wrapper}>
      <div
        className={styles.project_item}
        onClick={() => window.open(URL, "_blank")}
      >
        <div className={styles.project_graphic}>
          <ImageWrapper imgFile={projectImgURL} />
        </div>

        <div className={styles.project_details}>
          <div className={styles.project_heading}>
            <h3>{projectTitle}</h3>
          </div>

          <div className={styles.project_about}>
            <p>{projectDetails}</p>
          </div>

          <div className={styles.lang_list}>
            <div className={styles.lang_grp}>
              {langList.map((lang) => (
                <div className={styles.lang}>{lang}</div>
              ))}
            </div>
            {/* <div className={styles.btn_group}>
              <button
                className={styles.project__btn}
                onClick={() => window.open(githubURL, "_blank")}
              >
                <ImageWrapper imgFile={githubIcon} width="30px" height="30px" />
              </button>

              <button
                className={styles.project__btn}
                onClick={() => window.open(URL, "_blank")}
              >
                <ImageWrapper imgFile={arrowIcon} width="30px" height="30px" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
