function buttonnumero1(){
    var num1 =parseFloat(prompt("ingrese el numero 1"))
    var num2 =parseFloat(prompt("ingrese el numero 2"))
    if (isNaN(num1) || isNaN(num2)){

        alert(`Es necesario que sean numeros`)
      
    }if(num1 > num2){
        alert(`El numero ${num1} es mayor que el numero ${num2}`)
    }if(num1 < num2){
        alert(`El numero ${num1} es menor que el numero ${num2}`)

    }if(num1 == num2){
        alert(`Los numeros son iguales`)

    }
}

function buttonnumeros(){
   
    var x,y, text;
    x =document.getElementById("numm1").value;
    y =document.getElementById("numm2").value;

    if(parseFloat(x) > parseFloat(y)){
        text = `El numero ${x} es mayor que el numero ${y}`
    }if(parseFloat(x) < parseFloat(y)){
        text = `El numero ${x} es menor que el numero ${y}`
    }if(parseFloat(x) == parseFloat(y)){
        text = `Los numeros son iguales`
    }
    document.getElementById("resultado").innerHTML = text;

}