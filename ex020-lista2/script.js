function verificarPreco() {
    const preco = document.getElementById("preco").value
    const res = document.getElementById("res");

    res.innerText = "";

    if (preco > 100) {
        const desconto = (preco / 100) * 10;
        const precoFinal = preco - desconto;

        res.innerText = `O preço é mais cara que 100 então ele tem um desconto de 10%: ${precoFinal}$`;
    } else {
        res.innerText = `P preço continua o mesmo valor! pois não é maior que 100 reais`
    }
}
