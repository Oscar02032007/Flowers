document.addEventListener('DOMContentLoaded', () => {
    // Eliminar la clase 'container' del body al cargar la página
    document.body.classList.remove("container");

    // Seleccionar el reproductor de audio y el nuevo botón
    const audio = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playMusicButton');
    const buttonContainer = document.querySelector('.music-button-container');

    // Agregar un 'event listener' al botón para reproducir la música
    if (playButton) {
        playButton.addEventListener('click', () => {
            audio.play().then(() => {
                // Desvanecer el botón en lugar de ocultarlo de golpe
                if (buttonContainer) {
                    buttonContainer.style.opacity = '0';
                    setTimeout(() => {
                        buttonContainer.style.display = 'none';
                    }, 2000); // 2 segundos para la transición
                }
            }).catch(error => {
                console.error('La reproducción de audio falló:', error);
            });
        });
    }
});