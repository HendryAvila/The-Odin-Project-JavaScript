function yourname(name){
    return  `Hi, have a good day! ${name}`
}


console.log(yourname("Josefino"))


function checkAge(age){
return (age > 18) ? true: false
}

console.log(checkAge(19))

function checkAge2(age){
return (age > 18) || false
}

console.log(checkAge2(9))

function min(a,b){
    if (a > b ){
        return  "the least number is: " + b
    }else{
        return "the least number is: " + a
    }
}


console.log(min(1000, 5000))

function min2(a,b){
    return a > b ? b : a
}


console.log(min2(10001, 5000))


//Arrow expresions

let summ = (a,b) => a + b

//--------------------------



function plusSeven(n){
    return n + 7
}

console.log(plusSeven(10))


function lastletter(string){
    return string.slice(-1)
}

console.log(lastletter("abcd"))