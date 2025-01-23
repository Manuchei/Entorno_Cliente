/*
 * Primeros ejemplos de JS - Clase 25-9-24
 */

/* Key sensitive
 * tipado debil
 */

// Esto es un comentario de linea

//Con typeof puedes preguntar el tipo de datos que es
console.log(typeof "Hola Mundo!!!!"); // Devuelve String

console.log(typeof 3); // Devuelve number

//Declarar variables
let a = 3;
console.log(typeof a); //Devuelve number porque hemos declarado que tipo de dato es

let b;
console.log(typeof b); //Devuelve undefined porque no sabe el tipo de dato que es

a = "Hola DWEC";
console.log(typeof a); //Devuelve que es un string porque b es texto
//De puede cambiar el tipo de la variable 1º a es number 2º a es string

var c = true; //Dejar las variables para las globales y utilizar let para lo demas

//Definimos una constante
const d = 23;
d = 45; // ERROR: No se puede cambiar el valor de una constante como si se puede en let

//Nomenclatura correcta
let tempMax = 0;

let text = "3";
console.log("El tipo de dato de text es: " + typeof text);

let num = 3;
console.log("El tipo de dato de text es: " + typeof num);

console.log(num == text); //Sale true porque solo compara valor        == IGUAL
console.log(num === text); //Sale false porque compara tipo y valor    === IGUAL ESTRICTO (COMPARA TIPO DE LA VARIABLE)

console.log(num + text); //CUIDADO!!!!!! da 33 Pporque es un string y un number

//Instrucciones de control

if (num > 5) {
  console.log("Aprobado");
}

let edad = 18;

if (edad >= 18) {
  console.log("mayor de edad");
} else {
  console.log("menor de edad");
}
//Operador ternario
edad >= 18 ? console.log("mayor de edad") : console.log("menor de edad"); //La ? seria el if y los : el else

//Bucles for: for - for of - for in
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for in
const arr = ["a", "b", "5"];

for (indice in arr) {
  console.log(indice); // Cada uno de los índices / posiciones del array

  console.log(arr[indice]); // Cada uno de los elementos que ocupan posiciones en el array
}

//for of
for (let element of arr) {
  console.log(element);
}

// FUNCIONES
function saludar(nombre) {
  console.log("Hola gente!!!!!!!! Soy " + nombre); //Psandole parametros en este caso nombre
}

saludar("Manuel"); //El parametro se pasa asi
saludar("Silvia");

function multiplicar(num1, num2) {
  //Se pueden poner todos los parametros que necesitemos
  console.log(num1 * num2);
}
multiplicar(257, 83);

function multiplicar(num1 = 3) {
  //Se le puede dar valor dentro de la funcion OJO si tu le pasas parametro coge el valor pasado
  console.log(num1 * num1);
}
multiplicar();
multiplicar(7);

function sumar(a, b) {
  return a + b;
}
const result = sumar(8, 5);
console.log(result);

//Interpolacion e JS
console.log(`Esto es prueba ${result}`);

//Funcion anonima
const restar = function (a, b) {
  return a - b;
};
restar(a, b);

//Llamadas a a la funcion anonima
const rest = restar(a, b);

//Arrow functions
const restaAF = (a, b) => {
  return a - b;
};
const AF = restaAF(a, b);

//Mas simplificado
const restaAG = (a, b) => a - b;
const AG = restaAG(5, 2);

//Arrays
const miVector = [];

const colores = ["Rojo", "Verde", "Azul"];

const vectorVacio = new Array();
const vectorData = new Array(5, 6, 89);

console.log(colores[0]);
console.log(colores[5]); //Da undefined

colores.push("Violeta"); //Añade valores al array

console.log(colores);

colores.push(33); //Añade String o numbers lo que quieras

console.log(colores);

colores.shift(); //Borra el primer elemento del array
colores.pop(); // Borra el ultimo elemento del array

console.log(colores);

colores[0] = "Amarillo"; //Añade el color amarillo a la posicion 0 y los demas elementos del array corren una posicion
console.log(colores);

//Método reduce
let suma = 0;

const numeros = [33, 45, 1, 100, 2, 4];

for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}

const suma2 = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
});

console.log(suma);
console.log(suma2);

//Manera Arrow
const suma3 = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(suma3);

//For.....in
const numerosJSO = {
  a: 1,
  b: 2,
  c: 3,
};

for (const clave in numerosJSO) {
  console.log(`${clave}: ${numerosJSO[clave]}`);
}

//Object keys
const numeros3 = { a: 1, b: 2, c: 3 };

Object.keys(numeros3).forEach(function (clave) {
  console.log(`${clave}: ${numeros3[clave]}`);
});
