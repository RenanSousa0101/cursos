
//um arry de objetos: 
//Para utilizar nos exemplos: 
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


//MAP:
// Forma tradicional (funcionamento): 
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }
// alert(nomes)


//Forma utilizando a função:
// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
    return personagem.nome
  })

//FILTER:
//Forma Tradicional (funcionamento):

//   const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem)
//   }
// }

//Forma utilizando a função:
// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
  })

//REDUCE:
//Forma Tradicional (funcionamento):
// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }

//Forma utilizando a função:
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel
}, 0)

//Outra forma que pode ser utilizada:
const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
    } else {
    acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})


//SORT
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// Ele já modifica o array diretamente
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
  })

//Caso não queira que modifique o array
// ele vai salvar a lista ordenada  em outro array
const personagensOerdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
  })