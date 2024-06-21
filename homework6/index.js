let checkUser = "Viewer";

switch (checkUser) {
  case "Admin":
    console.log("You have full access");
    break;
  case "Editor":
    console.log("You can edit content");
    break;
  case "Viewer":
    console.log("You can view content");
    break;
  default:
    console.log("Role not recognized");
}

//1

let checkOS = "Windows";
switch (checkOS) {
  case "Windows":
    console.log("You are using Windows");
    break;
  case "MacOs":
    console.log("You are using MacOS");
    break;
  case "Linux":
    console.log("You are using Linux");
    break;
  default:
    console.log("Operating system not recognized");
}

//2

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//3

function upperCaseFruits() {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
  }
}

let fruits = ["apple", "banana", "cherry"];
upperCaseFruits(fruits);

//4

function checkStringLength(strings) {
  for (let i = 0; i < strings.length; i++) {
    console.log("${strings[i]}: ${strings[i].length}");
  }
}

let check = ["apple", "banana", "cherry"];

checkStringLength(check);

//5

function trimStrings(strings) {
  return strings.map(function (str) {
    return str.trim();
  });
}

let strings = ["  user4444", "  user5555  ", "  user6666"];
let trimmed = trimStrings(strings);
console.log(trimmed);

//6
