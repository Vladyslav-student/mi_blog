document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado correctamente. La pagina funciona.');

    // Seleccionamos el botón
    const botonModo = document.getElementById('modo-oscuro');
    
    // Escuchamos el clic en el botón
    botonModo.addEventListener('click', () => {
        // Añadimos o quitamos la clase 'dark-mode' al cuerpo de la web
        document.body.classList.toggle('dark-mode');

        // Cambiamos el icono del botón
        if(document.body.classList.contains('dark-mode')){
            botonModo.textContent = '☀️';
            console.log("Modo oscuro activado");
        } else {
            botonModo.textContent = '🌙';
            console.log("Modo claro activado");
        }
    });
});