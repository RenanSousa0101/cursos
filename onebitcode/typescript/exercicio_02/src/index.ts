type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado";
const planetarySystem = [];

function objectPlanet(namePlanet:string, coordinates:[number, number, number, number], situation:Situation){
    const Planet = {
        namePlanet,
        coordinates,
        situation,
        satellites: []
    }
    planetarySystem.push(Planet);
    alert(`O planeta ${Planet.namePlanet} foi registrado.`);
}

function findPlanet(namePlanet: string) {
    const planet = planetarySystem.find((pla) => pla.namePlanet === namePlanet);
    if(planet){
        return planet;
    }else{
        alert(`Planeta ${namePlanet} não encontrado!`);
       return null;
    }
}

function situationPlanet(namePlanet: string): Situation {
    let userOption: number;
    do {
        const menu = `Situação do planeta ${namePlanet}:
        1 - Habitado
        2 - Habitável
        3 - Inabitável 
        4 - Inexplorado
      `;
        userOption = Number.parseInt(prompt(menu));

        if([1, 2, 3, 4].indexOf(userOption) === -1){
            alert(`A opção ${userOption} não existe!`)
        }

    } while ([1, 2, 3, 4].indexOf(userOption) === -1);

    switch (userOption) {
        case 1:
            return "habitado";
        case 2:
            return "habitável";
        case 3:
            return "inabitável";
        case 4:
            return "inexplorado";
    }
}

function newSituation (namePlanet:string){
    const search = findPlanet(namePlanet);
    if(search){
        const newSituationPlanet = situationPlanet(search.namePlanet);
        search.situation = newSituationPlanet
        alert(`Situação do planeta ${namePlanet} atualizado para ${newSituationPlanet}!`)
    } 
}

function addSatellites(namePlanet:string, satellites:string){
    const search = findPlanet(namePlanet);
    if(search){
        search.satellites.push(satellites);
        alert(`O satélite ${satellites} foi adicionado ao planeta ${namePlanet}!`)
    }
}

function listSatellites(satellites){
    let stringSatellites = "";
    satellites.forEach((element, index) => {
        stringSatellites += `${index + 1}. ${element}\n`;
    });
    return stringSatellites;
}

function removeSatellites(namePlanet:string){
    const search = findPlanet(namePlanet);
    if(search){
        const satellites = listSatellites(search.satellites);
        const menu = `Planeta: ${namePlanet}\n Satelites: \n${satellites}`;

        const nameSatellites = prompt(`${menu}\nInforme o nome do satélite a ser removido: `);
        const indice = search.satellites.indexOf(nameSatellites);

        if(indice !== -1){
            search.satellites.splice(indice, 1);
            alert(`O satelite ${nameSatellites} foi removido com sucesso do planeta ${namePlanet}!`)
        }else{
            alert(`O satelite ${nameSatellites} não foi encontrado no planeta ${namePlanet}`)
        }
    }
}

function firstMenuOption(){
    const namePlanet = prompt('Informe o nome do planeta: ');
    const coordX = Number(prompt(`Informe a coordenada X do planeta ${namePlanet}: `).replace(",", "."));
    const coordY = Number(prompt(`Informe a coordenada Y do planeta ${namePlanet}: `).replace(",", "."));
    const coordZ = Number(prompt(`Informe a coordenada Z do planeta ${namePlanet}: `).replace(",", "."));
    const coordT = Number(prompt(`Informe a coordenada T do planeta ${namePlanet}: `).replace(",", "."));

    const coordFinal: [number, number, number, number] = [coordX, coordY, coordZ, coordT];
    const situation = situationPlanet(namePlanet);
    objectPlanet(namePlanet, coordFinal, situation);
}

function secondMenuOption(){
    const namePlanet = prompt('Informe o nome do Planeta: ');
    newSituation(namePlanet);
}

function thirdMenuOption(){
    const satellites = prompt('Informe o nome do satélite: ');
    const namePlanet = prompt(`Informe o nome do planeta que será adicionado o satélite ${satellites}`);

    addSatellites(namePlanet, satellites);
}

function fourthMenuOption(){
    const namePlanet = prompt(`Informe o nome do planeta que deseja remover um satélite: `);
    removeSatellites(namePlanet);
}

function fiveMenuOption(){
    let planets = "";
    planetarySystem.forEach((element, index) => {
        let [x,y,z,t] = element.coordinates;
        planets += `[${index + 1}. Nome: ${element.namePlanet}\nCoordenada X: [${x}]\nCoordenada Y: [${y}]\nCoordenada Z: [${z}]\nCoordenada T: [${t}]\nSituação: ${element.situation}\nSatélites: [${element.satellites}]\n]\n`;
    });
    
    alert(planets);
}

function planetMenu(){
    let userOption = 0;

    do {
        const menu = `Painel Principal
            1 - Registrar um novo planeta
            2 - Atualizar situação planeta
            3 - Adicionar satélite 
            4 - Remover satélite
            5 - Listar planetas
            6 - Encerrar
        `

        userOption = Number.parseInt(prompt(menu))

        switch (userOption) {
            case 1:
                firstMenuOption()
            break
            case 2:
                secondMenuOption()
            break
            case 3:
                thirdMenuOption()
            break
            case 4:
                fourthMenuOption()
            break
            case 5:
                fiveMenuOption()
            break
            case 6:
                alert('Encerrando o sistema...')
            break
            default:
                alert('Opção inválida! Retornando ao painel principal...')
            break;

        }

    } while (userOption !== 6)
}

planetMenu();