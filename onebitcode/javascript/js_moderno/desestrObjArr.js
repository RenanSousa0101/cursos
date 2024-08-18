//Com Objetos
const person ={
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}
//as duas fazem a mesma coisa
const name = person.name
const { job, parents } = person

console.log(name, job, parents)

//Com arrays
//Ele pega os elementos em ordem
const [father, mother] = parents
console.log(father, mother)

//Em funções

function createUser({ name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return{
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)