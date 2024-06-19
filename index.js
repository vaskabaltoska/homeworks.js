let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature < 15) {
  console.log("It's cold!");
} else if (temperature < 25) {
  console.log("It's warm!");
} else temperature > 25;
{
  console.log("It's hot!");
}

let age = 13;

if (age <= 2) {
  console.log("infant");
} else if (age <= 12) {
  console.log("child");
} else if (age <= 19) {
  console.log("teenager");
} else if (age <= 59) {
  console.log("adult");
} else {
  console.log("senior");
}

let number = 10;
let result = number % 2 === 0 ? "even" : "odd";

console.log(result);
