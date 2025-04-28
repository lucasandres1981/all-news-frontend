window.addEventListener("DOMContentLoaded", () => {
  const cargarComponente = (ruta, contenedorId, callback) => {
    const contenedor = document.getElementById(contenedorId);
    if (contenedor) {
      fetch(ruta)
        .then(res => res.text())
        .then(html => {
          contenedor.innerHTML = html;
          if (callback) callback(); // 🚀 Ejecuta el callback solo después de cargar
        })
        .catch(err => console.error(`Error al cargar ${ruta}:`, err));
    }
  };

  // Cargamos primero el header y después ejecutamos configurarUserSession
  cargarComponente("../componentes/header.html", "header", configurarUserSession);
  cargarComponente("../componentes/footer.html", "footer");
});
