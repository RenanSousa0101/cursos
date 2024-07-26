const carroUmNome = prompt("Informe o nome do primeiro carro: ")
const carroUm = parseFloat(prompt("Informe a velocidade do primeiro carro: "))
const carroDoisNome = prompt("Informe o nome do Segundo carro: ")
const carroDois = parseFloat(prompt("Informe a velocidade do segundo carro: "))

if (carroUm > carroDois){
    alert(carroUmNome + " é mais rápido que o carro " + carroDoisNome)
}alert((carroUm === carroDois) ? "A velocidade do carro "+ carroUmNome + " é igual a do carro " + carroDoisNome : carroDoisNome + " é mais rápido que o carro " + carroUmNome)

