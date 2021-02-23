import React from "react";

const Total = ({ sumExercises }) => {
  let totalAmount = sumExercises.reduce((sum, element) => {
    return sum + element.exercises;
  }, 0);
  // 2.2: Course information step7 and 2.3*: Course information step8
  // are the same, had already used reducer

  return (
    <div>
      <p>
        <b>Total of {totalAmount} exercises </b>
      </p>
    </div>
  );
};

export default Total;
