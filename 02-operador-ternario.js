let media = 8.3, resultado

if(media >=6) {
    resultado = 'APROVADO'
}
else {
    resultado = 'REPROVADO'
}

console.log(media, '=>', resultado)

//Usando operador ternario
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(media, '=>', resultado)
