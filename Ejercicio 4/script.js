/*
4. Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
*/

let words = [],
    word,
    nCantidad = prompt("Cantidad de palabras a ingresar");

for (let i = 0; i < nCantidad; i++) {
    word = prompt("Ingrese la palabra");
    words.push(word);
};

const ordenarNumeros = function (...palabras){
    palabras.sort();
    console.log(palabras[0]);
};

ordenarNumeros(...words);