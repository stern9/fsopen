import "./App.css";
import React, { useState } from "react";
import Button from "./Button";

const App = (props) => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const points = new Array(anecdotes.length);
  for (let i = 0; i < anecdotes.length; ++i) points[i] = 0;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  // console.log(selected);

  const addVotes = () => {
    const pointsCopy = [...votes];
    pointsCopy[selected] += 1;
    setVotes(pointsCopy);
    console.log(pointsCopy);
  };

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={addVotes} text="vote" />
      <Button handleClick={randomAnecdote} text="random anecdote" />
    </div>
  );
};

export default App;
