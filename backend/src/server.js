// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-b22jm.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Cors é o que utilizamos para permitir o acesso do React no app.
server.use(cors());

// Deve ser declarado sempre antes das rotas
server.use(express.json());

// o use() serve para colocar algum tipo de configuração que está em outro arquivo/módulo
server.use(routes);

// Defino a porta em que o servidor vai ouvir
server.listen(3333);