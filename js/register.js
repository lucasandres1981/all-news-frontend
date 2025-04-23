// register.js
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevoUsuario = {
        email: e.target.email.value,
        nombre: e.target.nombre.value,
        apellido: e.target.apellido.value,
        pais: e.target.pais.value,
        genero: e.target.genero.value,
        fecha_nacimiento: e.target.fecha_nacimiento.value,
        password: e.target.password.value
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar si el correo ya está registrado
    if (usuarios.find(u => u.email === nuevoUsuario.email)) {
        alert("Este correo ya está registrado");
        return;
    }

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro exitoso, ahora inicia sesión");
    window.location.href = "login.html";
});
