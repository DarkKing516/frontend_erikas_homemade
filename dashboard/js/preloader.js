// Espera a que la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function () {
    // Elimina la clase "loaded" del preloader
    document.querySelector('.preloader').classList.remove('loaded');

    // Agrega una pequeña demora para asegurar que la animación se reproduzca
    setTimeout(function () {
        // Oculta el preloader después de la animación
        document.querySelector('.preloader').style.display = 'none';
    }, 1500); // 1500 milisegundos (1.5 segundos), ajusta según la duración de tu animación
});