const luz = "vermelh";

function sinal() {
    if (luz == "verde") {
        return "Os carros podem passar!"
    } else if(luz === "vermelho") {
        return "Os carros não podem passar!"
    } else {
        return "Cor inválida!"
    }
}

console.log(sinal())