let name;
console.log(name);
console.log(10);

const interestRate = 0.3;
console.log(interestRate);

let person = {
  name: "Mosh",
  age: 39,
};

person.age = 30;

person["name"] = "Mary";

console.log(person);

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;

console.log(selectedColors);

function greet(name) {
  console.log("Hello " + name);
}

greet("John");

function square(number) {
  return number * number;
}

let number = 2;
console.log(square(number));

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(points, type);
