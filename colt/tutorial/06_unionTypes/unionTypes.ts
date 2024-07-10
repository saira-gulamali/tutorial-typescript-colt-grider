type Point2 = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinates: Point2 | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.345 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  //price.replace('$', '')//errors
  return tax * price; //errors
}

function calculateTax2(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = Number.parseFloat(price.replace("$", ""));
  }
  return tax * price;
}

const nums: number[] = [1, 2, 3, 4];
const stuff: any[] = [1, 2, 3, 4, "a", true];
const stuff2: (number | string)[] = [1, 2, 3, "a"];
let stuff3: number[] | string[] = [1, 2, 3];
stuff3 = ["a", "b", "c"];

const coords: (Point2 | Loc)[] = [];
coords.push({ lat: 234, long: 123 });
coords.push({ x: 2, y: 4 });

//literal types
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `the answer is ${answer}.`;
};
giveAnswer("no"); //’the answer is no’
giveAnswer("oh boy im not sure"); //errors
let zero: 0 = 0;
zero = 2; //errors
let hi: "hi" = "HI"; //errors

let mood: "Sad" | "Happy" = "Happy";
mood = "Sad";
type DayofWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayofWeek = "Monday";
today = "tues"; //errors
