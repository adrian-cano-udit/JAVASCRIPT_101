console.log("Online!");


// VARIABLES

let myName = "Adrián";

let surname = 'Cano';

let number = "3456";


let age = 35;

console.log(age);

age = 35.5;

console.log(age);



let price = 12.99;



let prices = [4.5, 7.99, 5, 2.70];

// console.log(prices[1]);


let animals = ["dog", "cat", "cow", "fish"];

console.log("El animal es: " + animals[2]);




let arraySP = [67, "Adrián", 8.5];

let matrix = [[], [], []];


// Ejemplo sencillo del uso de un objeto de JS


let user1574 = {
    name: "Adrián",
    surname: "Cano",
    age: 35,
    location: [76.349758, 98.9832874],
    skills: {
        design: 80,
        dev: 90,
    },
    isDriver: true
};
console.log(user1574);


// Pruebas operaciones

const AGE = 17;
const MayorEdad = AGE > 18;

console.log(MayorEdad);

if (MayorEdad) {

    console.log("Felicidades eres mayor de edad!");
    
} else {

    console.log("Lo siento, vuelve en unos años :(");

}



// COMPARADORES DE IGUALDAD

let test = 1 == "1";

console.log(test);

let test2 = 1 === "1";

console.log(test2);




// FUNCIONES BUILT-IN DE JS:

// alert("Hola soy un popup muy molesto!");

// let result = prompt("Hola, ¿como te llamas?");
// console.log("El nombre del usuario es: " + result);


let floatNum = 21.75643892748749;
let parseNum = parseInt(floatNum);

console.log(parseNum);



// Selectores de JS:

console.log(document);


// let elem = document.getElementsByTagName("h2");
// let elem = document.getElementsByClassName("lorem-text");
// let elem = document.getElementById("btnTest");

// let elem = document.querySelector("#btnTest");
// let elem = document.querySelector(".cont > .lorem-text");
// elem.remove();


// console.log(elem);



// Lógica interacción usuario-web:

let btn = document.querySelector("#btnTest");
let textToDelete = document.querySelector(".cont > .lorem-text");

btn.addEventListener("click", function() {

    textToDelete.remove();

});