const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

//Iterationg an aray with for...of
for (const cat of cats) {
  console.log(cat);
}

let numbers = [1,2,3,4,5]

function multiply(number){ 
    return number *10
}

//Iterating an array using the map function that apply a function to every single item of the array
let multiplyBy10 = numbers.map(multiply)
console.log(multiplyBy10)

/* You can use filter() to test each item in a collection, and create a new collection containing only items that match: */
function lCat(cat) {
  return cat.startsWith("L");
}

const catss = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = catss.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]


for (initializer; condition; final-expression) {
  // code to run
}


let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
