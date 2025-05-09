function verificarNumero() {
    const numero = document.getElementById("numero").value
    const res = document.getElementById("res");

    res.innerText = "";

    if (numero >= 0) {
        res.innerText = ` ${numero} é positivo`;
    } else if(numero < 0) {
        res.innerText = `${numero} é negativo`;
    } else {
        window.alert("Algo errado")
    }
}
