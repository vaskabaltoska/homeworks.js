function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

let celsius = 30;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);

//1

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num1 < num2) {
    console.log(num2);
  } else {
    console.log("Both numbers are equal");
  }
}
let num1 = 5;
let num2 = 10;
compareNumbers(num1, num2);

//2

function twoParametars(str, num) {
  console.log(str.repeat(num));
}

let str = "abc";
let num = 3;
twoParametars(str, num);

//3

function startsWithJ(string) {
  if (string.startsWith("Javascript", "Java")) {
    console.log("True");
  } else {
    console.log("False");
  }
}

let string = "Javascript is a programming language";
startsWithJ(string);

//4

function greetBasedOnTime(time) {
  if (time < 12) {
    console.log("Good morning");
  } else if (time < 18) {
    console.log("Good afternoon");
  } else {
    console.log("Good evening");
  }
}

let time = 10;
greetBasedOnTime(time);

//5
