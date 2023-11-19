var pi = Math.PI;

console.log(pi);

console.log(Math.min(1,2,9,3,4,5,-3));
console.log(Math.max(1,2,9,3,4,5,-3));

console.log(Math.round(4.5));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));

var aleatorio = Math.random(); 

function numeroAleatorio(num) {
    return Math.round(Math.random() * (num));
}
var miNumero = numeroAleatorio(10);
console.log(miNumero);