// admin.js
document.querySelector(".btn-publicar").addEventListener("click", function () {
    const titulo = document.querySelector(".title-input").value;
    const contenido = document.querySelector("#editor").innerHTML;

    const noticia = {
        titulo,
        contenido,
        fecha: new Date().toLocaleDateString(),
        autor: JSON.parse(localStorage.getItem("usuarioActivo"))?.nombre || "Admin",
    };

    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    noticias.push(noticia);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    alert("Noticia publicada");
});
