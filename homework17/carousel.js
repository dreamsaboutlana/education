'use strict';
let imgArr = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];

const creatSlider = (arr, name) => {

  let body = document.body;
  let main = document.createElement('main');

  const createSlides = (arr, name) => {

      let emptyString = `<ul class ="${name}">`;

      arr.forEach((elem, index) => {
        emptyString += `<li><img src="${elem}" alt="${index}"><span class='numberText'>${index+1}/${arr.length}</span></li>`;
      });

      emptyString += '</ul>';

      return emptyString;
    }

  main.innerHTML = createSlides(arr, name);

  body.appendChild(main);
  
  main.insertAdjacentHTML('beforeend', '<button class="left" onclick="plusSlides(-1)"><=</button><button class="right" onclick="plusSlides(1)">=></button>');

}

creatSlider(imgArr, 'carousel');


let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {

  let i;
  let slides = document.querySelectorAll('ul li');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slides[slideIndex - 1].style.opacity = 1;
}
