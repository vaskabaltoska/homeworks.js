let price = 100;
let discount = 10;
let discountedPrice = price - (price * discount) / 100;
console.log(discountedPrice);

let personInfo = {
  name: "Vaska",
  age: 40,
  height: 180,
  city: "Ohrid",
  country: "Macedonia",
};
console.log(personInfo);

const x = 10;
const y = 20;
const z = x + y;
console.log(z);

const a = 10;
const b = 20;
let total = a + b;
console.log(total || a <= b);

let undefinedVariable;
console.log(undefinedVariable);

let nullVariable = null;
console.log(nullVariable);

let colorPicker = ["red", "green", "blue"];
console.log(colorPicker);

let result;

{
  let x = 10;
  {
    let y = 20;
    {
      let z = 30;
      result = x + y + z;
    }
  }
}

console.log(result);
