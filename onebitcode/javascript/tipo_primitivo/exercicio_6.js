const nameTurista = window.prompt("Como você se chama?")
let resposta = window.prompt("Você já visitou alguma cidade? (sim/nao)")
let cidade 
let visitadas = ""
let cont = 0

if(resposta != "sim"){
    visitadas =" Nenhuma cidade foi visitada"
}

while(resposta === "sim"){

        cidade = prompt("Qual o nome da cidade?")
        visitadas = visitadas + " " + cidade
        cont++
        resposta=prompt("você já visitou outra cidade? ")
}

alert("Nome: "+nameTurista +"\n" +
    "Quantidade de cidades visitadas: " + cont + "\n" +
    "Nomes das cidades visitadas: " + visitadas
)