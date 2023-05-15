const Perfil = require("../models/perfil.models");
const con = require("../dao/conections");





const readAll = (req, res) => {
    con.query(Perfil.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}




const create = (req, res) => {
    con.query(Perfil.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

module.exports = {
    readAll,
    create
}