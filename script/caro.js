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

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        if (entry.target.classList.contains("count-up")) {
          animateCountUp(entry.target);
        }
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

  function animateCountUp(element) {
    let start = 0;
    const end = parseInt(element.getAttribute("data-end"));
    const duration = 2000;
    const increment = end / (duration / 60);

    function updateCount() {
      start += increment;
      if (start >= end) {
        element.textContent = end;
        if (element.classList.contains("percent")) {
          element.textContent += "%";
        }
      } else {
        element.textContent = Math.floor(start);
        if (element.classList.contains("percent")) {
          element.textContent += "%";
        }
        requestAnimationFrame(updateCount);
      }
    }

    requestAnimationFrame(updateCount);
  }
});
