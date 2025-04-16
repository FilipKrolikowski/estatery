import { ButtonType } from "@/types/button";
import styles from "@/styles/CustomButton.module.css";

const CustomButton = ({ text, variant }: ButtonType) => {
  return (
    <button
      type="button"
      className={`px-8 py-3 text-center rounded-lg cursor-pointer font-bold text-[16px] ${styles[variant]}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
