const express = require('express');
const router = require('./routes');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.json());

app.use(router);

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em <http://localhost>:${PORT}/`));