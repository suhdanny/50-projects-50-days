const headers = document.querySelectorAll("h1");

headers.forEach(header => {
    header.onmouseover = event => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((_, index) => {
                    if (index <= iterations) return event.target.dataset.value[index];
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2;
        }, 30);
    };
});
