// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Cambio de color al pasar el ratón sobre el título de servicios
    const serviciosTitulo = document.querySelector('.Servicios-titulo h3');
    serviciosTitulo.addEventListener('mouseover', cambiarColorServicios);
    serviciosTitulo.addEventListener('mouseout', restaurarColorServicios);

    // Mostrar/ocultar la sección de habilidades al hacer clic en el botón
    const toggleHabilidadesBtn = document.getElementById('toggleHabilidades');
    toggleHabilidadesBtn.addEventListener('click', toggleHabilidades);
});



function restaurarColorServicios() {
    const serviciosTitulo = document.querySelector('.Servicios-titulo');
    serviciosTitulo.style.backgroundColor = '';
}

function toggleHabilidades() {
    const habilidadesSection = document.getElementById('Habilidades');
    habilidadesSection.classList.toggle('hidden');
}


document.addEventListener('DOMContentLoaded', function () {
    // ... (código anterior) ...

    // Mostrar/ocultar el botón de "subir al inicio" al hacer scroll
    window.addEventListener('scroll', mostrarOcultarBoton);
    
    // Hacer scroll al inicio al hacer clic en el botón
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function mostrarOcultarBoton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}