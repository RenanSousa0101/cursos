class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if((email == this.email) && (password == this.password)){
            console.log(`Usuário ${this.fullname} logado com sucesso!`)
        }else{
            console.log("Usuário não encontrado")
        }
    }
}
const user = []

 user[0] = new User("Renan", "renansousa26it@gmail.com", "260601");
 user[1] = new User("Lau", "Laudiceia@gmail.com", "12345");

user[1].login("Laudiceia@gmail.com","12345")
user[0].login("renansousa26it@gmail.com","260601")

class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantidade){
        this.inStock += quantidade
    }

    calculateDiscount(discont){
        return this.price - ((discont/100) * this.price)
    }
}

const product = []

product[0] = new Product("Sapato", "nº 40 e 42", 80, 3)
console.log(product[0])
product[0].addToStock(3)
console.log(product[0])
const valor = product[0].calculateDiscount(10)
console.log(valor)
console.log(product[0])