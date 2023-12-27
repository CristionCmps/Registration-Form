const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const register = document.getElementById("register");

const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const erroFirstName = document.getElementById("erroFirstName");
const erroLastName = document.getElementById("erroLastName");
const erroEmail = document.getElementById("erroEmail");
const erroPassword = document.getElementById("erroPassword");

register.addEventListener("click", () => {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const passwordValue = password.value;
    const emailValue = email.value;

    if (firstNameValue == "") {
        erroFirstName.classList.remove("dnone");
        firstName.classList.add('inputError');
    } else {
        erroFirstName.classList.add("dnone");
        firstName.classList.remove('inputError')
    }

    if (lastNameValue == "") {
        erroLastName.classList.remove("dnone");
        lastName.classList.add('inputError');
    } else {
        erroLastName.classList.add("dnone");
        lastName.classList.remove('inputError')
    }

    //email

    if (!emailRegex.test(emailValue)) {
        erroEmail.classList.remove("dnone");
        email.classList.add('inputError');
    } else {
        erroEmail.classList.add("dnone");
        email.classList.remove("inputError");
    }

    //password
    if (!passwordRegex.test(passwordValue)) {
        erroPassword.classList.remove("dnone");
        password.classList.add('inputError');
    } else {
        erroPassword.classList.add("dnone");
        password.classList.remove("inputError");
    }
})