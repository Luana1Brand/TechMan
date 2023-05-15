const Equipamentos = require("../models/equipamentos.models");
const con = require("../dao/conections");




const readAll = (req, res) => {
    con.query(Equipamentos.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const create = (req, res) => {
    con.query(Equipamentos.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}



const del = (req, res) => {
    con.query(Equipamentos.delete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}



module.exports = {
    readAll,
    create,
    del
}