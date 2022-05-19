let Humano = class {
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }

    nomeDaPessoa(){
        return "O nome da pessoa é: "+ this.nome;
    }

    mudarNomeDaPessoa(novoNome){
        this.nome= "Sr. "+ novoNome;
    }

    get receberNomePessoa(){
        return "O nome da pessoa é: "+this.nome;
    }


}

console.log(typeof Humano);

let matheus = new Humano('Matheus',29);

console.log(matheus);

console.log(matheus.receberNomePessoa); //get()
console.log(matheus.nomeDaPessoa());

/*Repare que tanto Get como Set são passados para 
linha de execução como se fossem atributos, sem "()" 
descriminando que é um método*/

/*Isso é bem observável ao passar o método "nomeDaPessoa()"
cuja a sintaxe já exige o "()" ao lado da declaração do método*/

matheus.mudarNomeDaPessoa("Matheus2"); //set()
console.log(matheus.receberNomePessoa);//get()
console.log(matheus.nomeDaPessoa());
console.log(matheus.nome); /* Nota: O encapsulamento não é restrito, 
o atributo pode ser acessado independente do método Get. */