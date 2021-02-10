import React from "react";

const Statistic = (props) => {
  return (
    <div>
      <div>
        {props.text} {props.value}
      </div>
    </div>
  );
};

export default Statistic;
