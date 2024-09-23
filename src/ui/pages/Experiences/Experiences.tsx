import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./experiences.module.css";

export default function Experiences() {
  return (
    <div className={styles.experiences_wrapper}>
      <PageHeader title="Experiences" />

      <div className={styles.experience}>
        <div className={styles.date}>
          <span>April 2023 --- August 2024</span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>
            Junior Frontend Developer
            <span className={styles.company}>The Shawn Exchange</span>
          </div>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde,
            quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias
            obcaecati atque cum similique?
          </p>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde,
            quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias
            obcaecati atque cum similique?
          </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.date}>
          <span>April 2024 --- Present</span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>
            Lead Frontend Developer
            <span className={styles.company}>Auritrack</span>
          </div>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde,
            quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias
            obcaecati atque cum similique?
          </p>

          <p className={styles.experience__details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde,
            quae sed expedita iste iure aspernatur ipsum culpa quod consequuntur
            exercitationem laudantium reiciendis laborum. Doloribus alias
            obcaecati atque cum similique?
          </p>
        </div>
      </div>
    </div>
  );
}
