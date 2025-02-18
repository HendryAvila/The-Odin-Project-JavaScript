let cuentaAtras = numero =>{
    if (numero ===  0) {
        return;
    }
    console.log(numero)
    return cuentaAtras(numero -1)
}

let parImpar = numero =>{
    if (numero === 0){
        return "par"
    }
    else if (numero === 1){
        return "impar"
    }
    else{
        return parImpar(numero -2)
    }
}

/*
Escribe un programa que invierta una cadena usando recursión.
Dada la cadena "freeCodeCamp",
el programa debería devolver "pmaCedoCeerf".
*/

function invertString(phrase){
    if (phrase.length === 0 || phrase.length === 1){
        return phrase
    }
    return phrase[phrase.length -1] + invertString(phrase.slice(0, -1))
}

function sumRange(n,  total=0){
    if(n <= 0){
        return total
    }
    return sumRange(n -1, total + n)
}

function fibo(number){
    if (number < 2){
        return number
    }
    return fibo(number -1) + fibo(number -2)
}


console.log(fibo(10))