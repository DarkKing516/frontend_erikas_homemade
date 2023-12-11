var correoExistente = "1234@gmail.com";

function validateForm() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var tipo_servicio = document.getElementById('tipo_servicio').value;
    var descripcion = document.getElementById('descripcion').value;
    var precio = document.getElementById('precio').value;
    var estado = document.getElementById('estado').value;
    var estado_catalogo = document.getElementById('estado_catalogo').value;
    var img = document.getElementById('img').value;

    // Validar que todos los campos estén llenos
    if (nombre === '' || tipo_servicio === '' || descripcion === '' || precio === '' || estado === '' || estado_catalogo === '' || img === '') {
        // Mostrar un mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos',
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
            window.location.href = "servicios.html";
        });
    }

    // Evitar que el formulario se envíe normalmente
    return false;
}

// $(document).ready(function () {
//     // Función para manejar el evento de cambio en el campo de búsqueda
//     $("#navbar-search-input").on("input", function () {
//         var searchText = $(this).val().toLowerCase();

//         // Filtrar todas las filas de la tabla, independientemente de la página
//         $('.user-row').filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
//         });
//     });
// });



$(document).ready(function () {
    // Destruir la instancia actual, si existe
    if ($.fn.DataTable.isDataTable('#userTable')) {
        $('#userTable').DataTable().destroy();
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
    var table = $('#userTable').DataTable(dataTableConfig);

    // Mover el cuadro de búsqueda al lugar deseado
    $("#userTable_filter").detach().appendTo(".top");

    // Mover el botón "Agregar" al lado del cuadro de búsqueda
    $(".top").append('<button type="button" class="btn btn-inverse-success btn-fw ml-2" data-toggle="modal" data-target="#myModal"  style="margin: 5px">Agregar</button>');

    // También puedes personalizar el estilo del cuadro de búsqueda si es necesario
    $("#userTable_filter input").addClass("form-control form-control-sm");

    // Puedes agregar más personalizaciones según tus necesidades



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



$(document).ready(function () {
    // ... Tu código existente ...

    // Agregar evento clic para las etiquetas de estado
    $('#userTable').on('click', 'td .change-status.btn-inverse-success, td .change-status.btn-inverse-danger', function () {
        // Obtener la fila correspondiente
        var row = $(this).closest('tr');

        // Determinar el estado actual
        var currentState = row.find('.change-status').hasClass('btn-inverse-success') ? 'Activo' : 'Inactivo';

        // Mostrar SweetAlert de confirmación
        Swal.fire({
            title: 'Cambiar estado',
            text: '¿Estás seguro de cambiar el estado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, cambiar estado'
        }).then((result) => {
            if (result.isConfirmed) {
                // Cambiar la clase y el texto de la etiqueta según el nuevo estado
                var estadoLabel = row.find('.change-status');
                if (currentState === 'Activo') {
                    estadoLabel.removeClass('btn-inverse-success').addClass('btn-inverse-danger');
                    estadoLabel.text('Inactivo');
                } else {
                    estadoLabel.removeClass('btn-inverse-danger').addClass('btn-inverse-success');
                    estadoLabel.text('Activo');
                }

                // Mostrar SweetAlert de éxito
                Swal.fire('¡Estado cambiado!', 'El estado se ha cambiado correctamente.', 'success');
            }
        });
    });








    // Agrega evento clic para el botón de eliminación
    $('.delete-user').on('click', function () {
        // Mostrar SweetAlert de confirmación
        Swal.fire({
            title: 'Eliminar Servicio',
            text: '¿Estás seguro de eliminar este Servicio?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar Servicio'
        }).then((result) => {
            if (result.isConfirmed) {
                // Simular la eliminación (aquí deberías hacer la llamada a tu lógica de eliminación)
                // ...

                // Mostrar SweetAlert de éxito después de la eliminación
                Swal.fire('Servicio eliminado', 'El Servicio se ha eliminado con éxito.', 'success');
            }
        });
    });






    // Agregar evento clic para el botón edit-user
    $('.edit-user').on('click', function () {
        // Obtener la información del usuario (puedes ajustar esto según tu lógica)
        var userInfo = {
            nombre: "Datos del servicio",
            tipo_servicio: "Datos del servicio",
            descripcion: "Datos del servicio",
            precio: "Datos del servicio",
            estado: "activo",
            estado_catalogo: "activo",
            img: "datos del servicio"
        };

        // Llenar la modal con la información del usuario
        $('#editUserModal #nombre').val(userInfo.nombre);
        $('#editUserModal #tipo_servicio').val(userInfo.tipo_servicio);
        $('#editUserModal #descripcion').val(userInfo.descripcion);
        $('#editUserModal #precio').val(userInfo.precio);
        $('#editUserModal #estado').val(userInfo.estado);
        $('#editUserModal #estado_catalogo').val(userInfo.estado_catalogo);
        $('#editUserModal #img').val(userInfo.img);

        // Mostrar la modal
        $('#editUserModal').modal('show');
    });

});

const pedidos = [
    {
      idPedido: 1,
      cliente: "Emmanuel Sánchez Herrera",
      fechaCreacionPedido: "15 feb 2023	",
      fechaEntregaPedido: "21 Sep 2018",
      descripcionPedido: "Confección de 4 blusas estilo ombliguera",
      totalDetalle: 25000,
      totalPedido: 50000,
      evidenciaPago: "/dashboard/images/dashboard/recibo1.png",
      estadoPedido: "Entregado",
    },
    {
      idPedido: 2,
      cliente: "Nelson David Valencia Alzate	",
      fechaCreacionPedido: "24 sep 2020",
      fechaEntregaPedido: "13 Jun 2018",
      descripcionPedido: "Entubar bota de pantalon",
      totalDetalle: 17500,
      totalPedido: 35000,
      evidenciaPago: "/dashboard/images/dashboard/recibo1.png",
      estadoPedido: "completado",
    },
    {
      idPedido: 3,
      cliente: "Jhon Michael Contreras Rojas",
      fechaCreacionPedido: "10 ene 2022",
      fechaEntregaPedido: "	28 Sep 2018",
      descripcionPedido: "2 muñecas de trapo navideñas",
      totalDetalle: 36500,
      totalPedido: 73000,
      evidenciaPago: "/dashboard/images/dashboard/recibo2.png",
      estadoPedido: "En proceso",
    },
    {
      idPedido: 4,
      cliente: "Danilo Vergara López	",
      fechaCreacionPedido: "4 dec 2020",
      fechaEntregaPedido: "30 Jun 2018",
      descripcionPedido: "Entubar bota de pantalon",
      totalDetalle: 60000,
      totalPedido: 120000,
      evidenciaPago: "/dashboard/images/dashboard/recibo2.png",
      estadoPedido: "Por hacer",
    },
  ];

  function mostrarDetallesPedido(idPedido) {
    const pedidoSeleccionado = pedidos.find(
      (pedido) => pedido.idPedido === idPedido
    );
    const detallesModalBody = document.getElementById("detallesModalBody");
    detallesModalBody.innerHTML = `
        <p><strong>ID del Pedido:</strong> ${pedidoSeleccionado.idPedido}</p>
        <p><strong>Cliente:</strong> ${pedidoSeleccionado.cliente}</p>
        <p><strong>Fecha de Creación:</strong> ${pedidoSeleccionado.fechaCreacionPedido}</p>
        <p><strong>Fecha de Entrega:</strong> ${pedidoSeleccionado.fechaEntregaPedido}</p>
        <p><strong>Descripción del Pedido:</strong> ${pedidoSeleccionado.descripcionPedido}</p>
        <p><strong>Total Detalle:</strong> ${pedidoSeleccionado.totalDetalle}</p>
        <p><strong>Total Pedido:</strong> ${pedidoSeleccionado.totalPedido}</p>
        <p><strong>Evidencia de Pago:</strong> <img src="${pedidoSeleccionado.evidenciaPago}" alt="Evidencia de Pago"></p>
        <p><strong>Estado del Pedido:</strong> ${pedidoSeleccionado.estadoPedido}</p>
    `;
    $("#detallesModal").modal("show"); // Muestra el modal
  }