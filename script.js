// JS DINAMICO

//tipos de variables
var mes = "JUNIO"; // reasignable, ambito funcion, hoisting
let variable_2; // reasignable, ambito por bloque, no hoisting
const urlAboutVariables = "https://www.youtube.com/watch?v=bvkY9ey83yY"; // no reasignable, mutable
mes = 5;
//tipos de datos

//primitivos
String;
Number;
Boolean;
null;
undefined;
Symbol;

// objetos
Object;
Array;
/* function
Map
Set */

//operaciones aritmeticas
//operaciones logica
//comparadores

//estructuras de control
// if - else if else
// switch case
// for
// for of
// while
// do while
//methods
// Objects
// object destructuring
// array destructuring
// object y arrays methods

//funciones declarativas
function saludar() {
  const saludo = "Hola mundo";
  return saludo;
}
// funciones expresivas
const saludarDeNuevo = function () {
  const saludo = "Hola mundo";
  return saludo;
};

// funcion flecha --expresiva

const mensajeDespedir = (nombre) => "Adios" + nombre;

/* DOM */
// selectores
// eventos

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("documento cargado");
  selectElement();
}

function selectElement() {
  const elemento = document.querySelector("#identificador");
  console.log(elemento);
  setEvents(elemento);
}

const setEvents = (elemento) => elemento.addEventListener("click", handleClick);

function handleClick() {
  console.log("Haciendo click");
}

// programacion imperativa
// programacion declarativa
// programacion orientada a objetos
const POO_Video = 'https://www.youtube.com/watch?v=DlphYPc_HKk';

// javaScript modules --webpack - vite.js
//babel

// funciones -- verbos
// booleans -- preguntas
// git