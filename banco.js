// Importando a lib
const readline = require('readline');

// Declarando a função da lib
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function verificarEmprestimo(salario, emprestimo) {
    if (emprestimo <= salario * 12 && emprestimo<=50001) {
        console.log("Empréstimo aprovado");
    } else {
        console.log("Empréstimo negado");
    }
}

rl.question('Digite o salário: ', function(salario) {
    salario = parseInt(salario);
    rl.question('Digite o valor do empréstimo desejado: ', function(emprestimo) {
        emprestimo = parseInt(emprestimo);
        verificarEmprestimo(salario, emprestimo);
        rl.close();
    });
});
