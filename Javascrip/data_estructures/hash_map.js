function stringToNumber(string){
    let hashCode = 0
    const primeNumber = 155

    for (let index = 0; index < string.length; index++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(index)
        
    }
    return hashCode

}


console.log(stringToNumber("welcomeasdasdasdasdasd"))