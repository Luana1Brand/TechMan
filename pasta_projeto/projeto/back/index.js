
const PORT = process.env.PORT || 4000
const express = require('express');
const cors = require('cors');

//Aqui colocar as rotas das pastinhas
const Comentarios = require("./src/routes.js");
const equipamentos = require("./src/routes.js");
const perfil = require("./src/routes.js");
const Perguntas = require("./src/routes.js");
const Usuarios = require("./src/routes");

//Iniciar a API
const app = express()
    .use(express.json())
    .use(cors())
    //Chamar as rotas que adicionei acima
    .use("/", Comentarios)
    .use("/", equipamentos)
    .use("/", perfil)
    .use("/", Perguntas)
    .use("/", Usuarios)





app.listen(PORT, () => {
    console.log('Graças a Deus tá indo, rodando na porta ' + PORT);
});














