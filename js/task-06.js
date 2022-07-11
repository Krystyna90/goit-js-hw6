let inputStyle = document.querySelector('#validation-input');

let inputLength = Number(inputStyle.dataset.length);

const inputEl = document.querySelector('input');
inputStyle.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === inputLength) {
    inputStyle.classList.add('valid');
    inputStyle.classList.remove('invalid');
  } else {
    inputStyle.classList.remove('valid');
    inputStyle.classList.add('invalid');
  }
});