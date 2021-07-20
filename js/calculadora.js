var uno , dos, suma, text, text1;
    uno = document.getElementById("uno").value;
    dos = document.getElementById("dos").value;
    suma = document.getElementById("suma").value;

// function sumar (){
//    return parseFloat(dos) + parseFloat(uno)
// }

function calculadora (){
    if(onclick == uno){
        text = `${uno}`
        document.getElementById("numero").innerHTML = text;

    }if(onclick == dos){
        text1 = `${dos}`
        document.getElementById("numero").innerHTML = text1;

    }
    // text = `${uno} ${suma} ${dos} = ${sumar()}`
    // document.getElementById("numero").innerHTML = text;

}
