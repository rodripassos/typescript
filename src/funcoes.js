"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
//com arrow function
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
// conseguimos retornar tipos diferentes como resultado
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
