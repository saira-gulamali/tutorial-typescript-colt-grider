// class Player {
//   readonly firstname: string;
//   readonly lastname: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.firstname = first;
//     this.lastname = last;
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}
  private secretMethod(): void {
    console.log("secret method!");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999999;
  }
}

const charlie = new Player("Charlie", "Brown", 10);

interface Colourful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colourful {
  constructor(public color: string) {}
}

class Jacket implements Colourful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
