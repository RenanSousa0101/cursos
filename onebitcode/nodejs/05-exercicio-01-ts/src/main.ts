import createFile from "./createFile.js";
import deleteFile from "./deleteFile.js";
import showFile from "./showFile.js";
import updateFile from "./updateFile.js";

createFile('Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.');
showFile();
updateFile('Conteúdo modificado!');
showFile();
deleteFile();