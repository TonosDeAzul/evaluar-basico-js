/*
5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas.
*/
import { Calculadora } from "./script.js";

let operacion,
    validarOpcion = true,
    num1, num2;

function nums(){
    num1 = parseInt(prompt("Ingrese el primer número"));
    num2 = parseInt(prompt("Ingrese el segundo número"));
}

while(validarOpcion){
    operacion = prompt(`¿Que desea realizar?
    a. Suma
    b. Resta
    c. Multiplicación
    d. División`);

    switch (operacion.toLowerCase()) {
        case "a":
            validarOpcion = false;
            nums();
            let miSuma = new Calculadora(num1, num2);
            miSuma.suma;
            break;
        
        case "b":
            validarOpcion = false;
            nums();
            let miResta = new Calculadora(num1, num2);
            miResta.resta;
            break;
        
        case "c":
            validarOpcion = false;
            nums();
            let miMultiplicacion = new Calculadora(num1, num2);
            miMultiplicacion.multiplicacion;
            break;
        
        case "d":
            validarOpcion = false;
            nums();
            let miDivision = new Calculadora(num1, num2);
            miDivision.division;
            break;
    
        default:
            alert(`Opción inválida, vuelva a ingresarla`);
            break;
    }

}