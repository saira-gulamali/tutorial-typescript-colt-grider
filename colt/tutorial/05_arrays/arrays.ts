const activeUsers: string[] = [];
activeUsers.push("brian");
//activeUsers.push(12); //errors

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
//ageList[1] = "hello"; //errors

const bools: boolean[] = [];
const bools2: Array<boolean> = [];

//alternative syntax
const names: Array<string> = ["bob", "tim", "jane", "bill"];
const ages1: Array<number> = [12, 34, 65, 23, 14];

//custom object types
type Point = {
  x: number;
  y: number;
};

//an array of type Point objects
const coords: Point[] = [];
coords.push({ x: 34, y: 2 });
//coords.push({ x: 3, y: "a" }); //errors

//multidimensional arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]], [[2]], [[3]]];
