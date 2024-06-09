import PageHeader from "../../components/PageHeader/Pageheader";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import styles from "./projects.module.css";

const projects = [
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
  {
    projectName: "",
    imageURL: "",
    githubURL: "",
    URL: "",
  },
];

function Projects() {
  return (
    <div className={styles.projects_wrapper}>
      <PageHeader title="Projects" />

      <div className={styles.projects_inner}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
