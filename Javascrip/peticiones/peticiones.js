
const url = "https://pokeapi.co/api/v2/pokemon/ditto"
async function getData(url){
  try{
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error en la respuesta")

    const data = await response.json();

    console.log("Los datos obtenidos son: ", data)  

  }catch (error){
    console.log("Error: " + error)
  }
  

}

getData(url)

console.log("--------------------------------------------")
//creatin a resource
const url2 = "https://jsonplaceholder.typicode.com/posts"
fetch(url2, {
    method: 'POST',
    body: JSON.stringify({
      title: 'esto es un titulo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


    console.log("--------------------------------------------")
//updating the resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));     
    
    console.log("--------------------------------------------")
    console.log("-------------------EJEMPLO-------------------------")

    const server = {
      people: [
        {name: "odin",
         age: 20 
        },
        {
          name: "Thor",
          age: 35
        },
        {
          name: "Freyja",
          age: 29
        },
      ],

      getPeople(){
        return new Promise((resolve, reject) =>{
          //simulating a delayed server call

          setTimeout(()=>{
            resolve(this.people)
          }, 2000)
        })
      }
    }
