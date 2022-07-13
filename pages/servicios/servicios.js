
//? navbar scroll:

const header = document.querySelector('.header');

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY > 0);
});

navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('visible');
})