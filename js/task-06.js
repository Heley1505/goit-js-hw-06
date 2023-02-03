const inputRef = document.querySelector('#validation-input');
const lengthRef = Number(inputRef.getAttribute('data-length'));
// console.log(typeof(lengthRef));

inputRef.addEventListener('blur', onFocusStat);

function onFocusStat(event) {
    if (Number(event.currentTarget.value.length) === lengthRef){
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
    return;
}
