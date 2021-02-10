import React from "react";

function Statistics({ good, neutral, bad }) {
  const addAll = good + neutral + bad;
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / addAll;
  const positivePercentage = (good / addAll) * 100;

  return (
    <div>
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
}

export default Statistics;
