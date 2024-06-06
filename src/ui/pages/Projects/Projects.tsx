import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./projects.module.css";
import image from "../../../assets/images/map-image.jpg";
import githubIcon from "../../../assets/icons/Github-Dark.svg";

function Projects() {
  return (
    <div>
      <PageHeader title="Projects" />

      <div className={styles.project_wrapper}>
        <div className={styles.project_item}>
          <div className={styles.project_graphic}>
            <ImageWrapper imgFile={image} width="300px" height="300px" />
          </div>

          <div className={styles.project_details}>
            <div className={styles.project_heading}>
              <h3>Bankify</h3>
            </div>

            <div className={styles.project_about}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, molestiae voluptatum incidunt magnam repellat illo voluptatem
                nostrum odio obcaecati a, dolore fugiat. Officia non ipsum dolores, dignissimos soluta laboriosam molestiae tempore quaerat dolorem
                consectetur natus ipsam eum, similique debitis architecto officiis assumenda qui asperiores nulla aperiam id molestias tenetur! Esse!
              </p>
            </div>

            <div className={styles.lang_list}>
              <div className={styles.lang}>React</div>

              <div className={styles.btn_group}>
                <button>
                  <ImageWrapper imgFile={githubIcon} width="30px" height="30px" />
                </button>

                <button>
                  <ImageWrapper imgFile={githubIcon} width="30px" height="30px" />
                </button>
              </div>-
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
