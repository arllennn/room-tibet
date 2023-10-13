const headerBurger = document.querySelector('.header__nav--menu');
const headerBurgerIcon = document.querySelector('.header__burger');

headerBurgerIcon.addEventListener('click', () => {
    headerBurger.classList.toggle('header__nav--menu__active')
    headerBurgerIcon.classList.toggle('header__nav--menu__active')
})
