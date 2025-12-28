const botao = document.querySelector('.play')
const audio = document.getElementById('theme')
let fadeTime;

function fadeIn(audio, volumeMax = 0.2){
    clearInterval(fadeTime);

    audio.volume = 0;
    audio.play();

    let v = 0;
    fadeTime = setInterval(() => {
        v += 0.02;
        audio.volume = v;

        if (v >= volumeMax){
            clearInterval(fadeTime);
        }
    
        }, 80);
}

audio.loop = true
botao.addEventListener('click', () => {
    if (audio.paused) {
        fadeIn(audio);
        botao.classList.add('play2');
    } else{
        audio.pause()
        botao.classList.remove('play2')}
});