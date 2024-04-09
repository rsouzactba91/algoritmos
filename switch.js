//importando a lib
const readline = require('readline');
//declarando a função da lib
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Digite o dia: ",function (dia){
switch (dia){
    case "segunda":
    console.log("hoje é segunda")
    break;
    case "terça":
    console.log("hoje é terça")
    break;
    case "quarta":
    console.log("hoje é quarta")
    break;
    case "quinta":
    console.log("hoje é quinta")
    break;
    case "sexta":
    console.log("hoje é sexta")
    break;
    case  "sabado":
    console.log("hoje é sabado")
    break;
    case "domingo":
    console.log("hoje é domingo")
    break;
}

rl.close();
})