// Temas del taller: agrega o edita aquí y la página se actualiza sola.
const agenda = [
  { icono: "bi-github", titulo: "Git y GitHub", texto: "Qué son y en qué se diferencian." },
  { icono: "bi-terminal", titulo: "Comandos esenciales", texto: "clone, status, add, commit, push y pull." },
  { icono: "bi-diagram-3", titulo: "Ramas", texto: "Trabajar sin tocar main con GitHub Flow." },
  { icono: "bi-git", titulo: "Pull Requests", texto: "Proponer, revisar y fusionar cambios." },
  { icono: "bi-laptop", titulo: "Práctica guiada", texto: "Tu primer Pull Request paso a paso." },
  { icono: "bi-people", titulo: "Reto en parejas", texto: "Colaborar y resolver un conflicto." },
];

const lista = document.getElementById("lista-agenda");

agenda.forEach((tema, i) => {
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card h-100 agenda-card">
      <div class="card-body">
        <p class="agenda-num mb-2">${String(i + 1).padStart(2, "0")}</p>
        <h3 class="h5 card-title"><i class="bi ${tema.icono} me-2"></i>${tema.titulo}</h3>
        <p class="card-text text-body-secondary">${tema.texto}</p>
      </div>
    </div>`;
  lista.appendChild(col);
});

// Validación del formulario de contacto (demo, no envía datos).
const form = document.getElementById("form-contacto");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  alerta.classList.remove("d-none");
  form.reset();
  form.classList.remove("was-validated");
});
