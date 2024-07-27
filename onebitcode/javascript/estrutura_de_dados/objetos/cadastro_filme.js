const filmes = []
let opcao = ""

do{
    opcao = prompt("LOCADORA: " + "\nQuantidade de filmes armazenados no sistema: " + filmes.length +
    "\n\nEscolha uma ação:" + "\n\n1. Cadastrar Filme" + "\n2. Listar Todos os Filmes" + "\n3. Pesquisar Filme" +
    "\n4. Sair")

    switch (opcao){
        case "1":
            let filme = {}
            filme.autor = {}
            filme.produtora = {}

            filme.nome = prompt("Nome do filme: ")
            filme.lancamento = prompt("Ano de lançamento: ")
            filme.genero = prompt("Gênero: ")
            filme.idioma = prompt("Idioma: ")
            filme.legenda = prompt("Legendado: ")
            filme.nota = prompt("Nota: ")

            filme.autor.nome = prompt("Nome do autor: ")
            filme.autor.nascimento = prompt("Data de nascimento: ")
            
            filme.produtora.nome = prompt("Nome da produtora: ")
            filme.produtora.anoDeFundacao = prompt("Ano de fundação: ")

            const confirmar = confirm(
                "Salvar este Filme?\n" +
                "\nNome do filme: " + filme.nome +
                "\nAno de lançamento:: " + filme.lancamento +
                "\nGênero: " + filme.genero +
                "\nIdioma: " + filme.idioma +
                "\nLegendado: " + filme.legenda +
                "\nNota: " + filme.nota +
                "\nNome do autor: " + filme.autor.nome +
                "\nData de nascimento: " + filme.autor.nascimento +
                "\nNome da produtora: " + filme.produtora.nome +
                "\nAno de fundação: " + filme.produtora.anoDeFundacao
                
            )

            if(confirmar){
                filmes.push(filme)
            }

        break;

        case "2":
            for(let i = 0; i < filmes.length; i++){
                alert(
                    "Posição: " + (i+1) + 
                    "\nNome do filme: " + filmes[i].nome +
                    "\nAno de lançamento:: " + filmes[i].lancamento +
                    "\nGênero: " + filmes[i].genero +
                    "\nIdioma: " + filmes[i].idioma +
                    "\nLegendado: " + filmes[i].legenda +
                    "\nNota: " + filmes[i].nota +
                    "\nNome do autor: " + filmes[i].autor.nome +
                    "\nData de nascimento: " + filmes[i].autor.nascimento +
                    "\nNome da produtora: " + filmes[i].produtora.nome +
                    "\nAno de fundação: " + filmes[i].produtora.anoDeFundacao
                    )
            }
        break;
        case "3":
            let pesquisar = prompt("Informe o nome do Filme: ");
            let encontrou = false;
            let posicao = -1;

            // Itera pelos filmes para procurar o nome informado
            for (let i = 0; i < filmes.length; i++) {
                if (filmes[i].nome === pesquisar) {
                    encontrou = true;
                    posicao = i;
                    break; // Interrompe o loop quando encontra o filme
                }
            }

            if (encontrou) {
                alert("Filme encontrado na posição: " + (posicao + 1));

                do{

                    opcao = prompt("\nFilme: " + filmes[posicao].nome +
                        "\n\nEscolha uma ação:" + "\n\n1. Apagar Filme" + "\n2. Modificar Nome" +
                        "\n3. Sair")
    
                    switch (opcao){
        
                        case "1": 
                        let removido = filmes.splice(posicao,1)
                        alert("Filme " + removido + "Apagado da lista" )
                        opcao = 3;  
                        break
    
                        case "2":
                       
                        const modificado = filmes[posicao].nome
                        filmes[posicao].nome = prompt("Insira um novo nome: ")
                        alert("Nome antigo: " + modificado + "\nNovo nome: " + filmes[posicao].nome)
                        opcao = 3;
                        break
    
                        case "3":
                            alert("Voltando para o menu pricipal")
                        break
                    }
                }while(opcao != 3)

            } else {
                alert("Filme não encontrado.");
            }

            
        break;
        case "4":
        break;
        default:
            alert("Opção Inválida: " + opcao)
        break;
    }


}while(opcao != 4)