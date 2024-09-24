import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./experiences.module.css";

export default function Experiences() {
  return (
    <div className={styles.experiences_wrapper}>
      <PageHeader title="Experiences" />

      <div className={styles.experience}>
        <div className={styles.date}>
          <span>
            August 2023 <div className={styles.bar}></div> July 2024
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>
            The Shawn Exchange
            <span className={styles.company}>Junior Frontend Developer</span>
          </div>

          <p className={styles.experience__details}>
            Led the frontend development of customer-facing and admin web apps,
            optimizing performance and implementing modern frameworks like React
            and TypeScript.
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
          <span>
            August 2024<div className={styles.bar}></div>Present
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.experience__heading}>
            Auritrack
            <span className={styles.company}>Lead Frontend Developer</span>
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
