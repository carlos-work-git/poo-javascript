/**
 * Crie um objeto Pessoa, que tem uma propriedade nome;
 * crie um método que exibe o nome do objeto Pessoa;
 */

let Pessoa = {
    nome:"",
    idade:"",

    falarNomeIdade(){
        console.log("Meu nome é: "+this.nome+" tenho "+this.idade+" anos.");
    },

};

let pessoa1 = Object.create(Pessoa);
let pessoa2 = Object.create(Pessoa);

pessoa1.nome="josé";
pessoa1.idade="33";

pessoa2.nome="madalena";
pessoa2.idade="25";

pessoa1.falarNomeIdade();
pessoa2.falarNomeIdade();



console.log("teste");