
function calcular() {

    // Seleciona o input e o botão
    const inputElement = document.getElementById("number");
    const buttonElement = document.getElementById("botao");
    
    // Adiciona um event listener ao botão para reagir ao clique
        buttonElement.addEventListener('click', function() {
    
    // Obtém o valor do input quando o botão é clicado
        let numero = inputElement.value;
    
    
        let binario = ""
    
        for(; numero > 0; numero = Math.floor(numero/2) ) {
            let resto = numero % 2
            binario = resto + binario
   document.getElementById("resultado").textContent = "O número binário correspondente é: " + binario;
        }
        
    });
}

calcular()









