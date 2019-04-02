class Player {
  constructor(name) {
    this.name = name;
    this.moves = [];
  }

  addMove(move) {
    this.moves.push(move);
  }

  getMoves() {
    return this.moves;
  }
}

export default Player;
