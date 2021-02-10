import React from "react";

const Statistic = (props) => {
  <style>{"table{border:1px solid black;}"}</style>;
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: 60 }}>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistic;
