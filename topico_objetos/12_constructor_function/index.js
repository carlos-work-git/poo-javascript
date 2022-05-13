function ninja(nome,arma){
    this.nome = nome;
    this.arma = arma;
    this.atirarArma=function(){
        console.log("Atirou a "+this.arma);
    };




};

let ninja1=new ninja("Naruto","Shuriken");

console.log(ninja1.nome);
ninja1.atirarArma();

console.log();

let ninja2 = new ninja("Sasuke","Kunai");

console.log(ninja2.nome);
ninja2.atirarArma();
