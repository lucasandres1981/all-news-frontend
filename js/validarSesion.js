// validarSesion.js

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual
  const sessionUser = localStorage.getItem('sessionUser');
  const sessionRole = localStorage.getItem('sessionRole'); // Debes guardar esto en login.js

  if (currentPage === 'admin.html') {
      if (!sessionUser || sessionRole !== 'admin') {
          // No está logueado o no es admin
          Swal.fire({
              icon: 'error',
              title: 'Acceso denegado',
              text: 'No tienes permisos para acceder a esta sección.',
              confirmButtonText: 'Ir al inicio'
          }).then(() => {
              window.location.href = 'index.html';
          });
      }
  }
});
