'use strict';

const header = document.querySelector('.header');
const navButton = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav');
const main = document.querySelector('.main');
const arrowUp = document.querySelector('.arrow-up');


function handleClick() {
    navList.classList.toggle('show_links');
    navButton.classList.toggle('rotate');
    header.classList.toggle('dark-shadow');
    main.classList.toggle('move-down');
}
navButton.addEventListener('click', handleClick);

function scrollUp() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 300) {
        arrowUp.classList.add('show-up');
    } else {
        arrowUp.classList.remove('show-up');
    }
}
window.addEventListener('scroll', scrollUp);
