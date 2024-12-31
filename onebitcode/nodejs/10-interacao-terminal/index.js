/*
A forma mais simples de criar interações de entrada e saída no terminal é 
utilizando os objetos stdin e stdout disponíveis através da variável 
global process. Essas são as entradas e saídas padrão, que nesse caso 
estão diretamente conectadas ao terminal:

Obs.: repare que stdin e stdout são, respectivamente, streams de leitura e escrita.
*/

process.stdout.write("Olá, mundo!\\n")

process.stdin.on("data", (data) => {
    process.stdout.write(`Você digitou: ${data}`)
})

/*
No entanto, o Node.js fornece um módulo nativo que serve para facilitar a criação 
de interações de leitura/escrita, ou pergunta/resposta, o módulo readline. Com 
ele podemos criar uma interface que possui input e output, e então usá-las 
para diversas funcionalidades:

Obs.: repare que precisamos conectar a stdin e a stdout na hora da criação da 
interface “readline”, mas poderíamos usar outras ReadableStream e WriteableStream.

*/

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (input) => {
    rl.write(`Você digitou: "${input}"`)
})

/*
Um método muito útil disponível na interface “readline” é o de fazer uma pergunta, 
o método question():
*/

rl.question("Qual é o seu nome? ", (answer) => {
    rl.write(`Olá, ${answer}!\\n`)
})

/*
Por fim, podemos customizar o comportamento de saída dos nossos programas no 
terminal através do evento “close”:
*/

rl.question("Qual é o seu nome? ", (answer) => {
    rl.write(`Olá, ${answer}!\\n`)
    rl.close()
})

rl.on("close", () => {
    rl.write("Saindo...")
        // repare que ao adicionar um listener para "close" precisaremos
      // encerrar o processo atual manualmente ou ele ficará "pendurado"
        process.exit(0)
})

/*
E ainda é possível usar outros eventos para criar interações mais avançadas, 
como o “SIGINT”, o famoso “Ctrl + C”, que interrompe a execução:
*/

rl.on('SIGINT', () => {
        rl.question('Deseja realmente sair? (s/n) ', (resposta) => {
        if (resposta.trim().toLowerCase() === 's') {
            rl.close()
        } else {
            rl.write("Você escolheu continuar.")
        }
        })
})