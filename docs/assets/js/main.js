"use strict";const header=document.querySelector(".header"),navButton=document.querySelector(".js-hamburger"),navList=document.querySelector(".js-nav"),main=document.querySelector(".main"),arrowUp=document.querySelector(".arrow-up"),navLinks=document.querySelectorAll(".nav_link");function showMenu(){navList.classList.toggle("show_links"),navButton.classList.toggle("rotate"),header.classList.toggle("dark-shadow"),main.classList.toggle("move-down")}function scrollUp(){const e=window.pageYOffset;e>100&&(navList.classList.remove("show_links"),navButton.classList.remove("rotate"),header.classList.remove("dark-shadow"),main.classList.remove("move-down")),e>300?arrowUp.classList.add("show-up"):arrowUp.classList.remove("show-up")}function smoothSroll(e){e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})})})}navButton.addEventListener("click",showMenu),window.addEventListener("scroll",scrollUp),smoothSroll(navLinks);