

$(document).ready(function () {
  // Destruir la instancia actual, si existe
  if ($.fn.DataTable.isDataTable('#reservatable')) {
    $('#reservatable').DataTable().destroy();
  }

  // Configuración personalizada para DataTables
  var dataTableConfig = {
    // "pagingType": "full_numbers",
    "lengthChange": false,
    "pageLength": 5,
    "searching": true,
    "language": {
      "search": "Buscar:",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
      "infoEmpty": "Mostrando 0 a 0 de 0 registros",
      "infoFiltered": "(filtrados de _MAX_ registros en total)",
      "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
      }
    },
    "dom": '<"top"lf>rt<"bottom"ip>',
  };

  // Inicializar DataTable con la configuración personalizada
  var table = $('#reservatable').DataTable(dataTableConfig);

  // Mover el cuadro de búsqueda al lugar deseado
  $("#reservatable_filter").detach().appendTo(".top");

  // Mover el botón "Agregar" al lado del cuadro de búsqueda
  $(".top").append('<button type="button" class="btn btn-inverse-success btn-fw ml-2" data-toggle="modal" data-target="#myModal"  style="margin: 5px">Agregar</button>');

  // También puedes personalizar el estilo del cuadro de búsqueda si es necesario
  $("#reservatable_filter input").addClass("form-control form-control-sm");

  // Puedes agregar más personalizaciones según tus necesidades



});


$(document).ready(function () {
  // ... Tu código existente ...




  $('#reservatable').on('click', 'td .change-rol', function () {
    // Obtener la fila correspondiente
    var row = $(this).closest('tr');

    // Mostrar SweetAlert con el campo de selección
    Swal.fire({
      title: 'estados',
      html: '<select id="rolSelect" class="form-control">' +
        '<option value="agendado">agendado</option>' +
        '<option value="rechazada">rechazada</option>' +
        '<option value="terminada">terminada</option>' +
        '</select>',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cambiar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Obtener el valor seleccionado del select
        var nuevoRol = $('#rolSelect').val();

        // Actualizar el contenido del label con el nuevo rol
        row.find('.change-rol').text(nuevoRol);

        // Mostrar SweetAlert de éxito
        Swal.fire('¡Rol cambiado!', 'El rol se ha cambiado correctamente.', 'success');
      }
    });
  });



  // Agrega evento clic para el botón de eliminación
  $('.delete-user').on('click', function () {
    // Mostrar SweetAlert de confirmación
    Swal.fire({
      title: 'Eliminar Reserva',
      text: '¿Estás seguro de eliminar esta Reserva?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar Reserva'
    }).then((result) => {
      if (result.isConfirmed) {
        // Simular la eliminación (aquí deberías hacer la llamada a tu lógica de eliminación)
        // ...

        // Mostrar SweetAlert de éxito después de la eliminación
        Swal.fire('Reserva eliminada', 'La Reserva se ha eliminado con éxito.', 'success');
      }
    });
  });

  $('.edit-user').on('click', function () {
    var $row = $(this).closest('tr');
    var reservaInfo = {
        id: $row.find('td:eq(0)').text(),
        fechaCreacion: $row.find('td:eq(1)').text(),
        fechaReserva: $row.find('td:eq(2)').text(),
        estado: $row.find('td:eq(3)').text(),
        nombre: $row.find('td:eq(4)').text(),
        descripcion: '' // Ajusta la lógica para obtener la descripción si está en otra celda
        // Agrega aquí los demás datos que se encuentren en la tabla de reservas
    };

    $('#editUserModal #nombre').val(reservaInfo.nombre);
    $('#editUserModal #id').val(reservaInfo.id);
    $('#editUserModal #fechaCreacion').val(reservaInfo.fechaCreacion);
    $('#editUserModal #fechaReserva').val(reservaInfo.fechaReserva);
    $('#editUserModal #estado').val(reservaInfo.estado);
    $('#editUserModal #descripcion').val(reservaInfo.descripcion);
    // Agrega aquí el resto de los campos a llenar en la modal con los datos de la reserva

    $('#editUserModal').modal('show');
});


});




// Obtener referencias a los elementos del modal
const fechaInput = document.getElementById('fecha');
const nombresInput = document.getElementById('nombres');
const estadoSelect = document.getElementById('estado');
const descripcionTextArea = document.getElementById('descripcion');

// Mantener un estado de cambios realizados
let cambiosRealizados = false;

// Función para verificar cambios en los campos
function verificarCambios() {
  // Verificar si los valores han cambiado
  const cambiosFecha = fechaInput.value !== '';
  const cambiosNombres = nombresInput.value !== '';
  const cambiosEstado = estadoSelect.value !== 'pendiente';
  const cambiosDescripcion = descripcionTextArea.value !== '';

  // Si hay algún cambio, establecer cambiosRealizados a true
  if (cambiosFecha || cambiosNombres || cambiosEstado || cambiosDescripcion) {
    cambiosRealizados = true;
  }
}

// Evento al modificar los campos del modal
fechaInput.addEventListener('input', verificarCambios);
nombresInput.addEventListener('input', verificarCambios);
estadoSelect.addEventListener('change', verificarCambios);
descripcionTextArea.addEventListener('input', verificarCambios);

// Evento al intentar cerrar el modal
document.getElementById('ModalEditar').addEventListener('hidden.bs.modal', function () {
  if (cambiosRealizados) {
    if (confirm('¿Quieres realizar cambios?')) {
      // Aquí puedes incluir lógica para guardar los cambios si el usuario confirma
    } else {
      // Aquí puedes incluir lógica para descartar los cambios si el usuario no confirma
    }
  }
});
