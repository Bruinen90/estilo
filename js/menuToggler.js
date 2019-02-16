const toggleMenu = () => {
    const menuToggler = document.querySelector('.navCont__toggler');
    menuToggler.classList.toggle('navCont__toggler--clicked');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--hidden');

    // const cover = document.querySelector('.cover');
    // cover.classList.toggle('cover--hidden');
}
