const Author = require("./author");

const john = new Author("John Doe")
const post = Jonh.writePost("Título do post", "Lorem ipsum dolor sic...")
post.addComment("Isaac Postes", "Muito bom!")
post.addComment("Lucas", "Acho interessante")

console.log(john)
console.log(post)