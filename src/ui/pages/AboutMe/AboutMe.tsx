import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import PageHeader from "../../components/PageHeader/Pageheader";
import styles from "./aboutme.module.css";
import icon from "../../../assets/icons/right-up-arrow-colored.svg";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="About me" />
      <div className={styles.content_wrapper}>
        <div className={styles.content_left}>
          <div>
            <h2>Ismael Muyideen</h2>
            <h3>Frontend Developer</h3>
            <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>
          </div>

          <ul className={styles.redirect_links}>
            <li className={styles.link} onClick={() => navigate("/experiences")}>
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
              Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web
              development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio.
            </p>
            <p>
              My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the
              sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also
              released an online video course that covers everything you need to know to build a web app with the Spotify API.
            </p>
            <p>
              When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule
              searching for Korok seeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
