// login.js
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = loginForm.email.value.trim();
      const password = loginForm.password.value;

      try {
        // Buscar el usuario por email en la "base de datos" db.json
        const response = await fetch('http://localhost:3000/usuarios?email=' + encodeURIComponent(email));
        const users = await response.json();

        if (users.length === 0) {
          Swal.fire('Error', 'Usuario no registrado', 'error');
          return;
        }

        const user = users[0]; // Como solo debería haber uno por email

        // Verificar la contraseña
        if (user.password !== password) {
          Swal.fire('Error', 'Contraseña incorrecta', 'error');
          return;
        }

        // Guardar sesión en localStorage
        localStorage.setItem('sessionUser', user.email);  // Guarda el correo
        localStorage.setItem('sessionRole', user.rol);    // Guarda el rol (admin o usuario)

        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Inicio de sesión exitoso',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          window.location.href = 'index.html'; // Redirigir a la página principal
        });

      } catch (error) {
        console.error('Error durante login:', error);
        Swal.fire('Error', 'Problema de conexión con el servidor', 'error');
      }
    });
  }
});
