import React from "react";
import Player from "./Player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player1 = new Player("leela");
    this.player2 = new Player("prasanth");
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
    this.players = [this.player1, this.player2];
    this.state = {
      moves: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
      symbols: ["X", "O"],
      turn: this.players[0].name + " turn"
    };
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

  isMovePresent(i, j) {
    return (
      !this.players[0].getMoves().includes(i * 3 + j) &&
      !this.players[1].getMoves().includes(i * 3 + j)
    );
  }

  insertMove(i, j) {
    this.setState(state => {
      const { moves, symbols } = state;
      if (this.isMovePresent(i, j)) {
        symbols.push(symbols.shift());
        this.players.push(this.players.shift());
        moves[i][j] = symbols[0];
        state.turn = this.players[0].name + " turn";
        this.players[0].addMove(i * 3 + j);
      }
      if (this.isWin(this.players[0].getMoves())) {
        state.turn = this.players[1].name + " won the game";
        return { moves, symbols };
      }
      return { moves, symbols };
    });
  }

  render() {
    return (
      <div>
        <p1>{this.state.turn}</p1>
        <table>
          <tbody>
            {this.state.moves.map((x, row) => {
              return <tr key={row + "1" + row}> {this.createRow(x, row)}</tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
