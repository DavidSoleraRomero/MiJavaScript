/* 1. Mostrar números pares del 0 - 12 */
/* 2. Sumar números del 0 - 12 */
var array1 = new Array(13);
var suma = 0;
for (var i = 0; i < array1.length; i+=1) {
    array1[i] = (i);
    if ((i) % 2 == 0) {
        console.log((i));
    }
    suma = suma + array1[i];
}
console.log("El total es " + suma);