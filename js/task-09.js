const refs = {
  colorSpan: document.querySelector('.color'),
  colorBtn: document.querySelector('.change-color'),
};
refs.colorBtn.addEventListener('click', onColorButtonClick);

function onColorButtonClick() {
  const colorOfBody = document.body.style.backgroundColor = getRandomHexColor();
  refs.colorSpan.textContent = colorOfBody;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
