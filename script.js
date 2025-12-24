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
