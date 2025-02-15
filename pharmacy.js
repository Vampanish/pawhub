document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category-item');
    let delay = 500; // 1 second delay

    categories.forEach((category, index) => {
        setTimeout(() => {
            category.classList.add('visible');
            category.classList.remove('hidden');
        }, delay * (index + 1));
    });
});
