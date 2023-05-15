const mysql = require("mysql");

//Pattern Singleton (Ponto único de conexão com BD)
class Connect {
    static con = mysql.createConnection({
        host: 'localhost',
        database: 'Techman',
        user: 'root'
    });
}

const con = Connect.con;

module.exports = con;