const numbers = [10, 20, 30, 40, 50];

//SOME
const result = numbers.some(num => num > 25);

console.log(result); // Devuelve true porque al menos un número es mayor que 25


const number = [10, 20, 30, 40, 50];

//EVERY
const results = numbers.every(num => num > 25);

console.log(results); // Devuelve false porque no todos los números son mayores que 25

const fruits = ['manzana', 'banana', 'pera', 'naranja'];

//FIND
const r = fruits.find(fruit => fruit === 'pera');

console.log(r); // Devuelve 'pera' porque es el primer elemento que cumple con la condición
/* The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of is returned if nothing is found.-1
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Devuelve [1, 2, 3, 4, 5, 6] al combinar los dos arrays


//------------------------------------------------------------------------
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor =>{
            if (inventor.year >= 1500 && inventor.year < 1600) {
                return true;
            }
    })

    console.table(fifteen)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.table(fullName)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const oldestYoungest = inventors.sort((a,b) => a > b ? 1: -1);
    console.table(oldestYoungest)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);

    console.log(totalYears)

    // 5. Sort the inventors by years lived
    const yearsLive = inventors.sort((a,b) => {
        const lastguy = a.passed - a.year;
        const nextguy = b.passed - b.year;
        return lastguy > nextguy ? -1:1;
    })
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    /* 
    const category = document.querySelector('.mw-category');//select the container of the links
    const links = Array.from(category.querySelectorAll('a'));//selecting the links and converting the nodelist in a list
    const de = links
                .map(links => links.textContent)//mapping to see what does it contain
                .filter(streetName => streetName.includes('de')); //filtering to see only what contain 'de'
    */

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastone, nextone)=>{
        const [Alast, Afirst] = lastone.split(', ');
        const [Blast, Bfirst] = nextone.split(', ');
        return Alast > Blast ? 1:-1;
    })
    console.log(alpha)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportation = data.reduce(function(obj, item){
        if(!obj[item]){
        obj[item] = 0;
        }
        obj[item]++;
        return obj
        
    }, {});

    console.log(transportation)