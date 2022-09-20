import { Cine, PeliculaSoloEnCine, Pelicula } from "./classes.js";

// Page inicio =======================================================================================================================================>
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
// const guardados = {
//     ...peliculasGuardadasEnListaPorUsuario
// }


// Page SoloEnCine ===========================================================================================================>
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
// const { dia1, dia2, dia3, dia4 } = dias;
// const {hora1, hora2, hora3} = horarios;
// const { p1, p2, p3, p4, p5 } = peliculasSoloEnCines

// spread del array en un objeto
// const diasHabilitados = {
//     ...dias
// }



export { peliculasSoloEnCines, cines, dias, horarios, peliculasAll, peliculasGuardadasEnListaPorUsuario }