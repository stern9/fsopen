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
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={addAll} />
      <Statistic text="Average" value={averageScore} />
      <Statistic text="Positive" value={positivePercentage} />
    </div>
  );
};

export default Statistics;
