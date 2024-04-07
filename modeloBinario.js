function converterParaBinario() {
    var decimal = document.getElementById("num").value;
    decimal = parseInt(decimal);

    if (!isNaN(decimal)) {
      var binario = decimalParaBinario(decimal);
      alert("O número binário é: " + binario);
    } else {
      alert("Por favor, insira um número decimal válido");
    }
  }

  function decimalParaBinario(decimal) {
    if (decimal === 0) return '0'; // Se o número for zero, retorna '0'

    var binario = ''; // Inicializa a string binária vazia

    // Enquanto o número decimal for maior que zero ...
    while (decimal > 0) {
      // Calcula o resto da divisão do número decimal por 2
      var resto = decimal % 2;
      // Adiciona o resto à esquerda da string binária
      binario = resto + binario;
      // Divide o número decimal por 2 (arredondando para baixo)
      decimal = Math.floor(decimal / 2);
    }

    return binario; // Retorna o número binário como uma string
  }