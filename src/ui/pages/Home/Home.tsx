import styles from "./home.module.css";
import IconSpark from "../../../assets/icons/spark.svg";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BentoWrapper from "../../components/BentoWrapper/BentoWrapper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchGithubProfile } from "../../../services/Github/action";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import githubIcon from "../../../assets/icons/Github-Dark.svg";
import mapImage from "../../../assets/images/map_image2.jpg";
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

type githubProfileType = {
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
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

  console.log(initialFetchDone);

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
    <>
      <Header />
      <div className={styles.home_wrapper}>
        <div className={styles.left_group}>
          <BentoWrapper width="100%" height="100%" title="Socials">
            <div className={styles.socials_wrapper}>
              <a href="">
                <div className={styles.social}>
                  <ImageWrapper imgFile={twitterIcon} width="30px" height="30px" />
                  <p>Twitter</p>
                </div>
              </a>

              <a href="">
                <div className={styles.social}>
                  <ImageWrapper imgFile={discordIcon} width="30px" height="30px" />
                  <p>Discord</p>
                </div>
              </a>

              <a href="">
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
                    {/* <h2>Passionate to pursue the technology.</h2> */}
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
              <div className={styles.mode_wrapper}>
                <p>light</p>
                <div className={styles.toggle_container}>
                  <input type="checkbox" className={styles.toggle_input} />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className={styles.toggle}>
                    <path
                      d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
                      className={styles.toggle_background}
                    ></path>
                    <rect rx="6" height="64" width="12" y="39" x="64" className={`${styles.toggle_icon} ${styles.on}`}></rect>
                    <path
                      d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"
                      fill-rule="evenodd"
                      className={`${styles.toggle_icon} ${styles.off}`}
                    ></path>
                    <g filter="url('#goo')">
                      <rect fill="#fff" rx="29" height="58" width="116" y="42" x="13" className={styles.toggle_circle_center}></rect>
                      <rect fill="#fff" rx="58" height="114" width="114" y="14" x="14" className={`${styles.toggle_circle} ${styles.left}`}></rect>
                      <rect fill="#fff" rx="58" height="114" width="114" y="14" x="164" className={`${styles.toggle_circle} ${styles.right}`}></rect>
                    </g>
                    <filter id="goo">
                      <feGaussianBlur stdDeviation="10" result="blur" in="SourceGraphic"></feGaussianBlur>
                      <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                    </filter>
                  </svg>
                </div>
                <p>dark</p>
              </div>
            </BentoWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
