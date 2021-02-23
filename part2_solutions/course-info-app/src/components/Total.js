import React from "react";

const Total = ({ sumExercises }) => {
  let totalAmount = sumExercises.reduce((sum, element) => {
    return sum + element.exercises;
  }, 0);

  return (
    <div>
      <p>
        <b>Total of {totalAmount} exercises </b>
      </p>
    </div>
  );
};

export default Total;
