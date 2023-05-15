const Usuarios = require("../models/usuarios.models");
const con = require("../dao/conections");
// const jwt = require('jsonwebtoken');






const readAll = (req, res) => {
    con.query(Usuarios.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}




const create = (req, res) => {
    con.query(Usuarios.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}









const login = (req, res) => {
    console.log(req.body)
    con.query(Usuarios.toRead(req.body), (err, result) => {
        if (err == null) {
            console.log(result);
            let data = {
                "id": result[0].id,
                "senha": result[0].senha,
                "perfil": result[0].perfil
            }


        } else {
            res.status(400).json(err).end()
        }
    })
}


// const login = async (req, res) => {
//     let Usuarios = await .usuarios.findMany({
//         where: {
//             cpf: String(req.body.id),
//             senha: String(req.body.senha)
//         },
//         select: {
//             id: true,
//             cpf: true
//         }
//     });
//     res.status(200).json(Usuarios).end();
// }









module.exports = {
    readAll,
    login,
    create
}








