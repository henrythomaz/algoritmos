// Faixa etária

const idade = 10;

function verificarIdade(idade) {
    if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Adolescente"
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(verificarIdade(idade));