const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

// find trigger point for the animation
function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5 * 4); // trigger point (little less than the height of viewport)

    boxes.forEach(box => {
        // method provides information about the size of an element and its position relative to the viewport
        const boxTop = box.getBoundingClientRect().top;

        // if the top of the box is less than the trigger point
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}