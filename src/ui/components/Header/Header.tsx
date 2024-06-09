import PrimaryTextButton from "../PrimaryTextButton/PrimaryTextButton";
import styles from "./header.module.css";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import downloadIcon from "../../../assets/icons/download-icon2.svg";
import resume from "../../../assets/resume/Mark Myers - A Smarter Way to Learn JavaScript_ The new approach that uses technology to cut your effort in half-CreateSpace Independent Publishing Platform (2014).pdf";
import { useState } from "react";
import ContactMeModal from "../ContactMeModal/ContactMeModal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.header_wrapper}>
        <h3>Logo</h3>

        <div className={styles.header_btn_group}>
          <a href={resume} download={"My Resume"} target="_blank">
            <PrimaryTextButton extrastyle={styles.header_btn} label="Resume" width="auto" suffixIcon={downloadIcon} action={() => {}} />
          </a>

          <PrimaryTextButton
            extrastyle={styles.header_btn}
            label="Contact me"
            width="auto"
            suffixIcon={arrowIcon}
            action={() => setShowModal(true)}
          />
        </div>
      </div>

      {showModal && <ContactMeModal close={() => setShowModal(false)} />}
    </>
  );
}

export default Header;
