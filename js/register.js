document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = registerForm.email.value.trim();
      const nombre = registerForm.nombre.value.trim();
      const apellido = registerForm.apellido.value.trim();
      const pais = registerForm.pais.value.trim();
      const genero = registerForm.genero.value;
      const fechaNacimiento = registerForm.fecha_nacimiento.value;
      const password = registerForm.password.value;
      const confirmPassword = registerForm.confirm_password.value;
      const terminos = registerForm.terminos.checked;

      if (password !== confirmPassword) {
        Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        return;
      }

      if (!terminos) {
        Swal.fire('Error', 'Debes aceptar los términos y condiciones', 'error');
        return;
      }

      const newUser = {
        email,
        nombre,
        apellido,
        pais,
        genero,
        fechaNacimiento,
        password
      };

      try {
        const response = await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: 'Ahora puedes iniciar sesión',
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            window.location.href = "login.html";
            setTimeout(() => {
              window.location.reload(true);
            }, 100);
          });
        } else {
          Swal.fire('Error', 'No se pudo registrar el usuario', 'error');
        }
      } catch (error) {
        console.error('Error durante registro:', error);
        Swal.fire('Error', 'Problema de conexión con el servidor', 'error');
      }
    });
  }
});
