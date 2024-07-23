function operacion(panioAct,panioNac1,panioNac2,panioNac3) {
    let anioAct = panioAct = 2024
    let anioNac1 = panioNac1 = 2000
    let anioNac2 = panioNac2 = 2000
    let anioNac3 = panioNac3= 2000
    let    edad1= anioAct - anioNac1
    let    edad2= anioAct - anioNac2 
    let    edad3= anioAct - anioNac3
    let    promedio = edad1+edad2+edad3
    if (promedio>=18) { 
        return promedio,"El promedio es " +promedio+","+ " cumple con la mayoria de edad"
    }
    else{
        return promedio = "no"
    }
        
}



