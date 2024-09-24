import PrimaryTextButton from "../PrimaryTextButton/PrimaryTextButton";
import styles from "./header.module.css";
import menuIcon from "../../../assets/icons/menu_icon.svg";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import downloadIcon from "../../../assets/icons/download-icon2.svg";
import resume from "../../../assets/resume/Mark Myers - A Smarter Way to Learn JavaScript_ The new approach that uses technology to cut your effort in half-CreateSpace Independent Publishing Platform (2014).pdf";
import { useState } from "react";
import ContactMeModal from "../ContactMeModal/ContactMeModal";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className={styles.header_wrapper}>
        <a href="">
          <h3 className={styles.logo_text}>NRO</h3>
        </a>

        <div className={styles.header_btn_group}>
          <a href={resume} download={"My Resume"} target="_blank">
            <PrimaryTextButton
              extrastyle={styles.header_btn}
              label="Resume"
              width="auto"
              suffixIcon={downloadIcon}
              action={() => {}}
            />
          </a>

          <PrimaryTextButton
            extrastyle={styles.header_btn}
            label="Contact me"
            width="auto"
            suffixIcon={arrowIcon}
            action={() => setShowModal(true)}
          />
        </div>

        {/* Mobile Menu Button */}
        <div
          className={styles.menu_btn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={menuIcon} alt="Menu" />
        </div>
      </div>

      {/* Overlay and Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <div
            className={styles.mobile_menu}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <Link to="/about" className={styles.nav_link} onClick={closeMenu}>
              About
            </Link>
            <Link
              to="/experiences"
              className={styles.nav_link}
              onClick={closeMenu}
            >
              Experiences
            </Link>
            <Link
              to="/projects"
              className={styles.nav_link}
              onClick={closeMenu}
            >
              Projects
            </Link>

            {/* Existing Buttons */}
            <a
              href={resume}
              download={"My Resume"}
              target="_blank"
              onClick={closeMenu}
              style={{ marginTop: "1.5em" }}
            >
              <PrimaryTextButton
                extrastyle={styles.header_btn}
                label="Resume"
                width="auto"
                suffixIcon={downloadIcon}
                action={() => {}}
              />
            </a>
            <PrimaryTextButton
              extrastyle={styles.header_btn}
              label="Contact me"
              width="auto"
              suffixIcon={arrowIcon}
              action={() => {
                setShowModal(true);
                closeMenu();
              }}
            />
          </div>
        </div>
      )}

      {showModal && <ContactMeModal close={() => setShowModal(false)} />}
    </>
  );
}

export default Header;
