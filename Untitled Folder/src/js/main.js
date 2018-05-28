var sliderItems = document.querySelectorAll(".hero-slider-item")
;

const sliderItemsAmount = sliderItems.length - 1;
let currentSlide = 0;

setInterval(fadeSlider, 3000);

function fadeSlider () {
  sliderItems[currentSlide].classList.toggle("active")

  if (currentSlide == sliderItemsAmount) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  sliderItems[currentSlide].classList.toggle("active")
}

const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-button")
const closeModalButton = document.querySelector(".close")

loginButton.addEventListener("mousedown", showModal)
closeModalButton.addEventListener("mousedown", hideModal)

function showModal () {
  document.querySelector("body").classList.add("modal-visible")
}

function hideModal () {
  document.querySelector("body").classList.remove("modal-visible")
}