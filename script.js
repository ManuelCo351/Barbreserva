/* =========================================
   MENU SHOW & HIDDEN (Lógica del Menú Móvil)
   ========================================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* ===== MOSTRAR MENU ===== */
/* Validamos si la constante existe (para evitar errores si cambias el HTML) */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        // Añade la clase 'show-menu' al div del menú
        // En CSS, esta clase cambia el top: -100% a top: 0
        navMenu.classList.add('show-menu');
    });
}

/* ===== OCULTAR MENU (Botón X) ===== */
if(navClose){
    navClose.addEventListener('click', () =>{
        // Quita la clase 'show-menu' y el menú vuelve a subir
        navMenu.classList.remove('show-menu');
    });
}

/* =========================================
   REMOVE MENU MOBILE (UX)
   Cierra el menú al hacer clic en cualquier link
   ========================================= */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // Cuando hacemos click en cada nav__link, removemos la clase show-menu
    navMenu.classList.remove('show-menu');
}

// Agregamos el evento a cada link del menú
navLink.forEach(n => n.addEventListener('click', linkAction));
/* =========================================
   ANIMACIÓN DE ENTRADA (HERO REVEAL)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos que queremos animar
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroDesc = document.querySelector('.hero__description');
    const heroBtns = document.querySelector('.hero__buttons');
    const heroSocial = document.querySelector('.hero__social');

    // Función simple para agregar la clase 'fade-in-up' con retraso
    const animateElement = (element, delay) => {
        if(element) {
            setTimeout(() => {
                element.classList.add('visible');
            }, delay);
        }
    };

    // Secuencia de tiempos (en milisegundos)
    animateElement(heroSubtitle, 200); // 1. Aparece subtítulo
    animateElement(heroTitle, 400);    // 2. Aparece Título
    animateElement(heroDesc, 600);     // 3. Aparece Descripción
    animateElement(heroBtns, 800);     // 4. Aparecen Botones
    animateElement(heroSocial, 1000);  // 5. Aparecen Redes
});
