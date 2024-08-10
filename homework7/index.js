// 1. So pomos na while presmetajte ja sumata na site broevi od 1 od 10.

const niza = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
let index = 0;

while (index < niza.length) {
  sum += niza[index];
  index++;
}
console.log(sum);

// 2. Izminete ja nizata so while

// let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
// - Dokolku clenot sozdrzi "a" vo sebe vratete go celiot so golemi bukvi
// - Dokolku e pogolem od 5 karakteri a ne go ispolnuva prviot uslov vratete go

// so soodveta poraka (is longer than 5 characters... )
// - Dokolku ne gi ispolnuva nikoj od prvite 2 -

// is a short fruit name

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

let index1 = 0;

while (index1 < fruits.length) {
  let fruit = fruits[index1];

  if (fruit.includes("a")) {
    console.log(fruit);
  } else if (fruit.length > 5) {
    console.log("More than 5 caracters");
  } else {
    console.log("Is a short fruit name");
  }

  index1++;
}
