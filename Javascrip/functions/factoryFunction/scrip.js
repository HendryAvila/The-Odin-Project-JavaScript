// Una factory function es simplemente una función que devuelve un objeto. Aquí tienes la estructura
console.log("----FatoryFunction-----")
function personFactory(name, age){
    return {
        name: name,
        age: age,
        talk(){
            return `Hello, Im ${this.name} and im ${this.age} years old`
        }
    }
}


function createCounter() {
    let count = 0; // variable privada
    return {
      increment() {
        count++;
        console.log(count);
      },
      decrement() {
        count--;
        console.log(count);
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // Output: 1
  counter.increment(); // Output: 2
  counter.decrement(); // Output: 1
  
console.log("----Exercise---")
// Crea una factory function llamada createBook que tome title, author, y year como argumentos y devuelva un objeto con estos atributos y un método llamado getSummary que devuelva un string con el resumen del libro.

function createBook(author, title, year){
    return{
        author: author,
        title: title,
        year : year,
        getSummary(){
            return `${this.title} is written by ${this.author} in ${this.year}`
        }
    }

}


const harryPotter = createBook("JK rolling", "Harry potter y la camara secreta", 1998)
const harryPotter2 = createBook("JK rolling", "Harry potter y el prisionero de azkaban", 1999)

// Crea una factory function llamada createBankAccount
// que tome un initialBalance como argumento
// y devuelva un objeto con métodos para deposit y withdraw dinero.
// La cuenta debe mantener un registro del balance actual,
// y no debe permitir que el balance sea negativo.


function createBankAccount(initialBalance){
    money = initialBalance;
    return{
        initialBalance: initialBalance,
        deposit(n){
            console.log(`You have: ${money}`)
            money+= n;
            console.log(`you added: ${n} having a total of ${money} \n`)
        },
        withdraw(n){
            if (n > money) {
                console.log("Cannot withdraw more than the current balance!")
            }
            else{
                console.log(`You have: ${money}`)
                money-= n;
                console.log(`you withdraw: ${n} having a total of ${money} \n`)
            }
        }
    }
}



const a = createBankAccount(100)
console.log("-----addin--------")
console.log(a.deposit(10))
console.log("------withdrawing-------")
console.log(a.withdraw(1000))