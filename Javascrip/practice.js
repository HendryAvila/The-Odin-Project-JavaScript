/* 
Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.
*/


/*
1-the user enter a number
2-print each number between one and the number the user entered
3-if number is divide by 3 print "fizz"
4-if number is divide by 5 print "buzz"
5-if number is divide by 3 and 5 print "fizzbuzz"

*/


let userNumber = parseInt(prompt("please enter your number"))

for (let index = 1; index <= userNumber; index++) {
    
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (index % 3 === 0) {
        console.log("Fizz")
    }
    else if (index % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(index)
    }

}


