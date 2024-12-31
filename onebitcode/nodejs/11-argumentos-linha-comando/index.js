/*
Podemos usar argumentos de linha de comando para tornar nossos scripts mais dinâmicos. 
Eles funcionam como argumentos de uma função, porém são informados no próprio comando 
de execução. Para executar esse script usaremos o comando node script.js arg1 arg2 arg3:
*/ 

const args = process.argv.slice(2)
console.log('Argumentos informados:', args)

/*
Também podemos usar argumentos nomeados iniciados com -- como é comum em comandos do terminal. 
Para executar usamos o comando node script.js --name isaac --job developer:
*/

const namedArguments = {}

process.argv.slice(2).forEach((arg, index, array) => {
    if (arg.startsWith("--")) {
        const argName = arg.slice(2)
        const argValue = array[index + 1]
        namedArguments[argName] = argValue
    }
})

console.log("Argumentos Informados: ")
console.log(namedArguments)

/*
Através dos argumentos podemos permitir que o script tenha um comportamento diferente 
a cada execução, como os próprios comandos de terminal que utilizamos, 
como node, npm, npx, cd, mkdir, etc. Também é muito útil para automatizações, 
já que assim o script não depende de uma entrada manual do usuário.
*/