import { useEffect, useState } from "react";
import styles from "./randomimages.module.css";

function RandomImages({ randomImage }: { randomImage: string }) {
  // console.log(randomImage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (randomImage.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [randomImage]);

  return (
    <div className={styles.random_images_wrapper}>
      {isLoading ? (
        "isloading..."
      ) : (
        <div className={styles.grp1}>
          <img className={styles.img_A} src={randomImage} alt="" />
        </div>
      )}
    </div>
  );
}

export default RandomImages;
