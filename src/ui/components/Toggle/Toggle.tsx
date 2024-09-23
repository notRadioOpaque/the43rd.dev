import styles from "./toggle.module.css";

export default function Toggle({
  handleChange,
  isChecked,
}: {
  handleChange: () => void;
  isChecked: boolean;
}) {
  return (
    <div className={styles.mode_wrapper}>
      <p>Light</p>
      <div className={styles.toggle_container}>
        <input
          type="checkbox"
          className={styles.toggle_input}
          onChange={handleChange}
          checked={isChecked}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 292 142"
          className={styles.toggle}
        >
          <path
            d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"
            className={styles.toggle_background}
          ></path>
          <rect
            rx="6"
            height="64"
            width="12"
            y="39"
            x="64"
            className={`${styles.toggle_icon} ${styles.on}`}
          ></rect>
          <path
            d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"
            fill-rule="evenodd"
            className={`${styles.toggle_icon} ${styles.off}`}
          ></path>
          <g filter="url('#goo')">
            <rect
              fill="#fff"
              rx="29"
              height="58"
              width="116"
              y="42"
              x="13"
              className={styles.toggle_circle_center}
            ></rect>
            <rect
              fill="#fff"
              rx="58"
              height="114"
              width="114"
              y="14"
              x="14"
              className={`${styles.toggle_circle} ${styles.left}`}
            ></rect>
            <rect
              fill="#fff"
              rx="58"
              height="114"
              width="114"
              y="14"
              x="164"
              className={`${styles.toggle_circle} ${styles.right}`}
            ></rect>
          </g>
          <filter id="goo">
            <feGaussianBlur
              stdDeviation="10"
              result="blur"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
          </filter>
        </svg>
      </div>
      <p>Dark</p>
    </div>
  );
}
