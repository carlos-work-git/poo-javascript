class Humano {

    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentarHumano(){
        return `O nome deste Humano é ${this.nome} e ele tem ${this.idade} anos` ;
    }

}

class Ninja extends Humano {
    classe: string;
    constructor(nome: string, idade: number, classe: string) {
        super(nome,idade);
        this.classe = classe;
    }
    atirarEstrelaNinja(){
        console.log(`O ninja ${this.nome} atirou a shuriken`);
    }
}

let jose = new Humano("José", 34);

console.log(jose);
console.log(jose.apresentarHumano());

let otto = new Ninja("Otto", 58, "Ronin");

console.log(otto);
console.log(otto.apresentarHumano());


otto.atirarEstrelaNinja()