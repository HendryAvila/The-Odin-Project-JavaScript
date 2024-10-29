function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
  