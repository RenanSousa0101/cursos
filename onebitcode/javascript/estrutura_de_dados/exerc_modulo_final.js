const vagas = []

function criarVaga(){
    let vaga = {}
    // A opção de criar uma nova vaga deve pedir um nome para a vaga, 
    // uma descrição e uma data limite, e também deve pedir que o usuário confirme 
    // as informações antes de salvá-las.
    vaga.nome = prompt("Informe o nome da vaga: ")
    vaga.descricao = prompt("Informe uma descrição: ")
    vaga.dataLimite = prompt("Informe uma data limite: ")
    let confirmar = confirm("Você deseja salvar?" +
    "\nNome da vaga: " + vaga.nome +
    "\nDescrição da vaga: " + vaga.dataLimite +
    "\nData limite: " + vaga.dataLimite)

    if(confirmar){
    vagas.push(vaga)
    vaga.nomeCadidato = []
    vaga.indice = vagas.indexOf(vaga)
    alert("Vaga Cadastrada!")
    menu();
    }else{
        alert("Os dados foram descartatos!")
        menu();
    }
}

function visualizarVaga() {
    let mostrarVagas = "";

    vagas.forEach(function (vaga, indice) {
        mostrarVagas +=
            indice + " - " + vaga.nome + "\n";
    });

    pesquisa = parseInt(prompt(mostrarVagas + "\nInforme o índice da vaga: "));

    if (pesquisa >= 0 && pesquisa < vagas.length) {
        const vagaSelecionada = vagas[pesquisa];
        let informacaoVaga =
            "Índice: " + pesquisa +
            "\nNome da Vaga: " + vagaSelecionada.nome +
            "\nDescrição: " + vagaSelecionada.descricao +
            "\nData Limite: " + vagaSelecionada.dataLimite +
            "\nQuantidade de Candidatos: " + vagaSelecionada.nomeCadidato.length +
            "\nCandidatos: " + vagaSelecionada.nomeCadidato.join(", ");

        alert(informacaoVaga);
    } else {
        alert("Índice inválido!");
        menu()
    }

    menu()
}


function listarVagas() {
    let mostrarVagas = "";
    vagas.forEach(function (vaga, indice) {
        mostrarVagas +=
            "\nIndice: " + indice +
            "\nNome da Vaga: " + vaga.nome +
            "\nQuantidade de candidatos: " + vaga.nomeCadidato.length + "\n\n";
            
    });
    const totalCandidatos = vagas.reduce(function (acumulador, vaga) {
        return acumulador + vaga.nomeCadidato.length;
    }, 0);
    
    alert("Total de candidatos em todas as vagas: " + totalCandidatos);
    alert(mostrarVagas);
    menu()
}

function inscreverCandidato(){

    let mostrarVagas = "";
    let indiceMaior
    vagas.forEach(function (vaga, indice) {
        mostrarVagas +=
            indice + " - " + vaga.nome + "\n"
        indiceMaior = indice 
    });
    
    let candidato = {}
    candidato.nome = prompt("Informe o nome da candidato: ")
    candidato.indice = prompt(mostrarVagas + "\nInforme o indice da vaga: ")

   if(!candidato.nome || candidato.indice > indiceMaior || !candidato.indice || candidato.indice < 0){
    alert("Você inseriu informações inválidas!")
    inscreverCandidato()
   }

    let confirmar = confirm("Você deseja salvar?" +
    "\nNome do candidato: " + candidato.nome +
    "\nIndice da vaga: " + candidato.indice)

    if(confirmar){
        vagas[candidato.indice].nomeCadidato.push(candidato.nome)
        alert("Cadastrado na vaga de " + vagas[candidato.indice].nome)
        menu();
        }else{
            alert("Os dados foram descartatos!")
            menu();
        }
    
}

function ExcluirVaga(){

    let mostrarVagas = "";
    let confirmar
    vagas.forEach(function (vaga, indice) {
        mostrarVagas +=
            indice + " - " + vaga.nome + "\n";
    });

    pesquisa = parseInt(prompt(mostrarVagas + "\nInforme o índice da vaga: "));

    if (pesquisa >= 0 && pesquisa < vagas.length) {
        const vagaSelecionada = vagas[pesquisa];
        let informacaoVaga =
            "Índice: " + pesquisa +
            "\nNome da Vaga: " + vagaSelecionada.nome +
            "\nDescrição: " + vagaSelecionada.descricao +
            "\nData Limite: " + vagaSelecionada.dataLimite +
            "\nQuantidade de Candidatos: " + vagaSelecionada.nomeCadidato.length +
            "\nCandidatos: " + vagaSelecionada.nomeCadidato.join(", ");

        alert(informacaoVaga);

    confirmar = confirm("Você realmente deseja excluir essa vaga?")

    if(confirmar){
        vagas.splice(pesquisa)
        alert("Vaga excluida")
        menu()
    }
    } else {
        alert("Índice inválido!");
        menu()
    }



}


function menu(){
    let opcao =""

    opcao = prompt("Gerenciador de Vagas de Emprego:" +
    "\n1 - Listar Vagas Disponíveis" +
    "\n2 - Criar Uma Nova Vaga" +
    "\n3 - Visualizar Uma Vaga" +
    "\n4 - Inscrever Um Candidato Em Uma Vaga" +
    "\n5 - Excluir Uma Vaga" +
    "\n6 - Sair")


    switch (opcao){
        case "1":
            listarVagas()
        break
        case "2":
            criarVaga()
        break
        case "3":
            visualizarVaga()
        break
        case "4":
            inscreverCandidato()
        break
        case "5":
            ExcluirVaga()
        break
        case "6":
            alert("Encerrando...")
        break
        default:
            alert("ERRO: Opção Inválida! \nA opção " + opcao + " não existe!")
            menu()
        break
    }
}

menu();