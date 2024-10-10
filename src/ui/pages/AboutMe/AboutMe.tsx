import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./aboutme.module.css";
import icon from "../../../assets/icons/right-up-arrow-colored.svg";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className={styles.content_container}>
      <PageHeader title="About Me" />
      <div className={styles.content_wrapper}>
        <div className={styles.content_left}>
          <div>
            <h2>Ismail Muyideen</h2>
            <h3>Frontend Engineer</h3>
            <p>
              I craft pixel-perfect, immersive, and accessible digital
              experiences that captivate and engage users, blending creativity
              with precision to bring ideas to life.
            </p>
          </div>

          <ul className={styles.redirect_links}>
            <li
              className={styles.link}
              onClick={() => navigate("/experiences")}
            >
              <a href="">Experience</a>
              <ImageWrapper imgFile={icon} width="20px" height="20px" />
            </li>
            <li className={styles.link} onClick={() => navigate("/projects")}>
              <a href="">Projects</a>
              <ImageWrapper imgFile={icon} width="20px" height="20px" />
            </li>
          </ul>
        </div>

        <div className={styles.content_right}>
          <div>
            <p>
              I've always been fascinated by computers, and that curiosity led
              me to programming in 2020, thanks to a friend's suggestion. What
              started as a hobby quickly became a passion, especially in
              crafting visually appealing and user-friendly interfaces.
            </p>
            <p>
              These days, my primary focus is on building accessible user
              interfaces. I thrive in the space where design meets engineering,
              creating experiences that not only look great but are also
              well-constructed behind the scenes. The process of blending
              aesthetics with functionality is incredibly rewarding for me.
            </p>
            <p>
              When I’m not coding, you’ll find me enjoying podcasts, reading,
              spending time with my little brother, or shooting hoops on the
              basketball court. These activities keep me balanced and inspired,
              fueling my creativity both on and off the screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
