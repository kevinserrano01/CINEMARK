// incorporation toastify =====>
const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

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

// Instancias de la clase Cine ---------------------------------------------------------------------------------------------->
const hoyts = new Cine('Hoyts', 'Salta, Sarmiento 502');
const cinemark = new Cine('Cinemark', 'Buenos Aires, suviria 112');

// Intancias de la clase PeliculaSoloEnCine -------------------------------------------------------------------------------------->
const invitacion_al_inifierno = new PeliculaSoloEnCine("Invitacion al inifierno", "Terror", "130 min", "descripcion...");
const thor = new PeliculaSoloEnCine("Thor amor y trueno", "Aventuras", "125 min", "descripcion...");
const Dragon_Ball_Super_Heroe = new PeliculaSoloEnCine('Dragon Ball Super Heroe', 'Terror, Suspenso', '120 min', 'descripcion...')
const telefono_negro = new PeliculaSoloEnCine('Telefono Negro', 'Terror, Suspenso', '120 min', 'descripcion...')
const el_paraiso = new PeliculaSoloEnCine('El Paraiso', 'Terror, Suspenso', '123 min', 'descripcion...')

// array de Objetos ----------------------------------------------------------------------------------------------->
const peliculasSoloEnCines = [invitacion_al_inifierno, thor, Dragon_Ball_Super_Heroe, telefono_negro, el_paraiso]
const cines = [hoyts, cinemark]

// Array de dias y horarios
const dias = ['Lunes', 'Miercoles', 'Viernes', 'Domingo']
const horarios = ['14:30', '17:15', '20:45']

// Desestructuracion de arrays
const { dia1, dia2, dia3, dia4 } = dias;
const {hora1, hora2, hora3} = horarios;
const { p1, p2, p3, p4, p5 } = peliculasSoloEnCines

// spread del array en un objeto
const diasHabilitados = {
    ...dias
}

console.log(diasHabilitados)

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
    peliculaSeleccionada = seleccionPelicula.value
    cineSeleccionado = seleccionCine.value
    diaSeleccionado = seleccionDia.value
    horarioSeleccionado = seleccionHorario.value

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