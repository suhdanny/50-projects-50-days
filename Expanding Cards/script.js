const panels = document.querySelectorAll('.panel'); // Puts all of the panels into a node list

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass(); /* Remove all active class from the panel*/
        panel.classList.add('active'); 
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}