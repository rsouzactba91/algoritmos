function somar(){
    let x = Number(document.getElementById("valorparasoma1").value)
    let y = Number(document.getElementById("valorparasoma2").value)

    alert("O resultado da soma é "+ (x + y))}


    function dividir() {
        let x = Number(document.getElementById("valorparadivisao1").value)
        let y = Number(document.getElementById("valorparadivisao2").value)
    
        if (x === 0 || y === 0) {
            alert("Não é possível dividir por zero.")
        } else {
            alert("O resultado da divisão: " + (x / y))
        }
    }
    

function multiplicar(){

    let x = Number(document.getElementById("valorparamultiplicacao1").value);
    let y = Number(document.getElementById("valorparamultiplicacao2").value);

    alert("O resultado da multiplicação é " + ( x * y))}
   

function subtrair(){
    let x = Number(document.getElementById("valorparasubtrair1").value);
    let y = Number(document.getElementById("valorparasubtrair2").value);

    alert("O resultado da subtração é " + ( x - y))}

   
    function Repetirnome(){
        /*for(let i = 0; i <=25; i++){
            alert(i)}
        }*/

        let i = 1
        let nome = (document.getElementById("Nome").value)

while(i <=25){
   alert("Seu nome é "+nome+"\n"+"essa é a contagem de número "+i)
    i++;  }
}

function Concatenarnome(){
    let primeironome = (document.getElementById("primeironome").value);
    let sobrenome = (document.getElementById("sobrenome").value);

    alert("seu nome é "+ "\n" +  primeironome  +  sobrenome )
}