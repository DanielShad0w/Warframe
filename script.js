// Função para alternar entre as abas
function openTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));
  
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
  document.getElementById('resultado').textContent = `O dano crítico final é: ${multiplicador.toFixed(2)}x`;
});

// Função para alternar o tema (Modo Escuro / Claro)
document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Função para expandir/retrair o menu
function toggleMenu() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
      this.classList.toggle('active');
      
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
}

toggleMenu(); // Inicializa o comportamento do menu expansível
