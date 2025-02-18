function oddNumbers(number){
    let i = 1
    if (number < 1) return "Please entender a number equal o greater than 1"
    while (i < number) {
        if (i % 2 !== 0) {
            console.log(`The odd number is: ${i}`)
        }
            i +=1;
    }
}

/*
big O Notation in irder of speed from fastest to slowest are:

O(1) -> constant complexity --> arr = [3,4,2,1] --> arr[0] always take the same take no matter how big is the array
O(log N) -> Logarithmic complexity --> the numbers of steps an algorithm takes increase by 1 as the data double. example: binary search
O(N) -> linear complexity --> the step increase by the number of items
O(N log N) -> N x log N complexity
O(N^2) -> Quadratic complexity
O(N^3) -> cubic complexity
O(2N) -> exponential complexity --> for every item added, the number of step is double than the previous
O(N!) -> factorial complexity -> is the product ofall numbers beetween 1 and N --> ex: 4(!4) -- is 4*3*2*1
*/



const doubleIt= n => n *2
console.log(doubleIt(200000000000))