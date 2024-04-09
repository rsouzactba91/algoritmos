//importando a lib
const readline = require('readline');
//declarando a função da lib
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
var numero = ""

rl.question("Digite o numero: ",function (numero){
if(numero>0){
    console.log("o número é positivo")
}else{
    console.log("o número é negativo")
}
rl.close();
})