/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import ButtonContainer from "./componenets/ButtonContainer";
import Display from "./componenets/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const handleButtonClick = (key) => {
    if (key === "C") {
      setCalVal("");
    } else if (key === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayval = calVal + key;
      setCalVal(newDisplayval);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={handleButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
