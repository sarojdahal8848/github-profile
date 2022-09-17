import styles from "./CustomButton.module.css";

export interface IButtonProps {
  title: string;
  onClick?: () => void;
}
const CustomButton = ({ title, onClick }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
