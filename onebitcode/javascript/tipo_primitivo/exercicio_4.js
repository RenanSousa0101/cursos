const nameCharacterUm = window.prompt("Nome do personagem 1: ")
const powerName = window.prompt("Nome do poder do "+nameCharacterUm)
const powerAtk = parseFloat(window.prompt("Informe o poder de ataque do "+powerName))

const nameCharacterDois = window.prompt("Nome do personagem 2: ")
let life = window.prompt("Informe a quantidade de vida do "+nameCharacterDois)
const powerDEF = parseFloat(window.prompt("Informe os pontos de DEF do "+nameCharacterDois))
let Chield = window.prompt(nameCharacterDois+", tem escudo?")

if((powerAtk > powerDEF) && Chield === "nao"){

    life = life - (powerAtk - powerDEF);
    alert(nameCharacterUm+" atacou com "+powerName)
    alert(nameCharacterDois+" sofreu "+ (powerAtk - powerDEF) +  " de dano!")
    alert(nameCharacterDois+" quantidade de vida atual: "+life)

}else if((powerAtk > powerDEF) && Chield === "sim"){

    life = life - ((powerAtk - powerDEF)/2) ;
    alert(nameCharacterUm+" atacou com "+powerName)
    alert(nameCharacterDois+" sofreu "+ ((powerAtk - powerDEF)/2) +  " de dano!")
    alert(nameCharacterDois+" quantidade de vida atual: "+life)
} else{
    alert(nameCharacterUm+" atacou com "+powerName)
    alert(nameCharacterDois+" sofreu 0 de dano!")
    alert(nameCharacterDois+" quantidade de vida atual: "+life)
}