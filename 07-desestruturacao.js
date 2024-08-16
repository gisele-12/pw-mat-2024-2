/*
Desestruturação é a operacao pela qual é possivel extrair valores de vetores e objetos, atribuindo-os a variaveis avulsos */

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = [`Fusca`, `Chevete`, `opala`]

//Desestruturacao
const [carro1, carro2, carro3] = carros

/* Fazendo o mesmo sem desestruturação 

const carro1 = carros[0]
const carro2 = carros[1]
const carro3 = carros[3]
*/

console.log({carro1, carro2, carro3})

//Desestruturação parcial: 1º e 2º valores
const [a1, a2] = carros
console.log({a1, a2})

//Desestruturação parcial: 1º e 3º valores
const [b1, b3] = carros
console.log({b1, b3})

//Desestruturação parcial: 2º e 3º valores
const [, c2, c3] = carros
console.log({c2, c3})

/*****************************************/
console.log(`-`.repeat(80))

//PROBLEMA: TROCA DE VALORES DE VALORES DE VARIAVEIS ENTRE SI: SWAP
let x = 10, y = 20
console.log({x,y});

//modo classico de fazer swap (usando variavel auxiliar)
// le aux = x
//x = y
// y = aux

//USando desestruturacao para fazer swap
[x,y] = [y,x];

console.log({x,y})

/********************************************************************/

//Traço separador
console.log(`-`, repeat(80))

// 2 ) DESESTRUTURAÇÃO DE OBJETOS
const pessoa = {
    nome: `Orkutilson Orozimbo Osorio`,
    sexo: `M`,
    dataNasc: `2010-04-29`,
    email: `Orkutilson@gmail.com`
}

/* Na desestruturação de objetos, as variaveis avulsas:
~> DEVEM ter o  MESMO NOME das propriedades do objeto
~> Podem ser especificadas em qualquer ordem
~> Pode ser feita a desestruturação parcial
*/
const {sexo, nome, email} = pessoa
console.log({nome, sexo, email})
