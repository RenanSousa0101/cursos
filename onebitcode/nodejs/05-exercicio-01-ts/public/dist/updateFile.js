import fs from "node:fs";
function updateFile(content) {
    const exists = fs.existsSync('../../public/arquivo.txt');
    if (exists) {
        fs.writeFile("../../public/arquivo.txt", content, "utf-8", (error) => {
            if (error) {
                console.log("Erro ao escrever o arquivo: ", error.message);
                return;
            }
            console.log("Arquivo modificado com sucesso!");
        });
    }
    else {
        console.log("O arquivo não existe!");
    }
}
export default updateFile;
