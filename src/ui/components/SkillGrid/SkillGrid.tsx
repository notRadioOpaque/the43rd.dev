import ImageWrapper from "../ImageWrapper/ImageWrapper";
import styles from "./skillgrid.module.css";
import html from "../../../assets/icons/HTML.svg";
import css from "../../../assets/icons/CSS.svg";
import js from "../../../assets/icons/JavaScript.svg";
import figma from "../../../assets/icons/Figma-Dark.svg";
import react from "../../../assets/icons/React-Dark.svg";
import git from "../../../assets/icons/Git.svg";
import bootstrap from "../../../assets/icons/Bootstrap.svg";
import typescript from "../../../assets/icons/TypeScript.svg";
import netlify from "../../../assets/icons/Netlify-Dark.svg";
import vite from "../../../assets/icons/Vite-Dark.svg";
import sass from "../../../assets/icons/Sass.svg";
import github from "../../../assets/icons/Github-Dark.svg";

const skills = [
  {
    skill: "HTML",
    logo: html,
    color: "",
  },
  {
    skill: "CSS",
    logo: css,
    color: "",
  },
  {
    skill: "Javascript",
    logo: js,
    color: "",
  },
  {
    skill: "Figma",
    logo: figma,
    color: "",
  },
  {
    skill: "React",
    logo: react,
    color: "",
  },
  {
    skill: "GIT",
    logo: git,
    color: "",
  },
  {
    skill: "Bootstrap",
    logo: bootstrap,
    color: "",
  },
  {
    skill: "Typescript",
    logo: typescript,
    color: "",
  },
  {
    skill: "Vite",
    logo: vite,
    color: "",
  },
  {
    skill: "Netlify",
    logo: netlify,
    color: "",
  },
  {
    skill: "Sass",
    logo: sass,
    color: "",
  },
  {
    skill: "Github",
    logo: github,
    color: "",
  },
];

export default function SkillGrid() {
  return (
    <div className={styles.grid_list}>
      {skills.map((skill) => (
        <div>
          <ImageWrapper key={skill.skill} imgFile={skill.logo} width="35px" height="35px" />
        </div>
      ))}
    </div>
  );
}
