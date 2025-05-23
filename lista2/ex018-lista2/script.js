function verificarIdade() {
    const idadeInput = document.getElementById("idade").value.trim(); // Aqui vai o trim
    const idade = parseFloat(idadeInput);
    const res = document.getElementById("res");

    res.innerText = "";

    if (isNaN(idade)) {
        res.innerText = "Por favor, digite uma idade válida.";
        return;
    }

    if (idade >= 18) {
        res.innerText = "Você pode tirar carteira de motorista.";
    } else if (idade >= 0) {
        res.innerText = "Você ainda não pode tirar carteira.";
    } else {
        res.innerText = "Idade não pode ser negativa.";
    }
}
