let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100; // Move the slides based on index
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial call to display the first slide
showSlide(currentIndex);
