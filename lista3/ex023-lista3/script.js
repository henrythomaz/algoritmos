// Desenpenho escolar

const nota = 5;

function verificarNota() {
    if(nota >= 9) {
        return "Passou com excelência!";
    } else if (nota >= 6) {
        return "Passou!";
    } else {
        return "Não passou :("
    }
}

console.log(verificarNota(nota));