console.log(`Area triangulo 10x30: ${calcArea(10,30, `T`)}`)
console.log(`Area elipse (Circulo) 7,5x7,5: ${calcArea(7.5, 7.5, `E`)}`)
console.log(`Area retangulo 8x15  ${calcArea(8,15, `R`)}`)
console.log(`Area forma invalida 12x18: ${calcArea(12,18, `W`)}`)

//chamada a funcao usando apenas dois parametros.
//como o terceiro parametro é definido com o valor de `R, a funcao entenderá que devera fazer o calculo de area para um retangulo
console.log(`Area retangulo 7x16: ${calcArea(7,16)}`)

/* 
REGRAS PARA O USO DE PARAMETROS PREDEFINIDOS
1) o parametro pedefinido deve vir sempre POR ULTIMO na lista d parametros
2) Pode haver mais de um parametro predefinido, mas eles devem ser sempre OS ULTIMOS NA LISTA de parametros
