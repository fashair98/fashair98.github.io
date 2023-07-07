let sliderTime = 2900;

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const mobileBRs = document.getElementsByClassName('mb-br');

for (let i = 0; i < mobileBRs.length; i++) {
  if (window.innerWidth <= 999) {
    mobileBRs[i].innerHTML = '<br>';
  }
}


const mediaWidth = window.innerWidth;

console.log("mediaWidth = " + mediaWidth);

let currentPosition = 0;
let slideWidth = slider.clientWidth;
if (mediaWidth >= 1000) slideWidth = slideWidth/3;
const totalSlides = slider.children.length;
// const totalSlides = 3;

let intervalId = setInterval(nextSlide, sliderTime);

function goToSlide(position) {
  currentPosition = position;
  slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
}

function nextSlide() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, sliderTime);
  if (currentPosition < totalSlides - 1) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  goToSlide(currentPosition);
}

function prevSlide() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, sliderTime);
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = totalSlides - 1;
  }
  goToSlide(currentPosition);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-rotate the slider every 5 seconds

