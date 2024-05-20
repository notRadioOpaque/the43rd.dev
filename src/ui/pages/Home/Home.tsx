import styles from "./home.module.css";
import IconSpark from "../../../assets/icons/spark.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BentoWrapper from "../../components/BentoWrapper/BentoWrapper";
import { useNavigate } from "react-router-dom";
import { fetchGithubProfile } from "../../../services/Github/action";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [githubProfile, setGithubProfile] = useState({});

  useEffect(() => {
    fetchGithubProfile(setGithubProfile);
  }, []);

  console.log(githubProfile);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.left_group}>
        <BentoWrapper width="100%" height="160px">
          <div>socials</div>
        </BentoWrapper>

        <BentoWrapper width="100%" height="250px">
          <div>Tech stack</div>
        </BentoWrapper>
      </div>

      <div className={styles.middle_group}>
        <div className={styles.intro_text}>
          <div className={styles.subtitle}>
            <ImageWrapper imgFile={IconSpark} width="30px" height="30px" />
            <p className={styles.subtitle_text}>Hi, my name is</p>
          </div>
          <div className={styles.title}>
            <h2>
              Ismael Muyideen <br />
              Frontend Developer.
            </h2>
          </div>
        </div>

        <div className={styles.middle_group_bottom}>
          <div className={styles.mg_left}>
            <BentoWrapper width="100%" height="200px">
              <div>Aesthetics</div>
            </BentoWrapper>

            <BentoWrapper width="100%" height="max-content">
              <div>Github</div>
            </BentoWrapper>

            <BentoWrapper width="100%" height="max-content">
              <div>Spotify</div>
            </BentoWrapper>
          </div>

          <div className={styles.mg_right}>
            <BentoWrapper width="100%" height="320px" action={() => navigate("about")}>
              <div>About me</div>
            </BentoWrapper>
          </div>
        </div>
      </div>

      <div className={styles.right_group}>
        <div className={styles.rg_left}>
          <BentoWrapper width="100%" height="180px" action={() => navigate("location")}>
            <div>map</div>
          </BentoWrapper>

          <BentoWrapper width="100%" height="250px" action={() => navigate("projects")}>
            <div>Projects</div>
          </BentoWrapper>
        </div>

        <div className={styles.rg_right}>
          <BentoWrapper width="100%" height="250px">
            <div>experience</div>
          </BentoWrapper>

          <BentoWrapper width="100%" height="180px">
            <div>Hobbies</div>
          </BentoWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
