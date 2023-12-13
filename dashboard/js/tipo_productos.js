// Array para almacenar los nombres de roles existentes
var nombresExistentes = ["Accesorios", "Prestas de vestir", "Manualidades"];

// Función para validar el formulario de roles
function validateForm() {
  // Obtener los valores de los campos
  var nombre = document.getElementById("t_productosName").value;
  

  // Validar que todos los campos estén llenos
  if (nombre === '') {
    // Mostrar un mensaje de error con SweetAlert
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos",
    });
  }else {
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
        window.location.href = "tipo_productos.html";
    });
}
return false;


  // Convertir el nombre del rol a minúsculas para evitar duplicados sin importar la capitalización
  var nombreMinusc = nombre.toLowerCase();

  // Validar que el nombre del rol no esté en la lista de nombres existentes
  if (nombresExistentes.includes(nombreMinusc)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El nombre del tipo de producto ya está registrado. Por favor, utiliza otro.",
    });
    return false; // Evitar que el formulario se envíe normalmente
  }



  // Aquí puedes agregar más validaciones según tus necesidades

  // Mostrar un mensaje de éxito con SweetAlert
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Formulario enviado correctamente",
  }).then(() => {
    // Redirigir a la página de inicio después de hacer clic en el botón de confirmación
    window.location.href = "tipo_productos.html";
  });

  // Evitar que el formulario se envíe normalmente
  return false;
}

  

$(document).ready(function () {
  // Función para manejar el evento de cambio en el campo de búsqueda
  $("#navbar-search-input").on("input", function () {
    var searchText = $(this).val().toLowerCase();

    // Filtrar todas las filas de la tabla, independientemente de la página
    $(".user-row").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
    });
  });
});

$(document).ready(function () {
  // Destruir la instancia actual, si existe
  if ($.fn.DataTable.isDataTable("#userTable")) {
    $("#userTable").DataTable().destroy();
  }

  // Configuración personalizada para DataTables
  var dataTableConfig = {
    // "pagingType": "full_numbers",
    lengthChange: false,
    // "pageLength": 5,
    searching: false,
    info: false,
    paginate: false,
    language: {
      search: "Buscar:",
      zeroRecords: "No se encontraron resultados",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 a 0 de 0 registros",
      infoFiltered: "(filtrados de _MAX_ registros en total)",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior",
      },
    },
    dom: '<"top"lf>rt<"bottom"ip>',
  };

  // Inicializar DataTable con la configuración personalizada
  var table = $("#userTable").DataTable(dataTableConfig);

  // Mover el cuadro de búsqueda al lugar deseado
  $("#userTable_filter").detach().appendTo(".top");

  // Mover el botón "Agregar" al lado del cuadro de búsqueda
  $(".top").append(
    '<button type="button" class="btn btn-inverse-success btn-fw ml-2" data-toggle="modal" data-target="#myModal" onclick="open1AddPermissionModal()">Agregar</button>'
  );

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
  $("#userTable").on(
    "click",
    "td .change-status.btn-inverse-success, td .change-status.btn-inverse-danger",
    function () {
      // Obtener la fila correspondiente
      var row = $(this).closest("tr");

      // Determinar el estado actual
      var currentState = row
        .find(".change-status")
        .hasClass("btn-inverse-success")
        ? "Activo"
        : "Inactivo";

      // Mostrar SweetAlert de confirmación
      Swal.fire({
        title: "Cambiar estado",
        text: "¿Estás seguro de cambiar el estado?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, cambiar estado",
      }).then((result) => {
        if (result.isConfirmed) {
          // Cambiar la clase y el texto de la etiqueta según el nuevo estado
          var estadoLabel = row.find(".change-status");
          if (currentState === "Activo") {
            estadoLabel
              .removeClass("btn-inverse-success")
              .addClass("btn-inverse-danger");
            estadoLabel.text("Inactivo");
          } else {
            estadoLabel
              .removeClass("btn-inverse-danger")
              .addClass("btn-inverse-success");
            estadoLabel.text("Activo");
          }

          // Mostrar SweetAlert de éxito
          Swal.fire(
            "¡Estado cambiado!",
            "El estado se ha cambiado correctamente.",
            "success"
          );
        }
      });
    }
  );

  // Agrega evento clic para el botón de eliminación
  $(".delete-role").on("click", function () {
    // Mostrar SweetAlert de confirmación
    Swal.fire({
      title: "Eliminar Rol",
      text: "¿Estás seguro de eliminar este rol?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar rol",
    }).then((result) => {
      if (result.isConfirmed) {
        // Simular la eliminación (aquí deberías hacer la llamada a tu lógica de eliminación)
        // ...

        // Mostrar SweetAlert de éxito después de la eliminación
        Swal.fire(
          "Rol eliminado",
          "El Rol se ha eliminado con éxito.",
          "success"
        );
      }
    });
  });

  // Agregar evento clic para el botón edit-user
  $(".edit-role").on("click", function () {
    // Obtener la información del usuario (puedes ajustar esto según tu lógica)
    var userInfo = {
      nombre: "Datos de Usuario",
      documento: "Datos de Usuario",
      usuario: "Datos de Usuario",
      telefono: "Datos de Usuario",
      correo: "Datos@Usuario",
      rol: "trabajador",
    };

    // Llenar la modal con la información del usuario
    $("#editUserModal #nombre").val(userInfo.nombre);
    $("#editUserModal #documento").val(userInfo.documento);
    $("#editUserModal #usuario").val(userInfo.usuario);
    $("#editUserModal #telefono").val(userInfo.telefono);
    $("#editUserModal #correo").val(userInfo.correo);
    $("#editUserModal #rol").val(userInfo.rol);

    // Mostrar la modal
    $("#editUserModal").modal("show");
  });
});
