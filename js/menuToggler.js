const toggleMenu = () => {
    const menuToggler = document.querySelector('.hamburger');
    menuToggler.classList.toggle('is-active');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');
}
