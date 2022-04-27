const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
    search.classList.toggle('active'); // add or remove class active
    input.focus(); //focus on the input (search bar)
})