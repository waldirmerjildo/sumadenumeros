function impares() {
  alert("PROGRAMA QUE MUESTRA LOS NUMEROS IMPARES ENTRE DOS NUMEROS");
  var x, y, resultado;
  x = parseFloat(prompt("Ingrese numero 1: "));
  y = parseFloat(prompt("Ingrese numero 2: "));
  var impa = [];

  if (x > y) {
    if (y % 2 == 0) {
      for (var i = 2; i < x - y + 1; 2) {
        y = y + i;

        impa.push(y - 1);
      }
    }
    if (y % 2 != 0) {
      for (var i = 2; i < x - y; 2) {
        y = y + i;
        impa.push(y);
      }
    }
  }
  if (x < y) {
    if (x % 2 == 0) {
      for (var i = 2; i < y - x + 1; 2) {
        x = x + i;

        impa.push(x - 1);
      }
    }
    if (x % 2 != 0) {
      for (var i = 2; i < y - x; 2) {
        x = x + i;
        impa.push(x);
      }
    }
  }
  console.log(impa);
  alert(`Los numeros impares entre estos numeros son ${impa}`);
}
