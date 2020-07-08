const msg = new SpeechSynthesisUtterance();
const textt = document.querySelector('[name="text"]')
const pitch = document.querySelector('#pitch')
const speackButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

function toggle(val = true) {
    speechSynthesis.cancel();
    msg.text = textt.value;
    if (val) {
        speechSynthesis.speak(msg);
    }
}

function setOptions() {
    msg[this.name] = this.value;
    toggle();
}

pitch.addEventListener('change', setOptions);

speackButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => {
    toggle(false)
});