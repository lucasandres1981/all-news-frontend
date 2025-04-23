// js/componentLoader.js
//window.addEventListener("DOMContentLoaded", () => {
    // Cargar Header
//    fetch("../componentes/header.html")
//      .then(res => res.text())
//      .then(data => {
//        document.getElementById("header").innerHTML = data;
//      });
  
    // Cargar Footer
//    fetch("../componentes/footer.html")
//      .then(res => res.text())
//      .then(data => {
//        document.getElementById("footer").innerHTML = data;
//      });
       // Cargar Sidebar (solo si existe el contenedor)
//    const sidebarDiv = document.getElementById("sidebar");
//        if (sidebarDiv) {
//        fetch("../componentes/sidebar.html")
//        .then(res => res.text())
//        .then(data => {
//            sidebarDiv.innerHTML = data;
//        });
//        }    
//  });

window.addEventListener("DOMContentLoaded", () => {
    // Función para cargar un componente si existe el ID contenedor
    const cargarComponente = (ruta, contenedorId) => {
      const contenedor = document.getElementById(contenedorId);
      if (contenedor) {
        fetch(ruta)
          .then(res => res.text())
          .then(html => {
            contenedor.innerHTML = html;
          })
          .catch(err => console.error(`Error al cargar ${ruta}:`, err));
      }
    };
  
    cargarComponente("../componentes/header.html", "header");
    cargarComponente("../componentes/footer.html", "footer");
    //cargarComponente("../componentes/sidebar.html", "sidebar");
  });
  
  