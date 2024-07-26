let opcao

do{
    opcao=prompt("Escolha uma das 5 opções:\n" +
        "1.opcao\n" + 
        "2.opcao\n" +
        "3.opcao\n" +
        "4.opcao\n" +
        "5.Encerrar"        
)
    switch(opcao){
        case "1":
            alert("Opcão 1 selecionada")
            break
        case "2":
            alert("Opcão 2 selecionada")
            break
        case "3":
            alert("Opcão 3 selecionada")
            break
        case "4":
            alert("Opcão 4 selecionada")
            break
        case "5":
            alert("Encerrando o sistema")
            break 
        default:
            alert("Opcão Inválida!")   
    
    }


}while(opcao != 5)