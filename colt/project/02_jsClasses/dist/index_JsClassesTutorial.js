"use strict";
console.log("woo");

class Player {
  static description = "player in our game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
  taunt() {
    console.log("boo");
  }
  loseLife() {
    this.#numLives -= 1;
  }
  #secret() {
    console.log("secret!");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }
}

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}

const admin = new AdminPlayer("bugs", "bunny", ["delete", "restore world"]);

const player1 = new Player("charlie", "brown");
player1.taunt();
console.log(player1.score);
player1.score = 100;

console.log(player1.score);

const player2 = new Player("peter", "rabbit");
player2.taunt();
console.log(player2.fullName);
player2.fullName = "amy adams";
console.log(player2.fullName);
