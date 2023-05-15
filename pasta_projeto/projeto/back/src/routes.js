const express = require('express');
const router = express.Router();




const comentarios = require('./controllers/comentarios.controllers');

router.get('/comentarios/readAll', comentarios.readAll);
router.post('/comentarios/create', comentarios.create);



const equipamentos = require('./controllers/equipamentos.controllers');
router.get('/equipamentos/readAll', equipamentos.readAll);
router.post('/equipamentos/create', equipamentos.create);
router.delete('/equipamentos/:id', equipamentos.del);





const perfil = require('./controllers/perfil.controllers');
router.get('/perfil/readAll', perfil.readAll);
router.post('/perfil/create', perfil.create);





const usuarios = require('./controllers/usuarios.controllers');
router.get('/usuarios/readAll', usuarios.readAll);
router.post('/usuarios/create', usuarios.create);
router.post('/usuarios/login', usuarios.login);


module.exports = router;


