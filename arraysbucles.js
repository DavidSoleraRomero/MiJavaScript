var person1 = ['Jhon', 30, true];

var person2 = new Array(3);
person2[0] = 'Juan';
person2[1] = 25;
person2[2] = false;

var person3 = new Array('Alba', 18, true);

var colores = new Array("verde", "rojo", "azul", "amarillo", "blanco");
console.log(colores);
console.log(colores[0]);
console.log(colores[3]);
console.log(colores[1]);

colores.push("negro");
console.log(colores);

for (var i = 0; i < colores.length; i+=1) {
    console.log("A mí me gusta el color " + colores[i])
}