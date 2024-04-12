function hourlyRate(radio) {
    var hourlyRate = document.getElementById('hourlyRate');
    if (radio.value === 'Hiring') {
        hourlyRate.classList.remove('hidden');
    } else {
        hourlyRate.classList.add('hidden');
    }
}