function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

inputRef.addEventListener('input', onInputChange);
destroyBtn.addEventListener('blur', destroyBoxes)

function createBoxes(amount);
function destroyBoxes(event) {
  event.currentTarget
}
