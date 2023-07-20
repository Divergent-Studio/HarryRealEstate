// script.js

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const carouselSlide = document.querySelector(".carousel-slide");
const carouselLinks = document.querySelectorAll(".carousel-link");
const carouselTexts = document.querySelectorAll(".carousel-text");

const numLinks = carouselLinks.length;
var imageWidth = carouselSlide.clientWidth / numLinks;

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + numLinks) % numLinks;
  updateCarousel();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % numLinks;
  updateCarousel();
});

// Event listeners for clicking on the boxes
carouselLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    currentIndex = index; // Update currentIndex when clicking on tabs
    updateCarousel();
  });
});

window.addEventListener("resize", () => {
  imageWidth = carouselSlide.clientWidth / numLinks;
  carouselLinks.forEach((link, index) => {
    link.classList.remove("current");
    carouselTexts[index].classList.remove("current");
  });

  carouselLinks[currentIndex].classList.add("current");
  carouselTexts[currentIndex].classList.add("current");

  const slidePosition = -currentIndex * imageWidth;
  carouselSlide.style.transition = "transform 0s ease-in-out";
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
});
// Initialize the carousel
let currentIndex = 0;
updateCarousel();

function updateCarousel() {
  carouselLinks.forEach((link, index) => {
    link.classList.remove("current");
    carouselTexts[index].classList.remove("current");
  });

  carouselLinks[currentIndex].classList.add("current");
  carouselTexts[currentIndex].classList.add("current");

  const slidePosition = -currentIndex * imageWidth;
  carouselSlide.style.transition = "transform 0.3s ease-in-out";
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
}
