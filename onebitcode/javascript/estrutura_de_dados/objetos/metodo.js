let pessoa = {
    nome: "Renan",
    idade: 21,
    //Criando uma função
    dizerOla(){
        console.log("Olá, mundo meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()