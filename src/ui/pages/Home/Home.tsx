import styles from "./home.module.css";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BentoWrapper from "../../components/BentoWrapper/BentoWrapper";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGithubProfile } from "../../../services/Github/action";
import githubIcon from "../../../assets/icons/Github-Dark.svg";
import mapImage from "../../../assets/images/Google-Maps-Platform.png";
import mapMarker from "../../../assets/icons/map-marker.svg";
import twitterIcon from "../../../assets/icons/Twitter.svg";
import discordIcon from "../../../assets/icons/Discord.svg";
import SkillGrid from "../../components/SkillGrid/SkillGrid";
import RandomImages from "../../components/RandomImages/RandomImages";
import { fetchUnsplashImages } from "../../../services/unsplash/action";
import myMemoji from "../../../assets/images/my-memoji.jpeg";
import Toggle from "../../components/Toggle/Toggle";
import workImage from "../../../assets/images/work-image.jpg";
import experiencesImage from "../../../assets/images/experience-image.jpg";

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
      <div className={styles.home_wrapper}>
        <div className={styles.left_group}>
          <BentoWrapper
            width="100%"
            height="100%"
            title="Socials"
            isClickable={false}
          >
            <div className={styles.socials_wrapper}>
              <a href="https://x.com/notRadioOpaque" target="_blank">
                <div className={styles.social}>
                  <ImageWrapper
                    imgFile={twitterIcon}
                    width="30px"
                    height="30px"
                  />
                  <p>Twitter</p>
                </div>
              </a>

              <a
                href="https://discordapp.com/users/828380538330415124"
                target="_blank"
              >
                <div className={styles.social}>
                  <ImageWrapper
                    imgFile={discordIcon}
                    width="30px"
                    height="30px"
                  />
                  <p>Discord</p>
                </div>
              </a>
            </div>
          </BentoWrapper>

          <BentoWrapper
            width="100%"
            height="100%"
            title="Skills"
            isClickable={false}
          >
            <SkillGrid />
          </BentoWrapper>
        </div>

        <div className={styles.middle_group}>
          <div className={styles.intro_text}>
            <div className={styles.title}>
              <h2>
                Ismail Muyideen <br />
                Frontend Developer.
              </h2>
            </div>
          </div>

          <div className={styles.middle_group_bottom}>
            <div className={styles.mg_left}>
              <BentoWrapper width="100%" height="100%" isClickable={false}>
                <RandomImages randomImage={randomImage} />
              </BentoWrapper>

              <BentoWrapper
                width="100%"
                height="max-content"
                isClickable={true}
                action={() => window.open(githubProfile.html_url, "_blank")}
              >
                <>
                  <div className={styles.github_wrapper}>
                    <div className={styles.github_icon}>
                      <ImageWrapper
                        imgFile={githubIcon}
                        width="17px"
                        height="17px"
                      />
                    </div>
                    <div>
                      <img
                        src={githubProfile.avatar_url}
                        alt=""
                        className={styles.github_avatar}
                      />
                      <p>{githubProfile.name}</p>
                    </div>
                    <p className={styles.pub_repo}>
                      Public Repos: {githubProfile.public_repos}
                    </p>
                  </div>
                </>
              </BentoWrapper>
            </div>

            <div className={styles.mg_right}>
              <BentoWrapper
                width="100%"
                height="100%"
                isClickable={true}
                action={() => navigate("about")}
              >
                <>
                  <div className={styles.about_me_heading}>
                    <img src={myMemoji} alt="" />
                    <div>
                      <p className={styles.name}>Ismail Muyideen</p>
                      <p className={styles.role}>Frontend developer</p>
                    </div>
                  </div>

                  <div className={styles.about_me_text}>
                    <p>
                      I’m passionate about continuous learning and love tackling
                      new challenges, always reflecting on how each one helps me
                      grow and improve.
                    </p>
                  </div>
                </>
              </BentoWrapper>
            </div>
          </div>
        </div>

        <div className={styles.right_group}>
          <div className={styles.rg_left}>
            <BentoWrapper
              width="100%"
              height="180px"
              isClickable={true}
              action={() => navigate("location")}
              bgImg={mapImage}
              title="location"
            >
              <div className={styles.marker}>
                <ImageWrapper imgFile={mapMarker} width="50px" height="50px" />
              </div>
            </BentoWrapper>

            <BentoWrapper
              width="100%"
              height="100%"
              isClickable={true}
              title="Projects"
              bgImg={workImage}
              action={() => navigate("projects")}
            >
              <div className={styles.bag_icon}></div>
            </BentoWrapper>
          </div>

          <div className={styles.rg_right}>
            <BentoWrapper
              width="100%"
              height="250px"
              isClickable={true}
              title="Experiences"
              bgImg={experiencesImage}
              action={() => navigate("experiences")}
            >
              <div className={styles.bag_icon}></div>
            </BentoWrapper>

            <BentoWrapper width="100%" height="180px" isClickable={false}>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
            </BentoWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
