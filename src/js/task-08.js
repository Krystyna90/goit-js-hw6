const form = document.querySelector('.login-form');
const passwordEl = document.querySelector('.password');
const emailEl = document.querySelector('.email');
const loginEl = document.querySelector('button');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;
    if (email === '' || password === '') alert('FullFill all inputs, please');
    else {
    const formData = { email, password };
        console.log(formData); 
       form.reset();
    };   
};
