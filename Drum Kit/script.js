window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); /* Selects the audio corresponding to the pressed key */
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); /* Selects the key corresponding to the pressed key*/
    key.classList.toggle("playing"); /* Adds class "playing" to key */
    audio.currentTime = 0; /* Rewind the audio to the start */
    audio.play();
})

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName == "transform") {
        e.target.classList.remove("playing");
    }
}