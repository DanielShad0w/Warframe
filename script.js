document.getElementById("critForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtendo os valores dos inputs
    const tier = parseInt(document.getElementById('tier').value);
    const cd = parseFloat(document.getElementById('cd').value);
    const bonus = parseFloat(document.getElementById('bonus').value);

    // Fórmula para calcular o multiplicador
    const M = 1 + tier * (cd - 1 + bonus);

    // Calculando o dano final (100 é apenas um valor base de dano para exemplo)
    const danoBase = 100;
    const danoFinal = danoBase * M;

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Dano Final: ${danoFinal.toFixed(2)}`;
});

