class Humano {
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}

console.log(typeof Humano);
console.log(Humano);

let matheus = new Humano('Matheus',29);
console.log(matheus);