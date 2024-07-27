//objetos em javascript são como structs em C
let nome = "propriedade"
//Criando um objeto/struct
let objeto = {}
//Criando uma propriedade dentro de objeto e atribuindo um valor a ela:
objeto.propriedade = "Olá, mundo"
//É possível referênciar propriedades de maneira dinâmica em um objeto:
// com uma variável:
objeto[nome]
//É possível fazer comparações:
objeto.propriedade === objeto["propriedade"] 
// usando uma variável:
objeto.propriedade === objeto[nome] 
// usando expressões:
objeto.propriedade === objeto["propr" + "iedade"]

// É possível referência uma função do javascript:
let funcao = "log"
console[funcao]("Olá, mundo!")

//Criando um objeto pessoa:
const pessoa = {}
//Criando propriedades dentro do objeto pessoa
pessoa.nome = "Renan"
pessoa.idade = 22
//Criando um array dentro do objeto pessoa:
pessoa.colegas = ["David", "Igor", "Paulo"]

// É possível criar um objeto dentro de outro objeto:
// E também podemos criar propriedades no mesmo momento da criação do objeto:
pessoa.endereco = {
    rua: "Rua Afonso Pena",
    numero: 67,
    bairro: "Maria Auxiliadora"
}
