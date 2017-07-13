'use strict';
let imgArr = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];

const creatSlider = (arr, name) => {

  let body = document.body;
  let main = document.createElement('main');

  const createSlides = (arr, name) => {

    let emptyString = `<ul id ="${name}">`;

    arr.forEach((elem, index) => {
      emptyString += `<li><img src="${elem}" alt="${index}"><span class='numberText'>${index+1}/${arr.length}</span></li>`;
    });

    emptyString += '</ul>';

    return emptyString;
  }

  main.innerHTML = createSlides(arr, name);

  body.appendChild(main);

  main.insertAdjacentHTML('beforeend', '<button class="left"><=</button><button class="right">=></button>');
  // main.insertAdjacentHTML('beforeend', '<button class="left" onclick="plusSlides(-1)"><=</button><button class="right" onclick="plusSlides(1)">=></button>');

}

creatSlider(imgArr, 'carousel');


// let slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// classical slider start

// function showSlides(n) {

//   let i;
//   let slides = document.querySelectorAll('ul li');

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   slides[slideIndex - 1].style.opacity = 1;
// }
// classical slider end


// slider with transition3d start
function showSlides() {
  let slides = document.querySelectorAll('ul li').length;
  let now = 0;
  let sliderOffset = [];

  for (let i = 0; i < slides; i++) {
    sliderOffset.push(-i * 748 + 'px')
  };
  console.log(sliderOffset);

  document.querySelector('.left').onclick = function() {
    --now;
    if (now < 0) now = slides - 1;
    document.getElementById('carousel').style.transform = `translate3d(${sliderOffset[now]}, 0px, 0px)`;
    document.getElementById('carousel').style.transition = `transform 0.6s ease-in-out`;
    // document.getElementById('carousel').style.left = sliderOffset[now];
  }

  document.querySelector('.right').onclick = function() {
    ++now;
    if (now > slides - 1) now = 0;
    document.getElementById('carousel').style.transform = `translate3d(${sliderOffset[now]}, 0px, 0px)`;
    document.getElementById('carousel').style.transition = `transform 0.6s ease-in-out`;
    // document.getElementById('carousel').style.left = sliderOffset[now];
  }
}
showSlides();
// slider with transition3d end
