const medida = window.prompt("Escolha uma medida 'mm, cm, dm, dam, hm, km'")
const metros = parseFloat(window.prompt("Informe o tamanho em metros: "))


switch (medida){
    case "mm":
        alert(metros+"M convertido em 'mm' é igual a: "+(metros*1000))
        break
    case "cm":
        alert(metros+"M convertido em 'cm' é igual a: "+(metros*100))
        break
    case "dm":
        alert(metros+"M convertido em 'dm' é igual a: "+(metros*10))
        break
    case "dam":
        alert(metros+"M convertido em 'dam' é igual a: "+(metros/10))
        break
    case "hm":
        alert(metros+"M convertido em 'hm' é igual a: "+(metros/100))
        break
    case "km":
        alert(metros+"M convertido em 'km' é igual a: "+(metros/1000))
        break      
    default: 
        alert("Opção Invalida!");
}