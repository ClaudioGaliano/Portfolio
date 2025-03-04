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
  // Ripulisci il session storage al caricamento della pagina
  sessionStorage.clear();

  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        // Verifica se l'animazione è già stata eseguita
        if (!sessionStorage.getItem(`animazioneEseguita-${id}`)) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
          sessionStorage.setItem(`animazioneEseguita-${id}`, "true");

          if (entry.target.classList.contains("count-up")) {
            animateCountUp(entry.target);
          }
        }
      }
    });
  });

  // Aggiorna la visualizzazione iniziale degli elementi
  elements.forEach((el) => {
    const id = el.id;
    if (sessionStorage.getItem(`animazioneEseguita-${id}`)) {
      el.classList.add("show");
      el.classList.remove("hidden");
    } else {
      observer.observe(el);
    }
  });

  function animateCountUp(element) {
    let start = 0;
    const end = parseInt(element.getAttribute("data-end"));
    const duration = 8000;
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
