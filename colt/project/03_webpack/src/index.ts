import Dog from "./Dog";
import { add, multiply, divide } from "./utils";
import ShelterDog from "./ShelterDog";

console.log("from index file!!!!!!");

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog("Buffy", "pitbull", 5, "desert springs shelter");
