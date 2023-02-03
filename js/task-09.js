function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');


btnRef.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const currentColor = bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = currentColor;
}