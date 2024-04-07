//importando a lib
const readline = require('readline');
//declarando a função da lib
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//criando a função
function decimalparabinario(decimal){
    if (decimal ===0) return 'é zero';
var binario ='';
//enquanto o decimal for maior que zero ...
while (decimal>0){
    //calcule o resto da divisao do numero 
    var resto = decimal % 2;
    //adiciona o resto à esquerda do numero binario
    binario = resto + binario;
    //divide o numero decimal por 2
    decimal = Math.floor(decimal / 2)
}
return binario;
}
rl.question('Digite o numero decimal: ', function(decimal) {
decimal = parseInt(decimal);
//analisar o que tem dentro da string

if(!isNaN(decimal)){
    var binario = decimalparabinario(decimal);
    console.log('o número binário é: ', binario);
}else{
    console.log('por favor insira um numero decimal valido');
}
rl.close();
});



