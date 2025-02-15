document.addEventListener('DOMContentLoaded', function () {
    // Elements to observe for intersection
    const elements = document.querySelectorAll('header, .hero, .objectives, .mission-buttons, .mission-content, .about-us, footer, .product');
    
    // IntersectionObserver to handle animations when elements come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after the first animation
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});

// Smooth scroll effect
document.documentElement.style.scrollBehavior = 'smooth';

// Function to show content based on section ID
function showContent(id) {
    const contents = document.querySelectorAll('.mission-content');
    contents.forEach(content => {
        content.classList.remove('highlight');
        content.style.display = 'none';
    });
    const activeContent = document.getElementById(id);
    activeContent.style.display = 'block';
    activeContent.classList.add('highlight');
}

// Function to highlight the active button
function showContentss(buttonId) {
    const buttons = document.querySelectorAll('.mission-buttons button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    const activeButton = document.getElementById(buttonId);
    activeButton.classList.add('active');
}

// Initialize default state when the window loads
window.onload = function() {
    showContent('passion');
    showContentss('p-b');
};
