let pessoa = {
    nome: "Matheus",
    idade: 29,
       
    //métodos
    falar: function(){
        console.log("Oi, meu nome é Matheus!");
    },

    aniversario(){
        this.idade += 1;
    },

    dizerIdade(){
        console.log("A minha idade é "+this.idade);
    },

}; 


pessoa.aniversario();
console.log(pessoa.idade);
console.log();

pessoa.aniversario();
console.log(pessoa.idade);
console.log();
pessoa.dizerIdade();

let calculadora={
    numeros:0,
    somar:function(a,b){
        this.numeros=a+b;
    }
}

console.log();
calculadora.somar(2,4);
console.log(calculadora.numeros);