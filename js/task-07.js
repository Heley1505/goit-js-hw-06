const inputRef = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputRef.addEventListener('input', changeOnMove);

function changeOnMove(event) {
    inputText.style.fontSize = event.currentTarget.value + "1px"
}