/*
1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
registra el operador, para ello debemos tener en cuenta que las diferentes
tarjetas tienen diferentes nomenclaturas:
• American Express: 15 dígitos y empieza por (34 – 37)
• Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
• Discover: tiene 16 dígitos y empieza por (6011)
• Mastercard: tiene 16 dígitos y empieza por (51 – 55)
• Visa: tiene: 16 dígitos y empieza por (4)
El programa solo se debe permitir el ingreso de enteros positivos y máximo
16 caracteres, si el operador ingresa un carácter no permitido se debe
mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
de crédito.
Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
crédito.
*/

while (true) {
    let numTarjeta;
    const regexAmericanExpress = /^3[4-7]\d{13}$/,
    regexDinnersClub = /^3(?:0[0-5]|[68]\d)\d{11}$/,
    regexDiscover = /^6011\d{12}$/,
    regexMastercard = /^5[1-5]\d{14}$/,
    regexVisa = /^4\d{15}$/;
    try {
        numTarjeta = prompt("Ingrese un número");
        if (isNaN(numTarjeta)){
            throw new Error(`Carácter no permitido`);
        };
        if(numTarjeta.length > 16){
            throw new Error(`Longitud no válida`);
        };
        if(parseInt(numTarjeta) < 0){
            throw new Error(`No se permiten números negativos`);
        };
        switch (true) {
            case regexAmericanExpress.test(numTarjeta):
                console.log(`American Express`);
                break;
            case regexDinnersClub.test(numTarjeta):
                console.log(`Dinners Club`);
                break;
            case regexDiscover.test(numTarjeta):
                console.log(`Discover`);
                break;
            case regexMastercard.test(numTarjeta):
                console.log(`Mastercard`);
                break;
            case regexVisa.test(numTarjeta):
                console.log(`Visa`);
                break;
            default:
                console.log(`# de tarjeta no existente`);
                break;
        };
        break;
    } catch (error) {
        alert(error.message);
    }
};
