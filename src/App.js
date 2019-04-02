import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
      symbols: ["X", "O"]
    };
    this.playerMoves = { X: [], O: [] };
    this.winningChances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  createRow(row, j) {
    return row.map((x, i) => (
      <td key={i + j} onClick={this.insertMove.bind(this, j, i)}>
        {x}
      </td>
    ));
  }

  isSubset(set1, set2) {
    return set2.every(element => {
      return set1.includes(element);
    });
  }

  isWin(moves) {
    return this.winningChances.some(list => {
      return this.isSubset(moves, list);
    });
  }

  insertMove(i, j) {
    this.setState(state => {
      const { moves, symbols } = state;
      if (!this.playerMoves[symbols[0]].includes(i * 3 + j)) {
        symbols.push(symbols.shift());
        moves[i][j] = symbols[0];
        this.playerMoves[symbols[0]].push(i * 3 + j);
      }
      if (this.isWin(this.playerMoves[symbols[0]])) {
        alert("you won the game");
      }
      return { moves, symbols };
    });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.moves.map((x, row) => {
            return <tr key={row + "1" + row}> {this.createRow(x, row)}</tr>;
          })}
        </tbody>
      </table>
    );
  }
}

export default App;
