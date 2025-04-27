// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        const email = loginForm.email.value.trim();
        const password = loginForm.password.value;
  
        try {
          const response = await fetch('http://localhost:3000/usuarios?email=' + encodeURIComponent(email));
          const users = await response.json();
  
          if (users.length === 0) {
            Swal.fire('Error', 'Usuario no registrado', 'error');
            return;
          }
  
          const user = users[0]; // Debe haber solo uno
  
          if (user.password !== password) {
            Swal.fire('Error', 'Contraseña incorrecta', 'error');
            return;
          }
  
          localStorage.setItem('sessionUser', email);
  
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Inicio de sesión exitoso',
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            window.location.href = 'index.html';
          });
  
        } catch (error) {
          console.error('Error durante login:', error);
          Swal.fire('Error', 'Problema de conexión con el servidor', 'error');
        }
      });
    }
  });
  