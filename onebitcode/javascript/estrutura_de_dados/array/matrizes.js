
// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr2 = [
    "1º Nível",
    ["2º nível", 42, true],
    [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

  // Cada par de colchetes referencia um nível mais interno do array
console.log(arr2[0])       // Saída: '1º Nível'
console.log(arr2[1])       // Saída: [ '2º nível', 42, true ]
console.log(arr2[1][0])    // Saída: '2º nível'
console.log(arr2[1][1])    // Saída: 42
console.log(arr2[2])       // Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr2[2][0])    // Saída: [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr2[2][1][1]) // Saída: 'Oi, mundo!'

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz)

  matriz.push(["Nova linha"])
  matriz[0].push("Nova coluna")

  // Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }