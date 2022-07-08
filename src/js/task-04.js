const divEl = document.querySelector('#counter');
const btnDecrement = divEl.children[0];
const valueEl = divEl.children[1];
const btnIncrement = divEl.children[2];

let counterValue = Number(valueEl.textContent);

btnIncrement.addEventListener('click', handleIncrementButtonClick);

function handleIncrementButtonClick(event) {
   valueEl.textContent = counterValue += 1;
}

btnDecrement.addEventListener('click', handleDecrementButtonClick);

function handleDecrementButtonClick(event) {
    valueEl.textContent = counterValue -= 1;
}
