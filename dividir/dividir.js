const numerador = 1;
let divisor = 0;
let x = 0;

function dividir() {
    if (divisor === 0) {
        return "Não é divisivel por 0";
    } else {
        return numerador / divisor;
    }
}

const resultado = dividir()
console.log(resultado);
