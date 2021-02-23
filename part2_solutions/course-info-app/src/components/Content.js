import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
      <Total sumExercises={parts} />
      {console.log(parts)}
    </div>
  );
};

export default Content;
