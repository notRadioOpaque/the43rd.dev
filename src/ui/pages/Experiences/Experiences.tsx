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
            Built responsive, high-performance interfaces with React and
            TypeScript. Integrated APIs and optimized state management to
            enhance user experience and scalability.
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
            Established the frontend architecture using React, TypeScript, and
            Tailwind CSS, while integrating Supabase and optimizing state
            management with React Query.
          </p>

          <p className={styles.experience__details}>
            Developed reusable components and streamlined data handling,
            ensuring efficient and scalable application performance. Enhanced UI
            consistency and responsiveness across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}
