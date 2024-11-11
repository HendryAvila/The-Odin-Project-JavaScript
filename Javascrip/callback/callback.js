function greet(name){
    console.log("Hello " + name);
}

function processUserInput(callback){
    const name = prompt("Please enter your name");
    callback(name);
}

processUserInput(greet);

//asyncronous callback

function fetchData(callback){
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

function displayData(data){
    console.log(data);
}

fetchData(displayData);


