import styles from "./inputfield.module.css";
import iconShow from "../../../assets/icons/Show.svg";
import iconHide from "../../../assets/icons/hide.svg";
import { useState } from "react";

type InputFieldProps = {
  type?: "text" | "password" | "number";
  label?: string;
  error?: string;
  disabled?: boolean;
  onInput: (value: string) => void;
  suffixIcon?: string;
  placeholder?: string;
  prefixIcon?: string;
  inputWidth?: string;
  backgroundColor?: string;
};

export default function InputField({
  type,
  label,
  error,
  disabled,
  onInput,
  suffixIcon,
  placeholder,
  prefixIcon,
  inputWidth,
  backgroundColor,
}: InputFieldProps) {
  const [currentSuffixIcon, setCurrentSuffixIcon] = useState(iconShow);
  const [currentInputType, setCurrentInputType] = useState("password");

  const handleChangeSuffixIcon = () => {
    if (currentSuffixIcon === iconShow) {
      setCurrentSuffixIcon(iconHide);
      setCurrentInputType("text");
    }
    if (currentSuffixIcon === iconHide) {
      setCurrentSuffixIcon(iconShow);
      setCurrentInputType("password");
    }
  };

  return (
    <div className={styles.input_field_wrapper}>
      {label ? (
        <label className={styles.label} htmlFor="input">
          {label}
        </label>
      ) : null}

      <div className={styles.input_wrapper} style={backgroundColor ? { background: backgroundColor } : undefined}>
        {prefixIcon ? (
          <span className={styles.prefix_icon}>
            <img src={prefixIcon} alt="" />
          </span>
        ) : null}

        <input
          type={type === "password" ? currentInputType : type}
          style={inputWidth ? { width: inputWidth } : undefined}
          id="input"
          onChange={(e) => onInput(e.target.value)}
          disabled={disabled}
          placeholder={placeholder ? placeholder : undefined}
        />
        {type === "password" ? (
          <span className={styles.suffix_icon} onClick={handleChangeSuffixIcon}>
            <img src={currentSuffixIcon} alt="" />
          </span>
        ) : null}

        {suffixIcon ? (
          <span className={styles.suffix_icon}>
            <img src={suffixIcon} alt="" />
          </span>
        ) : null}
      </div>

      {error ? (
        <div className={styles.error}>
          <p className={styles.error_text}>{error}</p>
        </div>
      ) : null}
    </div>
  );
}
