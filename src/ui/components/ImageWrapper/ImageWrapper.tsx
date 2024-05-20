import styles from "./imagewrapper.module.css";

function ImageWrapper({ imgFile, width, height, action }: { imgFile: string; width?: string; height?: string; action?: () => void }) {
  const style = {
    height: height,
    width: width,
  };

  return (
    <div className={styles.image_wrapper} onClick={action}>
      <img style={style} src={imgFile} alt="" />
    </div>
  );
}

export default ImageWrapper;
