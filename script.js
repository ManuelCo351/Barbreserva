/* =========================================
   1. MENÚ MÓVIL: MOSTRAR Y OCULTAR
   ========================================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* ===== MOSTRAR MENÚ (Botón Hamburguesa) ===== */
/* Validamos si existe el botón para evitar errores */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        // Agrega la clase que hace bajar el menú (top: 0)
        navMenu.classList.add('show-menu');
    });
}

/* ===== OCULTAR MENÚ (Botón X) ===== */
if(navClose){
    navClose.addEventListener('click', () =>{
        // Quita la clase y el menú vuelve a subir (top: -100%)
        navMenu.classList.remove('show-menu');
    });
}

/* =========================================
   2. CERRAR MENÚ AL TOCAR UN ENLACE
   Mejora la experiencia: no obliga al usuario a cerrar manual.
   ========================================= */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // Cuando se hace click en cualquier link, quitamos la clase show-menu
    navMenu.classList.remove('show-menu');
}

// Asignamos el evento "click" a CADA enlace del menú
navLink.forEach(n => n.addEventListener('click', linkAction));

/* =========================================
   3. ANIMACIÓN DE ENTRADA (HERO REVEAL)
   Hace aparecer los textos uno por uno al cargar la página.
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos de la portada
    const elementsToAnimate = [
        { el: document.querySelector('.hero__subtitle'), delay: 200 },
        { el: document.querySelector('.hero__title'), delay: 400 },
        { el: document.querySelector('.hero__description'), delay: 600 },
        { el: document.querySelector('.hero__buttons'), delay: 800 },
        { el: document.querySelector('.hero__social'), delay: 1000 }
    ];

    // Recorremos la lista y aplicamos la clase 'visible' con retraso
    elementsToAnimate.forEach(item => {
        if(item.el) {
            setTimeout(() => {
                item.el.classList.add('visible');
            }, item.delay);
        }
    });
});

