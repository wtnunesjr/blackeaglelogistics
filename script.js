// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', { delay: 300, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.about-content', { delay: 300, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.service-card', { delay: 300, distance: '50px', origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.contact form', { delay: 300, distance: '50px', origin: 'bottom' });

// Music Controls
const backgroundMusic = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeSlider = document.getElementById('volume-slider');

// Play/Pause Button
playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        backgroundMusic.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Volume Slider
volumeSlider.addEventListener('input', () => {
    backgroundMusic.volume = volumeSlider.value;
});

// Remove the global click event listener for autoplay
// document.addEventListener('click', () => {
//     if (backgroundMusic.paused) {
//         backgroundMusic.play();
//         playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
//     }
// });

// Track Load Form
const trackingForm = document.getElementById('tracking-form');
const trackingResult = document.getElementById('tracking-result');

trackingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const trackingNumber = document.getElementById('tracking-number').value;

    // Simulate tracking result (replace with actual API call in a real scenario)
    if (trackingNumber.trim() === "") {
        trackingResult.textContent = "Please enter a valid tracking number.";
    } else {
        trackingResult.textContent = `Tracking number ${trackingNumber}: Your load is in transit.`;
    }
});