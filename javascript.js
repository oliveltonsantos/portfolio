const navLinkEls = document.querySelectorAll('.nav-link');
const WindowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {

    const navLinkPathname = new URL(navLinkEl.href).pathname;


    if ((WindowPathname === navLinkPathname) || (WindowPathname === 'index.html' && navLinkPathname === '/')) {
        navLinkEl.classList.add('active');
    }
})