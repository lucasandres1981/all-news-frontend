// logout.js
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', function () {
        localStorage.removeItem('sessionUser');
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has salido correctamente',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          window.location.href = 'login.html';
        });
      });
    }
  });
  