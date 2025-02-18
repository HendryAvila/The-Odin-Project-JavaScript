
const mypromise = new Promise((resolve, rejected) => {
    const success = true;
    if(success){
        resolve("promise resolved");
    }else{
        rejected("promise rejected");
    }
});

mypromise
.then(result => console.log(result))
.catch(error => console.error(error));



 // function fetchData() {
 //     return new Promise((resolve, reject) => {
 //         setTimeout(() => {
 //             resolve("Data fetched");
 //         }, 2000);
 //     });
 // }

 // fetchData()
 //     .then(data => console.log("Data:", data))
 //     .catch(error => console.error("Error:", error));

 // let nombre = "Hendry"

 // const promesa = new Promise((resolve, reject) =>{
 //     if (nombre != "Hendry") reject("El nombre es incorrecto")
 //     else resolve("Acertaste!, el nombre es: " + nombre)
 // })

 // promesa.then((resolve)=>{console.log(resolve)}).catch((reject)=>{console.log(reject)})

function revisarInventario(number) {
    const promesa = new Promise((resolve, reject) => {
        if (number >= 10) {
            resolve("Stock suficiente, gracias!");
         } else {
            reject("Stock insuficiente, necesitas más");
        }
    });

    return promesa; 
}


revisarInventario(10)
        .then((mensaje) => {
            console.log(mensaje); 
        })
        .catch((error) => {
        console.log(error); 
});


function descargarDatos() {
    
    return new Promise((resolve, reject) => {
        
        const tiempoEspera = Math.random() * 2000 + 1000; 

        
        setTimeout(() => {
            if (tiempoEspera <= 2500) {
                resolve("Datos descargados"); 
            } else {
                reject("Error: Tiempo de espera excedido"); 
            }
        }, tiempoEspera);
    });
}

async function mostrarResultadoDescarga(){
    try {
        const r = await descargarDatos();
        console.log(r)
    } catch (error) {
        console.log(error)
        
    }
}

mostrarResultadoDescarga()