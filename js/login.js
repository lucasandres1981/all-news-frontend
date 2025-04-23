// login.js
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
        alert("Bienvenido/a " + usuario.nombre);
        window.location.href = "noticias.html";
    } else {
        alert("Credenciales inválidas");
    }
});
