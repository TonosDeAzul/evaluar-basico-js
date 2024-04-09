/*
3. Diseñar un programa que me solicite por teclado n cantidad de números, al
finalizar la carga de los números el programa debe enviar los números a
una función expresada como único parámetro rest donde serán ordenados
de mayor a menor para luego mostrarlos en una tabla por consola.
*/

let nums = [],
    num,
    nCantidad = parseInt(prompt("Cantidad de números a ingresar"));

for (let i = 0; i < nCantidad; i++) {
    num = parseInt(prompt("Ingrese el número"));
    nums.push(num);
};

const ordenarNumeros = function (...numeros){
    numeros.sort((a, b) => b - a);
    console.table(numeros);
};

ordenarNumeros(...nums);