import ImageWrapper from "../ImageWrapper/ImageWrapper";
import titleIcon from "../../../assets/icons/spark.svg";
import styles from "./bentowrapper.module.css";
import arrowIcon from "../../../assets/icons/right-up-arrow-colored.svg";

export default function BentoWrapper({
  top,
  right,
  bottom,
  left,
  children,
  height,
  width,
  action,
  title,
  bgImg,
  isClickable,
}: {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children: JSX.Element;
  height?: "screen" | "full" | string;
  width?: string;
  action?: () => void;
  title?: string;
  bgImg?: string;
  isClickable: boolean;
}) {
  const style = {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
    height: height,
    width: width,
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const wrapperClass = isClickable ? styles.wrapper : styles.non_clickable;

  return (
    <div className={styles.bento_outer} onClick={action}>
      <div className={wrapperClass} style={style}>
        {title && (
          <div className={styles.bento_title_wrapper}>
            <ImageWrapper imgFile={titleIcon} width="20px" height="20px" />
            <p className={styles.bento_title}>{title}</p>
          </div>
        )}
        {children}

        {isClickable && (
          <div className={styles.arrow}>
            <ImageWrapper imgFile={arrowIcon} width="20px" height="20px" />
          </div>
        )}
      </div>
    </div>
  );
}
