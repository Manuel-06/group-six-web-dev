// Slider functionality for completed buildings
let completedSliderIndex = 0;
const completedSlides = document.querySelectorAll('.completed-slide');
let completedInterval;

function showCompletedSlide(index) {
    const offset = -index * 100;
    completedSlides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function startCompletedInterval() {
    completedInterval = setInterval(() => {
        nextCompletedSlide();
    }, 6000);
}

function nextCompletedSlide() {
    clearInterval(completedInterval);
    completedSliderIndex = (completedSliderIndex + 1) % completedSlides.length;
    showCompletedSlide(completedSliderIndex);
    startCompletedInterval();
}

function prevCompletedSlide() {
    clearInterval(completedInterval);
    completedSliderIndex = (completedSliderIndex - 1 + completedSlides.length) % completedSlides.length;
    showCompletedSlide(completedSliderIndex);
    startCompletedInterval();
}

// Slider functionality for uncompleted buildings
let uncompletedSliderIndex = 0;
const uncompletedSlides = document.querySelectorAll('.uncompleted-slide');
let uncompletedInterval;

function showUncompletedSlide(index) {
    const offset = -index * 100;
    uncompletedSlides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function startUncompletedInterval() {
    uncompletedInterval = setInterval(() => {
        nextUncompletedSlide();
    }, 6000);
}

function nextUncompletedSlide() {
    clearInterval(uncompletedInterval);
    uncompletedSliderIndex = (uncompletedSliderIndex + 1) % uncompletedSlides.length;
    showUncompletedSlide(uncompletedSliderIndex);
    startUncompletedInterval();
}

function prevUncompletedSlide() {
    clearInterval(uncompletedInterval);
    uncompletedSliderIndex = (uncompletedSliderIndex - 1 + uncompletedSlides.length) % uncompletedSlides.length;
    showUncompletedSlide(uncompletedSliderIndex);
    startUncompletedInterval();
}

// Initialize sliders and other functionality
document.addEventListener('DOMContentLoaded', () => {
    showCompletedSlide(0);
    showUncompletedSlide(0);
    startCompletedInterval();
    startUncompletedInterval();

    // Smooth scroll to contact section
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle search functionality
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a search term');
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        if (!data.name || !data.email || !data.message) {
            alert('Please fill out all fields');
            return;
        }

        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});
