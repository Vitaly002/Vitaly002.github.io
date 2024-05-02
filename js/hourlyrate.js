// Hourly rate function
function hourlyRate(radio) {
    var hourlyRate = document.getElementById('hourlyRate');
    if (radio.value === 'Hiring') {
        hourlyRate.classList.remove('hidden');
    } else {
        hourlyRate.classList.add('hidden');
    }
}

// Arrow to the top function
window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('backToTop');
    var header = document.getElementById('header');

    // Check if the scroll position is beyond the header section
    if (window.scrollY > header.offsetHeight) {
        backToTop.style.display = 'block'; // Show the arrow
    } else {
        backToTop.style.display = 'none'; // Hide the arrow
    }
});

document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
