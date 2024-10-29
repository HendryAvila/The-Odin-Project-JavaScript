class Animal{
    constructor(especie,edad,color){
        this.especie = especie
        this.edad = edad
        this.color = color
    }
}


class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = raza
    }

    set setRaza(newraza){
        this.raza = newraza
    }

    get getRaza(){
        return this.raza
    }
}

const flofy = new Perro("canino", 2, "negro", "pitbull")
console.log(flofy.raza)
flofy.setRaza = "doberman"
console.log(flofy.raza)

// En JavaScript, un método estático en una clase es un método que pertenece a la clase en sí, en lugar de a las instancias individuales de esa clase. Esto significa que puedes llamar a un método estático directamente en la clase, sin necesidad de crear una instancia de la clase. Los métodos estáticos son útiles para operaciones que están relacionadas con la clase en general y no con una instancia particular.

// class MiClase {
//     // Método estático
//     static metodoEstatico() {
//       console.log('Este es un método estático');
//     }
  
//     // Método de instancia
//     metodoDeInstancia() {
//       console.log('Este es un método de instancia');
//     }
//   }
  
//   // Llamar al método estático directamente en la clase
//   MiClase.metodoEstatico(); // "Este es un método estático"

//   // No puedes llamar al método estático desde una instancia
//   const instancia = new MiClase();
//   instancia.metodoEstatico(); // Error: instancia.metodoEstatico is not a function
  
//   // Llamar al método de instancia desde una instancia
//   instancia.metodoDeInstancia(); // "Este es un método de instancia"
  