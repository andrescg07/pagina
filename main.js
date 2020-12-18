document.querySelector('.menu-barra').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');

});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.Redes-Sociales', {delay: 500});