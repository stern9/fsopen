import React from "react";

function Hello(props) {
  return (
    <div className="App">
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
}

export default Hello;
