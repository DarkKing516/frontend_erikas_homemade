// Variable simulada para la recuperación de contraseña
var correoRecuperacion = '1234@gmail.com'; // Este es el correo simulado para recuperar contraseña

function recoverPassword() {
    var email = document.getElementById("email").value;

    // Validar que el correo tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // Mostrar mensaje de error con SweetAlert2
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, ingrese un correo electrónico válido.",
        });
        return false; // Detener el envío del formulario si el correo no es válido
    }

    // Simular el envío de correo para recuperación de contraseña
    if (email === correoRecuperacion) {
        Swal.fire({
            icon: "success",
            title: "Correo Enviado",
            text: "Hemos enviado un correo con instrucciones para recuperar tu contraseña.",
            showCancelButton: false, // Ocultar el botón de cancelar
            confirmButtonText: "OK", // Cambiar el texto del botón de confirmación
        }).then(() => {
            // Redirigir a la página de inicio después de hacer clic en el botón de confirmación
            window.location.href = "../views/signin.html"; // Puedes cambiar la URL de redirección según tus necesidades
        });
    } else {
        // Usuario no encontrado
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se encontró ninguna cuenta asociada a este correo. Verifica tu dirección de correo electrónico.",
        });
    }

    return false; // Evitar el envío del formulario por defecto
}
