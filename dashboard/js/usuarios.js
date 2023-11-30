var correoExistente = "1234@gmail.com";

function validateForm() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var documento = document.getElementById('documento').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;
    var rol = document.getElementById('rol').value;

    // Validar que todos los campos estén llenos
    if (nombre === '' || telefono === '' || documento === '' || correo === '' || usuario === '' || contrasena === '' || rol === '') {
        // Mostrar un mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos',
        });
    } else if (correo === correoExistente) {
        // Si el correo es igual al correo existente, mostrar un mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.',
        });
    } else {
        // Aquí puedes agregar más validaciones según tus necesidades

        // Mostrar un mensaje de éxito con SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado correctamente',
        }).then(() => {
            // Puedes agregar más acciones después de hacer clic en el botón de confirmación
            // Por ejemplo, enviar el formulario a través de AJAX o redirigir a otra página
            // ...

            // Redirigir a la página de inicio después de hacer clic en el botón de confirmación
            window.location.href = "usuarios_dash.html.html";
        });
    }

    // Evitar que el formulario se envíe normalmente
    return false;
}

$(document).ready(function () {
    // Función para manejar el evento de cambio en el campo de búsqueda
    $("#navbar-search-input").on("input", function () {
        var searchText = $(this).val().toLowerCase();

        // Filtrar todas las filas de la tabla, independientemente de la página
        $('.user-row').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
        });
    });
});



$(document).ready(function () {
    // Destruir la instancia actual, si existe
    if ($.fn.DataTable.isDataTable('#userTable')) {
        $('#userTable').DataTable().destroy();
    }

    // Inicializar DataTable
    $('#userTable').DataTable({
        "pagingType": "full_numbers",
        // "pageLength": 5
    });
});


// $(document).ready(function () {
//     // Inicializar DataTable
//     $('#userTable').DataTable();

//     // Configurar paginación
//     $('#userTable').DataTable({
//         "pagingType": "full_numbers"
//     });
// });

//   $(document).ready(function () {
//     // Inicializar DataTable
//     $('#userTable').DataTable({
//       "pagingType": "full_numbers",
//       "pageLength": 5  // Establecer el número de registros por página
//     });
//   });