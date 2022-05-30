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

let jose = new Humano("José", 34);

console.log(jose);
console.log(jose.apresentarHumano());