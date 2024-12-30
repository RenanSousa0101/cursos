import fs from "node:fs"

export function createFile(text) {
    fs.writeFile("meuarquivo.txt", text, (error) => {
        if (error) {
        console.log("Erro ao escrever arquivo: ", error.message)
        }
    })
}

export function showFile() {
    fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
        if (error) {
        console.log("Erro ao ler arquivo: ", error.message)
        } else {
        console.log(text)
        }
    })
}

export function updateFile(newText) {
    fs.writeFile("meuarquivo.txt", newText, (error) => {
        if (error) {
        console.log("Erro ao modificar arquivo: ", error.message)
        }
    })
}

export function deleteFile() {
    fs.unlink("meuarquivo.txt", (error) => {
        if (error) {
        console.log("Erro ao excluir o arquivo: ", error.message)
        } else {
        console.log("Arquivo excluído com sucesso!")
        }
    })
}
