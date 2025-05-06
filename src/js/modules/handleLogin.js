import { User } from '../entities/User.js';

export function loginHandler(ev) {
    ev.preventDefault();

    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if (username.value === "" || email.value === "" || password.value === "") {
        window.alert("fill all the fields to log in.");
    } else {
        window.alert("successfully logged in.");
        window.sessionStorage.setItem('isLogged', true);

        const newUser = new User(username.value, email.value, password.value);

        window.sessionStorage.setItem('userData', JSON.stringify(newUser));

        return window.location.href = "./index.html";
    }

}
