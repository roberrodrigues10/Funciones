function pagototal(psueldo, pdiastra, pvalordi, pdescuentos) {
    let sueldo = psueldo = 2000000;
    let diastra = pdiastra = 30;
    let valordia = pvalordi = 40000;
    let salud 
    let descuento;
    let pension;
    let arl;
    let pagos = {
        sueldo: psueldo = diastra * valordia,
        salud: sueldo * 0.12,
        pension: sueldo * 0.16,
        arl: sueldo * 0.12,
        descuento: salud + pension + arl,
        pagototal: sueldo - pension
    };

    return pagos;
}

let pagost = pagototal();

// Información de descuento y pagototal
let descuento = pagost.descuento;
let pagototale = pagost.pagototal;





