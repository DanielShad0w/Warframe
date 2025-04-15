// Função para alternar entre as abas
function openTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');
  
  // Esconde todas as abas e remove a classe 'active' dos botões
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));
  
  // Exibe a aba correta e marca o botão como ativo
  document.getElementById(tabName).classList.add('active');
  document.querySelector(`a[href="#${tabName}"]`).classList.add('active');
}

// Função para calcular o dano crítico
document.getElementById('critForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const tier = parseFloat(document.getElementById('tier').value);
  const cd = parseFloat(document.getElementById('cd').value);
  const bonus = parseFloat(document.getElementById('bonus').value);
  
  const multiplicador = 1 + tier * (cd - 1 + bonus);
  document.getElementById('resultado').textContent = `O dano crítico final
