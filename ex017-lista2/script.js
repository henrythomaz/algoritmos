function verificarNota() {
    const notas = document.getElementById("notas").value;
    const minPass = parseFloat(document.getElementById("minPass").value);
    const res = document.getElementById("res");

    res.innerText = "";
    
    const arrayN = notas.trim().split(" ").map(Number);
    
    let soma = 0;
    for (let i = 0; i < arrayN.length; i++) {
        soma += arrayN[i];
    }
    
    let media = soma / arrayN.length;

    if (media >= minPass) {
        res.innerText = `Se o mínimo que você precisa pra passar for ${minPass}, então, você passou!\nMédia: ${media.toFixed(2)}`;
    } else {
        res.innerText = `Se o mínimo que você precisa pra passar for ${minPass}, então, você se fudeu!!!\nMédia: ${media.toFixed(2)}`;
    }
}
