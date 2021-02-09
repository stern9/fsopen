import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const addAll = good + neutral + bad;
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / addAll;
  const positivePercentage = (good / addAll) * 100;

  return (
    <div className="App">
      <Header />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <div>
        <h1>Statistics</h1>
      </div>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {addAll}</div>
      <div>average: {averageScore}</div>
      <div>positive: {positivePercentage} %</div>
    </div>
  );
};

export default App;
