/* function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.saludar = function() {
    console.log('Hola, soy ' + this.nombre);
};

let juan = new Persona('Juan');
let pedro = new Persona('Pedro');

  juan.saludar();  // Salida: Hola, soy Juan
  pedro.saludar(); // Salida: Hola, soy Pedro

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O' */


// Initialize a constructor function for a new Hero
// Initialize constructor functions
// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }


// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);

//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// // Link prototypes and add prototype methods
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// }

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// }

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// }

// // Initialize individual character instances
// const hero1 = new Warrior('Bjorn', 1, 'axe');
// const hero2 = new Healer('Kanin', 1, 'cure');


//creacion del prototipo

// // const animalPrototype = {
// //   speak(){
// //     console.log("Sonido, sonido...")
// //   }
// // };

// // const dog = Object.create(animalPrototype);
// // dog.speak()


// // console.log("----------prototipos usando funciones constructoras-----------------------------")

// // function Animal(name){
// //   this.name = name
// // }

// // Animal.prototype.speak = function(){
// //   console.log(`${this.name}: sonido, sonido...`)
// //   }

// // const gato = new Animal("gato")
// // gato.speak()


function Personaje(nombre,vida, fuerza){
    this.nombre = nombre;
    this.vida = vida;
    this.fuerza = fuerza;
};

Object.defineProperty(Personaje.prototype, 'resistencia', {
    get: function() {
        return this.vida + this.fuerza;
    }
});

Personaje.prototype.greet = function(){
    console.log(`Hola, como estas. mi nombre es  ${this.nombre}`)
};

function Brujo(nombre, vida, fuerza, arma){
        Personaje.call(this, nombre, vida, fuerza);

        this.arma = arma;
        this.atacar = function(){
            console.log(`Atacando al enemigo con el  ${this.arma}`);
        }
}

let p1 = new Personaje("Hendry", 100, 40 );
let p2 = new Brujo("lorf", 120, 50, "baston");
p2.atacar()
