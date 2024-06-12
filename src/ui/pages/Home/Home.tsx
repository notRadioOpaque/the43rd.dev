import styles from "./home.module.css";
import IconSpark from "../../../assets/icons/spark.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BentoWrapper from "../../components/BentoWrapper/BentoWrapper";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGithubProfile } from "../../../services/Github/action";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import githubIcon from "../../../assets/icons/Github-Dark.svg";
import mapImage from "../../../assets/images/Google-Maps-Platform.png";
import mapMarker from "../../../assets/icons/map-marker.svg";
import twitterIcon from "../../../assets/icons/Twitter.svg";
import discordIcon from "../../../assets/icons/Discord.svg";
import linkedIn from "../../../assets/icons/LinkedIn.svg";
import SkillGrid from "../../components/SkillGrid/SkillGrid";
import RandomImages from "../../components/RandomImages/RandomImages";
import { fetchUnsplashImages } from "../../../services/unsplash/action";
import Header from "../../components/Header/Header";
import BagImage from "../../../assets/images/icons8-craft-work-100.png";
import myMemoji from "../../../assets/images/my-memoji.jpeg";
import Toggle from "../../components/Toggle/Toggle";

type githubProfileType = {
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

type ThemeContextType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

// type ImageType = {
//   urls: {
//     small: string;
//   };
//   alt_description: string;
// }[];

function Home() {
  const navigate = useNavigate();
  const [githubProfile, setGithubProfile] = useState<githubProfileType>({
    name: "",
    avatar_url: "",
    html_url: "",
    public_repos: 0,
  });

  const [randomImage, setRandomImage] = useState("");
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  const { isDark, setIsDark } = useOutletContext<ThemeContextType>();

  useEffect(() => {
    fetchGithubProfile(setGithubProfile);

    if (!initialFetchDone) {
      fetchUnsplashImages(setRandomImage);
      setInitialFetchDone(true);
    } else {
      const timer = setTimeout(() => {
        fetchUnsplashImages(setRandomImage);
      }, 120000);

      return () => clearTimeout(timer);
    }
  }, [initialFetchDone, randomImage]);

  return (
    <div className={styles.home_container}>
      <Header />
      <div className={styles.home_wrapper}>
        <div className={styles.left_group}>
          <BentoWrapper width="100%" height="100%" title="Socials">
            <div className={styles.socials_wrapper}>
              <a href="https://x.com/the43rdSensei" target="_blank">
                <div className={styles.social}>
                  <ImageWrapper imgFile={twitterIcon} width="30px" height="30px" />
                  <p>Twitter</p>
                </div>
              </a>

              <a href="https://discordapp.com/users/828380538330415124" target="_blank">
                <div className={styles.social}>
                  <ImageWrapper imgFile={discordIcon} width="30px" height="30px" />
                  <p>Discord</p>
                </div>
              </a>

              <a href="" target="_blank">
                <div className={styles.social}>
                  <ImageWrapper imgFile={linkedIn} width="30px" height="30px" />
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          </BentoWrapper>

          <BentoWrapper width="100%" height="100%" title="Skills">
            <SkillGrid />
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
              <BentoWrapper width="100%" height="100%">
                <RandomImages randomImage={randomImage} />
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
              <BentoWrapper width="100%" height="100%" action={() => navigate("about")}>
                <>
                  <div className={styles.about_me_heading}>
                    <img src={myMemoji} alt="" />
                    <div>
                      <p className={styles.name}>Ismail Muyideen</p>
                      <p className={styles.role}>Frontend developer</p>
                    </div>
                  </div>

                  <div className={styles.about_me_text}>
                    <p>I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.</p>
                  </div>
                </>
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

            <BentoWrapper width="100%" height="100%" action={() => navigate("projects")}>
              <div className={styles.bag_icon}>
                <img src={BagImage} alt="" />
              </div>
            </BentoWrapper>
          </div>

          <div className={styles.rg_right}>
            <BentoWrapper width="100%" height="250px">
              <div>experience</div>
            </BentoWrapper>

            <BentoWrapper width="100%" height="180px">
              <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            </BentoWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
