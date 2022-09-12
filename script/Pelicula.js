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