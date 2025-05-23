// Avaliação de velocidade

const velocidade = 80;

function verificarVel(vel) {
    if(vel > 80) {
        return "Multado por excesso de velocidade"
    } else if (vel > 60) {
        return "Velocidade adequada"
    } else {
        return "Abaixo da velocidade"
    }
}

console.log(verificarVel(velocidade));