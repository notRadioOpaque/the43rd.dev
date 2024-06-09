import image from "../../../assets/images/map-image.jpg";
import githubIcon from "../../../assets/icons/Github-Dark.svg";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import styles from "./projectitem.module.css";

export default function ProjectItem() {
  return (
    <div className={styles.project_wrapper}>
      <div className={styles.project_item}>
        <div className={styles.project_graphic}>
          <ImageWrapper imgFile={image} width="100%" height="100%" />
        </div>

        <div className={styles.project_details}>
          <div className={styles.project_heading}>
            <h3>Bankify</h3>
          </div>

          <div className={styles.project_about}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestiae voluptatum incidunt magnam repellat illo voluptatem nostrum
              odio obcaecati a, dolore fugiat. Officia non ipsum dolores, dignissimos soluta laboriosam molestiae tempore quaerat dolorem consectetur
              natus ipsam eum, similique debitis architecto officiis assumenda qui asperiores nulla aperiam id molestias tenetur! Esse!
            </p>
          </div>

          <div className={styles.lang_list}>
            <div className={styles.lang_grp}>
              <div className={styles.lang}>HTML</div>
              <div className={styles.lang}>CSS</div>
              <div className={styles.lang}>Javascript</div>
            </div>
            <div className={styles.btn_group}>
              <button className={styles.project__btn}>
                <ImageWrapper imgFile={githubIcon} width="30px" height="30px" />
              </button>

              <button className={styles.project__btn}>
                <ImageWrapper imgFile={arrowIcon} width="30px" height="30px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
