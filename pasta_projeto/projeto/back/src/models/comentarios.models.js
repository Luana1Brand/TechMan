class Comentarios {
    constructor(data) {
       this.id = data.id;
       this.comentario = data.comentario;
       this.equipamento = data.equipamento;
       this.perfil = data.perfil;
       this.data = data.data;
    }


    
    static readAll () { 
        return "SELECT * FROM Comentarios";
    }

   
    static create(data) {  
        return `INSERT INTO Comentarios VALUES (default,${data.id},"${data.comentario}","${data.equipamento}",${data.perfil},"${data.data}")`;
    }



}

module.exports = Comentarios;