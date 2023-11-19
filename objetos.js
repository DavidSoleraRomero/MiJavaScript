var persona3 = new Object({
    nombre: 'Jhon',
    edad: 30,
    saludar: function() {
        console.log('Hola ' + this.nombre); }
});

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log('Hola ' + this.nombre); }
}
var persona2 = new Persona('Jhon', 30);

var persona1 = {
    nombre: 'Jhon',
    edad: 30,
    saludar: function() {
        console.log('Hola ' + this.nombre); }
}

console.log(persona1.edad);
persona2.saludar();
console.log(persona3.nombre);

/* Juego fuerza jugador */
/* Creamos la "clase" Jugador */
function Jugador() {
    this.fuerza = 1;
    this.incrementarFuerza = function() {
        this.fuerza += 1;
    }
    this.consultarFuerza = function() {
        console.log('Tienes ' + this.fuerza + ' de fuerza');
    }
}

/* Creamos el objeto jugador1 */
var jugador1 = new Jugador();
/* Consultamos su fuerza */
jugador1.consultarFuerza();
/* Incrementamos su fuerza */
jugador1.incrementarFuerza();
/* Consultamos su fuerza de nuevo */
jugador1.consultarFuerza();
