/*
It is a common practice to declare arrays with the const keyword.

Learn more about const with arrays in the chapter: JS Array Const.
*/

const names = ['hendry','avila','duarte','alberto']

//You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//converting an array to a string with toString

let namesStrings = names.toString()



/* Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.
Arrays use numbers to access its "elements". In this example, person[0] returns John: */


const person = {firstName:"John", lastName:"Doe", age:46};


/* Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array: */
/* const myArray = []
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;  */


//METHODS


const i = [
    [1,2,3,4],
    [5,6,7,8],
]

console.log(i[1][3])