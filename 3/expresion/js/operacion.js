const division=function(pnum1,pnum2){
    let dividir
    let num1 = pnum1
    let num2 = pnum2
    dividir = num1 / num2
    return dividir
}
const operacion=function(pnum1, pnum2) {
    let num1 = pnum1;
    let num2 = pnum2;
    let resultado = {
        dividir: num1 / num2,
        restar: num1 - num2,
        multiplicar: num1 * num2
    };
    return resultado;
}

let num1_dividir=2
let num2_dividir=3
let num1_restar=5
let num2_restar=6
let num1_multiplicar=4
let num2_multiplicar=6




let resultado_dividir = operacion(num1_dividir,num2_dividir); // Pasando los números como argumentos
let resultado_restar = operacion(num1_restar,num2_restar); // Pasando los números como argumentos
let resultado_multiplicar = operacion(num1_multiplicar,num2_multiplicar); // Pasando los números como argumentos
