const parallaxSection = document.getElementById('paralax');
window.addEventListener('scroll', function() {
    // Calculamos el desplazamiento en el scroll
    let offset = window.pageYOffset;
     // Aplicamos la velocidad de parallax, ajustando el backgroundPositionY
    // Puedes ajustar el valor para modificar la velocidad (-0.5 hace que el fondo se mueva más lentamente)
    parallaxSection.style.backgroundPositionY = offset * -0.2 + 'px';
});