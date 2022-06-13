document.addEventListener('click', (e) => {
    // returns true if user clicks one of the drop down buttons
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    // if not a drop down button AND not inside a dropdown menu, do nothing
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;
    
    let currentDropDown;
    if (isDropdownButton) {
        currentDropDown = e.target.closest('[data-dropdown]'); // the current dropdown user has opened
        currentDropDown.classList.toggle('active');
    }

    // close the other dropdown menus that are open, except the one user clicked just now
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown == currentDropDown) return
        dropdown.classList.remove('active');
    })
})