'use strict';

console.log('>> Ready :)');

const navButton = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav');

function handleClick() {
    navList.classList.toggle('show_links');
}

navButton.addEventListener('click', handleClick);

