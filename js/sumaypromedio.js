function fnsumpromdio (){
    alert("SUMA Y PROMEDIO DE N NUMEROS POSITIVOS")
    var x ,suma,promedio;
    var numeros = [];
    cont = 0
    while(cont >= 0){
       
        var x = parseFloat(prompt("Ingrese el numero :" + cont))
        if(x < 0){
            break
        }if (x>=0){
        cont += 1
        numeros.push(x)
        
        }
        suma = 0
        for(var i = 0 ; i < numeros.length ; i++){
            suma = suma + numeros[i]
        }
        alert(`La suma de los numeros es: ${suma}`)
        promedio = suma / numeros.length
        alert(`El promedio de los numeros es : ${promedio}`)

    }
   
  
    

}