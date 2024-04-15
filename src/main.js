
function calcular() {

    // Seleciona o input e o botão
    const inputElement = document.getElementById("number");
    const buttonElement = document.getElementById("botao");

    // Adiciona um event listener ao botão para reagir ao clique
    buttonElement.addEventListener('click', function () {

        // Obtém o valor do input quando o botão é clicado
        let numero = inputElement.value;
        let binario = ""

        if (numero <= 9 || numero >= 100) {
            document.getElementById('resultado').textContent = "Erro! Digite um número decimal entre 10 e 99. "
        }
        else if(isNaN(numero)) {
            document.getElementById('resultado').textContent = "Erro! Digite um número. "
        }
        
        else {
            for (; numero > 0; numero = Math.floor(numero / 2)) {
                let resto = numero % 2
                binario = resto + binario
                document.getElementById('resultado').textContent = "O número binário correspondente é: " + binario;
            }
        }
    });
}

calcular()









