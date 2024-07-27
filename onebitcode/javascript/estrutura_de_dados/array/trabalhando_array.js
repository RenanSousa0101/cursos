const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
// Adicionar Elementos 
// push -> adiciona no final do array
// o push também retorna o tamanho do array depois de adicionar o elemento
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift -> adiciona no inicio do array
// o push também retorna o tamanho do array depois de adicionar o elemento
tamanho = arr.unshift("Amor")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop -> remove o último elemento
// o pop também retorna o elemento retirado
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover Elemento
// shift -> remove o primeiro elemento do array
// o shift também retorna o elemento retirado
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um Elemento
// includes -> pesquisa se um elemento está dentro do array
// o includes retorna true ou false
const inclui = arr.includes("Gandalf")
console.log(inclui)

// Pesquisar por um index
// indexOf -> pesquisa pelo nome do elemento
// o indexOf retorna a posição(index) do elemento no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar 
// slice retorns os elementos da posição de 0 a 3
const hobbits = arr.slice(0, 4)
// pega os elementos da posiçao final do array
const reverso = arr.slice(-4)
console.log(arr)
console.log(reverso)

// concat --> concatena os novos elementos ao array
const sociedade = hobbits.concat(reverso, "Boromir")
console.log(sociedade)

// substituição dos Elementos
// splice -> serve para remover um grupo de elementos do array ou substituir esse grupo por outros elementos.
// Ele retorna uma lista de elementos removidos
// lembre-se ele modificara todas as outras arrays " valor e Referência"
const elementosRemovidos = sociedade.splice(indice, 1, "Goku")
console.log(sociedade)
console.log(elementosRemovidos)

// Interar sobre os Elementos 
//mostra a posição de todos os elemento no array
for (let indice = 0; indice < sociedade.length; indice++){
        const elemento = sociedade[indice]
        console.log(elemento + " se encontra na posição "+ indice)
}

/* O método split() em JavaScript é usado para dividir uma string em um array de substrings com base em um delimitador especificado. 
O método toma o delimitador como argumento e retorna um array contendo as partes da string original que foram divididas pelo delimitador. 
Aqui está a sintaxe básica do método split():

string.split(delimitador, limite)

string: A string original que você deseja dividir.
delimitador: O caractere ou expressão regular que será usado como critério para dividir a string. Este é um parâmetro obrigatório.
limite (opcional): Um número inteiro que determina o número máximo de elementos no array resultante. Se você não especificar esse parâmetro, a string será dividida em todas as ocorrências do delimitador.
Aqui está um exemplo simples de como usar o método split():

const frase = "Isso é uma frase de exemplo";
const palavras = frase.split(" ");
console.log(palavras);

Neste exemplo, a string frase é dividida em um array de palavras com base no espaço em branco como delimitador, 
e o resultado é armazenado na variável palavras. O array resultante contém as palavras individuais da frase:

["Isso", "é", "uma", "frase", "de", "exemplo"]

Você também pode usar expressões regulares como delimitadores para realizar divisões mais complexas. Por exemplo:

const data = "2023-09-05";
const partesData = data.split(/-/);
console.log(partesData);

Neste caso, a string data é dividida usando uma expressão regular que corresponde ao caractere de hífen ("-"). 
O resultado é um array contendo as partes da data:

["2023", "09", "05"]

O método split() é útil em muitas situações, como quando você precisa processar dados CSV, 
dividir URLs em partes ou realizar tarefas de análise de texto.


*/