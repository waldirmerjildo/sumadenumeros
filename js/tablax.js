function tablax(){
    var x ,p, prodcuto;
    x = document.getElementById("numerox").value;
    producto = [];
    for(var i = 0 ; i < 13 ; i++){
        p = parseFloat(x) * i
        producto.push(p)
    }
    alert(`La tabla de multiplicar de ${x} es: ${producto}`)
}