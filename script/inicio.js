const addPeliLista = document.querySelector('#btnAddPeliALista')
const removePeliLista = document.querySelectorAll('.removePeliDeLista')
const numero = document.querySelector('#num')
let contador = 0

let lista = []

// addPeliLista.addEventListener('click', incrementar)

//EVENTOS DEL BOTON INCREMENTAR ===========================================================>
addPeliLista.addEventListener('click', () => {
    contador++
    numero.textContent = contador
    console.log('me diste un click')
})

//EVENTOS DEL BOTON DECREMENTAR ===========================================================>
// removePeliLista.addEventListener('click', () => {
//     contador--
//     numero.textContent = contador
//     console.log('me diste un click')
// })


// --otra manera---------------------------------------


// function incrementar() {
//     contador++
//     numero.textContent = contador
//     console.log('me diste un click')
// }