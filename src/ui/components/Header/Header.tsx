import PrimaryTextButton from "../PrimaryTextButton/PrimaryTextButton";
import styles from "./header.module.css";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";
import { useState } from "react";
import ContactMeModal from "../ContactMeModal/ContactMeModal";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.header_wrapper}>
        <h3>Logo</h3>

        <PrimaryTextButton
          extrastyle={styles.contact_me_btn}
          label="Contact me"
          width="auto"
          suffixIcon={arrowIcon}
          action={() => setShowModal(true)}
        />
      </div>

      {showModal && <ContactMeModal close={() => setShowModal(false)} />}
    </>
  );
}

export default Header;
