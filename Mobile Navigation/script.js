const lists = document.querySelectorAll('.list');

function activeLink() {
    lists.forEach(list => {
        list.classList.remove('active');
        this.classList.add('active');
    })
}

lists.forEach(list => {
    list.addEventListener('click', activeLink);
})