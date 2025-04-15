// Função para alternar entre o modo claro e escuro
const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    toggleThemeButton.innerText = 'Modo Claro';
  } else {
    toggleThemeButton.innerText = 'Modo Escuro';
  }
});
