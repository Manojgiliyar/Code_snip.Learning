// script.js
let btn = document.querySelector('.speak_btn');
btn.onclick = () => {
    let txt = document.querySelector('.enter_text').value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'kn-IN';
    speech.text = txt;
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
};
