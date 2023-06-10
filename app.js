let mobile = document.querySelector('.mobile');
let product = document.querySelector('#product');
let join = document.querySelector('#join');
let menu__window = document.querySelector('.menu__window');
let product__slide = document.querySelector('.product__slide');
let join__slide = document.querySelector('.join__slide');
let goBack__btn = document.querySelectorAll('.goBack__btn');
let overlay = document.querySelector('.overlay');
let menu__bars = document.querySelector('.menu__bars');

product.addEventListener('click', () => {
  menu__window.style.transform = 'translateX(-400px)';
  menu__window.style.transition = '300ms';
  product__slide.style.zIndex = '9999';
  join__slide.style.zIndex = '-1';
});

join.addEventListener('click', () => {
  menu__window.style.transform = 'translateX(-400px)';
  menu__window.style.transition = '300ms';
  product__slide.style.zIndex = '-1';
  join__slide.style.zIndex = '9999';
});

goBack__btn.forEach((backBtn) => {
  backBtn.addEventListener('click', () => {
    menu__window.style.transform = 'translateX(0px)';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  mobile.style.transform = 'translateX(-100%)';
  mobile.style.transition = '300ms';
});

menu__bars.addEventListener('click', () => {
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
  mobile.style.transform = 'translateX(0)';
  mobile.style.transition = '300ms';
});
