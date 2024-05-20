import styles from "./primarytextbutton.module.css";

type PrimaryTextButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  extrastyle?: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: "background_type" | "no_background_type"; // variant is optional and background_type is the default if none is specified
  width?: "auto" | "full";
  prefixIcon?: string;
  suffixIcon?: string;
};

export default function PrimaryTextButton({
  type,
  extrastyle,
  action,
  label,
  disabled,
  isLoading,
  variant,
  width,
  prefixIcon,
  suffixIcon,
}: PrimaryTextButtonProps) {
  return (
    <button
      type={type}
      className={`${extrastyle!} ${!variant ? styles.background_type : styles[variant!]}`}
      onClick={(e) => (!isLoading ? action?.(e) : null)}
      disabled={disabled}
      style={width === "auto" ? { width: "auto" } : { width: "100%", paddingInline: "0" }}
    >
      {prefixIcon ? <img className={styles.btn_image} src={prefixIcon} /> : null}
      {isLoading ? <span className={styles.label}>Loading...</span> : <span className={styles.label}>{label}</span>}
      {suffixIcon ? <img className={styles.btn_image} src={suffixIcon} /> : null}
    </button>
  );
}
