import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./experiences.module.css";

export default function Experiences() {
  return (
    <div className={styles.experiences_wrapper}>
      <PageHeader title="Experiences" />

      <div className={styles.experience}>
        <div className={styles.date}>
          <span>2023 --- present</span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>Junior Frontend Developer -- The Shawn Exchange</div>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias obcaecati atque cum similique?
          </p>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias obcaecati atque cum similique?
          </p>
        </div>
      </div>

      {/* <div className={styles.experience}>
        <div className={styles.date}>
          <span>2023 --- present</span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>Junior Frontend Developer -- The Shawn Exchange</div>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias obcaecati atque cum similique?
          </p>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias obcaecati atque cum similique?
          </p>
        </div>
      </div> */}
    </div>
  );
}
