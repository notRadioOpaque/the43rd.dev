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
}: {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children: JSX.Element;
  height?: "screen" | "full" | string;
  width?: string;
  action?: () => void;
}) {
  const style = {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
    height: height,
    width: width,
  };
  return (
    <div className={styles.bento_outer} onClick={action}>
      <div className={styles.wrapper} style={style}>
        {children}
      </div>
    </div>
  );
}
