import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Display from "./Display";
import Button from "./Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="reset" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
