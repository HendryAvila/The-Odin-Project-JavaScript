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

let list = {
    name: 'hendry',
    lastname: 'avila',
    age: '22',
    nationality: 'venezuelan',
}

for (let key in list){
    console.log(key)
}
/*output
name
lastname
age
nationality */

/* Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop. */