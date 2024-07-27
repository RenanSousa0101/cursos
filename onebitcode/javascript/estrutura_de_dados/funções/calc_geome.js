let opcao

function areaRetangulo (base, altura){
return base * altura
}

function areaTriangulo (base, altura){
    return areaRetangulo(base, altura)/2
    }

function areaQuadrado (base){
    return areaRetangulo(base, base)
    }

function areaTrapezio (baseMaior, baseMenor, altura){
    return areaTriangulo(baseMaior+baseMenor, altura)
    }

function areaCirculo (raio){
    return areaQuadrado(raio) * 3.14
    }

do{

    opcao = prompt("Escolha uma opção:" +
    "\n1. Area do Triângulo" +
    "\n2. Area do Retângulo" +
    "\n3. Area do Quadrado"+
    "\n4. Area do Trapézio" +
    "\n5. Area do circulo" +
    "\n6. Sair")

    let base
    let altura

    switch(opcao){

        case "1":
            base = parseFloat(prompt("Informe a base do triangulo:"))
            altura = parseFloat(prompt("Informe a altura do triangulo:"))
            alert("Area do Triângulo: " + areaTriangulo(base,altura))
        break
        case "2":
            base = parseFloat(prompt("Informe a base do retângulo:"))
            altura = parseFloat(prompt("Informe a altura do retângulo:"))
            alert("Area do Retângulo: " + areaRetangulo(base,altura))
        break
        case "3":
            base = parseFloat(prompt("Informe o lado do quadrado:"))
            alert("Area do Quadrado: " + areaQuadrado(base))
        break
        case "4":
            base = parseFloat(prompt("Informe a base maior do trapézio:"))
            let baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
            altura = parseFloat(prompt("Informe a altura do trapézio:"))
            alert("Area do Trapézio: " + areaTrapezio(base,baseMenor,altura))
        break
        case "5":
            base = parseFloat(prompt("Informe o raio do circulo:"))
            alert("Area do circulo: " + areaCirculo(base))
        break
        case "6":
            alert("Encerrando...")
        break
        default:
            alert("Opção Inválida")
        break
    }

}while(opcao != 6)