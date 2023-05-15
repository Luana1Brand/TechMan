class Equipamentos {
    constructor(data) {
        this.id = data.id;
        this.equipamento = data.equipamento;
        this.imagem = data.imagem;
        this.descricao = data.descricao;
        this.ativo = data.ativo;
        this.data = data.data;
    }

    static readAll () {
        return "SELECT * FROM Equipamentos";
    }

    static create(data) {
        return `INSERT INTO Equipamentos VALUES (default,${data.id},"${data.equipamento}",${data.imagem},"${data.descricao}","${data.ativo}","${data.data}"))`;

    }

    static delete(data) {
        return `DELETE FROM Equipamentos WHERE id = ${data.id}`;
    }



}

module.exports = Equipamentos;