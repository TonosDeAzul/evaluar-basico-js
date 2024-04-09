/*
2. Diseñar un programa que me solicite ingresar n cantidad de números por
teclado, luego de ingresar los números el programa me debe solicitar que
operación deseo realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares
Para este ejercicio se solicita trabajar con módulos.
*/

let nCantidad = parseInt(prompt("Cantidad de números a ingresar")),
    nums = [],
    num,
    validarOpcion = true;

for (let i = 0; i < nCantidad; i++) {
    num = parseInt(prompt("Ingrese el número"));
    nums.push(num);
}

while(validarOpcion){
    let operacion = prompt(`
¿Qué operación desea realizar?
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares`);

    switch (operacion.toLowerCase()) {
        case "a":
            validarOpcion = false;
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
            };
            console.log(`La suma de los números es: ${sum}`);
            break;
        case "b":
            validarOpcion = false;
            let contPrimos = 0;
            for (let i = 0; i < nums.length; i++) {
                let esPrimo = true;
                for (let j = 2; j < nums[i]; j++) {
                    if (nums[i] % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                esPrimo && nums[i] !== 1 ? contPrimos += 1 : null;
            }
            console.log(`Hay ${contPrimos} números primos`);
            break;
        case "c":
            validarOpcion = false;
            let contarPares = 0;
            for (let i = 0; i < nums.length; i++) {
                nums[i] % 2 === 0 ? contarPares += 1 : null ;
            };
            console.log(`Hay ${contarPares} números pares`);
            break;
        case "d":
            validarOpcion = false;
            let contPrimos2 = 0,
                sumPrimos = 0;
            for (let i = 0; i < nums.length; i++) {
                let esPrimo = true;
                for (let j = 2; j < nums[i]; j++) {
                    if (nums[i] % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if(esPrimo && nums[i] !== 1){
                    sumPrimos += nums[i];
                    contPrimos2 += 1;
                }
            }
            console.log(`${sumPrimos / contPrimos2} es el promedio de los números primos`);
            break;
        case "e":
            validarOpcion = false;
            let contarPares2 = 0,
                sumaPares = 0;
            for (let i = 0; i < nums.length; i++) {
                if(nums[i] % 2 === 0){
                    contarPares2 += 1;
                    sumaPares += nums[i];
                }
            };
            console.log(`${sumaPares / contarPares2} es el promedio de los números pares`);
            break;
        default:
            alert(`Opción inválida`);
            break;
    }
}