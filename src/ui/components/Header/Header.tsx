import PrimaryTextButton from "../PrimaryTextButton/PrimaryTextButton";
import styles from "./header.module.css";
import arrowIcon from "../../../assets/icons/right-up-arrow.svg";
import { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import contactIcon from "../../../assets/icons/contact.svg";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.header_wrapper}>
        <h3>Logo</h3>

        <PrimaryTextButton label="Contact me" width="auto" suffixIcon={arrowIcon} action={() => setShowModal(true)} />
      </div>

      {showModal && (
        <ModalContainer close={() => setShowModal(false)}>
          <div className={styles.content_wrapper}>
            <p>Hey there! 👋</p>
            <h3>Let's work together</h3>

            <div className={styles.divider}>
              <div className={styles.bar}></div>
              <div className={styles.divider_icon}>
                <ImageWrapper imgFile={contactIcon} width="" height="" />
              </div>
            </div>

            <div className={styles.btn_group}>
              <div className={styles.email}>Ismailmuyideen.c05@gmail.com</div>

              {/* <PrimaryTextButton extrastyle={styles.get_in_touch_btn} label="Get in touch" action={() => {}} /> */}
              <a className={styles.get_in_touch_btn} href="mailto:ismailmuyideen.c05@gmail.com">
                Get in touch
              </a>
            </div>

            <div className={styles.socials}>
              <p className={styles.heading}>Socials</p>

              <div className={styles.list}>
                <p>
                  <a href="">Twitter</a>
                </p>
                <p>
                  <a href="">Github</a>
                </p>
                <p>
                  <a href="">Discord</a>
                </p>
                <p>
                  <a href="">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
}

export default Header;
