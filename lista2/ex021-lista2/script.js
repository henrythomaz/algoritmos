function parimpar() {
    const numeroInput = document.getElementById("numero").value;
    const numero = parseInt(numeroInput);
    const res = document.getElementById("res");

    res.innerText = "";

    if (isNaN(numero)) {
        res.innerText = "Por favor, digite um número válido.";
        return;
    }

    if (numero % 2 === 0) {
        res.innerText = "Par";
    } else {
        res.innerText = "Ímpar";
    }
}
