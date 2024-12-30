import { createFile, deleteFile, showFile, updateFile } from "./functions.mjs"

createFile("Conteúdo inicial do arquivo\\nCriado com o módulo fs do Node.js")
showFile()
console.log("--------------")
updateFile("Conteúdo modificado...")
showFile()
console.log("--------------")
deleteFile()