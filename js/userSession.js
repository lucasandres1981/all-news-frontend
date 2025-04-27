// userSession.js
document.addEventListener('DOMContentLoaded', function () {
    const userInfoDiv = document.getElementById('user-info');
    if (userInfoDiv) {
      const sessionEmail = localStorage.getItem('sessionUser');
  
      if (sessionEmail) {
        const userName = sessionEmail.split('@')[0];
        userInfoDiv.innerHTML = `👤 Bienvenido, ${userName}`;
      } else {
        userInfoDiv.innerHTML = '';
      }
    }
  });
  