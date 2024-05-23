import styles from "./home.module.css";
import IconSpark from "../../../assets/icons/spark.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BentoWrapper from "../../components/BentoWrapper/BentoWrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGithubProfile } from "../../../services/Github/action";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import githubIcon from "../../../assets/icons/Github-Dark.svg";
import mapImage from "../../../assets/images/map-image.jpg";
import mapMarker from "../../../assets/icons/map-marker.svg";

type githubProfileType = {
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

function Home() {
  const navigate = useNavigate();
  const [githubProfile, setGithubProfile] = useState<githubProfileType>({
    name: "",
    avatar_url: "",
    html_url: "",
    public_repos: 0,
  });

  useEffect(() => {
    fetchGithubProfile(setGithubProfile);
  }, []);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.left_group}>
        <BentoWrapper width="100%" height="160px" title="Socials">
          <div>socials</div>
        </BentoWrapper>

        <BentoWrapper width="100%" height="250px">
          <div></div>
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
              <>
                <div className={styles.github_wrapper}>
                  <div className={styles.github_icon}>
                    <ImageWrapper imgFile={githubIcon} width="17px" height="17px" />
                  </div>
                  <div>
                    <ImageWrapper imgFile={githubProfile.avatar_url} width="35px" height="35px" />
                    <p>{githubProfile.name}</p>
                  </div>
                  <p className={styles.pub_repo}>Public Repos: {githubProfile.public_repos}</p>
                </div>

                <div className={styles.arrow}>
                  <a href={githubProfile.html_url}>
                    <ImageWrapper imgFile={arrowIcon} width="20px" height="20px" />
                  </a>
                </div>
              </>
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
          <BentoWrapper width="100%" height="180px" action={() => navigate("location")} bgImg={mapImage} title="location">
            <div className={styles.marker}>
              <ImageWrapper imgFile={mapMarker} width="50px" height="50px" />
            </div>
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
