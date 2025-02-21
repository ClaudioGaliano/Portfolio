/*
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carouselInner = document.querySelector(".carousel-inner");
let currentIndex = 0;

prev.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 2;
  updateCarousel();
});

next.addEventListener("click", () => {
  currentIndex = currentIndex < 2 ? currentIndex + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
*/

/*
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carouselInner = document.querySelector(".carousel-inner");
const totalItems = document.querySelectorAll(".carousel-item").length;
let currentIndex = 0;

prev.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
  updateCarousel();
});

next.addEventListener("click", () => {
  currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
*/

/*
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNext() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
}

function showPrev() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add("active");
}
*/
