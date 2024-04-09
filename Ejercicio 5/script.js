export class Calculadora{
    constructor(a, b){
        this.num1 = a;
        this.num2 = b;
    }

    get suma(){
        console.log(`${this.num1} + ${this.num2} = ${this.num1 + this.num2}`);
    };
    get resta(){
        console.log(`${this.num1} - ${this.num2} = ${this.num1 - this.num2}`);
    };
    get multiplicacion(){
        console.log(`${this.num1} x ${this.num2} = ${this.num1 * this.num2}`);
    };
    get division(){
        try {
            if(this.num2 === 0){
                throw new Error(`No se puede dividir por 0`);
            }
            console.log(`${this.num1} / ${this.num2} = ${this.num1 / this.num2}`)
        } catch (error) {
            console.log(error.message);
        };
    };
}