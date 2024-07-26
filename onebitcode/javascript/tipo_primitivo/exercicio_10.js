let palavra = prompt("Informe a palavra: ")
let palindromo = ""


for(let i = palavra.length-1; i >= 0 ; i--){
palindromo += palavra[i]

}
 if(palavra == palindromo){
    alert("É um palindromo")
 }else{
    alert("Não é um palindromo")
 }