const synth = window.speechSynthesis;
const content = document.querySelector("button");

function play(){
    const utterThis = new SpeechSynthesisUtterance(content.textContent);
    utterThis.lang="en-GB";
    synth.speak(utterThis);
}