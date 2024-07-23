    const tabla9=function(pmulti,pnum){
    let multi = pmulti = 9
    let num 
    let producto 
    for(let num = 1; num<=5; num++){
        producto = num * multi 
        if (producto%2==0) {
            console.log(producto+" Es par\n")
        }
        else{
            console.log(producto+" Es impar\n")
        }
    }
    return "Operacion completada"

}

let tabla = tabla9()