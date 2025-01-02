const express = require('express')
const path = require('node:path')

const app = express()

//array para salvar temporariamente os dados do formulario 
const storedUsers = []

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/*
Configuração da Rota de Recebimento do POST
Crie uma nova rota no Express para lidar com as requisições POST do formulário.
Utilize o middleware express.urlencoded() para processar os dados do formulário.
*/

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const title = 'Homepage'
    const message = 'Mensagem dinâmica inserida pelo EJS.'

    res.render('index', { title, message })
})

//Adicione a rota apropriada para retornar a página do formulário.

app.get('/formulario', (req, res) => {
    res.render('form')
})

/*
Finalizando a rota POST e o redirecionamento

Crie um array em memória para armazenar os usuários cadastrados enquanto o servidor estiver rodando.
Utilize o método res.redirect() para redirecionar para a rota da página de usuários após salvar 
esse novo usuário no array.
Crie a rota que renderiza a página de usuários.
*/

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ username, password })

    res.redirect('/usuarios')
})

app.get('/usuarios', (req, res) => {
    res.render('users', { users: storedUsers })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor iniciado!')
})