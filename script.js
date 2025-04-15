// Função para alternar entre as seções
function showSection(sectionId) {
  // Esconde todas as seções
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Mostra a seção que foi clicada
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

// Calculadora de Dano Crítico
document.getElementById('critForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const tier = parseInt(document.getElementById('tier').value);
  const cd = parseFloat(document.getElementById('cd').value);
  const bonus = parseFloat(document.getElementById('bonus').value);

  // Calcula o multiplicador de dano
  const M = 1 + tier * (cd - 1 + bonus);

  // Exibe o resultado
  document.getElementById('resultado').innerText = `O multiplicador de dano crítico é: ${M.toFixed(2)}x`;
});

// Exibe a primeira seção como padrão
showSection('explicacao');
