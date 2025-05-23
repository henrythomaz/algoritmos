// Validação de entrada

const number = 0;

function ValidationNumber(n) {
    if (n > 0) {
        return "Positivo"
    } else if (n === 0) {
        return "Nulo"
    } else {
        return "Negativo"
    }
};

console.log(ValidationNumber(number));