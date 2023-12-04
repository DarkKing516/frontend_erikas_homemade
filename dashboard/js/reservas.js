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
