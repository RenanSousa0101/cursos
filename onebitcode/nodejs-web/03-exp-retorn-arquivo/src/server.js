const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    //Utilize o método res.sendFile() do Express para 
    //renderizar um arquivo HTML estático em resposta a uma requisição.
    res.sendFile(__dirname + '/views/index.html')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor iniciado!')
})