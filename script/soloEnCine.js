import { peliculasSoloEnCines, cines, dias, horarios } from "./instances.js"

// incorporation toastify =====>
const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

// constantes ----------------------------------------------------------------------------------------------->
const seleccionPelicula = document.querySelector('#seleccionPelicula')
const seleccionCine = document.querySelector('#seleccionCine')
const seleccionDia = document.querySelector('#seleccionDia')
const seleccionHorario = document.querySelector('#seleccionHorario')
const btnComprarEntrada = document.querySelector('#btnComprarEntrada')
const resumenCompra = document.querySelector('#resumenCompra')
const aviso = document.querySelector('#aviso')
const btnCerrarCuenta = document.querySelector('#btnCerrarCuenta')

// eventos ----------------------------------------------------------------------------------------------->
btnComprarEntrada.addEventListener('click', comprarEntrada)
// btnCerrarCuenta.addEventListener('click', cerrarSesion)

// FUNCIONES ----------------------------------------------------------------------------------------------->
// function cerrarSesion() {
//     let usuario = localStorage.getItem('Kevin Serrano')
//     localStorage.removeItem(usuario);
//     window.location.replace('../index.html')
//     console.log(usuario)

//     // CONSULTAR
// }

function MostrarPeliculas() {
    peliculasSoloEnCines.forEach( 
            (el) =>
            (seleccionPelicula.innerHTML += `<option value="${el?.nombre}">${el?.nombre}</option>` || 'Pelicula no disponible') // Acceso condicional a un objeto
        );
}

MostrarPeliculas()

function MostrarCines() {
    cines.forEach( 
            (el) =>
            (seleccionCine.innerHTML += `<option value="${el.nombre}">${el.nombre}</option>`)
        );
}

MostrarCines()

function MostrarDias() {
    dias.forEach( 
            (element) =>
            (seleccionDia.innerHTML += `<option value="${element}">${element}</option>`)
        );
}

MostrarDias()

function MostrarHorarios() {
    horarios.forEach( 
            (element) =>
            (seleccionHorario.innerHTML += `<option value="${element}">${element}</option>`)
        );
}

MostrarHorarios()

function comprarEntrada() {
    let peliculaSeleccionada = seleccionPelicula.value
    let cineSeleccionado = seleccionCine.value
    let diaSeleccionado = seleccionDia.value
    let horarioSeleccionado = seleccionHorario.value

    if ((peliculaSeleccionada != "Seleccione una Pelicula...") && (cineSeleccionado != "Seleccione un Cine...") && (diaSeleccionado != "Seleccione un dia...") && (horarioSeleccionado != "Horario...")) {

        swalWithBootstrapButtons.fire({
            title: 'Confirma su compra?',
            text: `TU SELECCION: ${peliculaSeleccionada} - ${cineSeleccionado} - ${diaSeleccionado} ${horarioSeleccionado} hrs.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                'Listo!',
                `Gracias por su compra. Te esperamos el ${diaSeleccionado} a las ${horarioSeleccionado} hrs.`,
                'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                'Compra cancelada',
                'Lo sentimos. Te esperamos en otra ocasion!',
                'error'
                )
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa Todos los datos para poder comprar la entrada por favor.'
        })
    }
}

// una variable constante para que luego de crear la primera cuenta no se cambie el nombre
function modalCuenta() {
    const usuario1 = localStorage.key(1);
    usuario.innerHTML = `Hola ${usuario1}!`
}
modalCuenta()


export { MostrarPeliculas, MostrarCines, MostrarDias, MostrarHorarios, comprarEntrada, modalCuenta }