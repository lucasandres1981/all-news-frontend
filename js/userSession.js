// Ahora definimos una función que se llama manualmente
function configurarUserSession() {
  const userInfoDiv = document.getElementById('user-info');
  if (userInfoDiv) {
    const sessionEmail = localStorage.getItem('sessionUser');
    const sessionRole = localStorage.getItem('sessionRole');

    if (sessionEmail) {
      const userName = sessionEmail.split('@')[0];
      userInfoDiv.innerHTML = `
        👤 ${userName}
        <button id="logout-btn" style="margin-left: 10px;">Cerrar sesión</button>
      `;

      if (sessionRole === 'admin') {
        const adminLink = document.createElement('a');
        adminLink.href = 'admin.html';
        adminLink.textContent = 'Administrar Noticias';
        adminLink.classList.add('admin-link');
        userInfoDiv.appendChild(adminLink);
      }

      // Agregar evento al botón de cerrar sesión
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          localStorage.removeItem('sessionUser');
          localStorage.removeItem('sessionRole');
          window.location.href = '../login.html'; // 🔥 Asegúrate de que esta ruta sea correcta según tu estructura
        });
      }

    } else {
      userInfoDiv.innerHTML = '';
    }
  }
}
