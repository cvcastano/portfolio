'use strict';

const header = document.querySelector('.header');
const navButton = document.querySelector('.js-hamburger');
const navList = document.querySelector('.js-nav');
const main = document.querySelector('.main');
const arrowUp = document.querySelector('.arrow-up');
const navLinks = document.querySelectorAll('.nav_link');

function showMenu() {
    navList.classList.toggle('show_links');
    navButton.classList.toggle('rotate');
    header.classList.toggle('dark-shadow');
    main.classList.toggle('move-down');
}

function scrollUp() {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 200 & scrollHeight <= 300) {
        navList.classList.remove('show_links');
        navButton.classList.remove('rotate');
        header.classList.remove('dark-shadow');
        main.classList.remove('move-down');
    } else if (scrollHeight > 300) {
        arrowUp.classList.add('show-up');
    } else {
        arrowUp.classList.remove('show-up');
    }
}

function smoothSroll(array) {
    array.forEach((element) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

navButton.addEventListener('click', showMenu);
window.addEventListener('scroll', scrollUp);

smoothSroll(navLinks);
