document.getElementById("toggleTema").onclick = () => {
  const html = document.documentElement;
  const icono = document.getElementById("iconoTema");

  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    icono.textContent = "☀️";
  } else {
    icono.textContent = "🌙";
  }
};
