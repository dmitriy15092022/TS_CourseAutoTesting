const login1: any = "login";
const password1: any = "password";

const signIn = {
    login: `${login1}`,
    password: `${password1}`,
};

const template = {
    login: "login",
    password: "password",
};

JSON.stringify(signIn) === JSON.stringify(template)
    ? console.log("Добро пожаловать")
    : console.log("В доступе отказано");
