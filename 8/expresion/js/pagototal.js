function pagototal(psueldo, pdiastra, pvalordi,) {
    let sueldo = psueldo = 2000000
    let diastra = pdiastra = 30
    let valordia = pvalordi = 40000
    let salud = diastra * valordia
    let pension
    let arl
    let pagos = {
        sueldo: psueldo = 200000,
        salario: diastra * valordia,
        salud: sueldo * 0.12,
        pension: sueldo * 0.16,
        arl: sueldo * 0.12,
        descuento: salud + pension + arl,
        pagototal: sueldo - pension
    };

    return pagos;
}

let pagost = pagototal()

let descuento = pagost.descuento
let pagototale = pagost.pagototal


