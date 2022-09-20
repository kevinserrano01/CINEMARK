// Class --------------------------------------------------------------------------------------------------->
class PeliculaSoloEnCine {
    constructor(nombre, genero, duracion, descripcion) {
        this.nombre = nombre
        this.genero = genero
        this.duracion = duracion
        this.descripcion = descripcion
    }
}

class Cine {
    constructor(nombre, direccion) {
        this.nombre = nombre
        this.direccion = direccion
    }
}

class Pelicula {
    constructor(nombre, genero, duracion, descripcion) {
        // this.id = id -> preguntar
        this.nombre = nombre
        this.genero = genero
        this.duracion = duracion
        this.descripcion = descripcion
    }
}

// clase userInfo para Login
class userInfo {
    constructor(userName, userPass) {
    this.userName = userName;
    this.userPass = userPass;
    }
}

export { PeliculaSoloEnCine, Cine, Pelicula, userInfo }