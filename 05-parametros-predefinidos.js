//alguns dados de um usuario
const fullname = `Jonicleisson Junqueira Junior`
const username = `Junin`
const group = `Aluno`

/* CRIANDO UM OBJETO A PARTIR DAS VARIAVEIS ACIMA
Note que o nome das propriedades(a esquerda) coincide com o nome das variaveis(a direita)
*/
// const user = {
//     fullname: fullname,
//     username = username,
//     group: group  }

/*Criando um objeto equivalente ao comentadop acima, usando propriedades abreviadas. Quando o nome é necessaria a repetição
*/
const user = {
    fullname,
    username,
    group
}

console.log(user)

//Um objeto pode misturar propriedades abreviadas e nao abreviadas
const userInfo = {
    fullname,
    username,
    password: `todo pederoso123`,
    group,
    last_login: `2024-08-14 17:47:03`
}
console.log(userInfo)

/* DEPURAÇÃO USANDO PROPRIEDADES ABREVIADAS
*/

const x = 10, y = `batata`

/* 
Exibindo o valor de suas variaveis com console.log().
Observe que os valores sao mostrados, mas a saida nao informa de qais variaveis provem os valores.
*/
console.log(x,y)

/* Saida melhorada: passando um objeto formado pelas variaveis como propriedades abreviadas para console.log(), conseguimos saber de onde vem os valores*/

console.log({x,y})