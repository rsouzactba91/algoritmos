const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterDiaDaSemana(numero) {
    let diaDaSemana;

    if (numero === 1) {
        diaDaSemana = "Domingo";
    } else if (numero === 2) {
        diaDaSemana = "Segunda-feira";
    } else if (numero === 3) {
        diaDaSemana = "Terça-feira";
    } else if (numero === 4) {
        diaDaSemana = "Quarta-feira";
    } else if (numero === 5) {
        diaDaSemana = "Quinta-feira";
    } else if (numero === 6) {
        diaDaSemana = "Sexta-feira";
    } else if (numero === 7) {
        diaDaSemana = "Sábado";
    } else {
        diaDaSemana = "Número inválido";
    }

    return diaDaSemana;
}

rl.question('Digite um número de 1 a 7: ', function(numero) {
    numero = parseInt(numero);
    const dia = obterDiaDaSemana(numero);
    console.log("O dia da Semana é:",dia);
    rl.close();
});
