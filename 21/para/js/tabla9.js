const tabla9=function(pmulti,pnum){
    let multi = pmulti = 9
    let num = pnum = 0
    let contador = ""
    while(num<5){
        num++
        producto = num * multi 
        if (producto%2==0) {
            console.log(multi +" * " +num +" = " +producto+" Es par\n")
        }
        else{
            console.log(multi +" * " +num +" = " +producto+" Es impar\n")
        }
    }
    return "Operacion completada"

}

let tabla = tabla9()