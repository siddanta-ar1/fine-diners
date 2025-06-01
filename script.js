let currentIndex = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 5000);

// Filter menu
function filterMenu(category) {
    const images = document.querySelectorAll('.menu-img');
    images.forEach(img => {
        // Always reset display before applying filter
        img.style.display = 'inline-block';
    });
    if (category !== 'all') {
        images.forEach(img => {
            if (!img.classList.contains(category)) {
                img.style.display = 'none';
            }
        });
    }
}
