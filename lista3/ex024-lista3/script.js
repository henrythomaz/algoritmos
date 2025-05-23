const temp = 31;

function clima(temperatura) {
    if(temp < 20) {
        return "Frio!";
    } else if(temp <= 30) {
        return "Agradável!";
    } else {
        return "Quente!"
    };
};

console.log(clima(temp));