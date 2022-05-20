const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus() // when you reload the page, it automatically focuses the text area

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    // if you press enter, wait 10ms and clear the choices
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect();
    }
})

function createTags(input) {
    // split the input by comma, and trim() to remove any whitespace of each tag if the trimmed string is not empty
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30;

    // pick a random tag every 100ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        // highlight the chosen tag
        highlightTag(randomTag);

        // unhighlight the tag after 100ms
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100)
    }, 100);

    // interval goes on for times * 100ms then choose a random tag (runs 30 times since interval is 100ms for each pick)
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag'); // get all the tags as a node list
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}