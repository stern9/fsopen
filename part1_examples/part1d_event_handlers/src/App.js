import "./App.css";
import { useState } from "react";

// This is the right place to define a component
const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

// Do not define components inside another component
const App = () => {
  const [value, setValue] = useState(10);

  // const handleClick = () => {
  //   console.log("clicked the button");
  //   setValue(0);
  // };

  // const hello = (who) => {
  //   return () => {
  //     console.log("hello", who);
  //   };
  // };

  // const hello = (who) => () => {
  //   console.log("hello", who);
  // };

  // const setToValue = (newValue) => () => {
  //   setValue(newValue);
  // };

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      {/* <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button> */}
      {/* <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button> */}
      {/* <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button> */}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
