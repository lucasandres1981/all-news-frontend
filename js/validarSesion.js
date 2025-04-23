// validarSesion.js
const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
if (!usuario) {
    alert("Inicia sesión para acceder");
    window.location.href = "login.html";
}
