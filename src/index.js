import React from "react";
import ReactDOM from "react-dom";

const moves = [["X","O", "X"], ["X", "O", "X"], ["O", "X", "O"]];

function createRow(row) {
  return row.map(x => <td>{x}</td>);
}

function Table() {
  return moves.map(x => {
    return <tr>{createRow(x)}</tr>;
  });
}

ReactDOM.render(<Table />, document.getElementById("root"));
