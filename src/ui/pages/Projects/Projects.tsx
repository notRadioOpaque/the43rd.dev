import PageHeader from "../../components/PageHeader/Pageheader";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import styles from "./projects.module.css";
import admin_image from "../../../assets/images/admin-image.png";
import portfolio_image from "../../../assets/images/portfolio-image.png";
import auritrack_image from "../../../assets/images/auritrack-image.png";

const projects = [
  {
    projectName: "Shawn Exchange",
    projectDetails:
      "Shawn Exchange is a platform designed for seamless conversion of gift cards and cryptocurrencies to Naira. The platform provides users with fast, secure, and efficient exchange services, allowing them to trade their digital assets for local currency with competitive rates and an easy-to-use interface.",
    imageURL: admin_image,
    githubURL: "",
    URL: "https://admin.shawnexchange.com/",
    langList: ["CSS", "React", "Typescript"],
  },
  {
    projectName: "AuriTrack",
    projectDetails:
      "AuriTrack is a comprehensive spending and saving tracking web application that enables users to log their incomes and expenditures. It provides powerful data analytics to help users visualize their financial habits, including insights on who they are giving to most and who is receiving the most from them, aiding in better financial decision-making.",
    imageURL: auritrack_image,
    githubURL: "",
    URL: "https://auritrack.netlify.app/login",
    langList: ["Tailwind", "React", "React Query", "Typescript"],
  },
  {
    projectName: "notRadioOpaque.dev",
    projectDetails:
      "My personal portfolio website showcases my journey as a frontend web developer. It features a curated selection of projects, each highlighting my skills and the technologies used. In the About Me section, I share my professional story and passion for web development. The Skills section provides a quick overview of my expertise, while the contact form invites collaboration and communication.This portfolio not only represents my work but also reflects my commitment to continuous learning and growth in the ever-evolving field of web development.",
    imageURL: portfolio_image,
    githubURL: "",
    URL: "https://notradioopaque.netlify.app/",
    langList: ["CSS", "React", "Typescript"],
  },
];

function Projects() {
  return (
    <div className={styles.projects_wrapper}>
      <PageHeader title="Projects" />

      <div className={styles.projects_inner}>
        {projects.map((project) => (
          <ProjectItem
            projectTitle={project.projectName}
            projectDetails={project.projectDetails}
            projectImgURL={project.imageURL}
            langList={project.langList}
            URL={project.URL}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
