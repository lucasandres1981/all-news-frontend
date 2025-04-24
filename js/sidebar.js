function cargarSidebarPorCategoria(categoria) {
    fetch("../data/mockNoticias.json")
      .then(res => res.json())
      .then(data => {
        // Filtrar noticias de la categoría actual
        const noticiasCategoria = data.filter(n => n.categoria === categoria);
  
        // Seleccionar aleatoriamente 4 noticias
        const seleccionadas = noticiasCategoria
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
  
        // Generar HTML
        let html = `<aside class="sidebar">
                      <h3>Noticias de interés</h3>
                      <ul>`;
  
        seleccionadas.forEach(noticia => {
          html += `
            <li>
              <a href="#">
                <img src="${noticia.imagen}" alt="${noticia.titulo}" />
                <span>${noticia.titulo}</span>
                <p>${noticia.resumen}</p>
              </a>
            </li>`;
        });
  
        html += `</ul></aside>`;
  
        const sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.innerHTML = html;
      })
      .catch(err => console.error("Error cargando el sidebar:", err));
  }
  