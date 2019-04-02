import React from "react";
import Player from "./Player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player1 = new Player("leela", "X");
    this.player2 = new Player("prasanth", "O");
    this.isGameFinished = false;
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

  isGameDraw() {
    return this.player1.moves.length + this.player2.moves.length === 9;
  }

  isMovePresent(i, j) {
    return (
      this.players[0].getMoves().includes(i * 3 + j) ||
      this.players[1].getMoves().includes(i * 3 + j)
    );
  }

  insertMove(i, j) {
    this.setState(state => {
      const { moves } = state;
      if (!this.isMovePresent(i, j) && !this.isGameFinished) {
        this.players.push(this.players.shift());
        moves[i][j] = this.players[0].symbol;
        state.turn = this.players[0].name + " turn";
        this.players[0].addMove(i * 3 + j);
      }
      if (this.players[0].isWin(this.winningChances)) {
        this.isGameFinished = true;
        state.turn = this.players[1].name + " won the game";
      }

      if (this.isGameDraw()) {
        state.turn = "game has drawn";
      }
      return { moves };
    });
  }

  render() {
    return (
      <div className="table">
        <div className="message">{this.state.turn}</div>
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
