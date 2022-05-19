class Humano{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
    falar(){
        console.log("O humano falou");
    }
}

class Engenheiro extends Humano {
    constructor(nome,idade,espec){
        super(nome,idade);
        this.profissao="Engenheiro";
        this.especializacao=espec;
    }
}

let joao = new Engenheiro("Joao", 25, "Civil");

console.log(joao);
joao.falar();