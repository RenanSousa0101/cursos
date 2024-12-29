const sum = require('./sum.cjs');
import sumESM from "./sum.mjs";

console.log(sum(2, 2));

console.log(sumESM(5, 5));

//Mas para trabalhar com módulos ESM no Node, por não ser o formato padrão, 
//é necessário mudar a configuração do tipo de importação no package.json:
// "type": "module",