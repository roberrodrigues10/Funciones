function areacuad(plado1,plado2,plado3){
    let lado1 = plado1 = 12
    let lado2 = plado2 = 2
    let lado3 = plado3 = 20
    let cuad1
    let cuad2
    let cuad3
    cuad1 = lado1 * lado2
    cuad2 = lado2 * lado2
    cuad3 = lado3 * lado3

    if (cuad1 == cuad2 & cuad2 == cuad3 & cuad3 == cuad1 ) {
        return ("Son iguales")

    }
    else if(cuad1 > cuad2 & cuad1 > cuad3){
        return("El cuadrado uno es mayor")
    }
    else if(cuad2 < cuad3)
    {
        return("Cuadrado 3 es mayor")

    }
    else{ 
    
        return("Cuadrado 2 es mayor")

    }
    }

