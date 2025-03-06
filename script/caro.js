const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

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

document
  .querySelector('a[href="#projects-sect"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#projects-sect").scrollIntoView({
      behavior: "smooth",
    });
  });
