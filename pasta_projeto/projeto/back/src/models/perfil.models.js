class Perfil {
    constructor(data) {
        this.id = data.id;
        this.perfil = data.perfil;
    }

    static readAll() {
        return "SELECT * FROM perfis";
    }

    static create(data) {
        return `INSERT INTO perfis VALUES (default,${data.id},"${data.perfil}"))`;

    }




}

module.exports = Perfil;