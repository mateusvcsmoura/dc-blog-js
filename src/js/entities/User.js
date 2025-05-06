class User {
    #password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.#password = password;
    }
}

export { User };