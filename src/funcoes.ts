function calculaArea(base: number, altura: number): number {
    return base * altura;
}

//com arrow function
const calculaArea2 = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros)
}

// conseguimos retornar tipos diferentes como resultado
function teste(): string | number {
    if(10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()