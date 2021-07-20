function divisores(){
    alert("PROGRAMA QUE MUESTRA LOS DIVISORES UN NUMERO")
    var x ;
    x = parseFloat(prompt("ingrse un numero mayor que cero: "))
    var divisores = [];

    if(x > 0 ){
        for(var i = 0 ; i < x ; i++){
            if(x % i == 0){
                divisores.push(i)
            }
        }

    }
    alert(`Los divisores de ${x} son : ${divisores}`)
}