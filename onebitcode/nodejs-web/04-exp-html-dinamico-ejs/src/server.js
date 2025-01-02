/* 
Instalação do Express e EJS
Utilizar o npm para instalar o Express e o EJS no projeto com os comandos 
npm install express e npm install ejs.
*/

//npm install express ejs

/*
Configurando o Uso de EJS

Configurar o Express para usar o EJS como a engine de template.
Utilizar o método app.set() do Express para definir a view engine como EJS.
*/

const express = require('express')
const path = require('node:path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const title = 'Homepage'
    const message = 'Mensagem dinâmica inserida pelo EJS.'

    res.render('index', { title, message })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor iniciado!')
})