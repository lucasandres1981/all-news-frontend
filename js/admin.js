document.addEventListener('DOMContentLoaded', function () {
    const dropzone = document.getElementById('dropzone');
    const imageInput = document.getElementById('imageUpload');
    const editor = document.getElementById('editor');
    const titleInput = document.querySelector('.title-input');
    const publishButton = document.querySelector('.btn-publicar');

    let imagenSeleccionada = ""; // Guarda el nombre de la imagen

    // Función para mostrar miniatura
    function mostrarMiniatura(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            dropzone.innerHTML = `<img src="${e.target.result}" alt="Vista previa" style="max-width: 100%; height: auto;">`;
        };
        reader.readAsDataURL(file);
    }

    // Cuando seleccionan archivo desde el input
    imageInput.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            const file = this.files[0];
            imagenSeleccionada = file.name; // Nombre del archivo
            mostrarMiniatura(file); // Muestra vista previa
        }
    });

    // Manejo del drag and drop
    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropzone.style.border = '2px dashed #00aaff';
    });

    dropzone.addEventListener('dragleave', function (e) {
        e.preventDefault();
        dropzone.style.border = '2px dashed #ccc';
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropzone.style.border = '2px dashed #ccc';

        const file = e.dataTransfer.files[0];
        imagenSeleccionada = file.name; // Nombre del archivo
        imageInput.files = e.dataTransfer.files; // Sincronizar input
        mostrarMiniatura(file); // Mostrar vista previa
    });

    // Publicar la noticia
    publishButton.addEventListener('click', async function () {
        const titulo = titleInput.value.trim();
        const contenido = editor.innerHTML.trim();

        if (!titulo || !contenido || !imagenSeleccionada) {
            Swal.fire('Error', 'Completa todos los campos y sube una imagen', 'error');
            return;
        }

        const nuevaNoticia = {
            titulo: titulo,
            contenido: contenido,
            imagen: imagenSeleccionada,
            fecha: new Date().toISOString().split('T')[0],
            autor: localStorage.getItem('sessionUser') || "Admin"
        };

        try {
            const response = await fetch('http://localhost:3000/noticias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevaNoticia)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Noticia publicada!',
                    text: 'Se ha guardado exitosamente',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    // Limpiar
                    titleInput.value = '';
                    editor.innerHTML = 'Escribe aquí el contenido de la noticia...';
                    imageInput.value = '';
                    dropzone.innerHTML = '<p>Arrastra y suelta la imagen aquí o haz clic para seleccionar</p>';
                    imagenSeleccionada = '';
                });
            } else {
                Swal.fire('Error', 'No se pudo guardar la noticia', 'error');
            }
        } catch (error) {
            console.error('Error publicando noticia:', error);
            Swal.fire('Error', 'Problema de conexión al servidor', 'error');
        }
    });
});

// Función para formatear texto en el editor
function format(command) {
    document.execCommand(command, false, null);
}
