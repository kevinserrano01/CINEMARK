// Botones para agregar pelicula a mi lista
const addPeliLista = document.querySelector('#btnAddPeliALista');
const removePeliLista = document.querySelector('.removePeliDeLista'); // boton de seccion "mi lista" para eliminar una pelicula de mi lista
const numero = document.querySelector('#num');
const numero2 = document.querySelector('#num2');
let contador = localStorage.getItem('guardados');

let peliculasAGuardar = document.querySelector('#peliculasAGuardar') // select
let peliculasGuardadas = document.querySelector('#peliculasGuardadas')

class Pelicula {
    constructor(nombre, genero, duracion, descripcion) {
        // this.id = id -> preguntar
        this.nombre = nombre
        this.genero = genero
        this.duracion = duracion
        this.descripcion = descripcion
    }
}

const batman = new Pelicula("Batman", "Accion", "1h 25 min", "Lorem, ipsum dolor sit amet consectetur itatibus sed voluptate reprehenderit.");
const Harley_Quinn = new Pelicula("Harley Quinn", "Accion", "2h 18 min", "Después de ser arrojada a la calle por Joker, Harley lucha por levantarse.");
const Infinity_War = new Pelicula('Infinity War', 'Accion', '2h 29 min', 'Lorem, ipsum dolor sit amet consectetur itatibus sed voluptate reprehenderit. Asdasdwas')
const Iron_Man = new Pelicula('Iron Man', 'Accion', '1h 48 min', 'descripcionnnnnnnnnnnnnnnnnnnnnnnnnn');
const dragon_Ball_Super = new Pelicula('Dragon Ball Super', 'Anime', '2h 10 min', 'Descripcion...');
const Dragon_Ball_GT = new Pelicula('Dragon Ball GT', 'Anime', '1h 30 min', 'Descripcion...');
const Titanic = new Pelicula('Titanic', 'Romance', '1h 53 min', 'Descripcion...');

// ARRAY DE OBJETOS DONDE ALMACENO MIS PELICULAS ==================>
let peliculasAll = [batman, Harley_Quinn, Infinity_War, Iron_Man, dragon_Ball_Super, Dragon_Ball_GT, Titanic]
// =================================================================>
// ARRAY DE OBJETOS DONDE ALMACENO LAS PELICULAS ELEGIDAS POR EL USUARIO ==================>
let peliculasGuardadasEnListaPorUsuario = [batman, Harley_Quinn, Infinity_War, Iron_Man, dragon_Ball_Super]
// =================================================================>

// Agregar Peliculas pre generadas a lista en DOM
function agregarAlDom() {
    peliculasAll.forEach( 
        (el) =>
        (peliculasAGuardar.innerHTML += `<option value="${el.nombre}">${el.nombre}</option>`)
    );
}

agregarAlDom();

// Mostrar las peliculas que se guardaron por el usuario
function MostrarListaDePeliculas() {
    peliculasGuardadasEnListaPorUsuario.forEach(
        (el) =>
        (peliculasGuardadas.innerHTML += `<option value="${el.nombre}">${el.nombre}</option>`)
    );
}

MostrarListaDePeliculas()


// Events ===========================================================>
addPeliLista.addEventListener('click', incrementar)


// FUNCIONES =========================================================>
function incrementar() {
    contador++
    numero.textContent = contador
    localStorage.setItem('guardados', contador)
    peliculasAGuardar.innerHTML += `<option selected>Selecciona una Pelicula para agregar a tu lista...</option>`
    // alert('Pelicula guardada en tu Lista')
    // console.log('me diste un click incrementar')
}
function mostrarNumeroDePeliculasGuardadas() {
    numero.textContent = localStorage.getItem('guardados') // actualizar la pagina sin que se borre el numero del contador
}

mostrarNumeroDePeliculasGuardadas()

// function decrementar() {
//     contador++
//     numero.textContent = contador
//     localStorage.setItem('guardados', contador)
//     console.log('me diste un click  decrementar')
// }










// localStorage
// const nuevoPJJSON = JSON.stringify(nuevoPJ);
// localStorage.setItem("NuevoPersonaje", nuevoPJJSON);
// const personajeEnLocalStorage = localStorage.getItem("NuevoPersonaje");
// const NuevoPJParseado = JSON.parse(personajeEnLocalStorage);