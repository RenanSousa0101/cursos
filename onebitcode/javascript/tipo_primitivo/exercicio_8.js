let opcao
let dinheiro
let saldo = 0

dinheiro=parseFloat(prompt("Informe o valor na sua conta bancaria: "))
do{
    opcao=prompt("Dinheiro na conta: " + dinheiro +"R$\n"+"Escolha uma das 3 opções:\n" +
        "1.Adicionar Dinheiro\n" + 
        "2.Sacar dinheiro\n" +
        "3.Encerrar"        
)
    switch(opcao){
        case "1":
            saldo=parseFloat(prompt("Informe o valor a ser depositado: "))
            dinheiro += saldo
            saldo = 0
            break
        case "2":
            saldo=parseFloat(prompt("Informe o valor a ser sacado: "))
            dinheiro -= saldo
            saldo = 0
            break
        case "3":
            alert("Encerrando o sistema")
            break 
        default:
            alert("Opcão Inválida!")   
    
    }


}while(opcao != 3)