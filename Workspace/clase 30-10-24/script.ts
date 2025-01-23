//TypeScript tipado fuerte
//Inferencia de tipo

 let num: number; 
//  Siempre que se pueda ponerle el tipo de dato pero es necesario. Si se le asigna un valor ts
//  Ya sabe que tipo de dato es
let IsActive: boolean = true;
let nombre: string = "Manuel";

let cajon: any; 

cajon = 23

cajon = "hola"

let codigo: string | number | boolean; //Se le puede dar varios tipos de valor

codigo = 23;
codigo = "hola";
codigo = true;


let nombreCompleto: string = 'soy un nombre';
nombreCompleto = "Sigo siendo un nombre";
nombreCompleto = `Mi nombre es ${nombre}`;

//Formas de definir un array
const list: number[] = [1, 2, 3, 4, 5];
list.push(8);

let list2: Array<number> = [6, 5, 9, 23, 45];

let list3: Array<number | string | boolean> = [2, 4, "rr", true]; //Permite combinar arrays de varios tipos de datps
//Esto viene siendo lo mismo que poner un any

let list4: Array<any> = [2, 4, "rr", true];

//Enum
enum Size {Small = 3, Medium = 6, Big = 9}

let talla: Size = Size.Medium;

//BBDD --> Estados 0 Pendiente, 1 Proceso, 2 Enviado, 3 Terminado, 4 Devuelto, 5 indefinido
enum Estado { Pendiente, Procesando, Enviado, Terminado, Devuelto, Indefinido}
let miEstado: Estado = Estado.Enviado;

//TUPLA
let miTupla: [string, string, number, boolean];
miTupla = ["user", "password", 5, true];

//Funciones
function saludar(mensaje: string){
    console.log(mensaje.toUpperCase)

}

saludar("Holaaaaa");

function pasarAMayusculas(mensaje: string) : string {
    return mensaje;
}

function sumar(a: number, b: number){
    return a + b;
}

const sumarA = function(a: number, b: number) : number{
    return a + b;
}

//Fucnion anonima
const sumarArr = (a: number, b: number) : number =>{
    return a + b;
}

//Casting
//En java --> dounle v = 33.3; --> int victorias= (int)v;
let valor: any = "Esto es un texto";
let longitud: number = (<string>valor).length;
let long2: number = (valor as string).length;


document.addEventListener('DOMContentLoaded', function (even){
    
    const seccion = document.getElementById("principal");
    //No es mala practica tipar pero mejor tipar siempre
    if(seccion != null){
        let numero = 33;
        const parr: HTMLParagraphElement = document.createElement('p');
        parr.textContent = numero.toString();

        seccion.append(parr)
    }
})
