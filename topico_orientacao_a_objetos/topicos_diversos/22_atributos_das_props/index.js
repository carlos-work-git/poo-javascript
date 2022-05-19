let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let t="tipo_de_";

let carro = {

    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    [t+"carro"]: "sedan",

    ligar(){
        console.log("O carro ligou");
    },

    desligar: function(){
        console.log("O carro desligou");
    },

};

console.log(carro);
console.log(carro.rodas);
carro.ligar();

let barco = {
    [t+"barco"]:"Lancha",
    cor:"",
};

let aviao = {

    [t+"aviao"]: "Boeing",

};

