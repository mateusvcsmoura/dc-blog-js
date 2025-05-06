export function isLogged() {
    const loginStateDiv = document.querySelector('#loginState');

    if (window.sessionStorage.getItem("isLogged")) {
        loginStateDiv.innerHTML = "<img src='https://i.pravatar.cc/40' alt='Profile' class='profile-pic' />";
    }
}