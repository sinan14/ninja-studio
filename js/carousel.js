document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-item');
  let currentSlideIndex = 0;

  function addActive(slide) {
    slide.classList.add('active');
  }

  function removeActive(slide) {
    slide.classList.remove('active');
  }

  function showSlide(slideIndex) {
    slides.forEach(removeActive);
    addActive(slides[slideIndex]);
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  showSlide(currentSlideIndex);
  setInterval(nextSlide, 4000); // Adjust interval as needed (4000ms = 4 seconds)
});
