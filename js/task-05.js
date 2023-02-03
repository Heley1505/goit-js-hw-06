const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    outputRef.textContent = event.currentTarget.value ===""? "Anonymous":  event.currentTarget.value;
}