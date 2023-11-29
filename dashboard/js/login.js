// Variables simuladas para el inicio de sesión
var usuarioRegistrado = {
    correo: '1234@gmail.com',
    contraseña: '1234'
};

function validateLoginForm() {
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

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

    // Validar las credenciales
    if (email === usuarioRegistrado.correo && password === usuarioRegistrado.contraseña) {
        // Inicio de sesión exitoso
        Swal.fire({
            icon: "success",
            title: "Inicio de Sesión Exitoso",
            text: "Bienvenido",
            showCancelButton: false, // Ocultar el botón de cancelar
            confirmButtonText: "Ir al dashboard", // Cambiar el texto del botón de confirmación
        }).then(() => {
            // Redirigir al dashboard después de hacer clic en el botón de confirmación
            window.location.href = "../../index.html";
        });
    } else if (email === usuarioRegistrado.correo) {
        // Correo válido, pero contraseña incorrecta
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Contraseña incorrecta. Por favor, inténtelo de nuevo.",
        });
    } else {
        // Usuario no encontrado
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario no encontrado. Por favor, verifique sus credenciales.",
        });
    }

    return false; // Evitar el envío del formulario por defecto
}
