const divEl = document.querySelector('#counter');
const btnDecrement = document.querySelector('[data-action = "decrement"]');
const valueEl = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

btnIncrement.addEventListener('click', handleIncrementButtonClick);

function handleIncrementButtonClick(event) {
   valueEl.textContent = counterValue += 1;
}

btnDecrement.addEventListener('click', handleDecrementButtonClick);

function handleDecrementButtonClick(event) {
    valueEl.textContent = counterValue -= 1;
}
const maxNumber = Number.NEGATIVE_INFINITY;
console.log(maxNumber);