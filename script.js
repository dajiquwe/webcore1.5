var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



addEventListener('load', function () {
  let width = document.documentElement.clientWidth
  if (width < 768) {
    swiper.enable()
  }
  else {
    swiper.disable()
  }
});

let a = 3;
let down = document.getElementById('down');
let label = document.getElementById('text');

function showAll (){
  let width = document.body.clientWidth;
  if ((a % 2 == 1) && (width < 1120))  {
    console.log('1');
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'block';
    label.innerHTML = 'Скрыть все';
  }
  else if ((a % 2 == 0) && (width < 1120)) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'none';
    label.innerHTML = 'Показать все';
  }
  else if ((a % 2 == 1) && (width >= 1120)) {
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'block';
    label.innerHTML = 'Скрыть все';
  }
  else if ((a % 2 == 0) && (width >= 1120)) {
    document.querySelector('.swiper-slide:nth-child(9)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(10)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(11)').style.display = 'none';
    label.innerHTML = 'Показать все';
  }
  a++;
}

window.addEventListener('resize', (e) => {
  console.log(e);
  let width= document.body.clientWidth;
  console.log(width);
  if ((width >= 1120) && (document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none') && (document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none')) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block';
  }
  if ((a % 2 == 1) && (width < 1120) && (document.querySelector('.swiper-slide:nth-child(7)').style.display = 'block') && (document.querySelector('.swiper-slide:nth-child(8)').style.display = 'block')) {
    document.querySelector('.swiper-slide:nth-child(7)').style.display = 'none';
    document.querySelector('.swiper-slide:nth-child(8)').style.display = 'none';
  }
  if (width <= 320) {
    document.querySelector('.swiper-pagination').style.display = 'block';
  }
  if (width > 767) {
    document.querySelector('.swiper-pagination').style.display = 'none';
  }
});