const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    spanEl.textContent = event.currentTarget.value;
    if (inputEl.value === "") spanEl.textContent = "Anonymous";
};