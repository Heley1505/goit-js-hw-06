const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email === "" || password === "") {
        alert('All fields are required!')
    } else {
        const formData = {
            email,
            password,
        }
        console.log(formData);
        event.currentTarget.reset();
    };

};

