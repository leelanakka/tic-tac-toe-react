class Player {
  constructor(name, symbol) {
    this.symbol = symbol;
    this.name = name;
    this.moves = [];
  }

  isSubset(set1, set2) {
    return set2.every(element => set1.includes(element));
  }

  isWin(winningChances) {
    return winningChances.some(list => this.isSubset(this.moves, list));
  }

  addMove(move) {
    this.moves.push(move);
  }

  getMoves() {
    return this.moves;
  }
}

export default Player;
