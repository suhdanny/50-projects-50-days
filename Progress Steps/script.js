const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // index for currently active step

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        // idx goes from 0 to 3
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    //grab all the active circles
    const actives = document.querySelectorAll('.active');

    // progress bar width goes 1/3, 2/3, and 100%
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%';

    // disable or enable prev or next buttons
    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}