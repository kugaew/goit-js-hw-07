const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitFormData);

function onSubmitFormData(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены');
        return;
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);
    formEl.reset();
}
