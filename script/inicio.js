// constantes
const usuario = document.querySelector('#usuario');
const addPeliLista = document.querySelector('#btnAddPeliALista');
const removePeliLista = document.querySelector('.removePeliDeLista'); // boton de seccion "mi lista" para eliminar una pelicula de mi lista
const numero = document.querySelector('#num');
const numero2 = document.querySelector('#num2');
const parrafo = document.querySelector('#parrafo')
let contador = localStorage.getItem('guardados');
let seleccionDePeliculas = document.querySelector('#peliculasAGuardar') // select
let peliculasGuardadas = document.querySelector('#peliculasGuardadas')

// class
class Pelicula {
    constructor(nombre, genero, duracion, descripcion) {
        // this.id = id -> preguntar
        this.nombre = nombre
        this.genero = genero
        this.duracion = duracion
        this.descripcion = descripcion
    }
}

// Objetos instanciados de la clase Pelicula
const batman = new Pelicula("Batman", "Accion", "1h 25 min", "Descripcion...");
const Harley_Quinn = new Pelicula("Harley Quinn", "Accion", "2h 18 min", "Después de ser arrojada a la calle por Joker, Harley lucha por levantarse.");
const Infinity_War = new Pelicula('Infinity War', 'Accion', '2h 29 min', 'Descripcion')
const Iron_Man = new Pelicula('Iron Man', 'Accion', '1h 48 min', 'descripcion');
const dragon_Ball_Super = new Pelicula('Dragon Ball Super', 'Anime', '2h 10 min', 'Descripcion...');
const Dragon_Ball_GT = new Pelicula('Dragon Ball GT', 'Anime', '1h 30 min', 'Descripcion...');
const Titanic = new Pelicula('Titanic', 'Romance', '1h 53 min', 'Descripcion...');
const Minions = new Pelicula('Minions', 'Romance', '1h 45 min', 'Descripcion...');
const Suicide_Squad = new Pelicula('Suicide Squad', 'Romance', '1h 49 min', 'Descripcion...');
const Dead_Pool = new Pelicula('Dead Pool', 'Romance', '1h 50 min', 'Descripcion...');
const It = new Pelicula('It (Eso)', 'Romance', '1h 53 min', 'Descripcion...');
const Frozen = new Pelicula('Frozen: El reino del hielo', 'Romance', '1h 51 min', 'Descripcion...');
const Transformers = new Pelicula('Transformers: La era de la extinción', 'Romance', '1h 53 min', 'Descripcion...');
const X_Men = new Pelicula('X-Men: Origin Wolverine', 'Accion', '1h 53 min', 'Descripcion...');
const Wall_E = new Pelicula('Wall E', 'Romance', '1h 53 min', 'Descripcion...');
const Harry_Potter = new Pelicula('Harry Potter', 'suspenso', '1h 43 min', 'Descripcion...');
const Avengers = new Pelicula('Avengers: End Game', 'Sci-Fi', '1h 57 min', 'Descripcion...');
const basalagunask = new Pelicula('Basalagunask', 'Romance', '1h 45 min', 'Descripcion...');
const Monsters = new Pelicula('Monsters University', 'Romance', '1h 23 min', 'Descripcion...');
const Viaje_de_Arlo = new Pelicula('El Viaje de Arlo', 'Romance', '1h 59 min', 'Descripcion...');
const Shrek = new Pelicula('Shrek', 'Animado', '1h 23 min', 'Descripcion...');

// ARRAY DE OBJETOS DONDE ALMACENO MIS PELICULAS ==================>
let peliculasAll = [batman, Harley_Quinn, Infinity_War, Iron_Man, dragon_Ball_Super, Dragon_Ball_GT, Titanic, Minions, Suicide_Squad, Dead_Pool, It, Frozen, Transformers, X_Men, Wall_E, Harry_Potter, Avengers, basalagunask, Monsters, Viaje_de_Arlo, Shrek]

// ARRAY DE OBJETOS DONDE ALMACENO LAS PELICULAS ELEGIDAS POR EL USUARIO ==================>
let peliculasGuardadasEnListaPorUsuario = [] // Aqui se almacenan las peliculas seleccionadas para guardar por el usuario

// spread del array en un objeto
const guardados = {
    ...peliculasGuardadasEnListaPorUsuario
}


// Events ===========================================================>
addPeliLista.addEventListener('click', incrementar)


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