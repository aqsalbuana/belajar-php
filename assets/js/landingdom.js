const carouselContainer = document.querySelector(".carousel-container");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentSlideIndex = 0;

function showSlide(slideIndex) {
  for (const slide of carouselSlides) {
    slide.style.display = "none";
  }
  carouselSlides[slideIndex].style.display = "block";
}

function showNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= carouselSlides.length) {
    currentSlideIndex = carouselSlides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function showPrevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

showSlide(currentSlideIndex);

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);
