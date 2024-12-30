const os = require("node:os");

//os.platform(): Retorna a plataforma do sistema operacional 
//(por exemplo, "win32" para Windows, "darwin" para macOS).

const plataforma = os.platform()
console.log("Plataforma do SO: ", plataforma)

//os.arch(): Retorna a arquitetura do sistema 
// (por exemplo, "x64" para sistemas de 64 bits).

const arquitetura = os.arch()
console.log("Arquitetura do SO: ", arquitetura)

//os.cpus(): Retorna informações sobre os núcleos da CPU, 
// incluindo modelo, velocidade e muito mais.

const processadores = os.cpus()
console.log("Informações da CPU:", processadores[0])

//os.totalmem(): Retorna a quantidade total de memória do sistema em bytes.

const memoria = os.totalmem()
console.log("Total de memória do PC:", memoria / 1024 / 1024 / 1024, "GB")