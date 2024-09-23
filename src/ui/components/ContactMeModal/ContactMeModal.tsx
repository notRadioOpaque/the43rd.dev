import ImageWrapper from "../ImageWrapper/ImageWrapper";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./contactmemodal.module.css";
import contactIcon from "../../../assets/icons/contact.svg";

export default function ContactMeModal({ close }: { close: () => void }) {
  return (
    <ModalContainer close={close}>
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
          <a
            className={styles.get_in_touch_btn}
            href="mailto:ismailmuyideen.c05@gmail.com"
          >
            Get in touch
          </a>
        </div>

        <div className={styles.socials}>
          <p className={styles.heading}>Socials</p>

          <div className={styles.list}>
            <p>
              <a href="https://x.com/notRadioOpaque" target="_blank">
                Twitter
              </a>
            </p>
            <p>
              <a href="https://github.com/notRadioOpaque" target="_blank">
                Github
              </a>
            </p>
            <p>
              <a
                href="https://discordapp.com/users/828380538330415124"
                target="_blank"
              >
                Discord
              </a>
            </p>
            {/* <p>
              <a href="">LinkedIn</a>
            </p> */}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
