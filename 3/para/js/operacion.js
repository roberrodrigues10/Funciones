function operacion(pnum1, pnum2,pnum3) {
    let num1 = pnum1;
    let num2 = pnum2;
    let num3 = pnum3;
    let resultado = {
        dividir: num1 - num2,
        restar: num1 - num2,
        multiplicar: num1 - num3
    };
    return resultado;
}
let num1_div=2
let num2_div=3
let num1_res=5
let num2_res=6
let num1_multi=4
let num2_multi=6
let num3_multi=6
let resultado_dividir = operacion(num1_div,num2_div)
let resultado_restar = operacion(num1_res,num2_res)
let resultado_multiplicar = operacion(num1_multi,num2_multi,num3_multi)

