
//const mypromise = new Promise((resolve, rejected) => {
  //  const success = true;
    //if(success){
        //resolve("promise resolved");
    //}else{
        //rejected("promise rejected");
    //}
//});

//mypromise
//.then(result => console.log(result))
//.catch(error => console.error(error));

//asyncronous promise

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

fetchData()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));
