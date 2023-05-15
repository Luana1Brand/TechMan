class Comentarios {
    constructor(data) {
       this.id = data.id;
       this.senha = data.senha;
       this.perfil = data.perfil;
    }
// id;senha;perfil

    
    static readAll () { //Está OK
        return "SELECT * FROM Comentarios";
    }

   
    static create(data) {  //Está OK
        return `INSERT INTO Comentarios VALUES (default,${data.id},"${data.senha}",${data.perfil}")`;
    }



}

module.exports = Comentarios;