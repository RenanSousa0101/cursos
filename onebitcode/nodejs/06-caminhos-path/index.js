const path = require("node:path");

// path.join(): Combina segmentos de caminho em um único caminho.
// path.resolve(): Resolve um caminho absoluto a partir de segmentos de caminho dados.
// path.basename(): Retorna o nome do arquivo ou diretório de um caminho.
// path.dirname(): Retorna o diretório pai de um caminho.
// path.extname(): Retorna a extensão do arquivo de um caminho.
// __dirname é uma variável global no Node.js que contém o caminho completo do diretório onde o arquivo atualmente em execução está localizado.

const dir = 'src'
const file = 'app.js'

const fullPath = path.join(__dirname, dir, file);
console.log(fullPath);

//Usando path.resolve() para obter um caminho absoluto:

const relativePath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(relativePath)
console.log(absolutePath)

//Usando path.basename() para obter o nome do arquivo:

const fileName = path.basename(relativePath)
console.log(fileName)

//Usando path.extname() para obter a extensão do arquivo:

const ext = path.extname(absolutePath)
console.log(ext)