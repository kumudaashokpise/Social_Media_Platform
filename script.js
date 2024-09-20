function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX) {
        console.log("Swiped left!");
    }
    if (touchEndX > touchStartX) {
        console.log("Swiped right!");
    }
}


function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; 
    } else {
        darkModeToggle.textContent = '🌙'; 
    }
}
