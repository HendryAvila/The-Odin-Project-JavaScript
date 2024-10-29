class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.ResolucionDePantalla = rdp;
        this.ResolucionDeCamara = rdc;
        this.MemoriaRam = ram;
        this.encendido = false;
    }

    prenderCelular(){
        if (this.encendido == false){
            console.log("Prendiendo celular");
            this.encendido = true;
        }
        else{
            console.log("Apagando celular");
            this.encendido = false;
        }
    }

    ReiniciarCelular(){
        if(this.encendido == true){
            console.log("Reiniciando el celular")
        }
        else{
            console.log("El celular esta apagado")
        }
    }
    TomarFoto(){
        console.log(`Tomando foto con la resolucion de camara ${this.ResolucionDeCamara}`)
    }
    Grabar(){
        console.log(`grabando con la resolucion de camara  ${this.ResolucionDeCamara}`)
    }
    info(){
        console.log(`
        Color : ${this.color}
        Peso : ${this.peso}
        Resolucion de Pantalla : ${this.ResolucionDePantalla}
        Resolucion de camara : ${this.ResolucionDeCamara}
        Memoria Ram : ${this.MemoriaRam}
        `)
    }
}


celular1 = new Celular("negro", "150", "6'", "4k hd", "6GB")
celular2 = new Celular("rojo", "130", "4'", "hd", "2GB")
celular3 = new Celular("blanco", "145", "4.5'", "ful hd", "4GB")

/* celular1.prenderCelular()
celular1.TomarFoto()
celular1.Grabar()
celular1.ReiniciarCelular()
celular1.prenderCelular() */

celular1.info()
celular2.info()
celular3.info()