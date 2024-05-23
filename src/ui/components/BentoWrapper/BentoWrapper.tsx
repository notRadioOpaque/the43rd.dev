import ImageWrapper from "../ImageWrapper/ImageWrapper";
import titleIcon from "../../../assets/icons/spark.svg";
import styles from "./bentowrapper.module.css";

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
}) {
  const style = {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
    height: height,
    width: width,
    backgroundImage: `url(${bgImg})`,
  };
  return (
    <div className={styles.bento_outer} onClick={action}>
      <div className={styles.wrapper} style={style}>
        {title && (
          <div className={styles.bento_title_wrapper}>
            <ImageWrapper imgFile={titleIcon} width="20px" height="20px" />
            <p className={styles.bento_title}>{title}</p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
