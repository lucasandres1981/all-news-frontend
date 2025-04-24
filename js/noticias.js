// js/noticias.js
function cargarNoticiasPorCategoria(categoria) {
    fetch("../data/mockNoticias.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor-noticias");
            if (!contenedor) return;

            const filtradas = data.filter(noticia => noticia.categoria === categoria);
            let html = "";

            filtradas.forEach(noticia => {
                html += `
                    <article>
                        <img src="${noticia.imagen}" alt="Imagen de noticia" />
                        <h2>${noticia.titulo}</h2>
                        <p>${noticia.resumen}</p>
                    </article>
                `;
            });

            contenedor.innerHTML = html;
        })
        .catch(err => console.error("Error cargando noticias:", err));
}
function cargarNoticiasInicio(limite = 4) {
    fetch("./data/mockNoticias.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor-noticias");
            if (!contenedor) return;

            const seleccionadas = data.slice(0, limite); // 🔥 Limitar las primeras
            let html = "";

            seleccionadas.forEach(noticia => {
                html += `
                    <article>
                        <img src="${noticia.imagen}" alt="Imagen de noticia" />
                        <h2>${noticia.titulo}</h2>
                        <p>${noticia.resumen}</p>
                    </article>
                `;
            });

            contenedor.innerHTML = html;
        })
        .catch(err => console.error("Error cargando noticias de inicio:", err));
}
