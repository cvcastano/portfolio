'use strict';

const navButton = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav');

function handleClick() {
    navList.classList.toggle('show_links');
    navButton.classList.toggle('rotate');
}

navButton.addEventListener('click', handleClick);

