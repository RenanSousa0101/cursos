import fs from "node:fs";
function createFile(content) {
    const exists = fs.existsSync('../../public/arquivo.txt');
    if (!exists) {
        fs.writeFile("../../public/arquivo.txt", content, "utf-8", (error) => {
            if (error) {
                console.log("Erro ao escrever o arquivo: ", error.message);
                return;
            }
            console.log("Arquivo criado com sucesso!");
        });
    }
    else {
        console.log('O arquivo já existe!');
    }
}
export default createFile;
