//an rgb color array:
const color: [number, number, number] = [100, 0, 100];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];

//if you use push after the array has been created tuples will allow it
goodRes.push(123); //works even though it shouldn't
goodRes.pop(); //works even though it shouldn't
goodRes.pop(); //works even though it shouldn't
goodRes.pop(); //works even though it shouldn't

//a better solution
type HTTPResponse2 = {
  code: number;
  msg: string;
};

//an array of tuples
const responses: HTTPResponse[] = [
  [404, "not found"],
  [200, "ok"],
];
responses.push([100, "hello"]);
responses.push([10, "hello"]);
responses[0][0] = "hello";

enum OrderStatus {
  PENDING = 34,
  SHIPPED = 56,
  DELIVERED = 435,
  RETURNED = 3,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED); //true

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 400,
}

//interfaces optional and readonly

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}
const thomas: Person = {
  id: 1234,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
};

interface Person2 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  //sayHi(): string;// same as above line
}

const thomas2: Person2 = {
  id: 1234,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => {
    return "Hello!";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

//applyDiscount method accepts a number, the name of the parameter does not matter - its just descriptive
// the interface doesnt say what the method does, just what it accepts and what it returns
const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

interface Dog {
  name: string;
  age: number;
}
//you can add on additional properties to the Dog interface by reopening it
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark: () => "woof",
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 12,
  breed: "German shepherd",
  bark: () => "woof woof",
  job: "guide dog",
};

interface Human {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  id: 1234,
  name: "Pierre",
  level: "junior",
  languages: ["HTML", "CSS", "Javascript", "React", "Typescript"],
  email: "pierre@gmail.com",
};
