const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const StatusController = require('./controllers/StatusController');
//(req,resp) middleware, requisixao e resposta
//intercepta a requisiçao para fazer algo
routes.get('/status', StatusController.status);

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;

