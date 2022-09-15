class Pelicula {
    constructor(nombre, genero, duracion, descripcion) {
        this.nombre = nombre
        this.genero = genero
        this.duracion = duracion
        this.descripcion = descripcion
    }
}

const batman = new Pelicula("Batman", "Accion", "1h 25 min", "Lorem, ipsum dolor sit amet consectetur itatibus sed voluptate reprehenderit.");
const Harley_Quinn = new Pelicula("Harley Quinn", "Accion", "2h 18 min", "Después de ser arrojada a la calle por Joker, Harley lucha por levantarse.");
const Infinity_War = new Pelicula('Infinity War', 'Accion', '2h 29 min', 'Lorem, ipsum dolor sit amet consectetur itatibus sed voluptate reprehenderit. Asdasdwas')




// conversion a JSON de Instancia 'Batman' desde clase  Pelicula
const pelicula1 = JSON.stringify(batman)
localStorage.setItem('Batman', pelicula1);
const peliculaEnElLocalStorage = localStorage.getItem('Batman')
const peliculaParseada = JSON.parse(peliculaEnElLocalStorage)
// console.log(peliculaParseada)







// localStorage
// const nuevoPersonaje = JSON.stringify(nuevoPer)
// localStorage.setItem('NuevoPersonaje', nuevoPersonaje)
// const personajeEnElLocalStorage = localStorage.getItem('nuevoPersonaje')
// const nuevoPJParseado = JSON.parse(personajeEnElLocalStorage)