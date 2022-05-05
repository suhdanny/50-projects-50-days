const labels = document.querySelectorAll('.form-control > label');

labels.forEach(label => {
    label.innerHTML = label.innerText // Ex. "Email"
    .split('') // ['E', 'm', 'a', 'i', 'l']
    .map((letter, index) => `<span style="transition-delay: ${index * 40}ms;">${letter}</span>`) // ['<span>E</span>', '<span>m</span>', '<span>a</span>', '<span>i</span>', '<span>l</span>']
    .join('') // joins them back into a string
})