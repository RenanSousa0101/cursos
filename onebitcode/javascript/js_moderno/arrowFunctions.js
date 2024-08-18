//função normal
function normalSum(a, b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

//função anônima
const anonymousSum = function (a, b){
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

//arrow functions
const arrowSum = (a, b) =>{
    return a + b
}
console.log(`Soma arrow function: ${arrowSum(2, 2)}`)
//arrow function em apenas uma linha
const subtract = (a, b) => a - b
console.log(`subtração: ${subtract(5, 2)}`)

//quando vc tem apenas um parametro não precisa colocar os parênteses 
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))

//momentos em que as arrow functions são muito utilizadas:
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
//vai procurar as cidades que começam com a letra P
const startingWithP = towns.filter(town => town[0] === 'P')
//town[0] primeira letra da palavra
console.log(startingWithP)