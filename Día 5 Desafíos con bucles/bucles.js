//Imprimir impares 1-20
for(let num = 1; num <= 20; num++) {
    if(num % 2 !== 0) {
        console.log(num);
    }
}

//Disminuir múltiplos de 3
for(let multiplo = 100; multiplo >= 0; multiplo--) {
    if(multiplo % 3 === 0) {
        console.log(multiplo);
    }
}

//Imprime la secuencia
let secuencia = 5.5;

for(let numEntero = 5.5; numEntero >= 0; numEntero--) {
    secuencia = secuencia - 1.5;
    console.log(secuencia);
}

//Sigma
let sum = 0;
let sumando = 1;

while(sumando <= 100) {
    sum += sumando;
    sumando++;
}
console.log(sum);

//Factorial
let producto = 1;

for(let valor = 1; valor <= 12; valor++) {
    producto = producto * valor;
}
console.log(producto);