/*let users = { name: "John", age: 30 };

alert( "age" in users ); // true, user.age exists
alert( "blabla" in users ); // false, user.blabla doesn't exist
/* Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance: */
/* 
let user = { age: 30 };

let key = "age";
alert( key in user ); */ // true, property "age" exists
/* Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined: */

/* let obj = {
  test: undefined
}; */

/* alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
 In the code above, the property obj.test technically exists. So the in operator works right.

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code. */ 
/* 
let list = {
    name: 'hendry',
    lastname: 'avila',
    age: '22',
    nationality: 'venezuelan',
}

for (let key in list){
    console.log(key)
} */
/*output
name
lastname
age
nationality */

/* Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop. */

/* let diario = [
  {
    eventos: ['desayunar pan', 'ir al gym', 'correr por el bosque' ,'trabajar', 'dormir'],
    ardilla: true
  },
  {
    eventos: ['desayunar queso', 'ir al gym', 'correr en el parque' ,'trabajar', 'dormir'],
    ardilla: false
  },
  {
    eventos: ['desayunar nueces', 'ir al gym', 'correr el parque' ,'trabajar', 'dormir'],
    ardilla: true
  },
  {
    eventos: ['desayunar frutas', 'ir al gym', 'correr por acuario' ,'trabajar', 'dormir'],
    ardilla: false
  },

] 

console.log(diario[0])

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
  "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
  "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"], true);


  console.log(journal) */


/*   const myObject = {
    name : 'Hendry',
    age : 23,
    'fuction test' : () => `is happy`
  }
  /*getting with brackets 
  console.log(myObject["fuction test"]())
  getting with dot 
  console.log(myObject.name) */

/*   function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayname = function(){console.log(`my name is ${this.name}`)}
  }

  const player = new Player('hendry', 'ex');
  console.log(player.marker)
  console.log(player.sayname()) */

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return `Title: ${this.title}, Wrote by ${this.author}. the book has ${this.pages} pages. Have this book been read?: ${this.read}`
  }

}


