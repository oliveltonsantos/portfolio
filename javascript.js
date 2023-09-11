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


/* Link ativo na versão de desktop */

const navLinkEls = document.querySelectorAll('.nav-link');
const WindowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {

    const navLinkPathname = new URL(navLinkEl.href).pathname;


    if ((WindowPathname === navLinkPathname) || (WindowPathname === 'index.html' && navLinkPathname === '/')) {
        navLinkEl.classList.add('active');
    }
})