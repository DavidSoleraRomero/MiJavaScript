var date = new Date();

console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1; /* +1 porque Enero empieza en 0, Febrero en 1, etc. */
var day = date.getDay();
var time = date.getTime();

console.log('Hola, hoy es ' + day + ' del mes ' + month + ' del año ' + year + ', y la hora es ' + time);