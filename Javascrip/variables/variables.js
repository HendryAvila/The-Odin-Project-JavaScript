console.log("-----------VARIABLES-----------------")

let sun = "sun" //"new" way to declare a variable//
var starts = 'starts' //the old way to declare a variable 
const MIDNIGHT = "12:00 am"//we use const when we know the store value wont change

//JS is dynamically typed
let infinityNumber = Infinity
let notANumberBe = "a" * 3
const bigINT = 999999999999999999999999999999999999999999999999999999999999999999999999999999n

console.log(typeof(infinityNumber),notANumberBe,typeof(bigINT))

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)



console.log(`The ${sun} is up at sunchine, we can see the ${starts} at night but midnight will always be at ${MIDNIGHT}`)

