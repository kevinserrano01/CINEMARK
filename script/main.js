const btnAgregarPelicula = document.querySelector('#btnAddPeliEnLista')
let miLista = []

function addPeliEnLista() {
    let pelicula = 'Batman'
    miLista.push(pelicula)
}

btnAgregarPelicula.addEventListener('click', alert('agregado'))


// console.log(miLista)