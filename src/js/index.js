const slides = document.querySelector('.slides');
const prev = document.querySelector('.header_slider_prev');
const next = document.querySelector('.header_slider_next');
const slide = document.querySelectorAll('.slide');

const step = 100;
let i = 0;

prev.addEventListener('click', () => {
  i--;
  changeScroll();
});

next.addEventListener('click', () => {
  i++;
  changeScroll();
});

setInterval(() => {
  i++;
  changeScroll();
  if (i > slide.length - 1) counter = 1;
}, 5000);

const changeScroll = () => {
  if (i > slide.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = slide.length - 1;
  }
  let distance = -i * step;
  slides.style.transform = 'translateX(' + distance + '%)';
  return i;
};

const burger = document.querySelector('.header_burger');
const burgerBtn = document.querySelector('.header_burger_btn');
const burgerCross = document.querySelector('.header_burger_cross');
const burgerItems = document.querySelectorAll('.header_burger_item');

burgerBtn.onclick = () => burger.classList.add('active');
burgerCross.onclick = () => burger.classList.remove('active');
burgerItems.forEach((item) => {
  item.onclick = () => burger.classList.remove('active');
});
