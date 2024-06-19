//1

let stringNumber = "33.33";
let number = Number(stringNumber);
console.log(number.toFixed(2));

//2

let randomNumber = Math.random() * 100;
console.log(Math.round(randomNumber));
console.log(Math.ceil(randomNumber));
console.log(Math.floor(randomNumber));
console.log(Math.trunc(randomNumber));

//3

let distanceStr = "5.75";
let timeStr = "45";

let distance = Number(distanceStr);
let time = Number(timeStr);
let speed = distance / time;

console.log(speed.toFixed(2));

//4

let rgb = "rgb(255, 150, 0)";

let randomColor = Math.floor(Math.random() * 256);
console.log(rgb + "," + randomColor);

//5

let phoneNumber = "(123)-456-7890";

let areaCode = phoneNumber.startsWith("(") && phoneNumber.endsWith(")");

console.log("areaCode is " + phoneNumber.slice(1, 4));

let remainingDigits = phoneNumber.slice(6, 13);
console.log("remainingDigits are " + remainingDigits);
