function buttonnumero1() {
  // codigo anterior
  // var num1 =parseFloat(prompt("ingrese el numero 1"))
  // var num2 =parseFloat(prompt("ingrese el numero 2"))
  // if (isNaN(num1) || isNaN(num2)){

  //     alert(`Es necesario que sean numeros`)

  // }if(num1 > num2){
  //     alert(`El numero ${num1} es mayor que el numero ${num2}`)
  // }if(num1 < num2){
  //     alert(`El numero ${num1} es menor que el numero ${num2}`)

  // }if(num1 == num2){
  //     alert(`Los numeros son iguales`)

  // }
  alert("INGRESE DOS NUMEROS ");
  var x, y,suma,promedio;
  var x = parseFloat(prompt("Ingrese primer numero:"));
  while (x <= 0 || isNaN(x)) {
    var x = parseFloat(prompt("Ingrese de nuevo primer numero:"));
  }
  var y = parseFloat(prompt("Ingrese segundo numero:"));
  while (y <= 0 || isNaN(y)) {
    var y = parseFloat(prompt("Ingrese de nuevo el segundo numero:"));
  }

//   muestra que umero es mayor o menor
  if (x > y) {
    alert(`El numero mayor es ${x} `);
    alert(`El numero menor es ${y}`);
  }
  if (x < y) {
    alert(`El numero mayor es ${y}`);
    alert(`El numero menor es ${x}`);
  }
  if (x == y) {
    alert(`Son iguales los numeros`);
  }
}


// boton segundo de ANALIZAR
function buttonnumeros() {
  var x, y, text;
  x = document.getElementById("numm1").value;
  y = document.getElementById("numm2").value;

  if (parseFloat(x) > parseFloat(y)) {
    text = `El numero ${x} es mayor que el numero ${y}`;
  }
  if (parseFloat(x) < parseFloat(y)) {
    text = `El numero ${x} es menor que el numero ${y}`;
  }
  if (parseFloat(x) == parseFloat(y)) {
    text = `Los numeros son iguales`;
  }
  document.getElementById("resultado").innerHTML = text;
}
