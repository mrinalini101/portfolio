// Init AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false
});

// Init Typed.js
const typed = document.querySelector('.typed');
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items').split(',');
  new Typed('.typed', {
    strings: typed_strings,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  });
}

// Init Glightbox
const lightbox = GLightbox({
  selector: '.glightbox'
});
