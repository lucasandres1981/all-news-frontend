// validarSesion.js
document.addEventListener('DOMContentLoaded', function () {
    const isAdminPage = document.title.includes('Admin');
    if (isAdminPage) {
      const sessionUser = localStorage.getItem('sessionUser');
      if (!sessionUser) {
        Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Debes iniciar sesión primero',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = 'login.html'; // Redirige al login si no hay sesión
        });
      }
    }
  });
  