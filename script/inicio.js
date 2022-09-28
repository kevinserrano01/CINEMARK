import { peliculasAll, peliculasGuardadasEnListaPorUsuario } from "./instances.js";

// constantes
const usuario = document.querySelector('#usuario');
const addPeliLista = document.querySelector('#btnAddPeliALista');
const vaciarLista = document.querySelector('#btnVaciarLista')
// const removePeliLista = document.querySelector('.removePeliDeLista'); // boton de seccion "mi lista" para eliminar una pelicula de mi lista
const numero = document.querySelector('#num');
const numero2 = document.querySelector('#num2');
const parrafo = document.querySelector('#parrafo')
let contador = localStorage.getItem('guardados');
let seleccionDePeliculas = document.querySelector('#peliculasAGuardar') // select
let peliculasGuardadas = document.querySelector('#peliculasGuardadas')


// Events ===========================================================>
addPeliLista.addEventListener('click', incrementar)
vaciarLista.addEventListener('click', () => {
    peliculasGuardadas.innerHTML = '';
})


// FUNCIONES ================================================================================================================>

// Agregar Peliculas pre generadas a lista en DOM
function agregarPeliculasAlDom() {
    peliculasAll.forEach( 
        (el) =>
        (seleccionDePeliculas.innerHTML += `<option value="${el.nombre}">${el.nombre}</option>`)
    );
}

agregarPeliculasAlDom();


// haciendo click al boton esta funcion se activa e incrementa el contador del Navbar y a la vez muestra 
function incrementar() {
    let peliculasGuardadasEnListaPorUsuario = []
    if (seleccionDePeliculas.value == 'Selecciona una Pelicula para agregar a tu lista...') {
        Swal.fire('Ingrese una Pelicula para guardar')
    } else {
        contador++
        numero.textContent = contador
        localStorage.setItem('guardados', contador)
        peliculasGuardadasEnListaPorUsuario.push(seleccionDePeliculas.value)

        // Mostrar las peliculas que se guardaron por el usuario
        peliculasGuardadasEnListaPorUsuario.forEach((element) => {
            peliculasGuardadasEnListaPorUsuario = []
            peliculasGuardadas.innerHTML += `<li>${element}</li>`
        });
        parrafo.innerHTML=''

        // incorporation of toastify library
        Toastify({
            text: `${seleccionDePeliculas.value} Guardada en tu lista!`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00CCFE, #007F9F)",
            }
        }).showToast();
    }
}

// una variable constante para que luego de crear la primera cuenta no se cambie el nombre
function modalCuenta() {
    const usuario1 = localStorage.key(1);
    usuario.innerHTML = `Hola ${usuario1}!`
}
modalCuenta()

// Operador Logico AND que verifica si la lista esta vacia muestra ese mensaje
function verificarLista() {
    peliculasGuardadasEnListaPorUsuario.length === 0 && (parrafo.innerHTML='Lista vacía...')
}

verificarLista()


// function decrementar() {
//     contador++
//     numero.textContent = contador
//     localStorage.setItem('guardados', contador)
//     console.log('me diste un click  decrementar')
// }


export { agregarPeliculasAlDom, incrementar, modalCuenta, verificarLista }