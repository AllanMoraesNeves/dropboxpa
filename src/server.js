const app = express();
//acessar a dependencia express
//instalada pelo 'yarn add express'
//controla a rota
const express = require('express');
//ORM , em vez de usar linguagem de banco, usa-se Javascript
const mongoose = require('mongoose');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

//todos podem consumir a aplicação
app.use(cors());

//quando receber uma conexao, acessa uma sala
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    });
});

mongoose.connect('mongodb+srv://omnistack:omnistack@drop-4py9y.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

//cadastrar um modulo no express
//ajuda e entender as requisições json
app.use(express.json());

//auxilia no envio de arquivos
app.use(express.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));

// variavel de ambiente||rodar na porta
serven.listen(process.env.PORT || 3333);