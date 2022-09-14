let signUpUser = document.querySelector("#signUpUser");
let signUpPass = document.querySelector("#signUpPass");
let signInUser = document.querySelector("#signInUser");
let signInPass = document.querySelector("#signInPass");
let signInButton = document.querySelector("#signInButton");
let signUpButton = document.querySelector("#signUpButton");
let inSession = false;
let sessionKey;

signUpButton.addEventListener("click", signUp);
signInButton.addEventListener("click", signIn);

class userInfo {
    constructor(userName, userPass) {
    this.userName = userName;
    this.userPass = userPass;
    }
}

function signUp() { //REGISTRARSE
    if (signUpUser.value == "" || signUpPass.value == "") {
        alert("Necesitas completar todos los campos para poder registrarse");
    } else {
        let userExists = false;

        for (let i = 0; i < localStorage.length; i++)
        if (signUpUser.value == localStorage.key(i)) userExists = true;

        if (userExists) {
            alert("Este nombre de usuario ya se encuentra registrado:(");
        } else {
            let usuario = new userInfo(signUpUser.value, signUpPass.value);
            localStorage.setItem(signUpUser.value, JSON.stringify(usuario));
            alert("Cuenta registrada, Ahora inicia sesion y disfruta de las peliculas!");
        }
    }
}

function signIn() { // INICIAR SESION
    if (signInUser.value == "" || signInPass.value == "") {
        alert("Necesitas completar todos los campos para poder iniciar sesion");
    } else {
        let userExists = false;
        for (let i = 0; i < localStorage.length; i++)
        if (signInUser.value == localStorage.key(i)) {
            userExists = true;
            sessionKey = i;
        }

        if (!userExists) {
            alert("Parece que este usuario no existe:(");
        } else {
            let user = JSON.parse(localStorage.getItem(signInUser.value));
            if (signInPass.value == user.userPass) {
                inSession = true;
                alert(`¡Bienvenido, ${signInUser.value}!`);
                window.location = './pages/inicio.html'
            } else {
                alert("Contraseña incorrecta!");
            }
        }
    }
}

// localStorage
// const nuevoPersonaje = JSON.stringify(nuevoPer)
// localStorage.setItem('NuevoPersonaje', nuevoPersonaje)
// const personajeEnElLocalStorage = localStorage.getItem('nuevoPersonaje')
// const nuevoPJParseado = JSON.parse(personajeEnElLocalStorage)