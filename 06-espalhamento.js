//Encontrando o maior e o menor numero em uma serie
let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo})

// e se estes numeros estiverem em um vetor?
const nums = [2, -7, 8, 4, 0]

minimo = Math.min(nums)
maximo = Math.max(nums)

console.log ({minimo, maximo})

/***************************************************************************/

const carro1 = {
    modelo: `Fiorino`,
    marca: `Fiat`,
    ano: 1984,
    cor: `bege`
}

//"copiando" carro1 para carro 2
const carro2 = carro1

//Mudando o valor das propriedades de carro2
carro2.modelo + `Fusca`
carro2.marca + `Volkswagen`
carro2.cor + `Preto`
carro2.ano + 1969

//Exibindo ambos os carro
console.log({carro1, carro2})

//PROBLEMA: JUNTAR DOIS OU MAIS VETORES EM UM TERCEIRO VETOR

const frutas = [`maça`, `banana`, `laranja`]
const verduras = [`alface`, `couve`, `rucula`]

//Juntando os dois vetores usando JS "classico" (anterior a 2015)
// const hortifruti = frutas.concat(verduras)

// Usando espalhamento para unir vetores
const hortifruti = [...frutas, ...verduras]

console.log(hrtifruti)

/********************************************************************/
//PROBLEMA: escrever uma função que recebe um numero arbitrario de parametros

function soma(...nums) {
    //nums é recebido dentro da funcao como vetor 
    //
}

