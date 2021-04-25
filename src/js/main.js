'use strict';

const header = document.querySelector('.header');
const navButton = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav');

function handleClick() {
    navList.classList.toggle('show_links');
    navButton.classList.toggle('rotate');
    header.classList.toggle('dark-shadow');
}

navButton.addEventListener('click', handleClick);

