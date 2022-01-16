/*========================= SHOW MENU =========================*/
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav__show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav__show-menu');
    });
}

/*========================= REMOVE MENU MOBILE =========================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('nav__show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
