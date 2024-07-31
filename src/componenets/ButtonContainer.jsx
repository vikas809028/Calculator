/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttoncontainer}>
      {button.map((key) => (
        <button
          key={key}
          className={styles.button}
          onClick={() => onButtonClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
