/* Menu na versão mobile*/

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

/* Perguntas frequentes */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    accordion.querySelector('.accordion-header').addEventListener('click', () => {
        // Fecha todos os outros accordions
        accordions.forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector('.accordion-body').classList.remove('active');
            }
        });

        // Alterna o atual
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    });
});
