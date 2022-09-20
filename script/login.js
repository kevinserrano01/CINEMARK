import {userInfo} from "./classes.js";

let signUpUser = document.querySelector("#signUpUser");
let signUpPass = document.querySelector("#signUpPass");
let signInUser = document.querySelector("#signInUser");
let signInPass = document.querySelector("#signInPass");
let signInButton = document.querySelector("#signInButton");
let signUpButton = document.querySelector("#signUpButton");
const alerta1 = document.querySelector('#alerta1')
const alerta2 = document.querySelector('#alerta2')
const alerta3 = document.querySelector('#alerta3')
let inSession = false;
let sessionKey;

signUpButton.addEventListener("click", signUp);
signInButton.addEventListener("click", signIn);


function signUp() { //REGISTRARSE
    if (signUpUser.value == "" || signUpPass.value == "") {
        alerta2.innerHTML = 'Necesitas completar todos los campos para poder registrarse'
    } else {
        let userExists = false;

        for (let i = 0; i < localStorage.length; i++)
        if (signUpUser.value == localStorage.key(i)) userExists = true;

        if (userExists) {
            alerta2.innerHTML = 'Este nombre de usuario ya se encuentra registrado'
        } else {
            let usuario = new userInfo(signUpUser.value, signUpPass.value);
            localStorage.setItem(signUpUser.value, JSON.stringify(usuario));
            alerta2.innerHTML = ''
            alerta3.innerHTML = 'Cuenta registrada, Ahora inicia sesion y disfruta de las peliculas!'
        }
    }
}

function signIn() { // INICIAR SESION
    if (signInUser.value == "" || signInPass.value == "") {
        alerta1.innerHTML = 'Necesitas completar todos los campos para poder iniciar sesion'
    } else {
        let userExists = false;
        for (let i = 0; i < localStorage.length; i++)
        if (signInUser.value == localStorage.key(i)) {
            userExists = true;
            sessionKey = i;
        }

        if (!userExists) {
            alerta1.innerHTML = 'El usuario no existe, registrate primero.'
        } else {
            let user = JSON.parse(localStorage.getItem(signInUser.value));
            if (signInPass.value == user.userPass) {
                inSession = true;
                // incorporation of sweet alert 2 library
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `¡Bienvenido, ${signInUser.value}!`,
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.replace('./pages/inicio.html')
            } else {
                alerta1.innerHTML = 'Contraseña incorrecta!'
            }
        }
    }
}

// funcion para Verificar primero si ya hay un usuario creado que lo redireccione a la pagina principal directamente. Sino que le pida que cree el usuario primero.
function verificarUsuario() {
    if (inSession = true) {
        window.location.replace('./pages/inicio.html')
    }
}

// verificarUsuario();

// localStorage
// const nuevoPersonaje = JSON.stringify(nuevoPer) // De objeto a Cadena de texto
// localStorage.setItem('NuevoPersonaje', nuevoPersonaje) // => Guarda en (key): NuevoPersonaje y en (value):nuevoPersonaje que es un string
// const personajeEnElLocalStorage = localStorage.getItem('nuevoPersonaje') // => agarramos ese nuevoPersonaje para luego convertirno en un OBjeto de js
// const nuevoPJParseado = JSON.parse(personajeEnElLocalStorage) // => paseamos ese string en Objeto con sus propiedades