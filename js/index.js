
const header            = document.querySelector('.header');
const navbarToggle      = document.querySelector('.navbar-toggle');
const navbarMenu        = document.querySelector('.nav-menu');
const carouselContainer = document.querySelector('.contenedor-grande');
const carouselButton  = document.querySelectorAll('.punto');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY > 0);
});

navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('visible');
})

setInterval(() => {
    
}, 3000);

carouselButton.forEach( (button, i) => {
    // console.log({cadaPunto, i});

    carouselButton[i].addEventListener('click', ()=>{
        
        let position = i;
        let operation = position * -25;

        carouselContainer.style.transform = `translateX(${operation}%)`;

        carouselButton.forEach((button, i)=>{
            carouselButton[i].classList.remove('activo');
        });

        carouselButton[i].classList.add('activo');
    });
});