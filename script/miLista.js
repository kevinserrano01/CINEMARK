// constantes
const pelicula1 = document.querySelector('#pelicula1');

// Object
const Venon = {
    nombre: 'Venon',
    duracion: '140 min',
    genero: 'Accion',
}

const { nombre, duracion, genero } = Venon // DESESTRUCTURACION DEL OBJETO

pelicula1.innerHTML = `Pelicula: ${nombre} con ${duracion} de duracion y su genero de ${genero} se agrego a tu lista!`;