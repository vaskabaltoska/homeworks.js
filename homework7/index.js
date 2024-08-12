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

// 3. So pomos na do while izminete ja nizata

// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"];
// - Dokolku eden grad sodrzi vo sebe"o" promenete gi site so "0"
// -   Dokolku eden grad ima povekje od 8 karatkeri prikazete go do tolku karakteri i ostavete 3 tocki.
// - Site ostanati so pomos na template literals isprintajte go gradot so brojot na karakterite vo sebe.

let cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];
let index2 = 0;
while (index2 < cities.length) {
  let city = cities[index2];
  if (city.includes("o")) {
    cities[index2] = "0";
  } else if (city.length > 8) {
    console.log(`${city}...`);
  } else {
    console.log(city);
  }
  index2++;
}

// 4. So pomos na for of vratete gi site clenovi od nizata na kvardrat
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number ** 2);
}

// 5. So pomos na for of sekoj karakter od vaseto ime i prezime isprintajte go
//so negovata vrednost od Unicode (charCodeAt)

let name = "Vaska Baltoska";

for (let char of name) {
  console.log(char.charCodeAt());
}

// 6. So pomos na for of izminete go objektot
// I za sekoj person isprintajte primer "Alice is 30 years old" .

let persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (let person of persons) {
  console.log(`${person.name} is ${person.age} years old`);
}

// 7. Izvadete gi site broevi od stringot :
// isNaN (is Not a Number) ke vi bide od pomos

let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C.";

for (let char of text) {
  if (isNaN(char)) {
    console.log(char);
  }
}

// 8 So pomos na for in izminete go objektot
// So ona sto go znaete do sega napravete validacija za klucot email vrednosta
// da sodrzi "@"
// - So klucot age vrednosta da e broj i da ne e pogolem od 100
// - So klucot password da ne e pokratok od 8 karakteri.

let formData = {
  username: "john_doe",
  password: "password123",
  email: "john@example",
  age: 25,
};

for (let key in formData) {
  if (key === "email") {
    if (!formData[key].includes("@")) {
      console.log("Invalid email");
    }
  } else if (key === "age") {
    if (isNaN(formData[key]) || formData[key] > 100) {
      console.log("Invalid age");
    }
  } else if (key === "password") {
    if (formData[key].length < 8) {
      console.log("Invalid password");
    }
  }
}

console.log(formData);
