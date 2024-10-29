
const numbers = [1,2,5,1,3,10,50,21,100,7]
const numbers2 = [1111,112,15,111,3,10,50,21,100,7]
console.log(numbers)
console.log(numbers.length)

for (let i = 0; i < numbers2.length; i++) {
    numbers.push(numbers2[i]);
}

//Getting the third element of fruits using at():
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(-1);
console.log(fruit)

/* The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator: */

const frutas = ["Banana", "Orange", "Apple", "Mango"];
let  fruta = frutas.join(" * ");
console.log(fruta)

//The pop() method removes the last element from an array.
const toEat = ["Banana", "Orange", "Apple", "Mango"];
toEat.pop();

//The shift() method removes the first array element and "shifts" all other elements to a lower index,The shift() method returns the value that was "shifted out":
const toEats = ["Banana", "Orange", "Apple", "Mango"];
toEats.shift();

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.unshift("Lemon");

//The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren)

//The copyWithin() method copies array elements to another position in an array:
const a = ["Banana", "Orange", "Apple", "Mango"];
a.copyWithin(2, 0);
//Copy to index 2, the elements from index 0 to 2:
const b = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
b.copyWithin(2, 0, 2);

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

//The splice() method can be used to add new items to an array:
const c = ["Banana", "Orange", "Apple", "Mango"];
c.splice(2, 0, "Lemon", "Kiwi");
/* The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. */

/* JavaScript Array toSpliced()
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array. */

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);


let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");



let arra = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arra.splice(2, 0, "complex", "language");

 // "I", "study", "complex", "language", "JavaScript"

//IndexOf
etarr = [1, 0, false];

alert( etarr.indexOf(0) ); // 1
alert( etarr.indexOf(false) ); // 2
alert( etarr.indexOf(null) ); // -1
et
alert( etarr.includes(1) ); // true


Array.length        // Devuelve el número de elementos en el array.
Array.toString()    // Convierte el array en una cadena de texto.
Array.at()          // Devuelve el elemento en una posición específica (puede ser negativa para contar desde el final).
Array.join()        // Une todos los elementos del array en una sola cadena, separados por un delimitador.
Array.pop()         // Elimina el último elemento del array y lo devuelve.
Array.push()        // Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
Array.shift()       // Elimina el primer elemento del array y lo devuelve.
Array.unshift()     // Agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.
Array.delete()      // Elimina un elemento en una posición específica (con el índice dado) sin cambiar la longitud del array.
Array.concat()      // Une dos o más arrays y devuelve un nuevo array.
Array.copyWithin()  // Copia una sección del array a otra posición dentro del mismo array.
Array.flat()        // Aplana un array multidimensional en un solo nivel o en el nivel especificado.
Array.splice()      // Cambia el contenido de un array eliminando, reemplazando o agregando elementos en una posición específica.
Array.toSpliced()   // Devuelve un nuevo array con los elementos eliminados o reemplazados, dejando el array original sin cambios.
Array.slice()       // Devuelve una copia superficial de una porción del array en un nuevo array, sin modificar el array original.
Array.reverse()