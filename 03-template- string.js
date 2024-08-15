const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro alto de cima - MG'

//mesclando strings com variaveis usando concatenção
console.log(´Meu nome é´ + nome + ' , tenho ' + idade + ' anos e moro em ' + cidade + '.')

//Mesclando strings e variaveis com template string
//String tempaltes são obrigatoriamente delimitadas por ' ' (acentos graves)
console.log(´Meu nome é ${nome}, tenho ${idade} anos e moro em $(cidade}.')

//Dentro de ma template string, nao estamos limitados a usar apenas variaveis dentro do simbolo ${}. na verdade, qualqur codigo JS salido pode ser usado ali
console.log(´Daqui 7 anos, $ {nome}.toUpperCase()} terá $ {idade + 7} ANOS.´)