document.getElementById("critForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const tier = parseInt(document.getElementById("tier").value);
  const cd = parseFloat(document.getElementById("cd").value);
  const bonus = parseFloat(document.getElementById("bonus").value);

  const realCD = cd - 1 + bonus;
  const mult = 1 + tier * realCD;
  const resultado = `Multiplicador final de dano crítico: <strong>${mult.toFixed(2)}x</strong>`;

  document.getElementById("resultado").innerHTML = resultado;
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleExpand(id) {
  const section = document.getElementById(id);
  if (section.classList.contains("collapsed")) {
    section.classList.remove("collapsed");
  } else {
    section.classList.add("collapsed");
  }
}
