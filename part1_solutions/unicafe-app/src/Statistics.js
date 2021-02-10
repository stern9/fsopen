import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const addAll = good + neutral + bad;
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / addAll;
  const positivePercentage = (good / addAll) * 100 + "%";

  if (addAll === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="good:" value={good} />
      <Statistic text="neutral:" value={neutral} />
      <Statistic text="bad:" value={bad} />
      <Statistic text="all:" value={addAll} />
      <Statistic text="average:" value={averageScore} />
      <Statistic text="positive:" value={positivePercentage} />
    </div>
  );
};

export default Statistics;
