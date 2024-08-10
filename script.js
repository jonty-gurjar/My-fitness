
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


// script1.js
console.log('JavaScript is connected');


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function contactUs() {
   window.location.href = "contact.html";
}


document.addEventListener('DOMContentLoaded', () => {
   const filterButtons = document.querySelectorAll('.filter-button');
   const blogCards = document.querySelectorAll('.blog-card');

   filterButtons.forEach(button => {
       button.addEventListener('click', () => {
           const category = button.getAttribute('data-category');

           filterButtons.forEach(btn => btn.classList.remove('active'));
           button.classList.add('active');

           blogCards.forEach(card => {
               if (category === 'all' || card.getAttribute('data-category') === category) {
                   card.style.display = 'block';
               } else {
                   card.style.display = 'none';
               }
           });
       });
   });
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
   e.preventDefault();
   e.target.elements.name.value = '';
   e.target.elements.email.value = '';
   e.target.elements.message.value = '';
 });
