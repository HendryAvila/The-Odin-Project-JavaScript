/* In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */


let alarm = 14

/* if (alarm == 14){
    console.log("Time to start working!")
}
else{
    console.log("its not your time yet")
}

const hours = new Date().getHours()

console.log(hours)

if(hours >= 1){
        console.log("time to eat")
}
else if(hours == 13){
        console.log("you already ate")
}
else{
    console.log("Keep working is not yout time to eat")
} */

//logical operators
//is just one is true, will return true, the only way to be false is both are false
//return the first true value if there is. dont touch the other if find one

/* The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found. */

// the OR = ||   operator
/* alert(true || true);
alert(true || false);
alert(false || false); */

/* if (alarm > 15 || alarm < 10){
    console.log("True because one is true")
}
 */

//the AND = && operator
//return true if both are true or the oposite is both are false, if just one is false it return false
//&& return the firsly false value, || return the firsly true value
//

/* The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one. */

/* alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false */




// the NOT = !  operator

