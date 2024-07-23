function areass(plado1,plado2,pbase1,pbase2,palt1,palt2){
    let areas
    let lado1 = plado1 = 40
    let lado2 = plado2 = 40
    let base1 = pbase1 = 20
    let base2 = pbase2 = 10
    let alt1 = palt1 = 15
    let alt2 = palt2 = 10
    areas = {
    areacua : lado1*lado2,
    arearect : base1 * alt1,
    areatrian : (base2*alt2)/2
    }
    return areas
}

let areas = areass()