const decrementBtn = document.querySelector('[decrement]');
const valueRef = document.querySelector('#value');
const incrementBtn = document.querySelector('[increment]');

decrementBtn.addEventListener('click', onDecrementClic);
incrementBtn.addEventListener('click', onIncrementClic);