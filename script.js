document.getElementById('critForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const tier = parseFloat(document.getElementById('tier').value);
  const cd = parseFloat(document.getElementById('cd').value);
  const bonus = parseFloat(document.getElementById('bonus').value);

  const resultado = 1 + tier * (cd - 1 + bonus);

  document.getElementById('resultado').innerText =
    `Multiplicador final de dano crítico: ${resultado.toFixed(2)}x`;
});
