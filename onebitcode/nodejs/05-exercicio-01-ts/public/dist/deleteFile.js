import fs from "node:fs";
function deleteFile() {
    fs.unlink("../../public/arquivo.txt", (error) => {
        if (error) {
            console.log("Erro ao excluir o arquivo: ", error.message);
            return;
        }
        console.log("Arquivo excluído com sucesso!");
    });
}
export default deleteFile;
