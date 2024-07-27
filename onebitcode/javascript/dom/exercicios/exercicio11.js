const players = []
let indice = 0

function addPlayer(){

    let player = {};
    let confirmar

    player.position = document.getElementById('position').value
    player.name = document.getElementById('name').value
    player.shirt = document.getElementById('shirt').value

    confirmar = confirm("Você deseja salvar?" + 
    "\nPosição: " + player.position +
    "\nNome: " + player.name +
    "\ncamisa: " + player.shirt)

    if(confirmar){
        players.push(player)
        limparCampos()
        listPlayer()
    }
    
}

function listPlayer(){
    
    
    let listPlayer = document.getElementById('listPlaye')

    const positionList = document.createElement('li')
    positionList.innerText = "\nPosição: " + players[indice].position + "\nNome: " + players[indice].name + "\nCamisa Nº: " + players[indice].shirt
    positionList.id ='positionList' + players[indice].shirt
    listPlayer.appendChild(positionList)
    indice += 1
}

function removePlayer() {
    const number = document.getElementById('remove').value;
    limparCampos()

    let encontrou
    let confirmar
    let arrInd

    for (let i = 0; i < players.length; i++) {
        if (players[i].shirt === number) {
            encontrou = number
            confirmar = confirm("Você deseja remover o jogador" +
            "\nposição: " + players[i].position +
            "\nNome: " + players[i].name +
            "\nCamisa: " + players[i].shirt)
            arrInd = i
            break;
            }
        }
        if(confirmar){
        let listPlayer = document.getElementById('listPlaye');
            let positionList = document.getElementById('positionList' + encontrou);
    
                if (positionList) {
                    listPlayer.removeChild(positionList); 
                    players.splice(arrInd, 1); 
                    indice -= 1;
                }
            }else{
                alert("Jogador não encontrado!")
            }
}

function limparCampos(){

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("shirt").value = "";
    document.getElementById("remove").value = "";

}

