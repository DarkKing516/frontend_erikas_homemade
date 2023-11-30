// register.js

// Variable para el correo ya existente
var correoExistente = "1234@gmail.com";

function validateRegisterForm() {
    // Obtener los valores de los campos
    var name = document.getElementById('exampleInputName').value;
    var phone = document.getElementById('exampleInputPhone').value;
    var documentNumber = document.getElementById('exampleInputDocument').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var username = document.getElementById('exampleInputUsername1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var checkbox = document.querySelector('.form-check-input').checked;

    // Validar que todos los campos estén llenos
    if (name === '' || phone === '' || documentNumber === '' || email === '' || username === '' || password === '' || !checkbox) {
        // Mostrar un mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos y acepta los términos y condiciones',
        });
    } else if (email === correoExistente) {
        // Si el correo es igual al correo existente, mostrar un mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.',
        });
    } else {
        // Enviar el formulario o realizar otras acciones si todos los campos están llenos
        // Aquí puedes agregar tu lógica para enviar el formulario a través de AJAX u otras operaciones
        // ...
    
        // Mostrar un mensaje de éxito con SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado correctamente',
        }).then(() => {
            // Redirigir a la página de inicio después de hacer clic en el botón de confirmación
            window.location.href = "../../index.html"; // Puedes cambiar la URL de redirección según tus necesidades
        });
        // Puedes agregar aquí más acciones después de enviar el formulario
    }
  
    // Evitar que el formulario se envíe normalmente
    return false;
}
