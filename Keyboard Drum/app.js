window.addEventListener('keydown', function (event) {
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    const keyP = document.querySelector(`.key[data-key= "${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    keyP.classList.add('addd');
});


window.addEventListener('keyup', function (e) {
    const keyP = document.querySelector(`.key[data-key= "${event.keyCode}"]`);

    keyP.classList.remove('addd')
})