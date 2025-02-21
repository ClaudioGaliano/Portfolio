/*
let currentSlide = 0;
const slide = document.getElementById("carouselSlide");
const items = document.querySelectorAll(".carousel-item");
const totalSlides = items.length;
const slideWidth = items[0].offsetWidth + 10; // 10px gap

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slide.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 3000); // Cambia immagine ogni 3 secondi
}

// Raddoppia le immagini per evitare spazi bianchi alla fine
for (let i = 0; i < totalSlides; i++) {
  slide.appendChild(items[i].cloneNode(true));
}
*/
