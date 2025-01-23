export default class Coche{

    #bastidor;

    constructor(color, marca, modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
        this.#bastidor = "X123456789";
    }

    #calcularBastidorPrimario(){
        this.#bastidor = this.marca + "123456" + color;
    }

    obtenerBastidor(){
        return this.#bastidor;
    }

    modificarBastidor (bastidorNuevo){
        this.#bastidor = bastidorNuevo;
    }

    arrancar(){
        this.encendido = true;

    }
    detener(){
        this.encendido = false;
    }

    necesitaRevision(){
        let revision = kilometraje >= 20.000 ? true : false;
        return revision;
    }
    //Arrow function
    /*necesitaRevision = (kilometraje) => (kilometraje >= 2000) ? true : false*/
    
    acelerar(velocidad){
        this.velocidad += velocidad;
    }
    frenar(velocidad){
        this.velocidad = velocidad;
    }
}